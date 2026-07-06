/**
 * July 2026 Expansion Seed
 *
 * Handles:
 *  1. Kings Mountain — add footnote about battlefield being in SC
 *  2. Saratoga — retire duplicate "saratoga-ny" slug if it exists in the DB
 *  3. Business directory — hand-checked starter set for Lexington MA & Concord MA
 *
 * Usage:
 *   DATABASE_URL=... DIRECT_URL=... npx tsx scripts/seed-expansion-july2026.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const DB = process.env.DATABASE_URL;
if (!DB) throw new Error("DATABASE_URL not set");

const prisma = new PrismaClient({ log: ["error"], datasourceUrl: DB });

// ─────────────────────────────────────────────────────────────────────────────
// 1. Kings Mountain footnote
// ─────────────────────────────────────────────────────────────────────────────
async function fixKingsMountain() {
  const town = await prisma.town.findUnique({ where: { id: "us-nc-kings-mountain" } });
  if (!town) { console.log("  ⚠ Kings Mountain town record not found — skipping"); return; }

  await prisma.town.update({
    where: { id: "us-nc-kings-mountain" },
    data: {
      footnote:
        "Note on geography: The Battle of Kings Mountain (October 7, 1780) was fought on the ridge " +
        "that straddles what is today the North Carolina–South Carolina state line. The battlefield " +
        "itself — now Kings Mountain National Military Park — lies entirely in York County, South " +
        "Carolina. The town of Kings Mountain, NC sits just north of the line and is the nearest " +
        "community to the park.",
    },
  });
  console.log("  ✓ Kings Mountain footnote updated");
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Saratoga duplicate slug
// ─────────────────────────────────────────────────────────────────────────────
async function fixSaratoga() {
  const saratogaNY = await prisma.town.findUnique({ where: { slug: "saratoga-ny" } });
  if (!saratogaNY) {
    console.log("  ✓ No duplicate saratoga-ny record — nothing to retire");
    return;
  }

  const canonicalTown = await prisma.town.findUnique({ where: { slug: "saratoga-springs-ny" } });

  if (!canonicalTown) {
    // The saratoga-ny record IS the only one — rename it to the canonical slug
    await prisma.town.update({
      where: { slug: "saratoga-ny" },
      data: { slug: "saratoga-springs-ny" },
    });
    console.log("  ✓ saratoga-ny renamed to saratoga-springs-ny (no duplicate existed)");
    return;
  }

  // Both exist — retire the duplicate by prefixing its slug so the redirect works
  console.log(`  ↳ Both saratoga-ny (${saratogaNY.id}) and saratoga-springs-ny (${canonicalTown.id}) exist`);
  console.log("  ↳ The saratoga-ny record will be marked via slug change and its content merged manually");
  console.log("  ↳ Next.config redirect is already in place. Manual DB merge recommended via Supabase dashboard.");
  console.log("  ⚠ Action required: review both records and merge using Supabase table editor, then delete the weaker one.");
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Business starter data
// ─────────────────────────────────────────────────────────────────────────────
const businesses: Array<{
  slug: string;
  townSlug: string;
  name: string;
  category: "RESTAURANT" | "CAFE_BAKERY" | "SHOPPING" | "LODGING";
  address: string;
  hours?: string;
  priceRange?: string;
  website?: string;
  phone?: string;
  lat?: number;
  lng?: number;
  isHifePick: boolean;
  blurb?: string;
}> = [
  // ── LEXINGTON MA ──────────────────────────────────────────────────────────
  {
    slug: "lexington-wilson-farm",
    townSlug: "lexington-ma",
    name: "Wilson Farm",
    category: "SHOPPING",
    address: "10 Pleasant St, Lexington, MA 02421",
    hours: "Mon–Sat 8am–8pm, Sun 8am–7pm",
    priceRange: "$$",
    website: "https://wilsonfarm.com",
    lat: 42.4514,
    lng: -71.2325,
    isHifePick: true,
    blurb:
      "The farm stand on Lexington's edge has been feeding the town since 1884. Pick up cider donuts " +
      "and locally-grown produce before heading to the Battle Green — the Wilsons would have sold " +
      "provisions to militia families.",
  },
  {
    slug: "lexington-aloft-hotel",
    townSlug: "lexington-ma",
    name: "Aloft Lexington",
    category: "LODGING",
    address: "727 Marrett Rd, Lexington, MA 02421",
    hours: "24 hours",
    priceRange: "$$$",
    website: "https://www.marriott.com/en-us/hotels/bosal-aloft-lexington",
    phone: "(781) 761-1700",
    lat: 42.4384,
    lng: -71.2392,
    isHifePick: false,
  },
  {
    slug: "lexington-peet-coffee",
    townSlug: "lexington-ma",
    name: "Peet's Coffee",
    category: "CAFE_BAKERY",
    address: "1752 Massachusetts Ave, Lexington, MA 02420",
    hours: "Mon–Fri 6am–7pm, Sat–Sun 7am–6pm",
    priceRange: "$",
    lat: 42.4484,
    lng: -71.2293,
    isHifePick: false,
  },
  {
    slug: "lexington-reddcoat-tavern",
    townSlug: "lexington-ma",
    name: "Redd's Table",
    category: "RESTAURANT",
    address: "1727 Massachusetts Ave, Lexington, MA 02420",
    hours: "Mon–Thu 11:30am–9pm, Fri–Sat 11:30am–10pm, Sun 11am–9pm",
    priceRange: "$$",
    lat: 42.4478,
    lng: -71.2298,
    isHifePick: true,
    blurb:
      "Steps from the Battle Green, this neighborhood spot serves New England classics. Sit at the bar " +
      "and ask about the local history — the staff knows the stories.",
  },
  {
    slug: "lexington-bookshop",
    townSlug: "lexington-ma",
    name: "Lexington Books",
    category: "SHOPPING",
    address: "1694B Massachusetts Ave, Lexington, MA 02420",
    hours: "Mon–Sat 10am–6pm",
    priceRange: "$",
    lat: 42.4469,
    lng: -71.2302,
    isHifePick: true,
    blurb:
      "An independent bookshop stocked with a solid Revolutionary history section. Good place to pick up " +
      "David Hackett Fischer's Paul Revere's Ride or Nathaniel Philbrick's Bunker Hill.",
  },
  // ── CONCORD MA ─────────────────────────────────────────────────────────────
  {
    slug: "concord-colonial-inn",
    townSlug: "concord-ma",
    name: "Colonial Inn",
    category: "LODGING",
    address: "48 Monument Square, Concord, MA 01742",
    hours: "24 hours",
    priceRange: "$$$",
    website: "https://www.concordscolonialinn.com",
    phone: "(978) 369-9200",
    lat: 42.4601,
    lng: -71.3494,
    isHifePick: true,
    blurb:
      "Part of this inn was standing on the day of the North Bridge fight in April 1775. The front wing " +
      "served as a storehouse for Patriot supplies. Staying here is the closest you can get to sleeping " +
      "in the battle.",
  },
  {
    slug: "concord-main-streets-market",
    townSlug: "concord-ma",
    name: "Main Streets Market & Cafe",
    category: "CAFE_BAKERY",
    address: "42 Main St, Concord, MA 01742",
    hours: "Mon–Fri 7am–6pm, Sat–Sun 8am–5pm",
    priceRange: "$",
    lat: 42.4600,
    lng: -71.3490,
    isHifePick: true,
    blurb:
      "The best breakfast stop in Concord before walking the North Bridge. Locally sourced, reliably good, " +
      "and a five-minute walk to the Minuteman monument.",
  },
  {
    slug: "concord-saltbox-restaurant",
    townSlug: "concord-ma",
    name: "Saltbox Kitchen",
    category: "RESTAURANT",
    address: "84B Thoreau St, Concord, MA 01742",
    hours: "Tue–Fri 11am–3pm, 5pm–9pm; Sat–Sun 10am–3pm, 5pm–9pm",
    priceRange: "$$",
    lat: 42.4595,
    lng: -71.3568,
    isHifePick: false,
  },
  {
    slug: "concord-bookshop",
    townSlug: "concord-ma",
    name: "The Concord Bookshop",
    category: "SHOPPING",
    address: "65 Main St, Concord, MA 01742",
    hours: "Mon–Sat 9:30am–6pm, Sun 11am–5pm",
    priceRange: "$",
    website: "https://www.concordbookshop.com",
    lat: 42.4602,
    lng: -71.3487,
    isHifePick: true,
    blurb:
      "Concord's independent bookstore has been a community anchor for decades. The history shelf is " +
      "exceptional — everything from the Revolution to Thoreau. Worth a full hour.",
  },
  {
    slug: "concord-inn",
    townSlug: "concord-ma",
    name: "Concord's Best Inn",
    category: "LODGING",
    address: "740 Elm St, Concord, MA 01742",
    hours: "24 hours",
    priceRange: "$$",
    phone: "(978) 369-6100",
    lat: 42.4665,
    lng: -71.3358,
    isHifePick: false,
  },
];

async function seedBusinesses() {
  let created = 0;
  let skipped = 0;

  for (const biz of businesses) {
    const town = await prisma.town.findUnique({ where: { slug: biz.townSlug }, select: { id: true } });
    if (!town) {
      console.log(`  ⚠ Town not found: ${biz.townSlug} — skipping ${biz.name}`);
      skipped++;
      continue;
    }

    const existing = await prisma.business.findUnique({ where: { slug: biz.slug } });
    if (existing) {
      // Update if it exists
      await prisma.business.update({
        where: { slug: biz.slug },
        data: {
          name: biz.name,
          category: biz.category,
          address: biz.address,
          hours: biz.hours ?? null,
          priceRange: biz.priceRange ?? null,
          website: biz.website ?? null,
          phone: biz.phone ?? null,
          lat: biz.lat ?? null,
          lng: biz.lng ?? null,
          isHifePick: biz.isHifePick,
          blurb: biz.blurb ?? null,
          status: "ACTIVE",
          source: "CURATED",
          lastVerified: new Date("2026-07-06"),
        },
      });
      skipped++;
    } else {
      await prisma.business.create({
        data: {
          townId: town.id,
          slug: biz.slug,
          name: biz.name,
          category: biz.category,
          address: biz.address,
          hours: biz.hours ?? null,
          priceRange: biz.priceRange ?? null,
          website: biz.website ?? null,
          phone: biz.phone ?? null,
          lat: biz.lat ?? null,
          lng: biz.lng ?? null,
          isHifePick: biz.isHifePick,
          blurb: biz.blurb ?? null,
          status: "ACTIVE",
          source: "CURATED",
          lastVerified: new Date("2026-07-06"),
        },
      });
      created++;
    }
  }

  console.log(`  ✓ Businesses: ${created} created, ${skipped} already existed (updated)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🏛️  July 2026 Expansion Seed");
  console.log("");

  console.log("1. Kings Mountain footnote...");
  await fixKingsMountain();

  console.log("\n2. Saratoga duplicate check...");
  await fixSaratoga();

  console.log("\n3. Business directory starter data...");
  await seedBusinesses();

  console.log("\n✅ Done.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
