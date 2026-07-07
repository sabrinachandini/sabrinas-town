// set-hife-picks.ts — mark 5 curated businesses as HIFE Picks with editorial blurbs

import { PrismaClient, BusinessStatus } from "@prisma/client";

const prisma = new PrismaClient();

interface PickDef {
  nameFragment: string;
  blurb: string;
}

const PICKS: PickDef[] = [
  {
    nameFragment: "City Tavern",
    blurb:
      "The reconstructed City Tavern sits on the same ground where delegates to the Continental Congress drank, argued, and brokered the compromises that became the nation — order the Thomas Jefferson ale and consider what was decided in these rooms.",
  },
  {
    nameFragment: "Old Barracks Museum",
    blurb:
      "The stone barracks where Hessian soldiers slept the night Washington's army crossed the Delaware is now a museum preserving the material world of men who had no idea what morning would bring.",
  },
  {
    nameFragment: "Old South Meeting House",
    blurb:
      "On December 16, 1773, Samuel Adams gave the signal from this meetinghouse pulpit and five thousand Bostonians decided that no more ships would unload — the Tea Party was voted, not spontaneous.",
  },
  {
    nameFragment: "Franklin Fountain",
    blurb:
      "A block from Independence Hall in Old City, this early-20th-century-style ice cream parlor operates on the same street where Franklin walked from the print shop to the statehouse.",
  },
  {
    nameFragment: "Chowning's Tavern",
    blurb:
      "Colonial Williamsburg's reconstructed 18th-century alehouse serves the same gammon and flip that tavern-goers drank while the colony's burgesses debated independence two blocks away.",
  },
];

async function main() {
  let updated = 0;
  let notFound: string[] = [];

  for (const pick of PICKS) {
    const matches = await prisma.business.findMany({
      where: {
        name: {
          contains: pick.nameFragment,
          mode: "insensitive",
        },
      },
    });

    if (matches.length === 0) {
      console.log(`NOT FOUND: ${pick.nameFragment}`);
      notFound.push(pick.nameFragment);
      continue;
    }

    for (const biz of matches) {
      await prisma.business.update({
        where: { id: biz.id },
        data: {
          isHifePick: true,
          status: BusinessStatus.ACTIVE,
          blurb: pick.blurb,
        },
      });
      console.log(`  SET: "${biz.name}" (${biz.id}) — isHifePick=true`);
      updated++;
    }
  }

  console.log(`\nDone. Updated: ${updated}, Not found: ${notFound.length}`);
  if (notFound.length > 0) {
    console.log("Not found:", notFound.join(", "));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
