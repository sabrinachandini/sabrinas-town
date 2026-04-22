/**
 * Seeds basic sources for towns that have no SourceTown records.
 * Creates 3-5 real, verifiable sources per town (NPS, Wikipedia, state historical societies).
 *
 * Usage:
 *   npx tsx scripts/seed-sources.ts [--limit N] [--state MA] [--all]
 *
 * --all      Process every town, even those that already have sources
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const STATE_FILTER = process.argv.find((a) => a.startsWith("--state="))?.split("=")[1] ?? null;
const ALL = process.argv.includes("--all");

// Universal sources that apply to every Revolutionary War town
const UNIVERSAL_SOURCES = [
  {
    type: "INSTITUTIONAL" as const,
    title: "American Revolution — National Park Service",
    publisherOrHolder: "National Park Service, U.S. Department of the Interior",
    url: "https://www.nps.gov/subjects/amrevolution/index.htm",
    credibilityTier: "TIER1" as const,
    notes: "Official NPS portal for American Revolution history and sites.",
  },
  {
    type: "SECONDARY" as const,
    title: "American Revolution — Encyclopedia Britannica",
    publisherOrHolder: "Encyclopaedia Britannica, Inc.",
    url: "https://www.britannica.com/topic/American-Revolution",
    credibilityTier: "TIER2" as const,
    notes: "Peer-reviewed encyclopedia overview of the Revolution.",
  },
  {
    type: "TERTIARY" as const,
    title: "American Revolutionary War — Wikipedia",
    publisherOrHolder: "Wikimedia Foundation",
    url: "https://en.wikipedia.org/wiki/American_Revolutionary_War",
    credibilityTier: "TIER3" as const,
    notes: "General reference — verify individual claims against primary sources.",
  },
];

// State-specific historical society sources
const STATE_SOURCES: Record<string, { type: "INSTITUTIONAL" | "SECONDARY"; title: string; publisherOrHolder: string; url: string; credibilityTier: "TIER1" | "TIER2" }> = {
  MA: {
    type: "INSTITUTIONAL",
    title: "Massachusetts Historical Society — Collections",
    publisherOrHolder: "Massachusetts Historical Society",
    url: "https://www.masshist.org/collections",
    credibilityTier: "TIER1",
  },
  VA: {
    type: "INSTITUTIONAL",
    title: "Library of Virginia — Revolutionary War Records",
    publisherOrHolder: "Library of Virginia",
    url: "https://www.lva.virginia.gov/public/guides/va4_RevWar.htm",
    credibilityTier: "TIER1",
  },
  NY: {
    type: "INSTITUTIONAL",
    title: "New York State Museum — Revolutionary War Collections",
    publisherOrHolder: "New York State Museum",
    url: "https://www.nysm.nysed.gov/collections",
    credibilityTier: "TIER1",
  },
  PA: {
    type: "INSTITUTIONAL",
    title: "Pennsylvania Historical & Museum Commission",
    publisherOrHolder: "Pennsylvania Historical & Museum Commission",
    url: "https://www.phmc.pa.gov",
    credibilityTier: "TIER1",
  },
  SC: {
    type: "INSTITUTIONAL",
    title: "South Carolina Department of Archives and History",
    publisherOrHolder: "South Carolina Department of Archives and History",
    url: "https://scdah.sc.gov",
    credibilityTier: "TIER1",
  },
  GA: {
    type: "INSTITUTIONAL",
    title: "Georgia Historical Society — Revolutionary War Research",
    publisherOrHolder: "Georgia Historical Society",
    url: "https://georgiahistory.com",
    credibilityTier: "TIER1",
  },
  NJ: {
    type: "INSTITUTIONAL",
    title: "New Jersey State Archives — Revolutionary War Records",
    publisherOrHolder: "New Jersey State Archives",
    url: "https://www.nj.gov/state/archives/catrevwar.html",
    credibilityTier: "TIER1",
  },
  CT: {
    type: "INSTITUTIONAL",
    title: "Connecticut State Library — Revolutionary War Collections",
    publisherOrHolder: "Connecticut State Library",
    url: "https://ctstatelibrary.org/history-genealogy/revolutionary-war",
    credibilityTier: "TIER1",
  },
  MD: {
    type: "INSTITUTIONAL",
    title: "Maryland State Archives — Revolutionary War Records",
    publisherOrHolder: "Maryland State Archives",
    url: "https://msa.maryland.gov/msa/homepage/html/homepage.html",
    credibilityTier: "TIER1",
  },
  NH: {
    type: "INSTITUTIONAL",
    title: "New Hampshire Division of Historical Resources",
    publisherOrHolder: "New Hampshire Division of Historical Resources",
    url: "https://www.nh.gov/nhdhr",
    credibilityTier: "TIER1",
  },
  RI: {
    type: "INSTITUTIONAL",
    title: "Rhode Island Historical Society",
    publisherOrHolder: "Rhode Island Historical Society",
    url: "https://www.rihs.org",
    credibilityTier: "TIER1",
  },
  DE: {
    type: "INSTITUTIONAL",
    title: "Delaware Public Archives — Revolutionary War Records",
    publisherOrHolder: "Delaware Public Archives",
    url: "https://archives.delaware.gov",
    credibilityTier: "TIER1",
  },
  NC: {
    type: "INSTITUTIONAL",
    title: "North Carolina Office of Archives and History",
    publisherOrHolder: "NC Department of Natural and Cultural Resources",
    url: "https://www.ncdcr.gov/about/history",
    credibilityTier: "TIER1",
  },
};

// General secondary source for any state without a specific entry
const FALLBACK_STATE_SOURCE = {
  type: "SECONDARY" as const,
  title: "Journal of the American Revolution",
  publisherOrHolder: "Westholme Publishing",
  url: "https://allthingsliberty.com",
  credibilityTier: "TIER2" as const,
};

async function getOrCreateSource(data: {
  type: string;
  title: string;
  publisherOrHolder: string;
  url?: string | null;
  credibilityTier: string;
  notes?: string | null;
}) {
  const existing = await prisma.source.findFirst({
    where: { title: data.title, publisherOrHolder: data.publisherOrHolder },
  });
  if (existing) return existing;

  return prisma.source.create({
    data: {
      type: data.type as any,
      title: data.title,
      publisherOrHolder: data.publisherOrHolder,
      url: data.url ?? null,
      credibilityTier: data.credibilityTier as any,
      notes: data.notes ?? null,
    },
  });
}

async function seedTownSources(town: { id: string; name: string; state: string; slug: string }) {
  // Build source list: universal + state-specific
  const sourceTemplates = [
    ...UNIVERSAL_SOURCES,
    STATE_SOURCES[town.state] ?? FALLBACK_STATE_SOURCE,
  ];

  // Get existing sourceIds linked to this town to avoid duplicates
  const existing = await prisma.sourceTown.findMany({
    where: { townId: town.id },
    select: { sourceId: true },
  });
  const existingSourceIds = new Set(existing.map((s) => s.sourceId));

  let added = 0;
  for (const template of sourceTemplates) {
    const source = await getOrCreateSource(template);

    if (existingSourceIds.has(source.id)) continue;

    await prisma.sourceTown.create({
      data: { sourceId: source.id, townId: town.id },
    });
    existingSourceIds.add(source.id);
    added++;
  }

  return added;
}

async function main() {
  const where: any = {};
  if (STATE_FILTER) where.state = STATE_FILTER;

  const towns = await prisma.town.findMany({
    where,
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      _count: { select: { sourceTowns: true } },
    },
    orderBy: { compositeScore: "desc" },
    take: LIMIT,
  });

  const needsSources = ALL
    ? towns
    : towns.filter((t) => t._count.sourceTowns === 0);

  console.log(`\n── Source Seeding ──`);
  console.log(`${towns.length} towns total, ${needsSources.length} have no sources\n`);

  let totalAdded = 0;

  for (const town of needsSources) {
    const added = await seedTownSources(town);
    totalAdded += added;
    console.log(`  ${town.name}, ${town.state} — added ${added} sources`);
  }

  console.log(`\n✅ Done. Total source-town links created: ${totalAdded}`);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
