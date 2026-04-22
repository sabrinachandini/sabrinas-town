import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const [people, lessons, stories, places] = await Promise.all([
    prisma.person.count(),
    prisma.lessonPlan.count(),
    prisma.story.findMany({ where: { storyType: "MODERN_VOICE" }, select: { narratorName: true }, take: 3 }),
    prisma.place.count(),
  ]);
  console.log("=== Prod DB spot check ===");
  console.log(`People: ${people}`);
  console.log(`Lesson plans: ${lessons}`);
  console.log(`Places: ${places}`);
  console.log(`MODERN_VOICE narrator sample (should be null):`, stories.map(s => s.narratorName));
}
main().catch(console.error).finally(() => prisma.$disconnect());
