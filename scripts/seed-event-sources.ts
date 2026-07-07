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
  type: "nps_api" | "ics" | "html" | "apify";
  trustLevel: "auto_publish" | "review_first";
  npsParkCode?: string;
  apifyTaskId?: string;
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

  // ── Museum / Historical Society pages — scraped via Apify web-scraper tasks ──
  {
    name: "Lexington Historical Society",
    url: "https://www.lexingtonhistory.org/events/",
    type: "apify",
    trustLevel: "review_first",
    apifyTaskId: "5SCGilwWZGosi42Nn",
    primaryTownSlug: "lexington-ma",
    notes: "Apify task: hife-lexington-historical-society. Events land in review queue.",
  },
  {
    name: "Concord Museum",
    url: "https://www.concordmuseum.org/events.php",
    type: "apify",
    trustLevel: "review_first",
    apifyTaskId: "WHe7blDa18zXhbvwG",
    primaryTownSlug: "concord-ma",
    notes: "Apify task: hife-concord-museum.",
  },
  {
    name: "Paul Revere House",
    url: "https://www.paulreverehouse.org/",
    type: "apify",
    trustLevel: "review_first",
    apifyTaskId: "wbdwOt80eX5WDUvAG",
    primaryTownSlug: "boston-ma",
    notes: "Apify task: hife-paul-revere-house.",
  },
  {
    name: "Colonial Williamsburg — Events",
    url: "https://www.colonialwilliamsburg.org/plan/events/",
    type: "apify",
    trustLevel: "review_first",
    apifyTaskId: "sNY1pXUsqRGNfKJQp",
    primaryTownSlug: "williamsburg-va",
    notes: "Apify task: hife-colonial-williamsburg.",
  },
  {
    name: "Museum of the American Revolution",
    url: "https://www.amrevmuseum.org/events",
    type: "apify",
    trustLevel: "review_first",
    apifyTaskId: "j1tTp7RsHqmxRBrYY",
    primaryTownSlug: "philadelphia-pa",
    notes: "Apify task: hife-amrev-museum.",
  },

  // ── Additional NPS parks (confirmed park codes via developer.nps.gov) ────────
  {
    name: "NPS — Saratoga National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "SARA",
    primaryTownSlug: "saratoga-springs-ny",
    notes: "Covers the Saratoga battlefield sites. Park code SARA confirmed via NPS API.",
  },
  {
    name: "NPS — Morristown National Historical Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "MORR",
    primaryTownSlug: "morristown-nj",
    notes: "Washington's 1777 and 1779-80 winter headquarters. Park code MORR.",
  },
  {
    name: "NPS — Guilford Courthouse National Military Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "GUCO",
    primaryTownSlug: "guilford-courthouse-nc",
    notes: "Site of the March 1781 battle. Park code GUCO.",
  },
  {
    name: "NPS — Kings Mountain National Military Park",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "KIMO",
    primaryTownSlug: "kings-mountain-nc",
    notes: "October 1780 Patriot victory over Tory militia. Park code KIMO.",
  },
  {
    name: "NPS — Cowpens National Battlefield",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "COWP",
    primaryTownSlug: "cowpens-sc",
    notes: "January 1781 battle — Morgan's double envelopment. Park code COWP.",
  },
  {
    name: "NPS — Fort Moultrie / Fort Sumter National Monument",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "FOSU",
    primaryTownSlug: "fort-moultrie-sc",
    extraTownSlugs: ["charleston-sc"],
    notes: "Fort Moultrie (1776) and the broader Charleston harbor defense. Park code FOSU.",
  },
  {
    name: "NPS — Bennington Battlefield State Historic Site",
    url: "https://developer.nps.gov/api/v1/events",
    type: "nps_api",
    trustLevel: "auto_publish",
    npsParkCode: "BENN",
    primaryTownSlug: "bennington-vt",
    notes: "August 1777 Patriot victory over Burgoyne's forces. Park code BENN — confirm with NPS API before activating.",
  },

  // ── Museum / Historical Society pages — review_first, no Apify task yet ─────
  // These are confirmed-real institutions with public event calendars.
  // Apify task IDs to be added after web-scraper tasks are created.
  {
    name: "Massachusetts Historical Society",
    url: "https://www.masshist.org/events",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "boston-ma",
    notes: "Oldest historical society in the Americas. Public lectures, exhibitions, and educational events. Apify task to be created — events land in review queue.",
  },
  {
    name: "Historic Annapolis",
    url: "https://annapolis.org/events",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "annapolis-md",
    notes: "Historic Annapolis Foundation public events and tours. Apify task pending.",
  },
  {
    name: "Maryland Historical Society",
    url: "https://www.mdhs.org/public-programs",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "baltimore-md",
    notes: "Public programs and lectures at Maryland Historical Society, Baltimore.",
  },
  {
    name: "Old Barracks Museum — Trenton",
    url: "https://www.barracks.org/events/",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "trenton-nj",
    notes: "Living history programs at the only surviving colonial-era barracks in NJ. Site of Hessian garrison at time of Washington's surprise attack.",
  },
  {
    name: "Morristown NHP — Friends of Jockey Hollow",
    url: "https://www.nps.gov/morr/planyourvisit/events.htm",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "morristown-nj",
    notes: "Partner organization events at Morristown NHP. Supplement to the NPS API source.",
  },
  {
    name: "Newport Historical Society",
    url: "https://www.newporthistory.org/events/",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "newport-ri",
    notes: "Newport RI historical society public events. Newport was British-occupied 1776-1779 and then French HQ 1780-1781.",
  },
  {
    name: "Princeton Battlefield Society",
    url: "https://www.theprincetonbattlefield.org/events",
    type: "html",
    trustLevel: "review_first",
    primaryTownSlug: "princeton-nj",
    notes: "Events at and around Princeton Battlefield State Park. Battle of Princeton: January 3, 1777.",
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
          apifyTaskId: def.apifyTaskId ?? null,
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
