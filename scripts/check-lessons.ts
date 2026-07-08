import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";

const envContent = readFileSync("/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local", "utf-8");
for (const line of envContent.split("\n")) {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL
    .replace(/:5432\//, ":6543/")
    .replace(/(\?|$)/, "?pgbouncer=true&");
}

const prisma = new PrismaClient({ log: [] });

async function main() {
  const withLesson = await prisma.lessonPlan.findMany({ select: { townId: true }, distinct: ["townId"] });
  const withLessonIds = new Set(withLesson.map((l: any) => l.townId));

  const towns = await prisma.town.findMany({
    select: { id: true, name: true, state: true },
    orderBy: [{ state: "asc" }, { name: "asc" }],
  });

  const allTowns = towns as any[];
  const withoutLesson = allTowns.filter((t: any) => !withLessonIds.has(t.id));

  console.log(`Total towns: ${allTowns.length}`);
  console.log(`Have lesson plan: ${allTowns.length - withoutLesson.length}`);
  console.log(`Missing lesson plan: ${withoutLesson.length}`);
  console.log("\n=== Missing ===");
  withoutLesson.forEach((t: any) => console.log(`  ${t.name}, ${t.state}`));

  await prisma.$disconnect();
}
main().catch(console.error);
