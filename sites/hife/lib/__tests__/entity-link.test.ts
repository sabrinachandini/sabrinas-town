/**
 * EntityLink DAL tests.
 *
 * Critical invariant: linkType=RELATED_TO requires a non-empty label.
 * This is enforced in the DAL layer and must never be bypassed.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/prisma", () => ({
  default: {
    entityLink: {
      create: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

import prisma from "@/lib/prisma";
import type { NetworkScope, TownScope } from "@/lib/scope";
import {
  createEntityLink,
  upsertEntityLink,
  publishEntityLink,
  demoteEntityLink,
  deleteEntityLink,
  listEntityLinks,
  getEntityLinksForEntity,
} from "@/lib/dal/entity-link";

const mockCreate = prisma.entityLink.create as ReturnType<typeof vi.fn>;
const mockUpsert = prisma.entityLink.upsert as ReturnType<typeof vi.fn>;
const mockUpdate = prisma.entityLink.update as ReturnType<typeof vi.fn>;
const mockDelete = prisma.entityLink.delete as ReturnType<typeof vi.fn>;
const mockFindMany = prisma.entityLink.findMany as ReturnType<typeof vi.fn>;

beforeEach(() => vi.clearAllMocks());

const staff: NetworkScope = { type: "network", role: "staff" };
const partner: TownScope = {
  type: "town",
  townId: "town-lex",
  partnerAccountId: "pa-lex",
};

// ─── related_to label invariant ──────────────────────────────────────────────

describe("RELATED_TO label invariant", () => {
  it("blocks createEntityLink(RELATED_TO) with no label", async () => {
    await expect(
      createEntityLink(staff, {
        fromId: "person-1",
        fromType: "PERSON",
        toId: "town-lex",
        toType: "TOWN",
        linkType: "RELATED_TO",
      }),
    ).rejects.toThrow("requires a non-empty label");
    expect(mockCreate).not.toHaveBeenCalled();
  });

  it("blocks createEntityLink(RELATED_TO) with empty string label", async () => {
    await expect(
      createEntityLink(staff, {
        fromId: "person-1",
        fromType: "PERSON",
        toId: "town-lex",
        toType: "TOWN",
        linkType: "RELATED_TO",
        label: "   ", // whitespace only
      }),
    ).rejects.toThrow("requires a non-empty label");
    expect(mockCreate).not.toHaveBeenCalled();
  });

  it("allows createEntityLink(RELATED_TO) with a valid label", async () => {
    mockCreate.mockResolvedValue({ id: "el-1" });
    await expect(
      createEntityLink(staff, {
        fromId: "person-1",
        fromType: "PERSON",
        toId: "town-lex",
        toType: "TOWN",
        linkType: "RELATED_TO",
        label: "Birthplace",
      }),
    ).resolves.toBeTruthy();
    expect(mockCreate).toHaveBeenCalledOnce();
  });

  it("does NOT require label for other link types", async () => {
    mockCreate.mockResolvedValue({ id: "el-2" });
    await expect(
      createEntityLink(staff, {
        fromId: "person-1",
        fromType: "PERSON",
        toId: "event-1",
        toType: "EVENT",
        linkType: "PARTICIPATED_IN",
      }),
    ).resolves.toBeTruthy();
    expect(mockCreate).toHaveBeenCalledOnce();
  });

  it("blocks upsertEntityLink(RELATED_TO) with no label", async () => {
    await expect(
      upsertEntityLink(staff, {
        fromId: "person-1",
        fromType: "PERSON",
        toId: "town-lex",
        toType: "TOWN",
        linkType: "RELATED_TO",
      }),
    ).rejects.toThrow("requires a non-empty label");
    expect(mockUpsert).not.toHaveBeenCalled();
  });
});

// ─── Scope enforcement ────────────────────────────────────────────────────────

describe("scope enforcement", () => {
  it("createEntityLink throws for TownScope", async () => {
    await expect(
      createEntityLink(partner, {
        fromId: "p1",
        fromType: "PERSON",
        toId: "e1",
        toType: "EVENT",
        linkType: "PARTICIPATED_IN",
      }),
    ).rejects.toThrow("network scope required");
  });

  it("createEntityLink throws for null scope", async () => {
    await expect(
      createEntityLink(null, {
        fromId: "p1",
        fromType: "PERSON",
        toId: "e1",
        toType: "EVENT",
        linkType: "PARTICIPATED_IN",
      }),
    ).rejects.toThrow("network scope required");
  });

  it("publishEntityLink requires staff", async () => {
    await expect(publishEntityLink(partner, "el-1")).rejects.toThrow(
      "network scope required",
    );
  });

  it("demoteEntityLink requires staff", async () => {
    await expect(demoteEntityLink(partner, "el-1")).rejects.toThrow(
      "network scope required",
    );
  });

  it("deleteEntityLink requires staff", async () => {
    await expect(deleteEntityLink(partner, "el-1")).rejects.toThrow(
      "network scope required",
    );
  });

  it("listEntityLinks allows any authenticated scope", async () => {
    mockFindMany.mockResolvedValue([]);
    await expect(listEntityLinks(partner)).resolves.toEqual([]);
  });

  it("listEntityLinks throws for null scope", async () => {
    await expect(listEntityLinks(null)).rejects.toThrow("unauthenticated");
  });

  it("getEntityLinksForEntity allows any authenticated scope", async () => {
    mockFindMany.mockResolvedValue([]);
    await expect(
      getEntityLinksForEntity(partner, "town-lex", "TOWN"),
    ).resolves.toEqual([]);
  });
});

// ─── createEntityLink data shape ─────────────────────────────────────────────

describe("createEntityLink data shape", () => {
  it("sets status to NEEDS_REVIEW on create", async () => {
    mockCreate.mockResolvedValue({ id: "el-3", status: "NEEDS_REVIEW" });
    await createEntityLink(staff, {
      fromId: "person-1",
      fromType: "PERSON",
      toId: "event-1",
      toType: "EVENT",
      linkType: "PARTICIPATED_IN",
    });
    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: "NEEDS_REVIEW" }),
      }),
    );
  });

  it("trims whitespace from label", async () => {
    mockCreate.mockResolvedValue({ id: "el-4" });
    await createEntityLink(staff, {
      fromId: "person-1",
      fromType: "PERSON",
      toId: "town-lex",
      toType: "TOWN",
      linkType: "RELATED_TO",
      label: "  Birthplace  ",
    });
    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ label: "Birthplace" }),
      }),
    );
  });
});

// ─── publishEntityLink / demoteEntityLink ─────────────────────────────────────

describe("publish / demote", () => {
  it("publishEntityLink sets status to PUBLISHED", async () => {
    mockUpdate.mockResolvedValue({ id: "el-1", status: "PUBLISHED" });
    await publishEntityLink(staff, "el-1");
    expect(mockUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: { status: "PUBLISHED" },
      }),
    );
  });

  it("demoteEntityLink sets status back to NEEDS_REVIEW", async () => {
    mockUpdate.mockResolvedValue({ id: "el-1", status: "NEEDS_REVIEW" });
    await demoteEntityLink(staff, "el-1");
    expect(mockUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        data: { status: "NEEDS_REVIEW" },
      }),
    );
  });
});
