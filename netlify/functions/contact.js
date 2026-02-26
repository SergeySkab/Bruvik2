import { randomUUID } from 'node:crypto';

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 8;
const MAX_BODY_CHARS = 12_000;

const getAllowedOrigins = () => {
  const defaults = [
    'http://localhost:8888',
    'http://127.0.0.1:8888',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ];
  const envOrigins = String(process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const netlifyUrls = [process.env.URL, process.env.DEPLOY_PRIME_URL].filter(Boolean);
  return new Set([...defaults, ...envOrigins, ...netlifyUrls]);
};

const securityHeaders = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'no-referrer',
};

const buildCorsHeaders = (origin, allowedOrigins) => {
  const headers = {
    ...securityHeaders,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    vary: 'Origin',
  };

  if (origin && allowedOrigins.has(origin)) {
    headers['access-control-allow-origin'] = origin;
  }

  return headers;
};

const normalizeIp = (event) => {
  const forwardedFor = event.headers?.['x-forwarded-for'] || '';
  const fromForwardedFor = forwardedFor.split(',')[0]?.trim();
  return (
    event.headers?.['x-nf-client-connection-ip'] ||
    event.headers?.['client-ip'] ||
    fromForwardedFor ||
    'unknown'
  );
};

const takeRateLimitToken = (key) => {
  if (!globalThis.__contactRateMap) {
    globalThis.__contactRateMap = new Map();
  }
  const store = globalThis.__contactRateMap;
  const now = Date.now();

  for (const [ip, bucket] of store.entries()) {
    if (now - bucket.startedAt > RATE_WINDOW_MS) {
      store.delete(ip);
    }
  }

  const current = store.get(key) || { startedAt: now, count: 0 };
  if (now - current.startedAt > RATE_WINDOW_MS) {
    current.startedAt = now;
    current.count = 0;
  }
  current.count += 1;
  store.set(key, current);
  return current.count <= RATE_MAX_REQUESTS;
};

const stripControlChars = (input) =>
  Array.from(input)
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('');

const safeText = (value, maxLen) => stripControlChars(String(value || '')).trim().slice(0, maxLen);

const response = (statusCode, headers, payload) => ({
  statusCode,
  headers,
  body: JSON.stringify(payload),
});

export const handler = async function handler(event) {
  const origin = event.headers?.origin || event.headers?.Origin || '';
  const allowedOrigins = getAllowedOrigins();
  const headers = buildCorsHeaders(origin, allowedOrigins);
  const originAllowed = !origin || allowedOrigins.has(origin);

  if (!originAllowed) {
    return response(403, headers, { ok: false, error: 'Origin not allowed' });
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return response(405, { ...headers, allow: 'POST, OPTIONS' }, { ok: false, error: 'Method Not Allowed' });
  }

  if ((event.body || '').length > MAX_BODY_CHARS) {
    return response(413, headers, { ok: false, error: 'Payload too large' });
  }

  const ip = normalizeIp(event);
  if (!takeRateLimitToken(ip)) {
    return response(429, headers, { ok: false, error: 'Too many requests, try again later' });
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return response(400, headers, { ok: false, error: 'Invalid JSON body' });
  }

  const honeypot = safeText(payload.website, 120);
  if (honeypot) {
    return response(400, headers, { ok: false, error: 'Invalid request' });
  }

  const name = safeText(payload.name, 120);
  const email = safeText(payload.email, 254);
  const message = safeText(payload.message, 4000);
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !email || !message) {
    return response(422, headers, { ok: false, error: 'name, email, message are required' });
  }

  if (!isEmail) {
    return response(422, headers, { ok: false, error: 'Invalid email format' });
  }

  return response(200, headers, {
    ok: true,
    requestId: randomUUID(),
    note: 'Message accepted.',
  });
};
