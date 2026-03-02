// Stewardship activation route
// POST /api/stewardship/activate

import { FastifyInstance } from 'fastify';
import prisma from '../db/client.js';

export async function registerStewardshipRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post('/stewardship/activate', async (request, reply) => {
    const userId = request.headers['x-user-id'] as string;
    if (!userId) {
      return reply.status(401).send({ success: false, error: 'Authentication required.' });
    }

    const body = request.body as { orgSlug: string; townSlug: string };
    if (!body.orgSlug || !body.townSlug) {
      return reply.status(400).send({ success: false, error: 'orgSlug and townSlug are required.' });
    }

    // Verify org ownership
    const org = await prisma.organization.findUnique({
      where: { slug: body.orgSlug },
      include: {
        orgUsers: { where: { userId } },
        subscription: true,
      },
    });

    if (!org) {
      return reply.status(404).send({ success: false, error: 'Organization not found.' });
    }

    const membership = org.orgUsers[0];
    if (!membership || (membership.role !== 'ORG_OWNER' && membership.role !== 'ADMIN')) {
      return reply.status(403).send({ success: false, error: 'Only ORG_OWNER can activate stewardship.' });
    }

    // Require active subscription
    if (!org.subscription || org.subscription.status !== 'active') {
      return reply.status(400).send({
        success: false,
        error: 'An active subscription is required to activate stewardship.',
      });
    }

    // Find town
    const town = await prisma.town.findUnique({ where: { slug: body.townSlug } });
    if (!town) {
      return reply.status(404).send({ success: false, error: `Town "${body.townSlug}" not found.` });
    }

    // Upsert stewardship
    const stewardship = await prisma.townStewardship.upsert({
      where: { townId_orgId: { townId: town.id, orgId: org.id } },
      create: {
        townId: town.id,
        orgId: org.id,
        status: 'ACTIVE',
      },
      update: {
        status: 'ACTIVE',
      },
    });

    // Non-blocking: record STEWARDSHIP_ACTIVATED event
    prisma.analyticsEvent.create({
      data: {
        orgId: org.id,
        userId,
        townId: town.id,
        eventType: 'STEWARDSHIP_ACTIVATED',
        metadata: { townSlug: body.townSlug },
      },
    }).catch(() => {});

    return reply.send({
      success: true,
      stewardship: {
        id: stewardship.id,
        townSlug: body.townSlug,
        orgSlug: body.orgSlug,
        status: stewardship.status,
      },
    });
  });
}
