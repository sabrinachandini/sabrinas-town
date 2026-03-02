// Org-scoped analytics: record + summarize events for authenticated org members

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Prisma } from '@prisma/client';
import prisma from '../db/client.js';
import { OrgAnalyticsEventSchema, OrgAnalyticsSummaryQuerySchema } from '../validators/orgAnalytics.js';

// ---------------------------------------------------------------------------
// Auth helper: verify session + any org membership
// ---------------------------------------------------------------------------
async function requireOrgMember(
  request: FastifyRequest,
  reply: FastifyReply,
  orgSlug: string
): Promise<{ userId: string; org: any } | null> {
  const userId = request.headers['x-user-id'] as string;
  if (!userId) {
    reply.status(401).send({ success: false, error: 'Authentication required. Provide X-User-Id header.' });
    return null;
  }

  if (!orgSlug) {
    reply.status(400).send({ success: false, error: 'orgSlug is required.' });
    return null;
  }

  const org = await prisma.organization.findUnique({
    where: { slug: orgSlug },
    include: {
      orgUsers: { where: { userId } },
      subscription: true,
    },
  });

  if (!org) {
    reply.status(404).send({ success: false, error: `Organization "${orgSlug}" not found.` });
    return null;
  }

  const membership = org.orgUsers[0];
  if (!membership) {
    reply.status(403).send({ success: false, error: 'You are not a member of this organization.' });
    return null;
  }

  return { userId, org };
}

// ---------------------------------------------------------------------------
// Route registration
// ---------------------------------------------------------------------------
export async function registerOrgAnalyticsRoutes(fastify: FastifyInstance): Promise<void> {

  // =======================================================================
  // POST /api/org-analytics/event
  // =======================================================================
  fastify.post('/org-analytics/event', async (request, reply) => {
    const bodyResult = OrgAnalyticsEventSchema.safeParse(request.body);
    if (!bodyResult.success) {
      return reply.status(400).send({
        success: false,
        error: 'Invalid request body',
        details: bodyResult.error.issues,
      });
    }

    const { orgSlug, eventType, townSlug, metadata } = bodyResult.data;

    const auth = await requireOrgMember(request, reply, orgSlug);
    if (!auth) return;

    const { userId, org } = auth;

    // Require active subscription
    if (!org.subscription || org.subscription.status !== 'active') {
      return reply.status(402).send({
        success: false,
        error: 'An active subscription is required to record analytics.',
      });
    }

    // Resolve town if provided
    let townId: string | undefined;
    if (townSlug) {
      const town = await prisma.town.findUnique({
        where: { slug: townSlug },
        select: { id: true },
      });

      if (!town) {
        return reply.status(404).send({ success: false, error: `Town "${townSlug}" not found.` });
      }

      // Verify org stewards this town
      const stewardship = await prisma.townStewardship.findFirst({
        where: {
          orgId: org.id,
          townId: town.id,
          status: 'ACTIVE',
        },
      });

      if (!stewardship) {
        return reply.status(403).send({
          success: false,
          error: 'Organization does not have active stewardship for this town.',
        });
      }

      townId = town.id;
    }

    await prisma.analyticsEvent.create({
      data: {
        orgId: org.id,
        userId,
        townId: townId ?? null,
        eventType,
        metadata: metadata as Prisma.InputJsonValue ?? undefined,
      },
    });

    return reply.send({ success: true });
  });

  // =======================================================================
  // GET /api/org-analytics/summary
  // =======================================================================
  fastify.get('/org-analytics/summary', async (request, reply) => {
    const queryResult = OrgAnalyticsSummaryQuerySchema.safeParse(request.query);
    if (!queryResult.success) {
      return reply.status(400).send({
        success: false,
        error: 'Invalid query parameters',
        details: queryResult.error.issues,
      });
    }

    const { orgSlug, range } = queryResult.data;

    const auth = await requireOrgMember(request, reply, orgSlug);
    if (!auth) return;

    const { org } = auth;

    // Calculate start date
    const days = range === '30d' ? 30 : 7;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get stewarded town IDs
    const stewardships = await prisma.townStewardship.findMany({
      where: { orgId: org.id, status: 'ACTIVE' },
      select: { townId: true, town: { select: { name: true, slug: true } } },
    });
    const stewardedTownIds = stewardships.map((s) => s.townId);

    // Query events: scoped to org + time range + (stewarded towns OR org-level)
    const events = await prisma.analyticsEvent.findMany({
      where: {
        orgId: org.id,
        timestamp: { gte: startDate },
        OR: [
          { townId: { in: stewardedTownIds } },
          { townId: null },
        ],
      },
      select: {
        eventType: true,
        townId: true,
        timestamp: true,
      },
    });

    // Aggregate: totals by event type
    const totalsByEventType: Record<string, number> = {};
    for (const e of events) {
      totalsByEventType[e.eventType] = (totalsByEventType[e.eventType] || 0) + 1;
    }

    // Aggregate: totals by town
    const townIdToName: Record<string, string> = {};
    for (const s of stewardships) {
      townIdToName[s.townId] = s.town.name;
    }

    const totalsByTown: Record<string, { name: string; count: number }> = {};
    for (const e of events) {
      if (e.townId && townIdToName[e.townId]) {
        if (!totalsByTown[e.townId]) {
          totalsByTown[e.townId] = { name: townIdToName[e.townId], count: 0 };
        }
        totalsByTown[e.townId].count += 1;
      }
    }

    // Aggregate: daily counts
    const dailyMap: Record<string, number> = {};
    for (const e of events) {
      const day = e.timestamp.toISOString().slice(0, 10);
      dailyMap[day] = (dailyMap[day] || 0) + 1;
    }
    const dailyCounts = Object.entries(dailyMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));

    return reply.send({
      success: true,
      data: {
        range,
        totalEvents: events.length,
        totalsByEventType,
        totalsByTown: Object.values(totalsByTown).sort((a, b) => b.count - a.count),
        dailyCounts,
      },
    });
  });
}
