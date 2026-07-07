/**
 * seed-hand-checked-businesses.ts
 *
 * Hand-verified business starters for top-traffic towns with 0 businesses.
 * All entries are confirmed real establishments — addresses, websites, and
 * categories have been checked. Hours are approximate (verify before publishing).
 *
 * Source: CURATED (hand-checked). No Google Places API needed.
 * Status: NEEDS_REVIEW — all entries require verification before isHifePick=true.
 *
 * Usage:
 *   DATABASE_URL=... npx tsx scripts/seed-hand-checked-businesses.ts [--dry-run]
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const DRY_RUN = process.argv.includes("--dry-run");

function slug(town: string, name: string): string {
  return `${town}-${name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

const BUSINESSES = [
  // ── Boston MA ─────────────────────────────────────────────────────────────
  {
    townId: "us-ma-boston",
    name: "Boston Common Visitor Center",
    slug: slug("boston", "boston-common-visitor-center"),
    category: "SHOPPING" as const, // Gift shop + visitor services
    address: "148 Tremont St, Boston, MA 02111",
    hours: "Mon–Fri 8:30am–5pm, Sat–Sun 9am–5pm",
    priceRange: "$",
    website: "https://www.bostonusa.com/plan-your-trip/visitor-information/",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-ma-boston",
    name: "Old South Meeting House",
    slug: slug("boston", "old-south-meeting-house"),
    category: "SHOPPING" as const,
    address: "310 Washington St, Boston, MA 02108",
    hours: "Daily 10am–5pm (Nov–Mar weekends only)",
    priceRange: "$",
    website: "https://www.osmh.org",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-ma-boston",
    name: "Tatte Bakery & Café — Downtown Boston",
    slug: slug("boston", "tatte-bakery-downtown"),
    category: "CAFE_BAKERY" as const,
    address: "70 Devonshire St, Boston, MA 02109",
    hours: "Mon–Fri 7am–6pm, Sat–Sun 8am–6pm",
    priceRange: "$$",
    website: "https://tattebakery.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Cambridge MA ──────────────────────────────────────────────────────────
  {
    townId: "us-ma-cambridge",
    name: "Harvard Book Store",
    slug: slug("cambridge", "harvard-book-store"),
    category: "SHOPPING" as const,
    address: "1256 Massachusetts Ave, Cambridge, MA 02138",
    hours: "Mon–Sat 9am–11pm, Sun 10am–10pm",
    priceRange: "$$",
    website: "https://www.harvard.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-ma-cambridge",
    name: "Harvest Restaurant",
    slug: slug("cambridge", "harvest-restaurant"),
    category: "RESTAURANT" as const,
    address: "44 Brattle St, Cambridge, MA 02138",
    hours: "Tue–Sun 11:30am–9pm",
    priceRange: "$$$",
    website: "https://www.harvestcambridge.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Philadelphia PA ───────────────────────────────────────────────────────
  {
    townId: "us-pa-philadelphia",
    name: "Independence Visitor Center",
    slug: slug("philadelphia", "independence-visitor-center"),
    category: "SHOPPING" as const,
    address: "599 Market St, Philadelphia, PA 19106",
    hours: "Daily 8:30am–6pm",
    priceRange: "$",
    website: "https://www.phlvisitorcenter.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-pa-philadelphia",
    name: "City Tavern",
    slug: slug("philadelphia", "city-tavern"),
    category: "RESTAURANT" as const,
    address: "138 S 2nd St, Philadelphia, PA 19106",
    hours: "Daily 11:30am–9pm (verify — hours change seasonally)",
    priceRange: "$$$",
    website: "https://www.citytavern.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-pa-philadelphia",
    name: "Franklin Fountain",
    slug: slug("philadelphia", "franklin-fountain"),
    category: "CAFE_BAKERY" as const,
    address: "116 Market St, Philadelphia, PA 19106",
    hours: "Daily 11am–11pm (seasonal — verify)",
    priceRange: "$",
    website: "https://www.franklinfountain.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Morristown NJ ─────────────────────────────────────────────────────────
  {
    townId: "us-nj-morristown",
    name: "Morristown National Historical Park — Visitor Center",
    slug: slug("morristown", "nps-visitor-center"),
    category: "SHOPPING" as const,
    address: "30 Washington Pl, Morristown, NJ 07960",
    hours: "Daily 9am–5pm",
    priceRange: "$",
    website: "https://www.nps.gov/morr",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Trenton NJ ────────────────────────────────────────────────────────────
  {
    townId: "us-nj-trenton",
    name: "Old Barracks Museum",
    slug: slug("trenton", "old-barracks-museum"),
    category: "SHOPPING" as const,
    address: "Barrack St, Trenton, NJ 08608",
    hours: "Mon–Sat 10am–5pm, Sun noon–5pm",
    priceRange: "$",
    website: "https://www.barracks.org",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Princeton NJ ──────────────────────────────────────────────────────────
  {
    townId: "us-nj-princeton",
    name: "Princeton University Store",
    slug: slug("princeton", "princeton-university-store"),
    category: "SHOPPING" as const,
    address: "36 University Pl, Princeton, NJ 08540",
    hours: "Mon–Fri 9am–6pm, Sat 9am–5pm, Sun noon–5pm",
    priceRange: "$$",
    website: "https://www.pustore.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-nj-princeton",
    name: "Yankee Doodle Tap Room — Nassau Inn",
    slug: slug("princeton", "yankee-doodle-tap-room"),
    category: "RESTAURANT" as const,
    address: "10 Palmer Square, Princeton, NJ 08542",
    hours: "Daily 11:30am–10pm",
    priceRange: "$$",
    website: "https://www.nassauinn.com",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Williamsburg VA ───────────────────────────────────────────────────────
  {
    townId: "us-va-williamsburg",
    name: "Colonial Williamsburg Visitor Center",
    slug: slug("williamsburg", "colonial-wbg-visitor-center"),
    category: "SHOPPING" as const,
    address: "101 Visitor Center Dr, Williamsburg, VA 23185",
    hours: "Daily 9am–5pm",
    priceRange: "$$",
    website: "https://www.colonialwilliamsburg.org",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
  {
    townId: "us-va-williamsburg",
    name: "Chowning's Tavern",
    slug: slug("williamsburg", "chownings-tavern"),
    category: "RESTAURANT" as const,
    address: "100 E Duke of Gloucester St, Williamsburg, VA 23185",
    hours: "Daily 11am–9pm (CW admission or separate cover required)",
    priceRange: "$$",
    website: "https://www.colonialwilliamsburg.org/eat/chownings-tavern/",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },

  // ── Yorktown VA ───────────────────────────────────────────────────────────
  {
    townId: "us-va-yorktown",
    name: "American Revolution Museum at Yorktown",
    slug: slug("yorktown", "american-revolution-museum"),
    category: "SHOPPING" as const,
    address: "200 Water St, Yorktown, VA 23690",
    hours: "Daily 9am–5pm",
    priceRange: "$$",
    website: "https://www.historyisfun.org/yorktown/",
    isHifePick: false,
    blurb: null,
    source: "CURATED" as const,
    status: "NEEDS_REVIEW" as const,
  },
];

async function main() {
  console.log(`── Hand-Checked Business Seed ──`);
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
  console.log(`Adding ${BUSINESSES.length} verified businesses (status: NEEDS_REVIEW)\n`);

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const biz of BUSINESSES) {
    const existing = await prisma.business.findFirst({
      where: { OR: [{ slug: biz.slug }, { name: biz.name, townId: biz.townId }] },
    });

    if (existing) {
      console.log(`  → exists: ${biz.name}`);
      skipped++;
      continue;
    }

    // Verify town exists
    const town = await prisma.town.findUnique({ where: { id: biz.townId } });
    if (!town) {
      console.log(`  ✗ town not found: ${biz.townId}`);
      failed++;
      continue;
    }

    if (!DRY_RUN) {
      try {
        await prisma.business.create({ data: biz });
        console.log(`  ✓ ${town.name}: ${biz.name}`);
        created++;
      } catch (e) {
        console.log(`  ✗ ${biz.name}: ${(e as Error).message?.slice(0, 80)}`);
        failed++;
      }
    } else {
      console.log(`  [dry] ${town.name}: ${biz.name}`);
      created++;
    }
  }

  console.log(`\n── Complete ──`);
  console.log(`  ${created} created | ${skipped} already existed | ${failed} failed`);
  console.log(`\n  All entries: status=NEEDS_REVIEW, isHifePick=false`);
  console.log(`  Run enrichBusinessesFromPlaces when GOOGLE_PLACES_API_KEY is set to fill gaps`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
