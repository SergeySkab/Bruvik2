exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        allow: 'POST',
        'content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }),
    };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (_err) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ ok: false, error: 'Invalid JSON body' }),
    };
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const message = String(payload.message || '').trim();

  if (!name || !email || !message) {
    return {
      statusCode: 422,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        ok: false,
        error: 'name, email, message are required',
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
    body: JSON.stringify({
      ok: true,
      received: {
        name,
        email,
        messageLength: message.length,
      },
      note: 'Demo endpoint. Connect email/CRM in next step if needed.',
    }),
  };
};

