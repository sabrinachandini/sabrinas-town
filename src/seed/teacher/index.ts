// MODEL: Claude Sonnet
// Teacher seed data aggregation and upsert logic

import prisma from '../../db/client.js';
import { lexingtonLessonPlans, lexingtonPrimarySourcePackets, lexingtonTeacherWorksheets } from './lexington.js';
import { concordLessonPlans, concordPrimarySourcePackets, concordTeacherWorksheets } from './concord.js';
import { bostonLessonPlans, bostonPrimarySourcePackets, bostonTeacherWorksheets } from './boston.js';
import { salemLessonPlans, salemPrimarySourcePackets, salemTeacherWorksheets } from './salem.js';
import { marbleheadLessonPlans, marbleheadPrimarySourcePackets, marbleheadTeacherWorksheets } from './marblehead.js';
import { cambridgeLessonPlans, cambridgePrimarySourcePackets, cambridgeTeacherWorksheets } from './cambridge.js';
import { arlingtonLessonPlans, arlingtonPrimarySourcePackets, arlingtonTeacherWorksheets } from './arlington.js';
import { plymouthLessonPlans, plymouthPrimarySourcePackets, plymouthTeacherWorksheets } from './plymouth.js';
import { worcesterLessonPlans, worcesterPrimarySourcePackets, worcesterTeacherWorksheets } from './worcester.js';
import { springfieldLessonPlans, springfieldPrimarySourcePackets, springfieldTeacherWorksheets } from './springfield.js';
import { morristownLessonPlans, morristownPrimarySourcePackets, morristownTeacherWorksheets } from './morristown.js';
import { Prisma } from '@prisma/client';

interface TeacherSeedSet {
  name: string;
  lessonPlans: Prisma.LessonPlanCreateInput[];
  primarySourcePackets: Prisma.PrimarySourcePacketCreateInput[];
  teacherWorksheets: Prisma.TeacherWorksheetCreateInput[];
}

const TEACHER_SEED_SETS: TeacherSeedSet[] = [
  {
    name: 'Lexington',
    lessonPlans: lexingtonLessonPlans,
    primarySourcePackets: lexingtonPrimarySourcePackets,
    teacherWorksheets: lexingtonTeacherWorksheets,
  },
  {
    name: 'Concord',
    lessonPlans: concordLessonPlans,
    primarySourcePackets: concordPrimarySourcePackets,
    teacherWorksheets: concordTeacherWorksheets,
  },
  {
    name: 'Boston',
    lessonPlans: bostonLessonPlans,
    primarySourcePackets: bostonPrimarySourcePackets,
    teacherWorksheets: bostonTeacherWorksheets,
  },
  {
    name: 'Salem',
    lessonPlans: salemLessonPlans,
    primarySourcePackets: salemPrimarySourcePackets,
    teacherWorksheets: salemTeacherWorksheets,
  },
  {
    name: 'Marblehead',
    lessonPlans: marbleheadLessonPlans,
    primarySourcePackets: marbleheadPrimarySourcePackets,
    teacherWorksheets: marbleheadTeacherWorksheets,
  },
  {
    name: 'Cambridge',
    lessonPlans: cambridgeLessonPlans,
    primarySourcePackets: cambridgePrimarySourcePackets,
    teacherWorksheets: cambridgeTeacherWorksheets,
  },
  {
    name: 'Arlington',
    lessonPlans: arlingtonLessonPlans,
    primarySourcePackets: arlingtonPrimarySourcePackets,
    teacherWorksheets: arlingtonTeacherWorksheets,
  },
  {
    name: 'Plymouth',
    lessonPlans: plymouthLessonPlans,
    primarySourcePackets: plymouthPrimarySourcePackets,
    teacherWorksheets: plymouthTeacherWorksheets,
  },
  {
    name: 'Worcester',
    lessonPlans: worcesterLessonPlans,
    primarySourcePackets: worcesterPrimarySourcePackets,
    teacherWorksheets: worcesterTeacherWorksheets,
  },
  {
    name: 'Springfield',
    lessonPlans: springfieldLessonPlans,
    primarySourcePackets: springfieldPrimarySourcePackets,
    teacherWorksheets: springfieldTeacherWorksheets,
  },
  {
    name: 'Morristown',
    lessonPlans: morristownLessonPlans,
    primarySourcePackets: morristownPrimarySourcePackets,
    teacherWorksheets: morristownTeacherWorksheets,
  },
];

/**
 * Seed all teacher content for MA towns.
 * Uses create (not upsert) since these have cuid() IDs.
 * Deletes existing records for each town first to allow re-seeding.
 */
export async function seedTeacherContent(): Promise<{
  lessonPlans: number;
  primarySourcePackets: number;
  teacherWorksheets: number;
}> {
  let totalLessonPlans = 0;
  let totalPrimarySourcePackets = 0;
  let totalTeacherWorksheets = 0;

  for (const seedSet of TEACHER_SEED_SETS) {
    // Extract townId from the connect relation
    const townId = (seedSet.lessonPlans[0]?.town as { connect: { id: string } })?.connect?.id;
    if (!townId) continue;

    // Verify town exists
    const town = await prisma.town.findUnique({ where: { id: townId } });
    if (!town) {
      console.log(`   ⚠ Town ${townId} not found, skipping ${seedSet.name} teacher content`);
      continue;
    }

    // Delete existing teacher content for this town (idempotent re-seed)
    await prisma.teacherWorksheet.deleteMany({ where: { townId } });
    await prisma.primarySourcePacket.deleteMany({ where: { townId } });
    await prisma.lessonPlan.deleteMany({ where: { townId } });

    // Seed lesson plans
    for (const lp of seedSet.lessonPlans) {
      await prisma.lessonPlan.create({ data: lp });
    }
    totalLessonPlans += seedSet.lessonPlans.length;

    // Seed primary source packets
    for (const psp of seedSet.primarySourcePackets) {
      await prisma.primarySourcePacket.create({ data: psp });
    }
    totalPrimarySourcePackets += seedSet.primarySourcePackets.length;

    // Seed teacher worksheets
    for (const ws of seedSet.teacherWorksheets) {
      await prisma.teacherWorksheet.create({ data: ws });
    }
    totalTeacherWorksheets += seedSet.teacherWorksheets.length;

    console.log(`   ✓ ${seedSet.name}: ${seedSet.lessonPlans.length} lesson plans, ${seedSet.primarySourcePackets.length} source packets, ${seedSet.teacherWorksheets.length} worksheets`);
  }

  return {
    lessonPlans: totalLessonPlans,
    primarySourcePackets: totalPrimarySourcePackets,
    teacherWorksheets: totalTeacherWorksheets,
  };
}
