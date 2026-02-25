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

  // =========================================================================
  // Partner Inquiry Management
  // =========================================================================

  /**
   * GET /admin/inquiries
   * List partner inquiries with optional status filter and search
   */
    adminRoutes.get(
    '/admin/inquiries',
    async (
      request: FastifyRequest<{
        Querystring: { status?: string; q?: string };
      }>,
      reply: FastifyReply
    ) => {
      try {
        const { prisma } = await import('../db/client.js');
        const { status, q } = request.query;

        const where: Record<string, unknown> = {};

        if (status && ['NEW', 'IN_REVIEW', 'RESPONDED', 'CLOSED'].includes(status)) {
          where.status = status;
        }

        if (q) {
          where.OR = [
            { email: { contains: q, mode: 'insensitive' } },
            { name: { contains: q, mode: 'insensitive' } },
            { organization: { contains: q, mode: 'insensitive' } },
            { townSlug: { contains: q, mode: 'insensitive' } },
          ];
        }

        const inquiries = await prisma.partnerInquiry.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          include: {
            town: { select: { id: true, slug: true, name: true } },
          },
        });

        return reply.send({
          success: true,
          data: inquiries,
          meta: { timestamp: new Date().toISOString() },
        });
      } catch (error) {
        request.log.error(error, 'Error listing inquiries');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /admin/inquiries/:id
   * Get single inquiry detail
   */
    adminRoutes.get(
    '/admin/inquiries/:id',
    async (
      request: FastifyRequest<{ Params: { id: string } }>,
      reply: FastifyReply
    ) => {
      try {
        const { prisma } = await import('../db/client.js');
        const { id } = request.params;

        const inquiry = await prisma.partnerInquiry.findUnique({
          where: { id },
          include: {
            town: { select: { id: true, slug: true, name: true } },
          },
        });

        if (!inquiry) {
          return reply.status(404).send({
            success: false,
            error: 'Inquiry not found',
          });
        }

        return reply.send({
          success: true,
          data: inquiry,
          meta: { timestamp: new Date().toISOString() },
        });
      } catch (error) {
        request.log.error(error, 'Error fetching inquiry');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * PATCH /admin/inquiries/:id
   * Update inquiry status and/or notes
   */
    adminRoutes.patch(
    '/admin/inquiries/:id',
    async (
      request: FastifyRequest<{
        Params: { id: string };
        Body: { status?: string; notes?: string };
      }>,
      reply: FastifyReply
    ) => {
      try {
        const { prisma } = await import('../db/client.js');
        const { id } = request.params;
        const { status, notes } = request.body || {};

        const data: Record<string, unknown> = {};

        if (status) {
          const validStatuses = ['NEW', 'IN_REVIEW', 'RESPONDED', 'CLOSED'];
          if (!validStatuses.includes(status)) {
            return reply.status(400).send({
              success: false,
              error: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
            });
          }
          data.status = status;
        }

        if (notes !== undefined) {
          data.notes = notes;
        }

        if (Object.keys(data).length === 0) {
          return reply.status(400).send({
            success: false,
            error: 'No valid fields to update',
          });
        }

        const inquiry = await prisma.partnerInquiry.update({
          where: { id },
          data,
        });

        return reply.send({
          success: true,
          data: inquiry,
          meta: { timestamp: new Date().toISOString() },
        });
      } catch (error) {
        request.log.error(error, 'Error updating inquiry');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
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
