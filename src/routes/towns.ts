// MODEL: Claude Sonnet
// Town routes: public endpoints for town data

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getTownBySlug, getTownStories, getTownPlaces } from '../services/townService.js';
import { generateTeacherModule, trackTeacherDownload } from '../services/teacherService.js';
import { TownQuerySchema, StorySummarySchema, PlacesQuerySchema } from '../validators/town.js';
import { optionalEmbedApiKey } from '../middleware/auth.js';

export async function registerTownRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * GET /towns/:slug
   * Returns full town data with events, stories, links, and score
   */
  fastify.get<{
    Params: { slug: string };
    Querystring: Record<string, string>;
  }>(
    '/towns/:slug',
    async (
      request,
      reply
    ) => {
      const { slug } = request.params;

      // Parse and validate query params
      const queryResult = TownQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters',
          details: queryResult.error.issues,
        });
      }

      const options = queryResult.data;

      try {
        const town = await getTownBySlug(slug, options);

        if (!town) {
          return reply.status(404).send({
            success: false,
            error: `Town not found: ${slug}`,
          });
        }

        return reply.send({
          success: true,
          data: town,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching town');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /towns/:slug/teacher
   * Returns teacher module with lesson plan, sources, assignments, etc.
   */
  fastify.get(
    '/towns/:slug/teacher',
    {
      preHandler: [optionalEmbedApiKey],
    },
    async (
      request: FastifyRequest<{
        Params: { slug: string };
        Querystring: { key?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { slug } = request.params;

      try {
        const module = await generateTeacherModule(slug);

        if (!module) {
          return reply.status(404).send({
            success: false,
            error: `Town not found: ${slug}`,
          });
        }

        // Track download if org context
        if (request.org) {
          await trackTeacherDownload(module.town.id, request.org.id);
        }

        return reply.send({
          success: true,
          data: module,
          meta: {
            timestamp: new Date().toISOString(),
            note: 'Teacher module content is intended for educational use.',
          },
        });
      } catch (error) {
        request.log.error(error, 'Error generating teacher module');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /towns/:slug/stories
   * Returns stories for a town, optionally filtered by type
   */
  fastify.get(
    '/towns/:slug/stories',
    async (
      request: FastifyRequest<{
        Params: { slug: string };
        Querystring: { type?: 'HISTORICAL_VOICE' | 'MODERN_VOICE'; limit?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { slug } = request.params;
      const { type, limit } = request.query;

      try {
        const stories = await getTownStories(slug, {
          type,
          limit: limit ? parseInt(limit, 10) : undefined,
        });

        return reply.send({
          success: true,
          data: {
            townSlug: slug,
            stories,
            count: stories.length,
          },
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching stories');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /towns/:slug/places
   * Returns all places for a town, grouped by category with featured highlighted
   */
  fastify.get(
    '/towns/:slug/places',
    async (
      request: FastifyRequest<{
        Params: { slug: string };
        Querystring: { category?: string; limit?: string; featuredOnly?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { slug } = request.params;

      // Parse and validate query params
      const queryResult = PlacesQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters',
          details: queryResult.error.issues,
        });
      }

      try {
        const placesData = await getTownPlaces(slug, queryResult.data);

        if (!placesData) {
          return reply.status(404).send({
            success: false,
            error: `Town not found: ${slug}`,
          });
        }

        return reply.send({
          success: true,
          data: placesData,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching places');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );
}
