/**
 * Apify Google Maps enrichment script for Business records.
 * Uses compass/crawler-google-places to fill in hours, address, phone, website.
 *
 * Usage:
 *   npx tsx --env-file=sites/hife/.env.local scripts/enrich-businesses-apify.ts [--dry-run]
 *
 * All enriched records are set to status=NEEDS_REVIEW (never ACTIVE).
 */

import { config } from "dotenv";
import path from "path";
import { PrismaClient } from "@prisma/client";

// Load env from sites/hife/.env.local (also works if --env-file flag is passed)
config({ path: path.resolve(__dirname, "../sites/hife/.env.local") });

const prisma = new PrismaClient({ log: ["error"] });

const DRY_RUN = process.argv.includes("--dry-run");
const APIFY_API_KEY = process.env.APIFY_API_KEY;
const RATE_LIMIT_MS = 2000;

// Top-10 traffic town slugs
const TARGET_TOWN_SLUGS = [
  "boston-ma",
  "philadelphia-pa",
  "lexington-ma",
  "concord-ma",
  "williamsburg-va",
  "yorktown-va",
  "trenton-nj",
  "morristown-nj",
  "valley-forge-pa",
  "cambridge-ma",
];

interface ApifyPlace {
  title?: string;
  address?: string;
  phone?: string;
  website?: string;
  openingHours?: Array<{ day?: string; hours?: string }>;
  weekdayDescriptions?: string[];
  location?: { lat?: number; lng?: number };
}

function hoursToString(place: ApifyPlace): string | null {
  if (place.openingHours && place.openingHours.length > 0) {
    return place.openingHours
      .map((h) => [h.day, h.hours].filter(Boolean).join(": "))
      .filter(Boolean)
      .join(", ");
  }
  if (place.weekdayDescriptions && place.weekdayDescriptions.length > 0) {
    return place.weekdayDescriptions.join(", ");
  }
  return null;
}

async function fetchApifyPlaces(searchQuery: string): Promise<ApifyPlace[]> {
  const url = `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${APIFY_API_KEY}`;
  const body = {
    searchStringsArray: [searchQuery],
    maxCrawledPlaces: 1,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // Apify sync runs can take a while — allow up to 3 minutes
    signal: AbortSignal.timeout(180_000),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "<no body>");
    throw new Error(`Apify API error ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!APIFY_API_KEY) {
    console.error("ERROR: APIFY_API_KEY is not set. Check sites/hife/.env.local");
    process.exit(1);
  }

  console.log(`\n── Apify Business Enrichment ${DRY_RUN ? "[DRY RUN]" : "[LIVE]"} ──\n`);

  // Fetch all businesses in target towns
  const businesses = await prisma.business.findMany({
    where: {
      town: { slug: { in: TARGET_TOWN_SLUGS } },
    },
    include: {
      town: { select: { name: true, state: true, slug: true } },
    },
    orderBy: [{ townId: "asc" }, { name: "asc" }],
  });

  console.log(`Found ${businesses.length} businesses across ${TARGET_TOWN_SLUGS.length} target towns.\n`);

  if (businesses.length === 0) {
    console.log("No businesses found. Exiting.");
    await prisma.$disconnect();
    return;
  }

  let enriched = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < businesses.length; i++) {
    const biz = businesses[i];
    const townLabel = `${biz.town.name}, ${biz.town.state}`;
    const searchQuery = `${biz.name} ${townLabel}`;

    console.log(`[${i + 1}/${businesses.length}] Enriching: ${biz.name} in ${townLabel}`);
    console.log(`  Search query: "${searchQuery}"`);

    if (DRY_RUN) {
      console.log(`  [DRY RUN] Would call Apify with: ${searchQuery}`);
      console.log(`  [DRY RUN] Would update Business ${biz.id} → status=NEEDS_REVIEW`);
      skipped++;
      continue;
    }

    let places: ApifyPlace[] = [];
    try {
      places = await fetchApifyPlaces(searchQuery);
    } catch (err) {
      console.error(`  ERROR calling Apify: ${err instanceof Error ? err.message : err}`);
      errors++;
      await sleep(RATE_LIMIT_MS);
      continue;
    }

    if (places.length === 0) {
      console.log(`  No results from Apify. Skipping.`);
      skipped++;
      await sleep(RATE_LIMIT_MS);
      continue;
    }

    const place = places[0];
    console.log(`  Matched: "${place.title ?? "(untitled)"}"`);

    // Build the update payload — only overwrite fields that Apify returned
    const updateData: {
      status: "NEEDS_REVIEW";
      address?: string;
      phone?: string;
      website?: string;
      hours?: string;
      lastVerified?: Date;
    } = {
      status: "NEEDS_REVIEW",
      lastVerified: new Date(),
    };

    if (place.address) {
      updateData.address = place.address;
      console.log(`  address: ${place.address}`);
    }
    if (place.phone) {
      updateData.phone = place.phone;
      console.log(`  phone:   ${place.phone}`);
    }
    if (place.website) {
      updateData.website = place.website;
      console.log(`  website: ${place.website}`);
    }
    const hours = hoursToString(place);
    if (hours) {
      updateData.hours = hours;
      console.log(`  hours:   ${hours.slice(0, 120)}${hours.length > 120 ? "…" : ""}`);
    }

    try {
      await prisma.business.update({
        where: { id: biz.id },
        data: updateData,
      });
      console.log(`  ✓ Updated (status → NEEDS_REVIEW)`);
      enriched++;
    } catch (err) {
      console.error(`  ERROR updating DB: ${err instanceof Error ? err.message : err}`);
      errors++;
    }

    // Rate limit between Apify calls
    if (i < businesses.length - 1) {
      await sleep(RATE_LIMIT_MS);
    }
  }

  console.log(`\n── Summary ──`);
  console.log(`  Total businesses: ${businesses.length}`);
  if (DRY_RUN) {
    console.log(`  [DRY RUN] No writes performed.`);
  } else {
    console.log(`  Enriched:  ${enriched}`);
    console.log(`  Skipped:   ${skipped}`);
    console.log(`  Errors:    ${errors}`);
  }

  await prisma.$disconnect();
}

main().catch(async (err) => {
  console.error("Fatal error:", err);
  await prisma.$disconnect();
  process.exit(1);
});
