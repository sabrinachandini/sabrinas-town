// MODEL: Claude Sonnet
// Admin routes: protected endpoints for content management

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { requireAdmin } from '../middleware/auth.js';
import {
  createUpdateDelta,
  applyUpdateDelta,
  rollbackUpdateDelta,
  listUpdateDeltas,
} from '../services/updateDeltaService.js';
import { computeTownScore, recomputeAllScores } from '../services/scoring.js';
import {
  CreateUpdateDeltaSchema,
  ApplyUpdateDeltaSchema,
  RollbackUpdateDeltaSchema,
  RecomputeScoresSchema,
  ListUpdateDeltasQuerySchema,
} from '../validators/admin.js';

export async function registerAdminRoutes(fastify: FastifyInstance): Promise<void> {
  // Register admin routes in a scoped plugin so the preHandler hook only applies to these routes
  await fastify.register(async (adminRoutes) => {
    // All admin routes require authentication
    adminRoutes.addHook('preHandler', requireAdmin);

    /**
     * GET /admin/update-deltas
     * List pending and recent update deltas
     */
    adminRoutes.get(
    '/admin/update-deltas',
    async (
      request: FastifyRequest<{
        Querystring: Record<string, string>;
      }>,
      reply: FastifyReply
    ) => {
      const queryResult = ListUpdateDeltasQuerySchema.safeParse(request.query);
      if (!queryResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid query parameters',
          details: queryResult.error.issues,
        });
      }

      try {
        const result = await listUpdateDeltas(queryResult.data);

        return reply.send({
          success: true,
          data: result,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error listing update deltas');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * POST /admin/update-deltas
   * Create a new update delta from detected changes
   */
    adminRoutes.post(
    '/admin/update-deltas',
    async (
      request: FastifyRequest<{
        Body: unknown;
      }>,
      reply: FastifyReply
    ) => {
      const bodyResult = CreateUpdateDeltaSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid request body',
          details: bodyResult.error.issues,
        });
      }

      try {
        const result = await createUpdateDelta(bodyResult.data);

        return reply.status(201).send({
          success: true,
          data: result,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error creating update delta');
        return reply.status(500).send({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        });
      }
    }
  );

  /**
   * POST /admin/update-deltas/:id/apply
   * Apply an update delta, making the actual changes
   */
    adminRoutes.post(
    '/admin/update-deltas/:id/apply',
    async (
      request: FastifyRequest<{
        Params: { id: string };
        Body: unknown;
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const bodyResult = ApplyUpdateDeltaSchema.safeParse(request.body || {});
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid request body',
          details: bodyResult.error.issues,
        });
      }

      try {
        // Use admin token as admin ID for now (would use actual user in production)
        const adminId = 'admin';

        const result = await applyUpdateDelta(id, bodyResult.data, adminId);

        return reply.send({
          success: true,
          data: result,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error applying update delta');
        return reply.status(500).send({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        });
      }
    }
  );

  /**
   * POST /admin/update-deltas/:id/rollback
   * Rollback an applied update delta
   */
    adminRoutes.post(
    '/admin/update-deltas/:id/rollback',
    async (
      request: FastifyRequest<{
        Params: { id: string };
        Body: unknown;
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const bodyResult = RollbackUpdateDeltaSchema.safeParse(request.body);
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid request body',
          details: bodyResult.error.issues,
        });
      }

      try {
        const adminId = 'admin';

        const result = await rollbackUpdateDelta(id, bodyResult.data.reason, adminId);

        return reply.send({
          success: true,
          data: result,
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error rolling back update delta');
        return reply.status(500).send({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        });
      }
    }
  );

  /**
   * POST /admin/update-deltas/:id/reject
   * Reject an update delta without applying
   */
    adminRoutes.post(
    '/admin/update-deltas/:id/reject',
    async (
      request: FastifyRequest<{
        Params: { id: string };
        Body: { reason?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;
      const { reason } = request.body || {};

      try {
        const { prisma } = await import('../db/client.js');

        await prisma.updateDelta.update({
          where: { id },
          data: {
            status: 'REJECTED',
            rollbackReason: reason || 'Rejected by admin',
          },
        });

        return reply.send({
          success: true,
          data: { id, status: 'REJECTED' },
          meta: {
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        request.log.error(error, 'Error rejecting update delta');
        return reply.status(500).send({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        });
      }
    }
  );

  /**
   * POST /admin/recompute-scores
   * Recompute scores for one or all towns
   */
    adminRoutes.post(
    '/admin/recompute-scores',
    async (
      request: FastifyRequest<{
        Body: unknown;
      }>,
      reply: FastifyReply
    ) => {
      const bodyResult = RecomputeScoresSchema.safeParse(request.body || {});
      if (!bodyResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Invalid request body',
          details: bodyResult.error.issues,
        });
      }

      try {
        const { townId, forceSnapshot } = bodyResult.data;

        if (townId) {
          // Recompute single town
          const result = await computeTownScore(townId);
          return reply.send({
            success: true,
            data: {
              townId,
              newScore: result.compositeScore,
              snapshotId: result.snapshotId,
            },
            meta: {
              timestamp: new Date().toISOString(),
            },
          });
        } else {
          // Recompute all towns
          const result = await recomputeAllScores();
          return reply.send({
            success: true,
            data: result,
            meta: {
              timestamp: new Date().toISOString(),
            },
          });
        }
      } catch (error) {
        request.log.error(error, 'Error recomputing scores');
        return reply.status(500).send({
          success: false,
          error: error instanceof Error ? error.message : 'Internal server error',
        });
      }
    }
    );
  });
}
