// Load env BEFORE any other imports — dotenv must run first
import { readFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), "sites/hife/.env.local");
readFileSync(envPath, "utf8")
  .split("\n")
  .forEach((line) => {
    const eq = line.indexOf("=");
    if (eq < 1) return;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim().replace(/^"|"$/g, "");
    if (key) process.env[key] = val; // always override — hife .env.local wins
  });

import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

async function main() {
  await p.$executeRawUnsafe(
    `ALTER TYPE "BusinessCategory" ADD VALUE IF NOT EXISTS 'HISTORIC_SITE'`
  );
  console.log("✓ HISTORIC_SITE added to BusinessCategory enum");

  await p.$executeRawUnsafe(
    `ALTER TABLE "LessonPlan"
     ADD COLUMN IF NOT EXISTS "needsReview" BOOLEAN NOT NULL DEFAULT false,
     ADD COLUMN IF NOT EXISTS "needsReviewReason" TEXT`
  );
  console.log("✓ LessonPlan: needsReview + needsReviewReason added");

  await p.$executeRawUnsafe(
    `CREATE INDEX IF NOT EXISTS "LessonPlan_needsReview_idx" ON "LessonPlan" ("needsReview")`
  );
  console.log("✓ LessonPlan_needsReview_idx created");

  await p.$executeRawUnsafe(
    `ALTER TABLE "PrimarySourcePacket"
     ADD COLUMN IF NOT EXISTS "transcription" TEXT,
     ADD COLUMN IF NOT EXISTS "facsimileUrl"  TEXT,
     ADD COLUMN IF NOT EXISTS "glossary"      JSONB`
  );
  console.log("✓ PrimarySourcePacket: transcription + facsimileUrl + glossary added");

  const museumNames = [
    "Old South Meeting House",
    "Boston Common Visitor Center",
    "Old Barracks Museum",
    "Morristown National Historical Park — Visitor Center",
    "American Revolution Museum at Yorktown",
    "Independence Visitor Center",
    "Colonial Williamsburg Visitor Center",
  ];

  for (const name of museumNames) {
    const biz = await p.business.findFirst({ where: { name } });
    if (biz) {
      await p.business.update({ where: { id: biz.id }, data: { category: "HISTORIC_SITE" } });
      console.log(`✓ ${name} → HISTORIC_SITE`);
    }
  }

  console.log("\nAll done.");
}

main().catch(console.error).finally(() => p.$disconnect());
