/**
 * rewrite-hife-picks.ts
 * Rewrites HIFE pick blurbs in Sabrina's voice:
 * history-obsessed teenager who likes museums — specific, enthusiastic,
 * notices the detail, talks to you like you're also into this stuff.
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const p = new PrismaClient({ log: ["error"] });

const PICKS: Array<{ name: string; blurb: string }> = [
  {
    name: "Wilson Farm",
    blurb:
      "The farm stand where Minuteman families bought their provisions is still here — grab cider donuts before you walk the Battle Green, because there's something right about eating local before standing where the whole thing started.",
  },
  {
    name: "Redd's Table",
    blurb:
      "Two blocks from the Battle Green and the best place to decompress after a morning of battle sites — the kind of neighborhood restaurant that makes Lexington feel like a real town, not just a historic set piece.",
  },
  {
    name: "Lexington Books",
    blurb:
      "Honestly, buy David Hackett Fischer's Paul Revere's Ride here before you visit any of the actual sites — you will want to know exactly what you're looking at when you get to the Green.",
  },
  {
    name: "Colonial Inn",
    blurb:
      "Part of this building was standing on April 19, 1775 — it stored Patriot supplies — which means staying here is the closest you can actually get to sleeping inside the events you came to see.",
  },
  {
    name: "Main Streets Market & Cafe",
    blurb:
      "Best breakfast before the North Bridge walk — five minutes from the Minuteman monument, locally sourced, and the right size for talking through everything you're about to see.",
  },
  {
    name: "The Concord Bookshop",
    blurb:
      "The history section alone is worth stopping for — they stock the obscure titles you can only find in places that take their history seriously, plus everything from the Revolution through Thoreau.",
  },
  {
    name: "Old South Meeting House",
    blurb:
      "Samuel Adams gave the signal from this pulpit on December 16, 1773, and 5,000 people voted to march to the harbor — the Tea Party wasn't a spontaneous mob, it was organized right here in this room.",
  },
  {
    name: "Chowning's Tavern",
    blurb:
      "You're sitting in a reconstructed 18th-century alehouse two blocks from where Virginia's burgesses debated whether to actually revolt — the gammon is historically accurate and the whole thing is a little surreal in the best way.",
  },
  {
    name: "City Tavern",
    blurb:
      "This is the ground where delegates argued out the compromises that became a country — the fact that you can order dinner here and sit in essentially the same rooms where that happened is genuinely wild.",
  },
  {
    name: "Old Barracks Museum",
    blurb:
      "The Hessians sleeping here had no idea Washington was crossing the Delaware — the museum keeps their actual material world intact, including the things they left behind when morning came and everything changed.",
  },
  {
    name: "Franklin Fountain",
    blurb:
      "A block from Independence Hall on the same street Franklin walked from his print shop to the statehouse — the ice cream is great, but mostly I love that you're standing somewhere this old and it just looks like a normal corner.",
  },
];

async function main() {
  let updated = 0;
  for (const pick of PICKS) {
    const biz = await p.business.findFirst({ where: { name: pick.name, isHifePick: true } });
    if (!biz) { console.log(`  not found: ${pick.name}`); continue; }
    await p.business.update({ where: { id: biz.id }, data: { blurb: pick.blurb } });
    console.log(`  ✓ ${pick.name}`);
    updated++;
  }
  console.log(`\nUpdated ${updated} blurbs.`);
  await p.$disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
