/**
 * Clears narratorName and narratorRole on all MODERN_VOICE stories.
 * These fields were incorrectly set to institutional attribution ("Historical Society Curator", etc.)
 * during a previous enrichment run that targeted the wrong database.
 *
 * Usage:
 *   env $(grep DATABASE_URL .env.vercel) npx tsx scripts/fix-narrator.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

async function main() {
  const result = await prisma.story.updateMany({
    where: { storyType: "MODERN_VOICE" },
    data: { narratorName: null, narratorRole: null },
  });
  console.log(`Cleared narrator fields on ${result.count} MODERN_VOICE stories.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
