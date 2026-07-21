/**
 * migrate-entity-links.ts
 *
 * One-shot script to backfill EntityLink rows from the existing join tables.
 * Run ONLY after verifying EntityLink reads correctly for a sample town.
 * The original join tables are NOT dropped by this script — drop them manually
 * once you've confirmed the EntityLink data is complete and correct.
 *
 * Usage:
 *   npx tsx scripts/migrate-entity-links.ts [--dry-run] [--table=EventPerson]
 *
 * Tables migrated:
 *   EventPerson  → PERSON participated_in EVENT
 *   TownPerson   → PERSON located_in TOWN  (connectionNote → label if set)
 *   EventTown    → EVENT happened_at TOWN  (role → label if set)
 *   SourceEvent  → SOURCE mentions EVENT
 *   SourceTown   → SOURCE mentions TOWN
 *   SourcePerson → SOURCE mentions PERSON
 *   SourceStory  → SOURCE mentions STORY
 *   RouteStop    → ROUTE passes_through TOWN  (notes → label if set)
 *   TownLink     → TOWN related_to TOWN  (reason → label, always set)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
  log: ["error"],
});

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const TABLE_FILTER = args.find((a) => a.startsWith("--table="))?.split("=")[1];

let created = 0;
let skipped = 0;

async function upsert(data: {
  fromId: string;
  fromType: string;
  toId: string;
  toType: string;
  linkType: string;
  label?: string | null;
  sourceId?: string | null;
}) {
  if (!data.label && data.linkType === "RELATED_TO") {
    console.warn(`  SKIP (no label): ${data.fromId} → ${data.toId}`);
    skipped++;
    return;
  }

  if (DRY_RUN) {
    console.log(
      `  DRY: ${data.fromType}.${data.fromId} -[${data.linkType}]-> ${data.toType}.${data.toId}${data.label ? ` "${data.label}"` : ""}`,
    );
    created++;
    return;
  }

  await (prisma as any).entityLink.upsert({
    where: {
      fromId_fromType_toId_toType_linkType: {
        fromId: data.fromId,
        fromType: data.fromType,
        toId: data.toId,
        toType: data.toType,
        linkType: data.linkType,
      },
    },
    update: {},
    create: {
      fromId: data.fromId,
      fromType: data.fromType,
      toId: data.toId,
      toType: data.toType,
      linkType: data.linkType,
      label: data.label || null,
      sourceId: data.sourceId || null,
      status: "PUBLISHED", // existing join-table data was implicitly published
    },
  });
  created++;
}

async function migrateEventPerson() {
  console.log("\n── EventPerson (PERSON participated_in EVENT) ──");
  const rows = await prisma.eventPerson.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.personId,
      fromType: "PERSON",
      toId: r.eventId,
      toType: "EVENT",
      linkType: "PARTICIPATED_IN",
      label: r.roleInEvent || null,
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateTownPerson() {
  console.log("\n── TownPerson (PERSON located_in TOWN) ──");
  const rows = await prisma.townPerson.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.personId,
      fromType: "PERSON",
      toId: r.townId,
      toType: "TOWN",
      linkType: "LOCATED_IN",
      label: r.connectionNote || null,
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateEventTown() {
  console.log("\n── EventTown (EVENT happened_at TOWN) ──");
  const rows = await prisma.eventTown.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.eventId,
      fromType: "EVENT",
      toId: r.townId,
      toType: "TOWN",
      linkType: "HAPPENED_AT",
      label: r.role || null,
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateSourceEvent() {
  console.log("\n── SourceEvent (SOURCE mentions EVENT) ──");
  const rows = await prisma.sourceEvent.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.sourceId,
      fromType: "SOURCE",
      toId: r.eventId,
      toType: "EVENT",
      linkType: "MENTIONS",
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateSourceTown() {
  console.log("\n── SourceTown (SOURCE mentions TOWN) ──");
  const rows = await prisma.sourceTown.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.sourceId,
      fromType: "SOURCE",
      toId: r.townId,
      toType: "TOWN",
      linkType: "MENTIONS",
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateSourcePerson() {
  console.log("\n── SourcePerson (SOURCE mentions PERSON) ──");
  const rows = await prisma.sourcePerson.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.sourceId,
      fromType: "SOURCE",
      toId: r.personId,
      toType: "PERSON",
      linkType: "MENTIONS",
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateSourceStory() {
  console.log("\n── SourceStory (SOURCE mentions STORY) ──");
  const rows = await prisma.sourceStory.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.sourceId,
      fromType: "SOURCE",
      toId: r.storyId,
      toType: "STORY",
      linkType: "MENTIONS",
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateRouteStop() {
  console.log("\n── RouteStop (ROUTE passes_through TOWN) ──");
  const rows = await prisma.routeStop.findMany();
  for (const r of rows) {
    await upsert({
      fromId: r.routeId,
      fromType: "ROUTE",
      toId: r.townId,
      toType: "TOWN",
      linkType: "PASSES_THROUGH",
      label: r.notes || null,
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

async function migrateTownLink() {
  console.log("\n── TownLink (TOWN related_to TOWN) ──");
  const rows = await prisma.townLink.findMany();
  for (const r of rows) {
    // reason is always populated on TownLink — safe for RELATED_TO
    await upsert({
      fromId: r.fromTownId,
      fromType: "TOWN",
      toId: r.toTownId,
      toType: "TOWN",
      linkType: "RELATED_TO",
      label: r.reason,
    });
  }
  console.log(`  ${rows.length} rows processed`);
}

const ALL_TABLES: Record<string, () => Promise<void>> = {
  EventPerson: migrateEventPerson,
  TownPerson: migrateTownPerson,
  EventTown: migrateEventTown,
  SourceEvent: migrateSourceEvent,
  SourceTown: migrateSourceTown,
  SourcePerson: migrateSourcePerson,
  SourceStory: migrateSourceStory,
  RouteStop: migrateRouteStop,
  TownLink: migrateTownLink,
};

async function main() {
  console.log(`EntityLink migration — ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

  const tables = TABLE_FILTER
    ? { [TABLE_FILTER]: ALL_TABLES[TABLE_FILTER] }
    : ALL_TABLES;

  if (TABLE_FILTER && !ALL_TABLES[TABLE_FILTER]) {
    console.error(`Unknown table: ${TABLE_FILTER}`);
    process.exit(1);
  }

  for (const fn of Object.values(tables)) {
    await fn();
  }

  console.log(
    `\nDone — ${created} EntityLinks ${DRY_RUN ? "would be" : ""} created, ${skipped} skipped (RELATED_TO missing label).`,
  );
  console.log(
    "\nOriginal join tables NOT modified. Verify EntityLink data, then drop manually.",
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
