// MODEL: Claude Sonnet
// Route registration for all API endpoints

import { FastifyInstance } from 'fastify';
import { registerTownRoutes } from './towns.js';
import { registerEmbedRoutes } from './embed.js';
import { registerAdminRoutes } from './admin.js';
import { registerCompareRoutes } from './compare.js';
import { registerRankingsRoutes } from './rankings.js';
import { registerAnalyticsRoutes } from './analytics.js';

export async function registerRoutes(fastify: FastifyInstance): Promise<void> {
  // Health check
  fastify.get('/health', async () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  }));

  // API info
  fastify.get('/', async () => ({
    name: "Sabrina's Town API",
    description: 'American Revolution Tourism Network',
    version: '1.0.0',
    endpoints: {
      towns: '/towns/:slug',
      teacher: '/towns/:slug/teacher',
      stories: '/towns/:slug/stories',
      compare: '/compare?townA=slug&townB=slug',
      rankings: '/rankings',
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
