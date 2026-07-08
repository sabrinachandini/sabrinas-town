import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), "sites/hife/.env.local") });
import { PrismaClient, BusinessStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Redd's Table — already deleted on first run
  console.log("Redd's Table: already removed");

  // Fix Lexington Books → Maxima Book Center
  const updated = await prisma.business.update({
    where: { id: "cmr9hp46c000942jkggly19wz" },
    data: {
      name: "Maxima Book Center",
      website: "https://www.maximacenter.com/",
      address: "1717 Massachusetts Ave, Lexington, MA 02420",
      hours: "Mon–Sat 10 AM to 7 PM, Sun 10 AM to 6 PM",
      isHifePick: false,
      blurb: null,
      status: BusinessStatus.NEEDS_REVIEW,
    },
  });
  console.log("Renamed to:", updated.name, "| isHifePick:", updated.isHifePick);

  // Fix museum categories → HISTORIC_SITE
  const museumNames = [
    "Old South Meeting House",
    "Boston Common Visitor Center",
    "Old Barracks Museum",
    "Morristown National Historical Park — Visitor Center",
    "American Revolution Museum at Yorktown",
    "Independence Visitor Center",
    "Colonial Williamsburg Visitor Center",
  ];

  for (const name of museumNames) {
    const biz = await prisma.business.findFirst({ where: { name } });
    if (biz) {
      await prisma.business.update({
        where: { id: biz.id },
        data: { category: "HISTORIC_SITE" },
      });
      console.log("Fixed category:", biz.name, "→ HISTORIC_SITE");
    }
  }

  const picks = await prisma.business.count({ where: { isHifePick: true } });
  console.log("\nRemaining HIFE Picks:", picks);
}

main().catch(console.error).finally(() => prisma.$disconnect());
