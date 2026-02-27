import http from 'node:http';

const urls = [
  'http://localhost:8888/',
  'http://localhost:8888/ulfsnesoy.html',
  'http://localhost:8888/.netlify/functions/health',
  'http://localhost:8888/history.html',
  'http://localhost:8888/church-history.html',
  'http://localhost:8888/neskaivegen.html',
];

const request = (url) =>
  new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          resolve({
            url,
            status: res.statusCode || 0,
            body: Buffer.concat(chunks).toString('utf8').slice(0, 140),
          });
        });
      })
      .on('error', reject);
  });

const results = [];
try {
  await request(urls[0]);
} catch {
  console.error('Smoke check requires a running Netlify dev server on http://localhost:8888.');
  console.error('Start it with: npm run serve');
  process.exit(1);
}

for (const url of urls) {
  try {
    results.push(await request(url));
  } catch (error) {
    results.push({ url, status: 0, body: String(error?.message || error) });
  }
}

let failed = false;
for (const result of results) {
  const ok = result.status >= 200 && result.status < 400;
  if (!ok) {
    failed = true;
  }
  console.log(`${ok ? 'OK' : 'FAIL'} ${result.status} ${result.url}`);
}

if (failed) {
  process.exitCode = 1;
}
