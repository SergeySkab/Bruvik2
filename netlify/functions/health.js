exports.handler = async function handler() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
    body: JSON.stringify({
      ok: true,
      service: 'Bruvik2 backend',
      env: process.env.CONTEXT || 'unknown',
      timestamp: new Date().toISOString(),
    }),
  };
};

