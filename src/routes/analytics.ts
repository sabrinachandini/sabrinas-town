// MODEL: Claude Sonnet
// Analytics routes: endpoints for tracking and reporting

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { AnalyticsEventCreateSchema } from '../validators/analytics.js';
import { optionalEmbedApiKey } from '../middleware/auth.js';
import prisma from '../db/client.js';

export async function registerAnalyticsRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * POST /analytics
   * Record an analytics event
   */
  fastify.post(
    '/analytics',
    {
      preHandler: [optionalEmbedApiKey],
    },
    async (
      request: FastifyRequest<{
        Body: unknown;
        Querystring: { key?: string };
      }>,
      reply: FastifyReply
    ) => {
      const bodyResult = AnalyticsEventCreateSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid request body',
          details: bodyResult.error.issues,
        });
      }

      const { townSlug, eventType, metadata } = bodyResult.data;

      try {
        // Find town by slug
        const town = await prisma.town.findUnique({
          where: { slug: townSlug },
          select: { id: true },
        });

        if (!town) {
          return reply.status(404).send({
            success: false,
            error: `Town not found: ${townSlug}`,
          });
        }

        // Create analytics event
        const event = await prisma.analyticsEvent.create({
          data: {
            townId: town.id,
            orgId: request.org?.id,
            eventType,
            metadata: {
              ...metadata,
              userAgent: request.headers['user-agent'],
              referrer: request.headers.referer,
            },
          },
        });

        return reply.status(201).send({
          success: true,
          data: {
            id: event.id,
            recorded: true,
          },
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error recording analytics');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );
}
