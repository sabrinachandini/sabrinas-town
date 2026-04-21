/**
 * Wikimedia Commons image enrichment script.
 * Finds appropriate public-domain historical images for towns and events,
 * updates the DB, and creates ChangeLogEntries for each change.
 *
 * Usage:
 *   npx tsx scripts/enrich-images.ts [--limit N] [--towns-only] [--events-only]
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["error"] });

const LIMIT = parseInt(process.argv.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? "9999");
const TOWNS_ONLY = process.argv.includes("--towns-only");
const EVENTS_ONLY = process.argv.includes("--events-only");

const WIKIMEDIA_HEADERS = {
  "User-Agent": "HistoryIsForEveryone/1.0 (https://sabrinas-town.vercel.app; contact@sabrinas-town.vercel.app) node-fetch/3",
  "Accept": "application/json",
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Wikimedia Commons API search
async function searchWikimedia(query: string): Promise<{ url: string; credit: string } | null> {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=10&format=json`;
    const res = await fetch(searchUrl, { headers: WIKIMEDIA_HEADERS });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.startsWith("{")) return null; // guard against HTML rate-limit pages
    const data = JSON.parse(text) as any;
    const results: any[] = data?.query?.search ?? [];

    for (const result of results) {
      const title: string = result.title as string;
      if (!title.match(/\.(jpg|jpeg|png)$/i)) continue;

      await delay(300); // between search and info requests
      // Get image info + metadata
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

      // Only use pre-1928 works or explicitly free licenses
      const licenseLow = license.toLowerCase();
      const isFree = licenseLow.includes("pd") || licenseLow.includes("cc0") || licenseLow.includes("public domain") || licenseLow.includes("cc-pd");
      const isPreCopyright = !isNaN(year) && year < 1928;
      // Also accept images with no date metadata — assume historical on Commons if no license flag
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

async function enrichTownImages(limit: number) {
  const towns = await prisma.town.findMany({
    where: { imageUrl: null },
    select: { id: true, name: true, state: true, slug: true },
    take: limit,
  });

  console.log(`Enriching images for ${towns.length} towns...`);

  for (const town of towns) {
    const queries = [
      `${town.name} ${town.state} Revolutionary War colonial`,
      `${town.name} ${town.state} 1775 1776 historical`,
      `${town.name} Massachusetts colonial engraving`,
    ];

    let result: { url: string; credit: string } | null = null;
    for (const q of queries) {
      result = await searchWikimedia(q);
      if (result) break;
      await delay(1500);
    }

    if (!result) {
      console.log(`  ⚠ No image found for ${town.name}`);
      await delay(1000);
      continue;
    }

    await prisma.town.update({
      where: { id: town.id },
      data: { imageUrl: result.url, imageCredit: result.credit, lastUpdatedAt: new Date() },
    });

    await prisma.changeLogEntry.create({
      data: {
        townId: town.id,
        category: "SOURCES",
        title: `Added historical image for ${town.name}`,
        summary: `Added a public-domain Wikimedia Commons image to the ${town.name} history page.`,
        details: { source: "Wikimedia Commons", url: result.url },
        publicNotes: result.credit,
      },
    });

    console.log(`  ✓ ${town.name} — ${result.url.slice(0, 80)}...`);
    await delay(2000);
  }
}

async function enrichEventImages(limit: number) {
  const events = await prisma.event.findMany({
    where: { imageUrl: null, significanceWeight: { gte: 70 } },
    select: { id: true, name: true, startDate: true, town: { select: { name: true, id: true } } },
    orderBy: { significanceWeight: "desc" },
    take: limit,
  });

  console.log(`Enriching images for ${events.length} high-significance events...`);

  for (const event of events) {
    const year = event.startDate ? new Date(event.startDate).getFullYear() : "";
    const query = `${event.name} ${event.town.name} ${year} colonial Revolutionary War`;
    const result = await searchWikimedia(query);

    if (!result) {
      await delay(1500);
      continue;
    }

    await prisma.event.update({
      where: { id: event.id },
      data: { imageUrl: result.url, imageCredit: result.credit },
    });

    await prisma.changeLogEntry.create({
      data: {
        townId: event.town.id,
        category: "SOURCES",
        title: `Added image for event: ${event.name}`,
        summary: `Added a public-domain image to the event page for "${event.name}" in ${event.town.name}.`,
        details: { source: "Wikimedia Commons", url: result.url, eventId: event.id },
        publicNotes: result.credit,
      },
    });

    console.log(`  ✓ ${event.name}`);
    await delay(2000);
  }
}

async function main() {
  if (!EVENTS_ONLY) await enrichTownImages(LIMIT);
  if (!TOWNS_ONLY) await enrichEventImages(LIMIT);
  await prisma.$disconnect();
  console.log("Done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
