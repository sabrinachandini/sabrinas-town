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

export async function registerRoutes(fastify: FastifyInstance): Promise<void> {
  // Health check with DB status and version
  fastify.get('/health', async () => {
    let db: 'connected' | 'disconnected' = 'disconnected';
    try {
      await prisma.$queryRaw(Prisma.sql`SELECT 1`);
      db = 'connected';
    } catch {
      db = 'disconnected';
    }

    return {
      status: 'ok',
      db,
      version: process.env.VERCEL_GIT_COMMIT_SHA || 'dev',
      timestamp: new Date().toISOString(),
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
}
