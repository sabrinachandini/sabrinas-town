// MODEL: Claude Sonnet
// Rankings routes: endpoints for town rankings

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getRankedTowns } from '../services/townService.js';
import { RankingsQuerySchema } from '../validators/town.js';
import prisma from '../db/client.js';
import { SCORE_CONFIG_VERSION } from '../config/scoring.js';

export async function registerRankingsRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * GET /rankings
   * Get ranked list of towns by composite score
   */
  fastify.get(
    '/rankings',
    async (
      request: FastifyRequest<{
        Querystring: Record<string, string>;
      }>,
      reply: FastifyReply
    ) => {
      const queryResult = RankingsQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters',
          details: queryResult.error.issues,
        });
      }

      try {
        const towns = await getRankedTowns(queryResult.data);

        // Get last score computation time
        const lastSnapshot = await prisma.scoreSnapshot.findFirst({
          orderBy: { computedAt: 'desc' },
          select: { computedAt: true },
        });

        return reply.send({
          success: true,
          data: {
            towns,
            lastComputed: lastSnapshot?.computedAt.toISOString() || new Date().toISOString(),
            configVersion: SCORE_CONFIG_VERSION,
          },
          meta: {
            timestamp: new Date().toISOString(),
            totalTowns: towns.length,
          },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching rankings');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /rankings/by-state/:state
   * Get ranked list of towns for a specific state
   */
  fastify.get(
    '/rankings/by-state/:state',
    async (
      request: FastifyRequest<{
        Params: { state: string };
        Querystring: { limit?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { state } = request.params;
      const limit = request.query.limit ? parseInt(request.query.limit, 10) : 25;

      try {
        const towns = await getRankedTowns({
          state: state.toUpperCase(),
          limit,
        });

        return reply.send({
          success: true,
          data: {
            state: state.toUpperCase(),
            towns,
            configVersion: SCORE_CONFIG_VERSION,
          },
          meta: {
            timestamp: new Date().toISOString(),
            totalTowns: towns.length,
          },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching state rankings');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );
}
