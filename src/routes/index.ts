// MODEL: Claude Sonnet
// Route registration for all API endpoints

import { FastifyInstance } from 'fastify';
import { Prisma } from '@prisma/client';
import prisma from '../db/client.js';
import { registerTownRoutes } from './towns.js';
import { registerEmbedRoutes } from './embed.js';
import { registerAdminRoutes } from './admin.js';
import { registerCompareRoutes } from './compare.js';
import { registerRankingsRoutes } from './rankings.js';
import { registerAnalyticsRoutes } from './analytics.js';
import { registerClusterRoutes } from './clusters.js';

export async function registerRoutes(fastify: FastifyInstance): Promise<void> {
  // Health check with DB status and version
  fastify.get('/health', async () => {
    const commitSha = process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.COMMIT_SHA ?? null;
    const version = commitSha ? commitSha.slice(0, 7) : 'dev';

    let dbOk = false;
    let latencyMs = 0;
    try {
      const start = Date.now();
      await prisma.$queryRaw(Prisma.sql`SELECT 1`);
      latencyMs = Date.now() - start;
      dbOk = true;
    } catch {
      dbOk = false;
    }

    return {
      ok: true,
      timestamp: new Date().toISOString(),
      version,
      commitSha,
      db: {
        ok: dbOk,
        latencyMs,
      },
    };
  });

  // API info
  fastify.get('/', async () => ({
    name: "Sabrina's Town API",
    description: 'American Revolution Tourism Network',
    version: '1.0.0',
    endpoints: {
      towns: '/towns/:slug',
      teacher: '/towns/:slug/teacher',
      stories: '/towns/:slug/stories',
      sources: '/towns/:slug/sources',
      compare: '/compare?townA=slug&townB=slug',
      rankings: '/rankings',
      changelog: '/changelog',
      embed: '/embed/town/:slug?key=API_KEY',
      analytics: '/analytics',
      admin: '/admin/*',
    },
    docs: 'https://github.com/sabrinas-town/api-docs',
  }));

  // Register route modules
  await registerTownRoutes(fastify);
  await registerEmbedRoutes(fastify);
  await registerAdminRoutes(fastify);
  await registerCompareRoutes(fastify);
  await registerRankingsRoutes(fastify);
  await registerAnalyticsRoutes(fastify);
  await registerClusterRoutes(fastify);
}
