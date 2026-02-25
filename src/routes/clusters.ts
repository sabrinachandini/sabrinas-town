// Cluster routes: public endpoints for cluster directory and detail pages

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/client.js';

export async function registerClusterRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * GET /clusters
   * Returns all clusters with hub town and member count
   */
  fastify.get('/clusters', async (_request: FastifyRequest, reply: FastifyReply) => {
    try {
      const clusters = await prisma.cluster.findMany({
        include: {
          hubTown: { select: { id: true, slug: true, name: true, state: true, heroSummary40: true } },
          clusterTowns: { select: { id: true } },
        },
        orderBy: { name: 'asc' },
      });

      const data = clusters.map((c) => ({
        id: c.id,
        slug: c.slug,
        name: c.name,
        state: c.state,
        theme: c.theme,
        hubTown: c.hubTown
          ? { id: c.hubTown.id, slug: c.hubTown.slug, name: c.hubTown.name, state: c.hubTown.state }
          : null,
        townCount: c.clusterTowns.length,
      }));

      return reply.send({ success: true, data });
    } catch (error) {
      fastify.log.error(error, 'Error fetching clusters');
      return reply.status(500).send({ success: false, error: 'Internal server error' });
    }
  });

  /**
   * GET /towns/:slug/clusters
   * Returns clusters a town belongs to
   */
  fastify.get<{ Params: { slug: string } }>(
    '/towns/:slug/clusters',
    async (request, reply) => {
      try {
        const { slug } = request.params;
        const town = await prisma.town.findUnique({
          where: { slug },
          select: { id: true },
        });

        if (!town) {
          return reply.status(404).send({ success: false, error: 'Town not found' });
        }

        const memberships = await prisma.clusterTown.findMany({
          where: { townId: town.id },
          include: {
            cluster: { select: { slug: true, name: true } },
          },
        });

        const data = memberships.map((m) => ({
          cluster: { slug: m.cluster.slug, name: m.cluster.name },
          role: m.role,
        }));

        return reply.send({ success: true, data });
      } catch (error) {
        fastify.log.error(error, 'Error fetching town clusters');
        return reply.status(500).send({ success: false, error: 'Internal server error' });
      }
    }
  );

  /**
   * GET /clusters/:slug
   * Returns full cluster detail with towns grouped by role and bridges
   */
  fastify.get<{ Params: { slug: string } }>(
    '/clusters/:slug',
    async (request, reply) => {
      try {
        const { slug } = request.params;

        const cluster = await prisma.cluster.findUnique({
          where: { slug },
          include: {
            hubTown: {
              select: {
                id: true,
                slug: true,
                name: true,
                state: true,
                heroSummary40: true,
                execSummary150: true,
                compositeScore: true,
              },
            },
            clusterTowns: {
              include: {
                town: {
                  select: {
                    id: true,
                    slug: true,
                    name: true,
                    state: true,
                    heroSummary40: true,
                    execSummary150: true,
                  },
                },
              },
              orderBy: { sortOrder: 'asc' },
            },
            bridgesFrom: {
              include: {
                toCluster: { select: { id: true, slug: true, name: true, state: true, theme: true } },
              },
            },
            bridgesTo: {
              include: {
                fromCluster: { select: { id: true, slug: true, name: true, state: true, theme: true } },
              },
            },
          },
        });

        if (!cluster) {
          return reply.status(404).send({ success: false, error: 'Cluster not found' });
        }

        const data = {
          id: cluster.id,
          slug: cluster.slug,
          name: cluster.name,
          state: cluster.state,
          theme: cluster.theme,
          summary: cluster.summary,
          hubTown: cluster.hubTown,
          towns: cluster.clusterTowns.map((ct) => ({
            ...ct.town,
            role: ct.role,
            sortOrder: ct.sortOrder,
          })),
          bridges: [
            ...cluster.bridgesFrom.map((b) => ({
              id: b.id,
              label: b.label,
              rationale: b.rationale,
              direction: 'outgoing' as const,
              cluster: b.toCluster,
            })),
            ...cluster.bridgesTo.map((b) => ({
              id: b.id,
              label: b.label,
              rationale: b.rationale,
              direction: 'incoming' as const,
              cluster: b.fromCluster,
            })),
          ],
        };

        return reply.send({ success: true, data });
      } catch (error) {
        fastify.log.error(error, 'Error fetching cluster');
        return reply.status(500).send({ success: false, error: 'Internal server error' });
      }
    }
  );
}
