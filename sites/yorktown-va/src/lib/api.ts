import prisma from "./prisma";
import type { Town, TownEvent, TownPerson } from "@hife/content";

const SLUG = "yorktown-va";

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

export async function getEvent(slug: string): Promise<{
  id: string; slug: string | null; name: string;
  startDate: string | null; datePrecision: string;
  summary: string;
  people: { id: string; name: string; roles: string[]; slug: string | null }[];
} | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.event.findFirst({
    where: { townId: town.id, slug },
    select: {
      id: true, slug: true, name: true,
      startDate: true, datePrecision: true,
      summary: true,
      eventPeople: {
        include: {
          person: { select: { id: true, name: true, roles: true, slug: true } },
        },
      },
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    startDate: row.startDate?.toISOString() ?? null,
    datePrecision: row.datePrecision,
    summary: row.summary ?? "",
    people: row.eventPeople.map((ep) => ({
      id: ep.person.id,
      name: ep.person.name,
      roles: ep.person.roles ?? [],
      slug: ep.person.slug,
    })),
  };
}

export async function getPerson(slug: string): Promise<TownPerson | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.person.findFirst({
    where: { slug, townPeople: { some: { townId: town.id } } },
    select: {
      id: true, slug: true, name: true, roles: true,
      bioShort: true, bioLong: true,
      birthYear: true, deathYear: true,
      verificationStatus: true, imageUrl: true,
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug ?? undefined,
    name: row.name,
    roles: row.roles ?? [],
    bioShort: row.bioShort ?? "",
    bioLong: row.bioLong ?? null,
    birthYear: row.birthYear ?? null,
    deathYear: row.deathYear ?? null,
    verificationStatus: row.verificationStatus,
    imageUrl: row.imageUrl ?? null,
  };
}

export async function getStories(): Promise<{
  id: string; slug: string; title: string; storyType: string;
  excerpt: string; verificationStatus: string;
}[]> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return [];

  const rows = await prisma.story.findMany({
    where: { townId: town.id, slug: { not: null } },
    select: { id: true, slug: true, title: true, storyType: true, verificationStatus: true },
    orderBy: { createdAt: "desc" },
  });

  return rows
    .filter((s): s is typeof s & { slug: string } => s.slug !== null)
    .map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      storyType: s.storyType,
      excerpt: "",
      verificationStatus: s.verificationStatus,
    }));
}

export async function getStory(slug: string): Promise<{
  id: string; slug: string; title: string; storyType: string;
  body: string; excerpt: string; verificationStatus: string;
  subjectPersonName: string | null; narratorName: string | null;
} | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.story.findFirst({
    where: { townId: town.id, slug },
    select: {
      id: true, slug: true, title: true, storyType: true,
      textVersion: true, verificationStatus: true, narratorName: true,
      subjectPerson: { select: { name: true } },
    },
  });
  if (!row || !row.slug) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    storyType: row.storyType,
    body: row.textVersion ?? "",
    excerpt: "",
    verificationStatus: row.verificationStatus,
    subjectPersonName: row.subjectPerson?.name ?? null,
    narratorName: row.narratorName ?? null,
  };
}

export async function getPeopleCount(): Promise<number> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return 0;
  return prisma.person.count({ where: { townPeople: { some: { townId: town.id } } } });
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
