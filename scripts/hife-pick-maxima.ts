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

const BLURB =
  "Maxima Book Center is the rare independent bookstore that functions as a genuine town institution. " +
  "Its shelves lean toward history, local New England interest, and children's literature — exactly the kind of " +
  "collection that makes a visit to Lexington feel complete before you've even stepped onto the Battle Green. " +
  "Knowledgeable staff, a well-curated used-book section, and proximity to the heart of Lexington Center make it " +
  "a natural first stop or a worthy end to an afternoon of walking the grounds.";

async function main() {
  // Find by name — case-insensitive keyword search
  const candidates = await prisma.business.findMany({
    where: { name: { contains: "Maxima", mode: "insensitive" } },
    select: { id: true, name: true, address: true, townId: true, status: true, isHifePick: true },
  });

  if (candidates.length === 0) {
    console.log("✗ No business found matching 'Maxima'. Searching by address...");

    const byAddr = await prisma.business.findMany({
      where: { address: { contains: "1717", mode: "insensitive" } },
      select: { id: true, name: true, address: true },
    });

    if (byAddr.length === 0) {
      console.log("✗ No match by address either. Listing all Lexington bookshops:");
      const town = await prisma.town.findUnique({ where: { slug: "lexington-ma" }, select: { id: true } });
      if (town) {
        const all = await prisma.business.findMany({
          where: { townId: town.id, category: "SHOPPING" },
          select: { id: true, name: true, address: true },
        });
        all.forEach((b) => console.log(`  [${b.id}] ${b.name} | ${b.address ?? "no address"}`));
      }
      await prisma.$disconnect();
      process.exit(1);
    }

    console.log("Matches by address:");
    byAddr.forEach((b) => console.log(`  [${b.id}] ${b.name} | ${b.address}`));
    await prisma.$disconnect();
    process.exit(1);
  }

  console.log("Found:");
  candidates.forEach((b) =>
    console.log(`  [${b.id}] ${b.name} | ${b.address ?? "no address"} | isHifePick=${b.isHifePick}`)
  );

  if (candidates.length > 1) {
    console.log("✗ Multiple matches — narrow the search. Exiting.");
    await prisma.$disconnect();
    process.exit(1);
  }

  const biz = candidates[0];
  await prisma.business.update({
    where: { id: biz.id },
    data: { isHifePick: true, blurb: BLURB },
  });

  console.log(`\n✓ ${biz.name} marked as HIFE Pick with blurb (${BLURB.length} chars)`);
  await prisma.$disconnect();
}

main().catch(console.error);
