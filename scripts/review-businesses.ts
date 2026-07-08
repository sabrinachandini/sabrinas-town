import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  console.log(`     Hours:    ${b.hours ?? "none"}`);
  console.log(`     ID: ${b.id}`);
  console.log();
});
console.log("Total:", businesses.length);
await prisma.$disconnect();
