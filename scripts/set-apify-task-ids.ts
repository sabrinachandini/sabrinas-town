/**
 * One-time script: set apifyTaskId on the 5 museum EventSource records
 * and update their type from "html" to "apify".
 *
 * Run: npx tsx scripts/set-apify-task-ids.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

const TASK_MAP: Array<{ name: string; apifyTaskId: string }> = [
  { name: "Lexington Historical Society",        apifyTaskId: "5SCGilwWZGosi42Nn" },
  { name: "Concord Museum",                       apifyTaskId: "WHe7blDa18zXhbvwG" },
  { name: "Paul Revere House",                    apifyTaskId: "wbdwOt80eX5WDUvAG" },
  { name: "Colonial Williamsburg — Events",       apifyTaskId: "sNY1pXUsqRGNfKJQp" },
  { name: "Museum of the American Revolution",    apifyTaskId: "j1tTp7RsHqmxRBrYY" },
];

async function main() {
  for (const { name, apifyTaskId } of TASK_MAP) {
    const existing = await prisma.eventSource.findFirst({ where: { name } });
    if (!existing) {
      console.warn(`⚠  Not found: "${name}"`);
      continue;
    }
    await prisma.eventSource.update({
      where: { id: existing.id },
      data: { type: "apify", apifyTaskId },
    });
    console.log(`✓  ${name} → ${apifyTaskId}`);
  }
  console.log("\nDone.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
