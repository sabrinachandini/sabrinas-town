/**
 * Wikimedia Commons image enrichment script.
 * Finds public-domain historical images for towns, events, and people portraits.
 * Also searches for YouTube video IDs for high-significance events.
 *
 * Usage:
 *   npx tsx scripts/enrich-images.ts [--limit N] [--towns-only] [--events-only] [--people-only] [--videos-only]
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["error"] });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const TOWNS_ONLY = process.argv.includes("--towns-only");
const EVENTS_ONLY = process.argv.includes("--events-only");
const PEOPLE_ONLY = process.argv.includes("--people-only");
const VIDEOS_ONLY = process.argv.includes("--videos-only");

const WIKIMEDIA_HEADERS = {
  "User-Agent": "HistoryIsForEveryone/1.0 (https://sabrinas-town.vercel.app; contact@sabrinas-town.vercel.app) node-fetch/3",
  "Accept": "application/json",
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ── Wikimedia image search ──────────────────────────────────────────────────

async function searchWikimedia(query: string): Promise<{ url: string; credit: string } | null> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=10&format=json`;
    const res = await fetch(searchUrl, { headers: WIKIMEDIA_HEADERS });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.startsWith("{")) return null;
    const data = JSON.parse(text) as any;
    const results: any[] = data?.query?.search ?? [];

    for (const result of results) {
      const title: string = result.title as string;
      if (!title.match(/\.(jpg|jpeg|png)$/i)) continue;

      await delay(300);
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
      const infoRes = await fetch(infoUrl, { headers: WIKIMEDIA_HEADERS });
      if (!infoRes.ok) continue;
      const infoText = await infoRes.text();
      if (!infoText.startsWith("{")) continue;
      const infoData = JSON.parse(infoText) as any;
      const pages = infoData?.query?.pages ?? {};
      const page = Object.values(pages)[0] as any;
      const imageInfo = page?.imageinfo?.[0];
      if (!imageInfo?.url) continue;

      const meta = imageInfo.extmetadata ?? {};
      const license: string = (meta.LicenseShortName?.value as string) ?? "";
      const dateStr: string = (meta.DateTimeOriginal?.value as string) ?? (meta.DateTime?.value as string) ?? "";
      const year = parseInt(dateStr.slice(0, 4));

      const licenseLow = license.toLowerCase();
      const isFree = licenseLow.includes("pd") || licenseLow.includes("cc0") || licenseLow.includes("public domain") || licenseLow.includes("cc-pd");
      const isPreCopyright = !isNaN(year) && year < 1928;
      const noLicenseFlag = !license;
      if (!isFree && !isPreCopyright && !noLicenseFlag) continue;

      const artist: string = (meta.Artist?.value as string)?.replace(/<[^>]+>/g, "").trim() ?? "Unknown";
      const credit = `${artist}${dateStr ? `, ${dateStr.slice(0, 4)}` : ""}. Wikimedia Commons. ${license || "Public domain"}.`;

      return { url: imageInfo.url, credit };
    }
    return null;
  } catch (err) {
    console.error(`Wikimedia search failed for "${query}":`, err);
    return null;
  }
}

// ── YouTube video search (no API key required) ──────────────────────────────

async function searchYouTube(query: string): Promise<{ videoId: string; source: string } | null> {
  try {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%3D%3D`; // filter: video only
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Extract video IDs from initial data JSON embedded in the page
    const match = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
    if (!match) return null;
    const videoId = match[1];

    // Detect source from surrounding context
    let source = "other";
    const context = html.slice(Math.max(0, html.indexOf(videoId) - 500), html.indexOf(videoId) + 500);
    if (context.toLowerCase().includes("ken burns")) source = "ken-burns";
    else if (context.toLowerCase().includes("liberty kids")) source = "liberty-kids";

    return { videoId, source };
  } catch {
    return null;
  }
}

// ── Query builders ──────────────────────────────────────────────────────────

function buildTownQueries(
  town: { name: string; state: string },
  events: Array<{ name: string; startDate: Date | null }>,
  people: Array<{ name: string }>
): string[] {
  const queries: string[] = [];

  // Lead with famous event names — paintings/engravings of the event itself
  for (const ev of events.slice(0, 3)) {
    const year = ev.startDate ? new Date(ev.startDate).getFullYear() : null;
    queries.push(`${ev.name} painting engraving`);
    if (year) queries.push(`${ev.name} ${year}`);
    queries.push(`${ev.name} Revolutionary War`);
  }

  // Portrait of most famous person linked to the town
  if (people[0]) {
    queries.push(`${people[0].name} portrait engraving`);
    queries.push(`${people[0].name} American Revolution portrait`);
  }

  // Historical maps — very common on Commons for colonial-era towns
  queries.push(`map ${town.name} 1776`);
  queries.push(`plan of ${town.name} 1776`);
  queries.push(`${town.name} ${town.state} map Revolutionary War`);

  // Period scene fallbacks
  queries.push(`${town.name} colonial engraving`);
  queries.push(`${town.name} ${town.state} 1776 Revolutionary War`);
  queries.push(`${town.name} American Revolution painting`);

  return queries;
}

function buildPersonQueries(person: { name: string; roles: string[]; birthYear: number | null; deathYear: number | null }): string[] {
  const yearRange = person.birthYear ? `${person.birthYear}` : "";
  return [
    `${person.name} portrait engraving`,
    `${person.name} portrait painting`,
    `${person.name} ${yearRange} American Revolution`,
    `${person.name} Revolutionary War portrait`,
    `${person.name} historical portrait`,
  ];
}

// ── Enrichment functions ────────────────────────────────────────────────────

async function enrichTownImages(limit: number) {
  const towns = await prisma.town.findMany({
    where: { imageUrl: null },
    select: {
      id: true,
      name: true,
      state: true,
      slug: true,
      events: {
        select: { name: true, startDate: true, significanceWeight: true },
        orderBy: { significanceWeight: "desc" },
        take: 5,
      },
      townPeople: {
        select: { person: { select: { name: true } } },
        take: 3,
      },
    },
    take: limit,
  });

  console.log(`\n── Towns (${towns.length} missing images) ──`);

  for (const town of towns) {
    const people = town.townPeople.map((tp) => tp.person);
    const queries = buildTownQueries(town, town.events, people);

    let result: { url: string; credit: string } | null = null;
    for (const q of queries) {
      result = await searchWikimedia(q);
      if (result) { console.log(`  ✓ ${town.name} [${q}]`); break; }
      await delay(800);
    }

    if (!result) { console.log(`  ⚠ ${town.name} — no image found`); await delay(1000); continue; }

    await prisma.town.update({
      where: { id: town.id },
      data: { imageUrl: result.url, imageCredit: result.credit, lastUpdatedAt: new Date() },
    });
    await prisma.changeLogEntry.create({
      data: {
        townId: town.id,
        category: "SOURCES",
        title: `Added historical image for ${town.name}`,
        summary: `Added a public-domain Wikimedia Commons image to the ${town.name} page.`,
        details: { source: "Wikimedia Commons", url: result.url },
        publicNotes: result.credit,
      },
    });
    await delay(1500);
  }
}

async function enrichPersonPortraits(limit: number) {
  const people = await prisma.person.findMany({
    where: { imageUrl: null },
    select: { id: true, name: true, roles: true, birthYear: true, deathYear: true, slug: true },
    take: limit,
  });

  console.log(`\n── People (${people.length} missing portraits) ──`);

  for (const person of people) {
    const queries = buildPersonQueries(person);

    let result: { url: string; credit: string } | null = null;
    for (const q of queries) {
      result = await searchWikimedia(q);
      if (result) { console.log(`  ✓ ${person.name} [${q}]`); break; }
      await delay(800);
    }

    if (!result) { console.log(`  ⚠ ${person.name} — no portrait found`); await delay(1000); continue; }

    await prisma.person.update({
      where: { id: person.id },
      data: { imageUrl: result.url, imageCredit: result.credit },
    });
    await delay(1500);
  }
}

async function enrichEventImages(limit: number) {
  const events = await prisma.event.findMany({
    where: { imageUrl: null, significanceWeight: { gte: 70 } },
    select: {
      id: true,
      name: true,
      startDate: true,
      town: { select: { name: true, id: true, state: true } },
      eventPeople: { select: { person: { select: { name: true } } }, take: 2 },
    },
    orderBy: { significanceWeight: "desc" },
    take: limit,
  });

  console.log(`\n── Events (${events.length} high-significance, missing images) ──`);

  for (const event of events) {
    const year = event.startDate ? new Date(event.startDate).getFullYear() : null;
    const person = event.eventPeople[0]?.person?.name;

    const queries = [
      `${event.name} painting engraving`,
      year ? `${event.name} ${year}` : null,
      `${event.name} Revolutionary War`,
      person ? `${person} ${event.name}` : null,
      `${event.name} ${event.town.state} historical`,
    ].filter(Boolean) as string[];

    let result: { url: string; credit: string } | null = null;
    for (const q of queries) {
      result = await searchWikimedia(q);
      if (result) break;
      await delay(800);
    }

    if (!result) { await delay(1000); continue; }

    await prisma.event.update({ where: { id: event.id }, data: { imageUrl: result.url, imageCredit: result.credit } });
    await prisma.changeLogEntry.create({
      data: {
        townId: event.town.id,
        category: "SOURCES",
        title: `Added image for event: ${event.name}`,
        summary: `Added a public-domain image to "${event.name}" in ${event.town.name}.`,
        details: { source: "Wikimedia Commons", url: result.url, eventId: event.id },
        publicNotes: result.credit,
      },
    });
    console.log(`  ✓ ${event.name} (${event.town.name})`);
    await delay(1500);
  }
}

async function enrichEventVideos(limit: number) {
  const events = await prisma.event.findMany({
    where: { videoId: null, significanceWeight: { gte: 75 } },
    select: {
      id: true,
      name: true,
      startDate: true,
      town: { select: { name: true, state: true } },
    },
    orderBy: { significanceWeight: "desc" },
    take: limit,
  });

  console.log(`\n── Event videos (${events.length} high-significance, no video) ──`);

  for (const event of events) {
    const year = event.startDate ? new Date(event.startDate).getFullYear() : null;
    const queries = [
      `${event.name} American Revolution documentary`,
      year ? `${event.name} ${year} history` : null,
      `${event.name} Revolutionary War Ken Burns`,
      `Battle ${event.town.name} American Revolution`,
    ].filter(Boolean) as string[];

    let found: { videoId: string; source: string } | null = null;
    for (const q of queries) {
      found = await searchYouTube(q);
      if (found) break;
      await delay(1500);
    }

    if (!found) { await delay(1000); continue; }

    await prisma.event.update({
      where: { id: event.id },
      data: { videoId: found.videoId, videoSource: found.source },
    });
    console.log(`  ✓ ${event.name} — ${found.videoId} (${found.source})`);
    await delay(2000);
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const runAll = !TOWNS_ONLY && !EVENTS_ONLY && !PEOPLE_ONLY && !VIDEOS_ONLY;

  if (runAll || TOWNS_ONLY) await enrichTownImages(LIMIT);
  if (runAll || PEOPLE_ONLY) await enrichPersonPortraits(LIMIT);
  if (runAll || EVENTS_ONLY) await enrichEventImages(LIMIT);
  if (runAll || VIDEOS_ONLY) await enrichEventVideos(LIMIT);

  await prisma.$disconnect();
  console.log("\nDone.");
}

main().catch((e) => { console.error(e); process.exit(1); });
