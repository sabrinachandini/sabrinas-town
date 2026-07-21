import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Session } from "next-auth";

// Mock prisma before importing scope so the module sees the mock
vi.mock("@/lib/prisma", () => ({
  default: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

import prisma from "@/lib/prisma";
import {
  resolveScope,
  requireNetworkScope,
  requireTownScope,
} from "@/lib/scope";

const mockFindUnique = prisma.user.findUnique as ReturnType<typeof vi.fn>;

function session(overrides: Partial<Session["user"]> = {}): Session {
  return {
    user: { id: "user-1", email: "test@example.com", name: null, ...overrides },
    expires: new Date(Date.now() + 86400_000).toISOString(),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

// ─── resolveScope ────────────────────────────────────────────────────────────

describe("resolveScope", () => {
  it("returns null for a null session", async () => {
    expect(await resolveScope(null)).toBeNull();
  });

  it("returns null when session has no user id", async () => {
    const s = session({ id: undefined } as never);
    expect(await resolveScope(s)).toBeNull();
  });

  it("returns null when user is not found in DB", async () => {
    mockFindUnique.mockResolvedValue(null);
    expect(await resolveScope(session())).toBeNull();
  });

  it("returns NetworkScope for a staff user", async () => {
    mockFindUnique.mockResolvedValue({ isStaff: true });
    const scope = await resolveScope(session());
    expect(scope).toEqual({ type: "network", role: "staff" });
  });

  it("returns null for a non-staff user with no partner account (pre-F3)", async () => {
    mockFindUnique.mockResolvedValue({ isStaff: false });
    const scope = await resolveScope(session());
    expect(scope).toBeNull();
  });

  it("queries by session user id", async () => {
    mockFindUnique.mockResolvedValue({ isStaff: true });
    await resolveScope(session({ id: "user-42" }));
    expect(mockFindUnique).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: "user-42" } }),
    );
  });
});

// ─── requireNetworkScope ─────────────────────────────────────────────────────

describe("requireNetworkScope", () => {
  it("does not throw for a NetworkScope", () => {
    expect(() =>
      requireNetworkScope({ type: "network", role: "staff" }),
    ).not.toThrow();
  });

  it("throws for null", () => {
    expect(() => requireNetworkScope(null)).toThrow("network scope required");
  });

  it("throws for a TownScope", () => {
    expect(() =>
      requireNetworkScope({
        type: "town",
        townId: "t1",
        partnerAccountId: "pa1",
      }),
    ).toThrow("network scope required");
  });
});

// ─── requireTownScope ────────────────────────────────────────────────────────

describe("requireTownScope", () => {
  const townScope = { type: "town" as const, townId: "t1", partnerAccountId: "pa1" };

  it("does not throw when townId matches", () => {
    expect(() => requireTownScope(townScope, "t1")).not.toThrow();
  });

  it("throws for null", () => {
    expect(() => requireTownScope(null, "t1")).toThrow(
      "town scope required or townId mismatch",
    );
  });

  it("throws for a NetworkScope", () => {
    expect(() =>
      requireTownScope({ type: "network", role: "staff" }, "t1"),
    ).toThrow("town scope required or townId mismatch");
  });

  it("throws when townId does not match (isolation enforcement)", () => {
    expect(() => requireTownScope(townScope, "t2")).toThrow(
      "town scope required or townId mismatch",
    );
  });
});
