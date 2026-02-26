export const handler = async function handler() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'no-referrer',
    },
    body: JSON.stringify({
      ok: true,
      service: 'Bruvik2 backend',
    }),
  };
};
