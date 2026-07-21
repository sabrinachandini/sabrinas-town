/**
 * Scope isolation tests — gates every access-touching PR.
 *
 * These tests prove that a partner user (TownScope) CANNOT read or write
 * data belonging to a different partner account through the DAL.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ─── Mock Prisma ──────────────────────────────────────────────────────────────

vi.mock("@/lib/prisma", () => ({
  default: {
    suggestion: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    partnerAccount: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    membership: {
      create: vi.fn(),
      delete: vi.fn(),
    },
    auditEvent: {
      findMany: vi.fn(),
      create: vi.fn(),
    },
  },
}));

import prisma from "@/lib/prisma";
import type { NetworkScope, TownScope } from "@/lib/scope";
import {
  listSuggestions,
  getSuggestion,
  createSuggestionAsPartner,
  reviewSuggestion,
} from "@/lib/dal/suggestions";
import {
  getPartnerAccount,
  listPartnerAccounts,
  updatePartnerAccountStatus,
  addMember,
  removeMember,
} from "@/lib/dal/partner";
import { listAuditEvents } from "@/lib/dal/audit";

const mockSuggestionFindMany = prisma.suggestion.findMany as ReturnType<typeof vi.fn>;
const mockSuggestionFindUnique = prisma.suggestion.findUnique as ReturnType<typeof vi.fn>;
const mockSuggestionCreate = prisma.suggestion.create as ReturnType<typeof vi.fn>;
const mockSuggestionUpdate = prisma.suggestion.update as ReturnType<typeof vi.fn>;
const mockPartnerFindUnique = prisma.partnerAccount.findUnique as ReturnType<typeof vi.fn>;
const mockPartnerFindMany = prisma.partnerAccount.findMany as ReturnType<typeof vi.fn>;
const mockPartnerUpdate = prisma.partnerAccount.update as ReturnType<typeof vi.fn>;
const mockMemberCreate = prisma.membership.create as ReturnType<typeof vi.fn>;
const mockMemberDelete = prisma.membership.delete as ReturnType<typeof vi.fn>;
const mockAuditFindMany = prisma.auditEvent.findMany as ReturnType<typeof vi.fn>;

beforeEach(() => vi.clearAllMocks());

// ─── Scope fixtures ───────────────────────────────────────────────────────────

const staffScope: NetworkScope = { type: "network", role: "staff" };

const lexScope: TownScope = {
  type: "town",
  townId: "town-lex",
  partnerAccountId: "pa-lex",
};

const concordScope: TownScope = {
  type: "town",
  townId: "town-concord",
  partnerAccountId: "pa-concord",
};

// ─── listSuggestions — tenant isolation ──────────────────────────────────────

describe("listSuggestions", () => {
  it("staff sees all suggestions (no partnerAccountId filter)", async () => {
    mockSuggestionFindMany.mockResolvedValue([]);
    await listSuggestions(staffScope);
    const call = mockSuggestionFindMany.mock.calls[0][0];
    expect(call.where).not.toHaveProperty("partnerAccountId");
  });

  it("partner sees only their own account's suggestions", async () => {
    mockSuggestionFindMany.mockResolvedValue([]);
    await listSuggestions(lexScope);
    const call = mockSuggestionFindMany.mock.calls[0][0];
    expect(call.where).toMatchObject({ partnerAccountId: "pa-lex" });
  });

  it("throws for null scope", async () => {
    await expect(listSuggestions(null)).rejects.toThrow("unauthenticated");
  });
});

// ─── getSuggestion — cross-tenant read blocked ────────────────────────────────

describe("getSuggestion", () => {
  it("staff can read any suggestion", async () => {
    mockSuggestionFindUnique.mockResolvedValue({ id: "s1", partnerAccountId: "pa-concord" });
    // Should not throw even though townId doesn't match staff's (none)
    await expect(getSuggestion(staffScope, "s1")).resolves.toBeTruthy();
  });

  it("partner blocked from reading another town's suggestion", async () => {
    // Suggestion belongs to Concord; caller is Lexington partner
    mockSuggestionFindUnique.mockResolvedValue({
      id: "s1",
      partnerAccountId: "pa-concord",
      partnerAccount: { townId: "town-concord" },
    });
    await expect(getSuggestion(lexScope, "s1")).rejects.toThrow(
      "town scope required or townId mismatch",
    );
  });

  it("partner can read their own suggestion", async () => {
    mockSuggestionFindUnique.mockResolvedValue({
      id: "s2",
      partnerAccountId: "pa-lex",
      partnerAccount: { townId: "town-lex" },
    });
    await expect(getSuggestion(lexScope, "s2")).resolves.toBeTruthy();
  });
});

// ─── createSuggestionAsPartner — scope bound to account ──────────────────────

describe("createSuggestionAsPartner", () => {
  it("creates suggestion scoped to the partner's own account", async () => {
    mockSuggestionCreate.mockResolvedValue({ id: "s3" });
    await createSuggestionAsPartner(lexScope, "user-1", {
      entityType: "PLACE",
      payload: { name: "Battle Road" },
    });
    expect(mockSuggestionCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ partnerAccountId: "pa-lex" }),
      }),
    );
  });

  it("throws if called with a NetworkScope", async () => {
    await expect(
      createSuggestionAsPartner(staffScope, "user-1", {
        entityType: "PLACE",
        payload: {},
      }),
    ).rejects.toThrow("town scope required");
  });

  it("throws if called with null scope", async () => {
    await expect(
      createSuggestionAsPartner(null, "user-1", {
        entityType: "PLACE",
        payload: {},
      }),
    ).rejects.toThrow("town scope required");
  });
});

// ─── reviewSuggestion — staff only ───────────────────────────────────────────

describe("reviewSuggestion", () => {
  it("staff can approve a suggestion", async () => {
    mockSuggestionUpdate.mockResolvedValue({ id: "s1", status: "ACCEPTED" });
    await expect(
      reviewSuggestion(staffScope, "s1", {
        status: "ACCEPTED",
        reviewedById: "staff-1",
      }),
    ).resolves.toBeTruthy();
  });

  it("partner cannot approve suggestions", async () => {
    await expect(
      reviewSuggestion(lexScope, "s1", {
        status: "ACCEPTED",
        reviewedById: "user-1",
      }),
    ).rejects.toThrow("network scope required");
  });
});

// ─── listPartnerAccounts — staff only ────────────────────────────────────────

describe("listPartnerAccounts", () => {
  it("staff can list all partner accounts", async () => {
    mockPartnerFindMany.mockResolvedValue([]);
    await expect(listPartnerAccounts(staffScope)).resolves.toEqual([]);
  });

  it("partner cannot list all partner accounts", async () => {
    await expect(listPartnerAccounts(lexScope)).rejects.toThrow(
      "network scope required",
    );
  });
});

// ─── updatePartnerAccountStatus — staff only ─────────────────────────────────

describe("updatePartnerAccountStatus", () => {
  it("staff can change status", async () => {
    mockPartnerUpdate.mockResolvedValue({ id: "pa-lex", status: "SUSPENDED" });
    await expect(
      updatePartnerAccountStatus(staffScope, "pa-lex", "SUSPENDED"),
    ).resolves.toBeTruthy();
  });

  it("partner cannot change their own account's status", async () => {
    await expect(
      updatePartnerAccountStatus(lexScope, "pa-lex", "SUSPENDED"),
    ).rejects.toThrow("network scope required");
  });
});

// ─── addMember / removeMember — staff only ───────────────────────────────────

describe("addMember", () => {
  it("staff can add a member", async () => {
    mockMemberCreate.mockResolvedValue({ id: "m1" });
    await expect(
      addMember(staffScope, "pa-lex", "user-2"),
    ).resolves.toBeTruthy();
  });

  it("partner cannot add members", async () => {
    await expect(addMember(lexScope, "pa-lex", "user-2")).rejects.toThrow(
      "network scope required",
    );
  });
});

describe("removeMember", () => {
  it("staff can remove a member", async () => {
    mockMemberDelete.mockResolvedValue({ id: "m1" });
    await expect(removeMember(staffScope, "pa-lex", "user-2")).resolves.toBeTruthy();
  });

  it("partner cannot remove members", async () => {
    await expect(removeMember(lexScope, "pa-lex", "user-2")).rejects.toThrow(
      "network scope required",
    );
  });
});

// ─── listAuditEvents — staff only ────────────────────────────────────────────

describe("listAuditEvents", () => {
  it("staff can read audit log", async () => {
    mockAuditFindMany.mockResolvedValue([]);
    await expect(listAuditEvents(staffScope)).resolves.toEqual([]);
  });

  it("partner cannot read audit log", async () => {
    await expect(listAuditEvents(lexScope)).rejects.toThrow(
      "network scope required",
    );
  });

  it("unauth cannot read audit log", async () => {
    await expect(listAuditEvents(null)).rejects.toThrow("network scope required");
  });
});
