// Vercel serverless adapter for Fastify

import 'dotenv/config';
import { buildApp } from '../src/app.js';

let app: Awaited<ReturnType<typeof buildApp>> | null = null;

async function getApp() {
  if (!app) {
    app = await buildApp();
    await app.ready();
  }
  return app;
}

export default async function handler(req: any, res: any) {
  // Strip /api prefix so Fastify routes (registered without prefix) match
  if (req.url?.startsWith('/api')) {
    req.url = req.url.slice(4) || '/';
  }
  const fastify = await getApp();
  await fastify.ready();
  fastify.server.emit('request', req, res);
}
