/**
 * Phase 5 — Scaffold 15 New Towns (needs_review, NOT published)
 *
 * Each town gets a page shell in standard format with verified geography
 * and a carefully-drafted one-line summary based on well-documented history.
 *
 * All content is marked NEEDS_REVIEW. Sabrina reviews before any publish.
 * No deep content yet — just the scaffold.
 *
 * Usage:
 *   DATABASE_URL=... npx tsx scripts/seed-new-towns-july2026.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const DB = process.env.DATABASE_URL;
if (!DB) throw new Error("DATABASE_URL not set");

const prisma = new PrismaClient({ log: ["error"], datasourceUrl: DB });

interface NewTown {
  id: string;
  name: string;
  state: string;
  country: string;
  slug: string;
  lat: number;
  lng: number;
  heroSummary40: string;
  execSummary150: string;
  whyMatters: string;
}

const NEW_TOWNS: NewTown[] = [
  {
    id: "us-in-vincennes",
    name: "Vincennes",
    state: "IN",
    slug: "vincennes-in",
    country: "USA",
    lat: 38.6776,
    lng: -87.5286,
    heroSummary40: "Gateway to the Northwest",
    execSummary150: "George Rogers Clark's 1779 winter march and capture of Fort Sackville opened the Northwest Territory to American expansion.",
    whyMatters: "# Vincennes, Indiana\n\n*[needs_review — scaffold only]*\n\nIn February 1779, Lieutenant Colonel George Rogers Clark led a grueling 180-mile winter march across flooded Illinois and Indiana territory to surprise the British garrison at Fort Sackville. His capture of the fort — and the surrender of Henry Hamilton, the \"Hair-Buyer\" — secured American claims to the entire Northwest Territory. The George Rogers Clark National Historical Park now marks the site.",
  },
  {
    id: "us-ma-lincoln",
    name: "Lincoln",
    state: "MA",
    slug: "lincoln-ma",
    country: "USA",
    lat: 42.4251,
    lng: -71.3162,
    heroSummary40: "Between Lexington and Concord",
    execSummary150: "Lincoln militia joined the fighting on April 19, 1775, ambushing British regulars at Meriam's Corner and along the Battle Road.",
    whyMatters: "# Lincoln, Massachusetts\n\n*[needs_review — scaffold only]*\n\nSandwiched between Lexington and Concord on the Battle Road, Lincoln minutemen played a direct role in the April 19, 1775 fighting. At Meriam's Corner — now part of Minute Man National Historical Park — Lincoln militia joined the coordinated ambush that drove the British column back toward Boston under sustained fire. The town's role in the running battle has been documented in the National Park Service's corridor study.",
  },
  {
    id: "us-ma-acton",
    name: "Acton",
    state: "MA",
    slug: "acton-ma",
    country: "USA",
    lat: 42.4851,
    lng: -71.4329,
    heroSummary40: "Captain Isaac Davis fell at the North Bridge",
    execSummary150: "Acton's company, led by Captain Isaac Davis, was the first to advance at the North Bridge on April 19, 1775. Davis was the first officer killed.",
    whyMatters: "# Acton, Massachusetts\n\n*[needs_review — scaffold only]*\n\nWhen the Concord militia hesitated at the North Bridge on April 19, 1775, it was Captain Isaac Davis of Acton who offered to lead the advance. Davis was the first officer killed in the engagement — shot down at the front of the column. His company's willingness to go first is documented in eyewitness accounts collected by Reverend William Emerson. A monument to Davis stands in Acton's South Acton Green.",
  },
  {
    id: "us-ma-bedford",
    name: "Bedford",
    state: "MA",
    slug: "bedford-ma",
    country: "USA",
    lat: 42.4901,
    lng: -71.2762,
    heroSummary40: "Home of the oldest surviving militia flag",
    execSummary150: "The Bedford Flag, carried by Nathaniel Page on April 19, 1775, is the oldest surviving military flag in the United States.",
    whyMatters: "# Bedford, Massachusetts\n\n*[needs_review — scaffold only]*\n\nBedford's contribution to April 19 is preserved in cloth: the Bedford Flag, a crimson silk banner with the motto \"Vince aut Morire\" (Conquer or Die), is the oldest surviving military flag in the United States. It was likely carried to the North Bridge by Nathaniel Page and is now held by the Bedford Free Public Library. Bedford minutemen marched alongside Acton and Concord companies in the day's fighting.",
  },
  {
    id: "us-pa-chadds-ford",
    name: "Chadds Ford",
    state: "PA",
    slug: "chadds-ford-pa",
    country: "USA",
    lat: 39.8651,
    lng: -75.5913,
    heroSummary40: "Brandywine — Washington's worst defeat",
    execSummary150: "The Battle of Brandywine (September 11, 1777) was Washington's largest and most costly single-day defeat, yet the Continental Army survived to fight on.",
    whyMatters: "# Chadds Ford (Brandywine), Pennsylvania\n\n*[needs_review — scaffold only]*\n\nOn September 11, 1777, British forces under Howe outflanked Washington's 11,000-man Continental Army at Brandywine Creek, inflicting roughly 1,300 casualties and opening the road to Philadelphia. Despite the defeat, Washington's army withdrew intact — a pattern that would define the war's middle years. The Brandywine Battlefield Park and the Brandywine River Museum of Art preserve the landscape and document the campaign.",
  },
  {
    id: "us-me-machias",
    name: "Machias",
    state: "ME",
    slug: "machias-me",
    country: "USA",
    lat: 44.7154,
    lng: -67.4628,
    heroSummary40: "First naval victory of the Revolution",
    execSummary150: "On June 12, 1775, Machias patriots captured the British schooner Margaretta in what is considered the first naval engagement won by American forces.",
    whyMatters: "# Machias, Maine\n\n*[needs_review — scaffold only]*\n\nTwo months after Lexington, the remote Maine lumber town of Machias scored the Revolution's first naval victory. On June 12, 1775, local patriots led by Jeremiah O'Brien rowed out in lumber sloops and captured the armed British schooner Margaretta after her commander was killed resisting capture. The engagement predates the establishment of the Continental Navy. Maine's official state holiday of Margaretta Day commemorates the action.",
  },
  {
    id: "us-nh-new-castle",
    name: "New Castle",
    state: "NH",
    slug: "new-castle-nh",
    country: "USA",
    lat: 43.0706,
    lng: -70.7176,
    heroSummary40: "Fort William & Mary — arms seized before Lexington",
    execSummary150: "Four months before Lexington, New Hampshire patriots raided Fort William and Mary at New Castle, seizing British cannon and powder that would later be used at Bunker Hill.",
    whyMatters: "# New Castle, New Hampshire\n\n*[needs_review — scaffold only]*\n\nOn December 14–15, 1774 — four months before Lexington — New Hampshire patriots under John Sullivan raided the British garrison at Fort William and Mary on New Castle island, capturing 97 barrels of gunpowder and dozens of cannon. The seized arms were later used at Bunker Hill. It was among the first overt acts of armed rebellion in the colonies. The site is now Fort Constitution Historic Site, maintained by the New Hampshire Division of Historical Resources.",
  },
  {
    id: "us-ri-warwick",
    name: "Warwick",
    state: "RI",
    slug: "warwick-ri",
    country: "USA",
    lat: 41.7001,
    lng: -71.4162,
    heroSummary40: "Burning of the Gaspee — 1772",
    execSummary150: "In June 1772, Warwick men boarded and burned the British customs schooner Gaspee in what many historians call the first true act of armed rebellion against Britain.",
    whyMatters: "# Warwick, Rhode Island\n\n*[needs_review — scaffold only]*\n\nOn the night of June 9–10, 1772 — three years before Lexington — a party of Providence and Warwick men rowed out to the grounded British revenue schooner Gaspee, shot its commander Lieutenant William Dudingston, and burned the ship to the waterline. The British inquiry failed to identify the perpetrators, who were protected by local silence. Many historians mark the Gaspee Affair as the first armed act of rebellion against British authority.",
  },
  {
    id: "us-nc-halifax",
    name: "Halifax",
    state: "NC",
    slug: "halifax-nc",
    country: "USA",
    lat: 36.3276,
    lng: -77.5907,
    heroSummary40: "First colony to authorize independence",
    execSummary150: "On April 12, 1776, the Fourth Provincial Congress of North Carolina, meeting in Halifax, passed the Halifax Resolves — the first official action by an American colony authorizing independence.",
    whyMatters: "# Halifax, North Carolina\n\n*[needs_review — scaffold only]*\n\nOn April 12, 1776 — nearly three months before the Declaration of Independence — the Fourth Provincial Congress of North Carolina met in Halifax and passed the Halifax Resolves, explicitly authorizing North Carolina's delegates to the Continental Congress to vote for independence from Britain. It was the first formal governmental action in America authorizing independence. The date, April 12, is now a North Carolina state holiday. Historic Halifax State Historic Site preserves the town's eighteenth-century streetscape.",
  },
  {
    id: "us-nc-edenton",
    name: "Edenton",
    state: "NC",
    slug: "edenton-nc",
    country: "USA",
    lat: 36.0582,
    lng: -76.6074,
    heroSummary40: "The Edenton Tea Party — women's political action",
    execSummary150: "In October 1773, fifty-one Edenton women publicly pledged to boycott British tea and cloth — one of the earliest recorded organized political actions by American women.",
    whyMatters: "# Edenton, North Carolina\n\n*[needs_review — scaffold only]*\n\nOn October 25, 1774, fifty-one women of Edenton signed a petition pledging to boycott British tea and cloth in support of the colonial resistance — one of the earliest documented examples of organized political action by American women. The Edenton Tea Party predates Lexington by six months. British newspapers mocked the action; the signatories are now recognized as early examples of women's political engagement in colonial America. The Penelope Barker House, home of one organizer, survives in Edenton.",
  },
  {
    id: "us-ri-portsmouth",
    name: "Portsmouth",
    state: "RI",
    slug: "portsmouth-ri",
    country: "USA",
    lat: 41.6037,
    lng: -71.2568,
    heroSummary40: "First Black regiment in American history",
    execSummary150: "The Battle of Rhode Island (August 1778) was fought partly on Portsmouth ground and featured the First Rhode Island Regiment — the first Black military unit raised in North America.",
    whyMatters: "# Portsmouth, Rhode Island\n\n*[needs_review — scaffold only]*\n\nThe Battle of Rhode Island (August 29, 1778) was fought across Newport and Portsmouth. The First Rhode Island Regiment — composed largely of enslaved men who were promised freedom in exchange for service — performed with particular distinction, holding off three Hessian charges at Butts Hill. Historians consider it one of the earliest documented examples of a Black military unit fighting in an organized American engagement. The Butts Hill Fort site is in Portsmouth.",
  },
  {
    id: "us-ma-quincy",
    name: "Quincy",
    state: "MA",
    slug: "quincy-ma",
    country: "USA",
    lat: 42.2529,
    lng: -71.0023,
    heroSummary40: "Birthplace of two presidents",
    execSummary150: "Quincy was the birthplace of John Adams and John Quincy Adams, and Adams family home of presidents across two generations of the founding era.",
    whyMatters: "# Quincy, Massachusetts\n\n*[needs_review — scaffold only]*\n\nFormer Braintree (now Quincy) was the birthplace of John Adams (1735) and John Quincy Adams (1767). John Adams was the Revolution's most influential legal and diplomatic architect — author of the Massachusetts Constitution, delegate to the Continental Congress, member of the Committee of Five that drafted the Declaration of Independence, and first U.S. minister to Britain. The Adams National Historical Park preserves the family homesteads and the United First Parish Church, where both presidents are interred.",
  },
  {
    id: "us-ny-oriskany",
    name: "Rome / Oriskany",
    state: "NY",
    slug: "oriskany-ny",
    country: "USA",
    lat: 43.1476,
    lng: -75.3496,
    heroSummary40: "Bloodiest battle of the Revolution",
    execSummary150: "The Battle of Oriskany (August 6, 1777) was among the Revolution's bloodiest engagements per capita — a Patriot relief column ambushed while marching to relieve Fort Stanwix.",
    whyMatters: "# Rome / Oriskany, New York\n\n*[needs_review — scaffold only]*\n\nOn August 6, 1777, a Patriot relief column of 800 Tryon County militia under Brigadier General Nicholas Herkimer was ambushed by a Loyalist and Iroquois force in a ravine at Oriskany. The battle lasted six hours; Herkimer was wounded and died days later. The engagement is considered one of the bloodiest per capita of the entire war and was part of the broader Saratoga campaign. Oriskany Battlefield State Historic Site and nearby Fort Stanwix National Monument preserve the corridor.",
  },
  {
    id: "us-ct-lebanon",
    name: "Lebanon",
    state: "CT",
    slug: "lebanon-ct",
    country: "USA",
    lat: 41.6398,
    lng: -72.2037,
    heroSummary40: "War Office of Connecticut — supplies for the Army",
    execSummary150: "Lebanon was home to Governor Jonathan Trumbull, the only colonial governor to support the Revolution. His War Office coordinated Connecticut's supply of Washington's Continental Army.",
    whyMatters: "# Lebanon, Connecticut\n\n*[needs_review — scaffold only]*\n\nLebanon was the home of Jonathan Trumbull Sr., the only serving colonial governor to support the American Revolution rather than side with the Crown. From his Lebanon War Office — a small frame building still standing on the town green — Trumbull coordinated Connecticut's war effort: supplying Washington's army with food, clothing, and munitions throughout the conflict. Washington himself visited Lebanon multiple times. The Jonathan Trumbull Sr. House and War Office are Connecticut state historic sites.",
  },
  {
    id: "us-vt-hubbardton",
    name: "Hubbardton",
    state: "VT",
    slug: "hubbardton-vt",
    country: "USA",
    lat: 43.6748,
    lng: -73.1701,
    heroSummary40: "Only Revolutionary battle fought on Vermont soil",
    execSummary150: "The Battle of Hubbardton (July 7, 1777) was the only Revolutionary War battle fought entirely on what is now Vermont soil — a rear-guard action that slowed Burgoyne's advance.",
    whyMatters: "# Hubbardton, Vermont\n\n*[needs_review — scaffold only]*\n\nOn July 7, 1777, a Continental rear guard under Colonels Seth Warner and Ebenezer Francis turned to fight a pursuing British column at Hubbardton following the American evacuation of Fort Ticonderoga. Warner's men held long enough to buy time for the main American retreat, though at heavy cost — Francis was killed. The battle slowed Burgoyne's southern advance, buying time for the American forces that would defeat him at Saratoga. Hubbardton Battlefield State Historic Site is the only Revolutionary War battlefield in Vermont.",
  },
];

async function main() {
  console.log("🏛️  Phase 5 — Scaffolding 15 new towns (needs_review)");
  console.log("");

  let created = 0;
  let skipped = 0;

  for (const town of NEW_TOWNS) {
    const existing = await prisma.town.findUnique({ where: { id: town.id } });
    if (existing) {
      console.log(`  → ${town.name} already exists (${existing.slug}) — skipping`);
      skipped++;
      continue;
    }

    const slugExists = await prisma.town.findUnique({ where: { slug: town.slug } });
    if (slugExists) {
      console.log(`  ⚠ Slug ${town.slug} already taken by ${slugExists.name} (${slugExists.id}) — skipping`);
      skipped++;
      continue;
    }

    await prisma.town.create({
      data: {
        id: town.id,
        name: town.name,
        state: town.state,
        country: town.country,
        slug: town.slug,
        lat: town.lat,
        lng: town.lng,
        heroSummary40: town.heroSummary40,
        execSummary150: town.execSummary150,
        whyMatters: town.whyMatters,
        compositeScore: 0,
        scoreConfigVersion: "1.0.0",
        // Tourism info with needs_review flag
        tourismInfo: {
          needsReview: true,
          scaffoldedAt: "2026-07-06",
          note: "Phase 5 scaffold — content needs full review before publishing",
        },
      },
    });

    console.log(`  ✓ Created: ${town.name}, ${town.state} (${town.slug})`);
    created++;
  }

  console.log(`\n✅ Done: ${created} created, ${skipped} skipped`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
