import type { Session } from "next-auth";
import prisma from "@/lib/prisma";

export type NetworkScope = {
  type: "network";
  role: "staff";
};

export type TownScope = {
  type: "town";
  townId: string;
  partnerAccountId: string;
};

export type Scope = NetworkScope | TownScope | null;

/**
 * Resolves the caller's access scope from a NextAuth session.
 *
 * Returns:
 *   NetworkScope — user is HIFE staff; may access Mission Control
 *   TownScope    — user is a partner; restricted to their town
 *   null         — unauthenticated or no recognised role
 */
export async function resolveScope(session: Session | null): Promise<Scope> {
  if (!session?.user?.id) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      isStaff: true,
      memberships: {
        where: { partnerAccount: { status: "ACTIVE" } },
        select: {
          partnerAccount: { select: { id: true, townId: true } },
        },
        take: 1,
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!user) return null;
  if (user.isStaff) return { type: "network", role: "staff" };

  const membership = user.memberships[0];
  if (membership) {
    return {
      type: "town",
      townId: membership.partnerAccount.townId,
      partnerAccountId: membership.partnerAccount.id,
    };
  }

  return null;
}

/**
 * Asserts that the scope is a NetworkScope.
 * Throws if the caller is not staff — use in DAL helpers that require
 * network-wide access so the error surfaces early and loudly.
 */
export function requireNetworkScope(scope: Scope): asserts scope is NetworkScope {
  if (!scope || scope.type !== "network") {
    throw new Error("network scope required");
  }
}

/**
 * Asserts that the scope is a TownScope and that townId matches.
 * Throws on mismatch — enforces tenant isolation at the DAL boundary.
 */
export function requireTownScope(
  scope: Scope,
  townId: string,
): asserts scope is TownScope {
  if (!scope || scope.type !== "town" || scope.townId !== townId) {
    throw new Error("town scope required or townId mismatch");
  }
}
