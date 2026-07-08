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

const SEARCH_TERMS = [
  "new-york-constitution", "new york constitution", "1777",
  "virginia-declaration-rights", "virginia declaration of rights",
  "virginia-gazette", "virginia gazette",
  "jefferson-autobiography", "jefferson.*autobiography",
  "fairfax-county-resolves", "fairfax county",
  "george-rogers-clark", "clark.*memoir",
  "bennington.*stark", "stark.*bennington",
  "horatio-gates", "gates papers",
  "henry-clinton", "clinton papers",
  "penobscot",
];

async function main() {
  // Search by ID patterns
  const candidates = [
    "new-york", "virginia-declaration", "virginia-gazette",
    "jefferson", "fairfax", "clark", "bennington", "stark",
    "gates", "clinton", "penobscot",
  ];

  for (const term of candidates) {
    const rows = await prisma.source.findMany({
      where: { OR: [{ id: { contains: term } }, { title: { contains: term, mode: "insensitive" } }] },
      select: { id: true, title: true, url: true },
    });
    if (rows.length > 0) {
      console.log(`\n--- "${term}" ---`);
      rows.forEach((r: any) => console.log(`  [${r.id}] ${r.title} | url: ${r.url ?? "null"}`));
    }
  }

  await prisma.$disconnect();
}
main().catch(console.error);
