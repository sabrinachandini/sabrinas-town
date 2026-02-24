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
  const fastify = await getApp();
  await fastify.ready();
  fastify.server.emit('request', req, res);
}
