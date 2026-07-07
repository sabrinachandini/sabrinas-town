/**
 * overnight-graph-deepen.ts
 *
 * Part 2 of the overnight run: adds new Route entities to the HIFE graph.
 * All stops use towns already in the database.
 *
 * New routes:
 *   - Boston Post Road (MA → CT → RI)
 *   - Washington's Retreat Across NJ (Fort Lee → Trenton)
 *   - Road to Yorktown (Philadelphia → Yorktown via VA)
 *
 * Usage:
 *   DATABASE_URL=... npx tsx scripts/overnight-graph-deepen.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

const NEW_ROUTES = [
  {
    id: "route-boston-post-road",
    name: "The Boston Post Road",
    description:
      "The oldest mail road in America, connecting Boston to Providence and New Haven. Soldiers, dispatches, and spies traveled this corridor throughout the Revolutionary War. The Post Road was how news of Lexington reached the Continental Congress — riders galloping south while the colony's militias were still mustering.",
    totalMiles: 220,
    stops: [
      {
        stopOrder: 1,
        townId: "us-ma-boston",
        notes:
          "Dispatches originating in Boston traveled the Post Road south within hours of major engagements. The news of the Battles of Lexington and Concord reached Philadelphia in just five days along this route.",
        arrivalTime: "April 19, 1775 — riders departed within hours of the battles",
      },
      {
        stopOrder: 2,
        townId: "us-ri-providence",
        notes:
          "Providence was the relay point between New England and the Middle Colonies. Nathanael Greene, Washington's most trusted general, was born nearby and regularly traveled this road to coordinate with the Continental Army.",
        arrivalTime: "April 21, 1775 — news of Lexington reached Providence",
      },
      {
        stopOrder: 3,
        townId: "us-ct-new-haven",
        notes:
          "New Haven was a major supply and staging point on the Post Road corridor. Yale students — many of them future Continental officers — marched out from here when war began. Benedict Arnold organized his company here before heading to Cambridge.",
        arrivalTime: "April 22, 1775 — riders reached New Haven on their way south",
      },
    ],
  },
  {
    id: "route-washington-retreat-nj",
    name: "Washington's Retreat Across New Jersey",
    description:
      "In November–December 1776, Washington led a battered Continental Army across New Jersey in one of the most desperate retreats in American military history. The British pursued from Fort Lee south through Hackensack, Elizabeth, Princeton, and Trenton. The retreat looked like collapse — until Washington crossed back across the Delaware on Christmas night and changed everything.",
    totalMiles: 85,
    stops: [
      {
        stopOrder: 1,
        townId: "us-nj-fort-lee",
        notes:
          "Fort Lee fell to British forces on November 20, 1776, forcing Washington to abandon critical cannon and supplies. The retreat began here with the army nearly surrounded. Washington personally commanded the rear guard withdrawal across the Hackensack River.",
        arrivalTime: "November 20, 1776 — British stormed the fort at dawn",
      },
      {
        stopOrder: 2,
        townId: "us-nj-hackensack",
        notes:
          "The Continental Army passed through Hackensack in disorder, with militia deserting and enlistments expiring. The town's civilians watched Washington's exhausted men file south. Thomas Paine, traveling with the army, began writing 'The Crisis' — 'These are the times that try men's souls' — during this terrible week.",
        arrivalTime: "November 20–21, 1776 — the army straggled through",
      },
      {
        stopOrder: 3,
        townId: "us-nj-elizabeth",
        notes:
          "Elizabeth was the last major town before the army reached the Raritan. British pursuit was relentless; Cornwallis's column came within hours of cutting Washington off. The crossing of the Raritan at New Brunswick — where Washington burned the bridge behind him — bought just enough time.",
        arrivalTime: "Late November 1776 — the army passed through in ragged columns",
      },
      {
        stopOrder: 4,
        townId: "us-nj-princeton",
        notes:
          "Nassau Hall briefly served as Washington's headquarters before he was forced south again. Nassau Hall would later serve as the temporary capital of the United States after the war. Washington returned here in January 1777 after the Battle of Princeton — the first American field victory in the open against British regulars.",
        arrivalTime: "December 1, 1776 — the army passed through; January 3, 1777 — Washington returned victorious",
      },
      {
        stopOrder: 5,
        townId: "us-nj-trenton",
        notes:
          "Trenton was the low point — and then the turning point. Washington's army reached the Delaware exhausted and nearly beaten. Then, on Christmas night 1776, they crossed back and surprised the Hessian garrison at Trenton. The victory saved the Revolution.",
        arrivalTime: "December 8, 1776 — crossing into Pennsylvania; December 26, 1776 — the surprise attack",
      },
    ],
  },
  {
    id: "route-road-to-yorktown",
    name: "The Road to Yorktown",
    description:
      "In the summer of 1781, Washington and Rochambeau marched a combined Franco-American army nearly 500 miles from New York to Yorktown, Virginia — the decisive campaign of the Revolutionary War. The British surrendered at Yorktown on October 19, 1781. This route traces the corridor of that final march.",
    totalMiles: 480,
    stops: [
      {
        stopOrder: 1,
        townId: "us-pa-philadelphia",
        notes:
          "Philadelphia was the pivot point. Washington and Rochambeau arrived here on September 2–3, 1781. Cheering crowds lined the streets. The Continental Congress, the French ambassador, and the city all saw for the first time that the campaign was aimed at Yorktown — and that de Grasse's fleet had arrived in the Chesapeake Bay. The die was cast.",
        arrivalTime: "September 2–3, 1781 — army marched through to thunderous reception",
      },
      {
        stopOrder: 2,
        townId: "us-md-baltimore",
        notes:
          "The army crossed Maryland through Baltimore, where French officers were astonished by the town's size and civic energy. Supplies, munitions, and transport ships were organized here for the final push into Virginia. Baltimore was already becoming the commercial hub its Revolutionary-era founders had imagined.",
        arrivalTime: "September 8–9, 1781 — the army moved through quickly, supplies following by water",
      },
      {
        stopOrder: 3,
        townId: "us-md-annapolis",
        notes:
          "Annapolis was the embarkation point for French troops moving by water down the Chesapeake to Virginia. Washington crossed here, docking briefly before riding ahead to Mount Vernon — his first visit home in over six years — on his way to Williamsburg.",
        arrivalTime: "September 10–11, 1781 — French troops embarked for the final leg",
      },
      {
        stopOrder: 4,
        townId: "us-va-williamsburg",
        notes:
          "Williamsburg was the final staging point before the siege. Washington arrived on September 14, 1781, meeting Rochambeau, Lafayette, and the French naval commander de Grasse. The combined army assembled here and marched the last twelve miles to Yorktown on September 28 — the siege began the next morning.",
        arrivalTime: "September 14, 1781 — army massed; September 28, siege march began",
      },
      {
        stopOrder: 5,
        townId: "us-va-yorktown",
        notes:
          "The final stop. On October 19, 1781, Cornwallis's 8,000-man army surrendered to the combined Franco-American force. The British band played 'The World Turned Upside Down.' Washington stood at the head of his army and watched the moment the Revolutionary War was effectively won. The siege earthworks survive to this day.",
        arrivalTime: "October 19, 1781 — British surrender, 2:00 PM",
      },
    ],
  },
];

async function main() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error("DATABASE_URL not set");
    process.exit(1);
  }

  console.log("── Part 2: Graph Deepening — New Routes ──\n");

  for (const route of NEW_ROUTES) {
    // Check if route already exists
    const existing = await prisma.route.findUnique({ where: { id: route.id } });
    if (existing) {
      console.log(`  ${route.id} — already exists, skipping`);
      continue;
    }

    // Verify all towns exist before creating
    const missingTowns: string[] = [];
    for (const stop of route.stops) {
      const town = await prisma.town.findUnique({ where: { id: stop.townId } });
      if (!town) missingTowns.push(stop.townId);
    }

    if (missingTowns.length > 0) {
      console.log(`  ${route.id} — SKIP: missing towns: ${missingTowns.join(", ")}`);
      continue;
    }

    // Create route with stops
    await prisma.route.create({
      data: {
        id: route.id,
        name: route.name,
        description: route.description,
        totalMiles: route.totalMiles,
        stops: {
          create: route.stops.map((stop) => ({
            id: `${route.id}-stop-${stop.stopOrder}`,
            stopOrder: stop.stopOrder,
            townId: stop.townId,
            notes: stop.notes,
            arrivalTime: stop.arrivalTime,
          })),
        },
      },
    });

    console.log(`  ✓ Created route: ${route.name} (${route.stops.length} stops)`);
  }

  console.log("\n── Route creation complete ──");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
