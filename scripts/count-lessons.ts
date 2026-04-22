import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const count = await prisma.lessonPlan.count();
  const towns = await prisma.town.count();
  const people = await prisma.person.count();
  console.log({ lessonPlans: count, towns, people });
}
main().catch(console.error).finally(() => prisma.$disconnect());
