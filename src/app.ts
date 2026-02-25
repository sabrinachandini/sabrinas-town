// Fastify application setup

import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { registerRoutes } from './routes/index.js';
import { registerBillingRoutes } from './routes/billing.js';
import { registerStewardshipRoutes } from './routes/stewardship.js';
import { registerOrgAnalyticsRoutes } from './routes/orgAnalytics.js';
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

  // ---------------------------------------------------------------------------
  // Raw body preservation for Stripe webhook signature verification.
  // Fastify parses JSON by default which destroys the raw payload needed by
  // stripe.webhooks.constructEvent(). This hook captures the raw Buffer for
  // routes that opt in via route config { rawBody: true }.
  // ---------------------------------------------------------------------------
  fastify.addContentTypeParser(
    'application/json',
    { parseAs: 'buffer' },
    (req, body, done) => {
      // Store raw buffer on the request for webhook routes
      (req as any).rawBody = body;
      try {
        const json = JSON.parse(body.toString());
        done(null, json);
      } catch (err: any) {
        done(err, undefined);
      }
    },
  );

  // Register CORS
  await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Token', 'X-Embed-API-Key', 'X-User-Id'],
  });

  // Register auth plugin
  await fastify.register(authPlugin);

  // Register routes
  await registerRoutes(fastify);
  await registerBillingRoutes(fastify);
  await registerStewardshipRoutes(fastify);
  await registerOrgAnalyticsRoutes(fastify);

  // ---------------------------------------------------------------------------
  // Startup env checks (safe — booleans only, no secrets)
  // ---------------------------------------------------------------------------
  console.log('\n[env] Stripe config check:');
  console.log(`  STRIPE_SECRET_KEY: present=${!!process.env.STRIPE_SECRET_KEY}, starts_with_sk_test=${process.env.STRIPE_SECRET_KEY?.startsWith('sk_test_') ?? false}`);
  console.log(`  STRIPE_WEBHOOK_SECRET: present=${!!process.env.STRIPE_WEBHOOK_SECRET}`);
  console.log(`  STRIPE_PRICE_BASIC_MONTHLY: present=${!!process.env.STRIPE_PRICE_BASIC_MONTHLY}`);
  console.log(`  STRIPE_PRICE_PLUS_MONTHLY: present=${!!process.env.STRIPE_PRICE_PLUS_MONTHLY}`);
  console.log(`  STRIPE_PRICE_PRO_MONTHLY: present=${!!process.env.STRIPE_PRICE_PRO_MONTHLY}`);
  console.log(`  BASE_URL: ${process.env.BASE_URL || '(not set)'}\n`);

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
