/**
 * Seed the EventSource registry with real, verified sources.
 *
 * Sources included:
 *   - NPS Events API (free, documented at developer.nps.gov) — confirmed real
 *     Park codes: MIMA, BOST, INDE, COLO, VAFO
 *   - Museum event pages marked html/review_first — confirmed to exist,
 *     ICS URL needs to be added once you've checked each site's calendar export
 *
 * Run: npx tsx scripts/seed-event-sources.ts [--dry-run]
 *
 * Requires: NPS_API_KEY env var for live fetching (not needed just to seed the registry).
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const DRY_RUN = process.argv.includes("--dry-run");

// ── Source definitions ────────────────────────────────────────────────────────

interface SourceDef {
  name: string;
  url: string;
  type: "nps_api" | "ics" | "html";
  trustLevel: "auto_publish" | "review_first";
  npsParkCode?: string;
  primaryTownSlug?: string;
  extraTownSlugs?: string[];
  notes?: string;
}

const SOURCES: SourceDef[] = [
  // ── NPS Events API (confirmed real, free, structured) ──────────────────────
  {
    name: "NPS — Minute Man National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "MIMA",
    primaryTownSlug: "lexington-ma",
    extraTownSlugs: ["concord-ma"],
    notes: "Covers Lexington, Concord, and Lincoln MA. Venue matching routes each event to the correct town.",
  },
  {
    name: "NPS — Boston National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "BOST",
    primaryTownSlug: "boston-ma",
    notes: "Freedom Trail sites: Bunker Hill, Old North Church, Charlestown Navy Yard, etc.",
  },
  {
    name: "NPS — Independence National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "INDE",
    primaryTownSlug: "philadelphia-pa",
    notes: "Independence Hall, Liberty Bell, Congress Hall, and nearby sites in Philadelphia.",
  },
  {
    name: "NPS — Colonial National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "COLO",
    primaryTownSlug: "yorktown-va",
    extraTownSlugs: ["williamsburg-va"],
    notes: "Yorktown Battlefield and Jamestown. Colonial Williamsburg is adjacent but separately operated.",
  },
  {
    name: "NPS — Valley Forge National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "VAFO",
    primaryTownSlug: "valley-forge-pa",
    notes: "Valley Forge encampment site. Park code VAFO.",
  },

  // ── Museum / Historical Society pages (review_first — add ICS URL when confirmed) ──
  {
    name: "Lexington Historical Society",
    url: "https://www.lexingtonhistory.org/events/",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "lexington-ma",
    notes: "Check for ICS export on their calendar page. If found, change type to 'ics' and update URL to the ICS feed link.",
  },
  {
    name: "Concord Museum",
    url: "https://www.concordmuseum.org/events.php",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "concord-ma",
    notes: "Check for ICS/Google Calendar export. Change type to 'ics' once confirmed.",
  },
  {
    name: "Paul Revere House",
    url: "https://www.paulreverehouse.org/",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "boston-ma",
    notes: "Small museum in Boston's North End. Check events section for ICS feed.",
  },
  {
    name: "Colonial Williamsburg — Events",
    url: "https://www.colonialwilliamsburg.org/plan/events/",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "williamsburg-va",
    notes: "Large events calendar. They may offer an ICS export — check the calendar page source for feed links.",
  },
  {
    name: "Museum of the American Revolution",
    url: "https://www.amrevmuseum.org/events",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "philadelphia-pa",
    notes: "Philadelphia museum dedicated entirely to the Revolution. Check for ICS feed.",
  },
];

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Mode: ${DRY_RUN ? "DRY RUN (no writes)" : "LIVE"}`);
  console.log(`Seeding ${SOURCES.length} event sources...\n`);

  // Build slug → id map
  const towns = await prisma.town.findMany({ select: { id: true, slug: true, name: true } });
  const bySlug = new Map(towns.map((t) => [t.slug, t]));

  let created = 0;
  let skipped = 0;

  for (const def of SOURCES) {
    const primaryTown = def.primaryTownSlug ? bySlug.get(def.primaryTownSlug) : undefined;
    if (def.primaryTownSlug && !primaryTown) {
      console.warn(`⚠  Town slug "${def.primaryTownSlug}" not found — skipping "${def.name}"`);
      skipped++;
      continue;
    }

    const extraIds = (def.extraTownSlugs ?? [])
      .map((s) => bySlug.get(s)?.id)
      .filter(Boolean) as string[];

    // Check for existing source by name to avoid duplicates
    const existing = await prisma.eventSource.findFirst({ where: { name: def.name } });
    if (existing) {
      console.log(`  → already exists: ${def.name}`);
      skipped++;
      continue;
    }

    if (!DRY_RUN) {
      await prisma.eventSource.create({
        data: {
          name: def.name,
          url: def.url,
          type: def.type,
          trustLevel: def.trustLevel,
          npsParkCode: def.npsParkCode ?? null,
          primaryTownId: primaryTown?.id ?? null,
          townIds: extraIds,
          notes: def.notes ?? null,
        },
      });
    }

    console.log(`  ✓ ${def.name} (${def.type} / ${def.trustLevel}) → ${primaryTown?.name ?? "no primary town"}`);
    created++;
  }

  console.log(`\nDone. Created: ${created}, skipped/existing: ${skipped}`);
  if (DRY_RUN) console.log("(Dry run — no writes made)");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
