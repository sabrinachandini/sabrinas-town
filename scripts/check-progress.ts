import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["error"] });
async function main() {
  const events = await prisma.event.findMany({
    where: {
      OR: [
        { name: { contains: "Boston", mode: "insensitive" } },
        { name: { contains: "Lexington", mode: "insensitive" } },
        { name: { contains: "Concord", mode: "insensitive" } },
        { name: { contains: "Bunker", mode: "insensitive" } },
        { name: { contains: "Midnight", mode: "insensitive" } },
        { name: { contains: "Revere", mode: "insensitive" } },
        { name: { contains: "Declaration", mode: "insensitive" } },
        { name: { contains: "Fourth of July", mode: "insensitive" } },
        { name: { contains: "Delaware", mode: "insensitive" } },
        { name: { contains: "Valley Forge", mode: "insensitive" } },
        { name: { contains: "Saratoga", mode: "insensitive" } },
        { name: { contains: "Freeman", mode: "insensitive" } },
        { name: { contains: "Bemis", mode: "insensitive" } },
        { name: { contains: "Burgoyne", mode: "insensitive" } },
        { name: { contains: "Yorktown", mode: "insensitive" } },
        { name: { contains: "Massacre", mode: "insensitive" } },
        { name: { contains: "Tea Party", mode: "insensitive" } },
      ]
    },
    select: { id: true, name: true, townId: true, significanceWeight: true },
    orderBy: { significanceWeight: "desc" },
  });
  events.forEach(e => console.log(`${e.id} | ${e.name}`));
  await prisma.$disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
