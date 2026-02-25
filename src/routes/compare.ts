// MODEL: Claude Sonnet
// Compare routes: endpoints for town comparison

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { compareTowns } from '../services/compareService.js';
import { getTeacherModule } from '../services/teacherService.js';
import { CompareQuerySchema } from '../validators/town.js';
import prisma from '../db/client.js';

export async function registerCompareRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * GET /compare
   * Compare two towns and generate comparison data
   */
  fastify.get(
    '/compare',
    async (
      request: FastifyRequest<{
        Querystring: { townA?: string; townB?: string };
      }>,
      reply: FastifyReply
    ) => {
      const queryResult = CompareQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters. Required: ?townA=slug&townB=slug',
          details: queryResult.error.issues,
        });
      }

      const { townA, townB } = queryResult.data;

      if (townA === townB) {
        return reply.status(400).send({
          success: false,
          error: 'Cannot compare a town with itself',
        });
      }

      try {
        const comparison = await compareTowns(townA, townB);

        if (!comparison) {
          return reply.status(404).send({
            success: false,
            error: 'One or both towns not found',
          });
        }

        // Track compare view
        await prisma.analyticsEvent.create({
          data: {
            townId: comparison.townA.id,
            eventType: 'COMPARE_VIEW',
            metadata: {
              comparedWith: comparison.townB.id,
            },
          },
        });

        return reply.send({
          success: true,
          data: comparison,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error comparing towns');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /compare/teacher
   * Compare teacher modules for two towns
   */
  fastify.get(
    '/compare/teacher',
    async (
      request: FastifyRequest<{
        Querystring: { townA?: string; townB?: string };
      }>,
      reply: FastifyReply
    ) => {
      const queryResult = CompareQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters. Required: ?townA=slug&townB=slug',
          details: queryResult.error.issues,
        });
      }

      const { townA, townB } = queryResult.data;

      if (townA === townB) {
        return reply.status(400).send({
          success: false,
          error: 'Cannot compare a town with itself',
        });
      }

      try {
        const [moduleA, moduleB] = await Promise.all([
          getTeacherModule(townA),
          getTeacherModule(townB),
        ]);

        if (!moduleA || !moduleB) {
          return reply.status(404).send({
            success: false,
            error: 'One or both towns not found',
          });
        }

        // Find shared primary source types
        const sourcesA = new Set(moduleA.primarySources.map(s => s.type));
        const sharedSourceTypes = moduleB.primarySources
          .filter(s => sourcesA.has(s.type))
          .map(s => s.type);

        return reply.send({
          success: true,
          data: {
            townA: moduleA,
            townB: moduleB,
            comparison: {
              sharedSourceTypes: [...new Set(sharedSourceTypes)],
              suggestedAssignment: {
                title: `Comparing ${moduleA.town.name} and ${moduleB.town.name} in the Revolution`,
                description: `Students compare the Revolutionary experience of ${moduleA.town.name} and ${moduleB.town.name}, analyzing primary sources from both towns.`,
                guideQuestions: [
                  `How did the Revolution affect ${moduleA.town.name} differently from ${moduleB.town.name}?`,
                  'What do the primary sources from each town reveal about different perspectives?',
                  'What connections exist between these two towns during the Revolutionary period?',
                ],
              },
            },
          },
          meta: {
            timestamp: new Date().toISOString(),
            contentSourceA: moduleA.meta?.contentSource || 'generated',
            contentSourceB: moduleB.meta?.contentSource || 'generated',
          },
        });
      } catch (error) {
        request.log.error(error, 'Error comparing teacher modules');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );
}
