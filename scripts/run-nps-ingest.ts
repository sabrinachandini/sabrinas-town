/**
 * run-nps-ingest.ts
 * Fetches live events from all NPS API sources and saves them as LocalEvents.
 * Safe to re-run — dedupes by externalId.
 *
 * Usage:
 *   DATABASE_URL=... NPS_API_KEY=... npx tsx scripts/run-nps-ingest.ts
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const NPS_KEY = process.env.NPS_API_KEY;
const DB_URL = process.env.DATABASE_URL;

if (!NPS_KEY) { console.error("NPS_API_KEY not set"); process.exit(1); }
if (!DB_URL) { console.error("DATABASE_URL not set"); process.exit(1); }

interface NpsEvent {
  id: string;
  eventid: string;
  title: string;
  description: string;
  datestart: string;
  dateend?: string;
  date?: string;
  times?: Array<{ timestart: string; timeend: string }>;
  location?: string;
  parkfullname?: string;
  infourl?: string;
  feeinfo?: string;
  isfree?: string;
  isrecurring?: string;
}

async function fetchNpsEvents(parkCode: string): Promise<NpsEvent[]> {
  const url = `https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&limit=50&api_key=${NPS_KEY}`;
  const resp = await fetch(url, { headers: { "User-Agent": "HIFE-Event-Ingest/1.0" } });
  if (!resp.ok) throw new Error(`NPS API ${resp.status} for ${parkCode}`);
  const data = (await resp.json()) as { data: NpsEvent[]; total: string };
  return data.data ?? [];
}

async function main() {
  console.log("── NPS Event Ingest ──\n");

  // Load all active NPS sources
  const sources = await prisma.eventSource.findMany({
    where: { type: "nps_api", active: true },
    include: { primaryTown: { select: { id: true, name: true } } },
  });
  console.log(`${sources.length} active NPS sources\n`);

  let totalCreated = 0;
  let totalDuped = 0;

  for (const source of sources) {
    if (!source.npsParkCode || !source.primaryTownId) {
      console.log(`  SKIP ${source.name} — no park code or town`);
      continue;
    }

    process.stdout.write(`  ${source.name} (${source.npsParkCode})... `);
    try {
      const events = await fetchNpsEvents(source.npsParkCode);
      let created = 0, duped = 0;

      for (const ev of events) {
        const externalId = ev.eventid || ev.id;
        const dateStr = ev.datestart || ev.date;
        if (!ev.title || !dateStr || !externalId) continue;
        const eventDate = new Date(dateStr);
        if (isNaN(eventDate.getTime())) continue;

        // Dedupe by sourceId + externalId
        const existing = await prisma.localEvent.findFirst({
          where: { sourceId: source.id, externalId },
        });
        if (existing) { duped++; continue; }

        await prisma.localEvent.create({
          data: {
            sourceId: source.id,
            externalId,
            townId: source.primaryTownId!,
            name: ev.title.slice(0, 200),
            description: ev.description?.slice(0, 800) || null,
            eventDate,
            eventEndDate: ev.dateend ? new Date(ev.dateend) : null,
            month: eventDate.getMonth() + 1,
            day: eventDate.getDate(),
            venue: ev.location || ev.parkfullname || source.primaryTown?.name || null,
            url: ev.infourl || null,
            admission: ev.isfree === "true" ? "Free" : (ev.feeinfo || "Free"),
            category: "reenactment",
            published: source.trustLevel === "auto_publish",
            needsReview: source.trustLevel !== "auto_publish",
          },
        });
        created++;
      }

      console.log(`${events.length} fetched → ${created} new, ${duped} duped`);
      totalCreated += created;
      totalDuped += duped;

      await prisma.eventSource.update({
        where: { id: source.id },
        data: { lastFetchAt: new Date(), lastStatus: "ok", lastEventCount: created },
      });
    } catch (e) {
      console.log(`ERROR: ${(e as Error).message?.slice(0, 100)}`);
      await prisma.eventSource.update({
        where: { id: source.id },
        data: { lastFetchAt: new Date(), lastStatus: `error: ${(e as Error).message?.slice(0, 80)}` },
      });
    }
  }

  console.log(`\n── Complete: ${totalCreated} new events, ${totalDuped} already existed ──`);
  await prisma.$disconnect();
}

main().catch(e => { console.error(e); process.exit(1); });
