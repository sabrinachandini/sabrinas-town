// MODEL: Claude Sonnet
// Fastify application setup

import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { registerRoutes } from './routes/index.js';
import { authPlugin } from './middleware/auth.js';

export async function buildApp(): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: {
      level: process.env.LOG_LEVEL || 'info',
      transport:
        process.env.NODE_ENV === 'development'
          ? {
              target: 'pino-pretty',
              options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
    },
  });

  // Register CORS
  await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Token', 'X-Embed-API-Key'],
  });

  // Register auth plugin
  await fastify.register(authPlugin);

  // Register routes
  await registerRoutes(fastify);

  // Global error handler
  fastify.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    // Zod validation errors
    if (error.validation) {
      return reply.status(400).send({
        success: false,
        error: 'Validation error',
        details: error.validation,
      });
    }

    // Generic errors
    return reply.status(error.statusCode || 500).send({
      success: false,
      error: process.env.NODE_ENV === 'production' ? 'Internal server error' : error.message,
    });
  });

  // Not found handler
  fastify.setNotFoundHandler((request, reply) => {
    return reply.status(404).send({
      success: false,
      error: `Route ${request.method} ${request.url} not found`,
    });
  });

  return fastify;
}
