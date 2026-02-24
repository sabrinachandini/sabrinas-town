// MODEL: Claude Sonnet
// Authentication middleware for admin and embed API key verification

import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import prisma from '../db/client.js';

/**
 * Admin authentication via ADMIN_TOKEN header
 */
export async function requireAdmin(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const adminToken = process.env.ADMIN_TOKEN;

  if (!adminToken) {
    request.log.error('ADMIN_TOKEN environment variable not set');
    return reply.status(500).send({
      success: false,
      error: 'Server configuration error',
    });
  }

  const providedToken = request.headers['x-admin-token'] || request.headers['authorization']?.replace('Bearer ', '');

  if (!providedToken) {
    return reply.status(401).send({
      success: false,
      error: 'Admin authentication required. Provide X-Admin-Token header.',
    });
  }

  if (providedToken !== adminToken) {
    return reply.status(403).send({
      success: false,
      error: 'Invalid admin token',
    });
  }

  // Auth successful, continue
}

/**
 * Embed API key authentication
 * Extracts org from API key and attaches to request
 */
export async function requireEmbedApiKey(
  request: FastifyRequest<{ Querystring: { key?: string } }>,
  reply: FastifyReply
): Promise<void> {
  const apiKey = request.query.key || request.headers['x-embed-api-key'];

  if (!apiKey || typeof apiKey !== 'string') {
    return reply.status(401).send({
      success: false,
      error: 'Embed API key required. Provide ?key= query param or X-Embed-API-Key header.',
    });
  }

  try {
    const org = await prisma.organization.findUnique({
      where: { embedApiKey: apiKey },
      include: {
        town: {
          select: { id: true, slug: true, name: true },
        },
      },
    });

    if (!org) {
      return reply.status(403).send({
        success: false,
        error: 'Invalid embed API key',
      });
    }

    if (org.status === 'CANCELED') {
      return reply.status(403).send({
        success: false,
        error: 'Organization subscription is canceled',
      });
    }

    if (org.status === 'PAST_DUE') {
      request.log.warn({ orgId: org.id }, 'Organization is past due but allowing access');
    }

    // Attach org to request for downstream handlers
    (request as FastifyRequest & { org: typeof org }).org = org;
  } catch (error) {
    request.log.error(error, 'Error verifying embed API key');
    return reply.status(500).send({
      success: false,
      error: 'Error verifying API key',
    });
  }
}

/**
 * Optional embed API key - extracts org if provided but doesn't require it
 */
export async function optionalEmbedApiKey(
  request: FastifyRequest<{ Querystring: { key?: string } }>,
  reply: FastifyReply
): Promise<void> {
  const apiKey = request.query.key || request.headers['x-embed-api-key'];

  if (!apiKey || typeof apiKey !== 'string') {
    // No key provided, continue without org context
    return;
  }

  try {
    const org = await prisma.organization.findUnique({
      where: { embedApiKey: apiKey },
      include: {
        town: {
          select: { id: true, slug: true, name: true },
        },
      },
    });

    if (org && org.status !== 'CANCELED') {
      (request as FastifyRequest & { org: typeof org }).org = org;
    }
  } catch (error) {
    request.log.warn(error, 'Error verifying optional embed API key');
    // Continue without org context
  }
}

/**
 * Fastify plugin to register auth decorators
 */
export async function authPlugin(fastify: FastifyInstance): Promise<void> {
  // Decorate request with org property
  fastify.decorateRequest('org', null);
}

/**
 * Type augmentation for request with org
 */
declare module 'fastify' {
  interface FastifyRequest {
    org?: {
      id: string;
      townId: string;
      name: string;
      planTier: 'STARTER' | 'PRO' | 'PREMIUM';
      status: 'ACTIVE' | 'TRIAL' | 'PAST_DUE' | 'CANCELED';
      embedApiKey: string;
      brandingConfig: unknown;
      town: {
        id: string;
        slug: string;
        name: string;
      };
    } | null;
  }
}
