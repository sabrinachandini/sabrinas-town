// MODEL: Claude Sonnet
// Embed routes: endpoints for tourism organization widgets

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getTownBySlug } from '../services/townService.js';
import { requireEmbedApiKey } from '../middleware/auth.js';
import { applyBranding } from '../embed/branding.js';
import prisma from '../db/client.js';

export async function registerEmbedRoutes(fastify: FastifyInstance): Promise<void> {
  /**
   * GET /embed/town/:slug
   * Returns embeddable town payload with branding applied
   * Requires valid embed API key
   */
  fastify.get(
    '/embed/town/:slug',
    {
      preHandler: [requireEmbedApiKey],
    },
    async (
      request: FastifyRequest<{
        Params: { slug: string };
        Querystring: { key?: string };
      }>,
      reply: FastifyReply
    ) => {
      const { slug } = request.params;
      const org = request.org!;

      try {
        // Verify org has access to this town (or it's their own town)
        const isOwnTown = org.town.slug === slug;
        const hasAccess = isOwnTown || org.planTier !== 'STARTER';

        if (!hasAccess) {
          return reply.status(403).send({
            success: false,
            error: 'Starter plan can only embed own town. Upgrade to Pro for network access.',
          });
        }

        const town = await getTownBySlug(slug, {
          includeEvents: true,
          includeStories: true,
          includeLinks: true,
          includeScore: true,
        });

        if (!town) {
          return reply.status(404).send({
            success: false,
            error: `Town not found: ${slug}`,
          });
        }

        // Apply organization branding
        const brandedData = applyBranding(town, org.brandingConfig as Record<string, unknown> | null);

        // Track embed view
        await prisma.analyticsEvent.create({
          data: {
            orgId: org.id,
            townId: town.id,
            eventType: 'EMBED_VIEW',
            metadata: {
              viewedSlug: slug,
              isOwnTown,
            },
          },
        });

        // Set CORS headers for embedding
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', 'GET');

        return reply.send({
          success: true,
          data: {
            ...brandedData,
            _embed: {
              orgName: org.name,
              planTier: org.planTier,
              badge: generateBadge(org.planTier),
            },
          },
          meta: {
            timestamp: new Date().toISOString(),
            cacheControl: 'max-age=300', // 5 minute cache
          },
        });
      } catch (error) {
        request.log.error(error, 'Error generating embed');
        return reply.status(500).send({
          success: false,
          error: 'Internal server error',
        });
      }
    }
  );

  /**
   * GET /embed/widget.js
   * Returns JavaScript widget code for easy embedding
   */
  fastify.get('/embed/widget.js', async (request, reply) => {
    const widgetCode = `
(function() {
  'use strict';

  window.SabrinasTown = window.SabrinasTown || {};

  SabrinasTown.init = function(config) {
    if (!config.apiKey) {
      console.error('SabrinasTown: API key required');
      return;
    }

    const container = document.querySelector(config.container || '#sabrinas-town');
    if (!container) {
      console.error('SabrinasTown: Container not found');
      return;
    }

    const slug = config.townSlug || container.dataset.townSlug;
    if (!slug) {
      console.error('SabrinasTown: Town slug required');
      return;
    }

    const apiBase = config.apiBase || '${request.protocol}://${request.hostname}';

    fetch(apiBase + '/embed/town/' + slug + '?key=' + config.apiKey)
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          SabrinasTown.render(container, data.data, config);
        } else {
          console.error('SabrinasTown:', data.error);
        }
      })
      .catch(function(err) {
        console.error('SabrinasTown:', err);
      });
  };

  SabrinasTown.render = function(container, data, config) {
    // Basic render - customize as needed
    container.innerHTML = \`
      <div class="st-widget" style="font-family: system-ui, sans-serif; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
          \${data._branding?.logoUrl ? '<img src="' + data._branding.logoUrl + '" alt="" style="height: 32px;">' : ''}
          <h2 style="margin: 0; color: \${data._branding?.primaryColor || '#1a1a1a'};">\${data.name}, \${data.state}</h2>
        </div>
        <p style="color: #666; margin: 0 0 1rem;">\${data.execSummary150}</p>
        <div style="display: flex; gap: 1rem; font-size: 0.875rem;">
          <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px;">Score: \${data.compositeScore}</span>
          <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px;">\${data.scoreTier}</span>
        </div>
        \${data._embed?.badge ? '<div style="margin-top: 1rem; font-size: 0.75rem; color: #888;">' + data._embed.badge + '</div>' : ''}
      </div>
    \`;
  };
})();
`;

    reply.header('Content-Type', 'application/javascript');
    reply.header('Cache-Control', 'public, max-age=3600');
    return reply.send(widgetCode);
  });
}

function generateBadge(planTier: string): string {
  const badges: Record<string, string> = {
    STARTER: 'Part of the Top 75 Revolutionary Towns Network',
    PRO: '⭐ Top 75 Revolutionary Towns Network',
    PREMIUM: '⭐⭐ Top 75 Revolutionary Towns Network - Premium Partner',
  };
  return badges[planTier] || badges.STARTER;
}
