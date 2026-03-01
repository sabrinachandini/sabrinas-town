// Vercel serverless adapter for Fastify

let app: any = null;
let initError: Error | null = null;

async function getApp() {
  if (initError) throw initError;
  if (!app) {
    try {
      await import('dotenv/config');
      const { buildApp } = await import('../src/app.js');
      app = await buildApp();
      await app.ready();
    } catch (err) {
      initError = err as Error;
      console.error('[api/index] init failed:', err);
      throw initError;
    }
  }
  return app;
}

export default async function handler(req: any, res: any) {
  // Strip /api prefix so Fastify routes (registered without prefix) match
  if (req.url?.startsWith('/api')) {
    req.url = req.url.slice(4) || '/';
  }
  try {
    const fastify = await getApp();
    fastify.server.emit('request', req, res);
  } catch (err: any) {
    console.error('[api/index] handler error:', err);
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Service initialization failed', detail: err?.message ?? String(err) }));
  }
}
