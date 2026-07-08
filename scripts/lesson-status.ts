import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";

const env = readFileSync("/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local", "utf-8");
for (const l of env.split("\n")) {
  const m = l.match(/^([^=]+)=(.*)/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}
process.env.DATABASE_URL = (process.env.DATABASE_URL || "")
  .replace(/:5432\//, ":6543/")
  .replace(/(\?|$)/, "?pgbouncer=true&");

const prisma = new PrismaClient({ log: [] });

async function main() {
  const total = await prisma.lessonPlan.count();
  const published = await prisma.lessonPlan.count({ where: { published: true } });
  const draft = await prisma.lessonPlan.count({ where: { published: false } });
  console.log(`Total lesson plans: ${total}`);
  console.log(`Published: ${published}`);
  console.log(`Draft (unpublished): ${draft}`);

  if (draft > 0) {
    const drafts = await prisma.lessonPlan.findMany({
      where: { published: false },
      include: { town: { select: { name: true, state: true } } },
      orderBy: { createdAt: "desc" },
    });
    console.log("\nDraft towns:");
    drafts.forEach((d: any) => console.log(`  ${d.town.name}, ${d.town.state} — "${d.title}"`));
  }

  await prisma.$disconnect();
}
main().catch(console.error);
