import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const towns = await prisma.town.findMany({
    include: { _count: { select: { lessonPlans: true } } },
    orderBy: { name: "asc" },
  });
  const missing = towns.filter(t => t._count.lessonPlans === 0);
  console.log(`Towns with 0 lessons: ${missing.length}`);
  missing.forEach(t => console.log(`  - ${t.name}, ${t.state} (${t.slug})`));
}
main().catch(console.error).finally(() => prisma.$disconnect());
