// Server-side org analytics utilities
// Records events only for authenticated org members with active stewardships

import { cache } from "react";
import { auth } from "./auth";
import prisma from "./prisma";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

/**
 * Resolve org context for a given town slug.
 * Returns { orgId, orgSlug, userId } if the current user belongs to an org
 * that actively stewards this town. Returns null otherwise.
 * Memoized per request via React cache().
 */
export const getOrgContextForTown = cache(
  async (
    townSlug: string
  ): Promise<{ orgId: string; orgSlug: string; userId: string } | null> => {
    const session = await auth();
    if (!session?.user?.id) return null;

    const userId = session.user.id;

    // Get user's org memberships
    const memberships = await prisma.orgUser.findMany({
      where: { userId },
      select: { orgId: true, org: { select: { slug: true } } },
    });

    if (memberships.length === 0) return null;

    // Resolve town
    const town = await prisma.town.findUnique({
      where: { slug: townSlug },
      select: { id: true },
    });

    if (!town) return null;

    // Check if any of the user's orgs steward this town
    const orgIds = memberships.map((m) => m.orgId);
    const stewardship = await prisma.townStewardship.findFirst({
      where: {
        orgId: { in: orgIds },
        townId: town.id,
        status: "ACTIVE",
      },
      select: { orgId: true },
    });

    if (!stewardship) return null;

    const membership = memberships.find((m) => m.orgId === stewardship.orgId);
    if (!membership) return null;

    return {
      orgId: stewardship.orgId,
      orgSlug: membership.org.slug,
      userId,
    };
  }
);

/**
 * Record an org analytics event (fire-and-forget).
 * Silently does nothing for unauthenticated users or non-steward orgs.
 */
export async function recordOrgEvent(
  townSlug: string,
  eventType: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  try {
    const ctx = await getOrgContextForTown(townSlug);
    if (!ctx) return;

    fetch(`${API_URL}/api/org-analytics/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Id": ctx.userId,
      },
      body: JSON.stringify({
        orgSlug: ctx.orgSlug,
        eventType,
        townSlug,
        metadata,
      }),
    }).catch(() => {
      // Silently ignore fetch errors — never block page rendering
    });
  } catch {
    // Never throw, never block
  }
}
