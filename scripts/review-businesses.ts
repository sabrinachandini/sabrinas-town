import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";

const envContent = readFileSync("/Users/sabrinachandini/sabrinas-town/sites/hife/.env.local", "utf-8");
for (const line of envContent.split("\n")) {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}
// Use transaction-mode pooler (port 6543) to avoid session connection limit
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.replace(/:5432\//, ":6543/");
}

const prisma = new PrismaClient({ log: [] });

async function main() {
  const businesses = await prisma.business.findMany({
    where: { status: "NEEDS_REVIEW" },
    include: { town: { select: { name: true, state: true } } },
    orderBy: [{ town: { name: "asc" } }, { name: "asc" }],
  });

  businesses.forEach((b) => {
    const pick = b.isHifePick ? "★ " : "  ";
    console.log(`${pick}${b.town.name}, ${b.town.state} — ${b.name}`);
    console.log(`     Category: ${b.category}`);
    console.log(`     Address:  ${b.address ?? "none"}`);
    console.log(`     Website:  ${b.website ?? "none"}`);
    console.log(`     ID: ${b.id}`);
    console.log();
  });
  console.log("Total:", businesses.length);
  await prisma.$disconnect();
}

main().catch(console.error);
