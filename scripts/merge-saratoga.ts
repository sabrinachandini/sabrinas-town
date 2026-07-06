/**
 * Merges the legacy "saratoga-ny" (id: us-ny-saratoga) town record into
 * "saratoga-springs-ny" (id: us-ny-saratoga-springs), then deletes the old record.
 *
 * The HTTP 301 redirect already exists in next.config.ts.
 * This script handles the database side:
 *   - Migrates TownLink records (both outgoing and incoming)
 *   - Migrates SourceTown records
 *   - Deletes the old us-ny-saratoga record
 *
 * Run: npx tsx scripts/merge-saratoga.ts [--dry-run]
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const DRY_RUN = process.argv.includes("--dry-run");

const OLD_ID = "us-ny-saratoga";
const NEW_ID = "us-ny-saratoga-springs";

async function main() {
  console.log(`Mode: ${DRY_RUN ? "DRY RUN (no writes)" : "LIVE"}`);
  console.log(`Merging ${OLD_ID} → ${NEW_ID}\n`);

  const [oldTown, newTown] = await Promise.all([
    prisma.town.findUnique({
      where: { id: OLD_ID },
      include: {
        outgoingLinks: true,
        incomingLinks: true,
        sourceTowns: true,
        events: { select: { id: true, name: true } },
        townPeople: { select: { personId: true } },
        places: { select: { id: true, name: true } },
        stories: { select: { id: true } },
      },
    }),
    prisma.town.findUnique({ where: { id: NEW_ID }, select: { id: true, name: true, slug: true } }),
  ]);

  if (!oldTown) {
    console.log(`✓ Old town ${OLD_ID} not found — already deleted. Nothing to do.`);
    return;
  }
  if (!newTown) {
    console.error(`✗ New town ${NEW_ID} not found. Aborting.`);
    process.exit(1);
  }

  console.log(`Old town: ${oldTown.name} (${OLD_ID})`);
  console.log(`  Events:       ${oldTown.events.length}`);
  console.log(`  People:       ${oldTown.townPeople.length}`);
  console.log(`  Places:       ${oldTown.places.length}`);
  console.log(`  Stories:      ${oldTown.stories.length}`);
  console.log(`  Sources:      ${oldTown.sourceTowns.length}`);
  console.log(`  OutLinks:     ${oldTown.outgoingLinks.length}`);
  console.log(`  InLinks:      ${oldTown.incomingLinks.length}\n`);

  if (oldTown.events.length + oldTown.townPeople.length + oldTown.places.length + oldTown.stories.length > 0) {
    console.error("✗ Old town has events/people/places/stories — manual content migration needed before this script.");
    process.exit(1);
  }

  // ── Migrate outgoing TownLinks ───────────────────────────────────────────
  let linksOut = 0;
  for (const link of oldTown.outgoingLinks) {
    // Skip if a duplicate already exists in the new town
    const duplicate = await prisma.townLink.findFirst({
      where: { fromTownId: NEW_ID, toTownId: link.toTownId, type: link.type },
    });
    if (duplicate) {
      console.log(`  Skip duplicate outgoing link: ${NEW_ID} → ${link.toTownId} (${link.type})`);
      continue;
    }
    if (!DRY_RUN) {
      await prisma.townLink.update({
        where: { id: link.id },
        data: { fromTownId: NEW_ID },
      });
    }
    console.log(`  Migrate outgoing link: ${link.type} → ${link.toTownId}`);
    linksOut++;
  }

  // ── Migrate incoming TownLinks ───────────────────────────────────────────
  let linksIn = 0;
  for (const link of oldTown.incomingLinks) {
    const duplicate = await prisma.townLink.findFirst({
      where: { fromTownId: link.fromTownId, toTownId: NEW_ID, type: link.type },
    });
    if (duplicate) {
      console.log(`  Skip duplicate incoming link: ${link.fromTownId} → ${NEW_ID} (${link.type})`);
      continue;
    }
    if (!DRY_RUN) {
      await prisma.townLink.update({
        where: { id: link.id },
        data: { toTownId: NEW_ID },
      });
    }
    console.log(`  Migrate incoming link: ${link.fromTownId} → ${link.type}`);
    linksIn++;
  }

  // ── Migrate SourceTown records ───────────────────────────────────────────
  let sources = 0;
  for (const st of oldTown.sourceTowns) {
    const duplicate = await prisma.sourceTown.findFirst({
      where: { townId: NEW_ID, sourceId: st.sourceId },
    });
    if (duplicate) {
      console.log(`  Skip duplicate source: ${st.sourceId}`);
      continue;
    }
    if (!DRY_RUN) {
      await prisma.sourceTown.update({
        where: { id: st.id },
        data: { townId: NEW_ID },
      });
    }
    console.log(`  Migrate source: ${st.sourceId}`);
    sources++;
  }

  // ── Delete all remaining child records via raw SQL (handles all FK tables) ─
  if (!DRY_RUN) {
    const tables = [
      "TownLink",
      "SourceTown",
      "TownTheme",
      "TownPerson",
      "RouteStop",
      "LessonPlan",
      "PrimarySourcePacket",
      "TeacherWorksheet",
      "PartnerInquiry",
      "EventSubmission",
      "ClusterTown",
      "LocalEvent",
      "EmailSignup",
      "Business",
      "ScoreSnapshot",
      "UpdateDelta",
      "ChangeLogEntry",
      "AnalyticsEvent",
      "TownStewardship",
      "Organization",
    ];

    let totalDeleted = 0;
    for (const table of tables) {
      try {
        // Try townId first; TownLink uses fromTownId/toTownId
        if (table === "TownLink") {
          const r1 = await prisma.$executeRawUnsafe(
            `DELETE FROM "TownLink" WHERE "fromTownId" = $1 OR "toTownId" = $1`,
            OLD_ID
          );
          totalDeleted += r1;
        } else {
          const r = await prisma.$executeRawUnsafe(
            `DELETE FROM "${table}" WHERE "townId" = $1`,
            OLD_ID
          );
          totalDeleted += r;
        }
      } catch {
        // Table may not have townId — silently skip
      }
    }
    if (totalDeleted > 0) {
      console.log(`  Deleted ${totalDeleted} orphaned child records across all related tables`);
    }
  }

  // ── Delete old town ──────────────────────────────────────────────────────
  if (!DRY_RUN) {
    await prisma.town.delete({ where: { id: OLD_ID } });
    console.log(`\n✓ Deleted old town record: ${OLD_ID}`);
  } else {
    console.log(`\n[DRY RUN] Would delete: ${OLD_ID}`);
  }

  console.log(`
Summary:
  Outgoing links migrated: ${linksOut}
  Incoming links migrated: ${linksIn}
  Sources migrated:        ${sources}
  ${DRY_RUN ? "No writes made (dry run)" : "All changes committed."}
`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
