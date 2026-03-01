// Vercel serverless adapter for Fastify

import 'dotenv/config';
import { buildApp } from '../src/app.js';

let app: Awaited<ReturnType<typeof buildApp>> | null = null;
let initError: Error | null = null;

async function getApp() {
  if (initError) throw initError;
  if (!app) {
    try {
      app = await buildApp();
      await app.ready();
    } catch (err) {
      initError = err as Error;
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
    console.error('Fastify init error:', err);
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Service initialization failed', detail: err?.message ?? String(err) }));
  }
}
