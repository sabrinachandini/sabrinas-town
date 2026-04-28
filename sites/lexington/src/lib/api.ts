import prisma from "./prisma";
import type { Town, TownEvent, TownPerson } from "@hife/content";

const SLUG = "lexington-ma";

export async function getTown(): Promise<Town | null> {
  const row = await prisma.town.findUnique({
    where: { slug: SLUG },
    include: {
      events: {
        select: {
          id: true, name: true, startDate: true, datePrecision: true,
          summary: true, significanceWeight: true,
          _count: { select: { eventPeople: true, eventThemes: true } },
        },
        orderBy: { significanceWeight: "desc" },
      },
      stories: {
        select: { id: true, slug: true, title: true, storyType: true, verificationStatus: true },
      },
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    name: row.name,
    state: row.state,
    country: row.country,
    slug: row.slug,
    geo: row.lat && row.lng ? { lat: Number(row.lat), lng: Number(row.lng) } : null,
    heroSummary40: row.heroSummary40 ?? "",
    execSummary150: row.execSummary150 ?? "",
    whyMatters: row.whyMatters ?? "",
    tourismInfo: null,
    compositeScore: row.compositeScore ?? 0,
    scoreTier: "Notable",
    scoreBreakdown: null,
    lastUpdatedAt: row.updatedAt?.toISOString() ?? "",
    imageUrl: row.imageUrl ?? null,
    imageCredit: null,
    events: row.events.map((e) => ({
      id: e.id,
      name: e.name,
      startDate: e.startDate?.toISOString() ?? null,
      datePrecision: e.datePrecision,
      summary: e.summary ?? "",
      significanceWeight: e.significanceWeight,
      peopleCount: e._count.eventPeople,
      themesCount: e._count.eventThemes,
    } satisfies TownEvent)),
    stories: row.stories.map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      storyType: s.storyType as "HISTORICAL_VOICE" | "MODERN_VOICE",
      verificationStatus: s.verificationStatus as "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED",
      subjectPersonName: null,
      narratorName: null,
      narratorRole: null,
      excerpt: "",
      tags: [],
    })),
    linkedTowns: [],
    themes: [],
    routes: [],
    recentChanges: [],
  };
}

export async function getPeople(): Promise<TownPerson[]> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return [];

  const rows = await prisma.person.findMany({
    where: { townPeople: { some: { townId: town.id } } },
    select: {
      id: true, slug: true, name: true, roles: true,
      bioShort: true, bioLong: true,
      birthYear: true, deathYear: true,
      verificationStatus: true, imageUrl: true,
    },
    orderBy: { name: "asc" },
  });

  return rows.map((p) => ({
    id: p.id,
    slug: p.slug ?? undefined,
    name: p.name,
    roles: p.roles ?? [],
    bioShort: p.bioShort ?? "",
    bioLong: p.bioLong ?? null,
    birthYear: p.birthYear ?? null,
    deathYear: p.deathYear ?? null,
    verificationStatus: p.verificationStatus,
    imageUrl: p.imageUrl ?? null,
  } satisfies TownPerson));
}

export async function getEvents(): Promise<TownEvent[]> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return [];

  const rows = await prisma.event.findMany({
    where: { townId: town.id },
    select: {
      id: true, slug: true, name: true, startDate: true, datePrecision: true,
      summary: true, significanceWeight: true,
      _count: { select: { eventPeople: true, eventThemes: true } },
    },
    orderBy: [{ startDate: "asc" }, { significanceWeight: "desc" }],
  });

  return rows.map((e) => ({
    id: e.id,
    slug: e.slug ?? undefined,
    name: e.name,
    startDate: e.startDate?.toISOString() ?? null,
    datePrecision: e.datePrecision,
    summary: e.summary ?? "",
    significanceWeight: e.significanceWeight,
    peopleCount: e._count.eventPeople,
    themesCount: e._count.eventThemes,
  } satisfies TownEvent));
}
