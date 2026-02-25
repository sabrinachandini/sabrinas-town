// MODEL: Claude Sonnet
// Validates whether a town has sufficient curated teacher content
// Usage: npx tsx src/scripts/validateTeacherReady.ts <town-slug>

import prisma from '../db/client.js';

const TEACHER_REQUIREMENTS = {
  lessonPlans: 1,
  primarySourcePackets: 3,
  teacherWorksheets: 2,
  quizQuestions: 5,
  standardsPresent: true,
};

export async function validateTeacherReady(slug: string) {
  const town = await prisma.town.findUnique({
    where: { slug },
    include: {
      lessonPlans: { where: { published: true } },
      primarySourcePackets: { where: { published: true } },
      teacherWorksheets: { where: { published: true } },
    },
  });

  if (!town) return null;

  const lessonPlanCount = town.lessonPlans.length;
  const sourcePacketCount = town.primarySourcePackets.length;
  const worksheetCount = town.teacherWorksheets.length;

  // Count quiz questions across all QUIZ worksheets
  let quizQuestionCount = 0;
  for (const ws of town.teacherWorksheets) {
    if (ws.worksheetType === 'QUIZ' && ws.quizData) {
      const qd = ws.quizData as { questions?: unknown[] };
      quizQuestionCount += qd.questions?.length || 0;
    }
  }

  // Check standards in first lesson plan
  const hasStandards = town.lessonPlans.length > 0 && town.lessonPlans[0].standards !== null;

  const failures: string[] = [];
  if (lessonPlanCount < TEACHER_REQUIREMENTS.lessonPlans) failures.push(`LessonPlans: ${lessonPlanCount}/${TEACHER_REQUIREMENTS.lessonPlans}`);
  if (sourcePacketCount < TEACHER_REQUIREMENTS.primarySourcePackets) failures.push(`PrimarySourcePackets: ${sourcePacketCount}/${TEACHER_REQUIREMENTS.primarySourcePackets}`);
  if (worksheetCount < TEACHER_REQUIREMENTS.teacherWorksheets) failures.push(`TeacherWorksheets: ${worksheetCount}/${TEACHER_REQUIREMENTS.teacherWorksheets}`);
  if (quizQuestionCount < TEACHER_REQUIREMENTS.quizQuestions) failures.push(`QuizQuestions: ${quizQuestionCount}/${TEACHER_REQUIREMENTS.quizQuestions}`);
  if (!hasStandards) failures.push('Standards: missing');

  const passed = failures.length === 0;

  return {
    townId: town.id,
    townName: town.name,
    slug: town.slug,
    passed,
    metrics: { lessonPlanCount, sourcePacketCount, worksheetCount, quizQuestionCount, hasStandards },
    failures,
  };
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.log('Usage: npx tsx src/scripts/validateTeacherReady.ts <town-slug>');
    process.exit(1);
  }

  const result = await validateTeacherReady(slug);
  if (!result) {
    console.log(`Town not found: ${slug}`);
    process.exit(1);
  }

  const status = result.passed ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
  console.log(`\n${status} ${result.townName} (${result.slug})`);
  console.log('─'.repeat(40));
  console.log(`  Lesson Plans:     ${result.metrics.lessonPlanCount}`);
  console.log(`  Source Packets:   ${result.metrics.sourcePacketCount}`);
  console.log(`  Worksheets:       ${result.metrics.worksheetCount}`);
  console.log(`  Quiz Questions:   ${result.metrics.quizQuestionCount}`);
  console.log(`  Standards:        ${result.metrics.hasStandards ? 'Yes' : 'No'}`);

  if (!result.passed) {
    console.log('\n  Failures:');
    for (const f of result.failures) console.log(`    - ${f}`);
  }

  await prisma.$disconnect();
  process.exit(result.passed ? 0 : 1);
}

const isMainModule = process.argv[1]?.includes('validateTeacherReady');
if (isMainModule) {
  main().catch((e) => { console.error('Error:', e); process.exit(1); });
}
