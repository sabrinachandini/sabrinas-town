import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const people = await prisma.person.findMany({
    where: { name: { in: ["John Hancock", "Paul Revere"] } },
    select: { id: true, name: true, bioShort: true, bioLong: true },
  });
  for (const p of people) {
    console.log(`\n=== ${p.name} (id: ${p.id}) ===`);
    console.log(`bioShort (${p.bioShort.length} chars): ${p.bioShort}`);
    console.log(`bioLong (${p.bioLong?.length ?? 0} chars)`);
    if (p.bioLong) console.log(p.bioLong.slice(0, 300) + "...");
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
