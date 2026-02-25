// MODEL: Claude Sonnet
// Reports teacher content coverage across all 75 towns
// Usage: npx tsx src/scripts/reportTeacherCoverage.ts [--state=MA]

import prisma from '../db/client.js';
import { TOP_75_TOWNS } from '../data/top75.js';

const PASS_CRITERIA = {
  lessonPlans: 1,
  primarySourcePackets: 3,
  teacherWorksheets: 2,
  quizQuestions: 5,
};

async function main() {
  const stateFilter = process.argv.find(a => a.startsWith('--state='))?.split('=')[1]?.toUpperCase();

  console.log('📚 Teacher Content Coverage Report');
  console.log('===================================\n');

  if (stateFilter) console.log(`Filtered: state=${stateFilter}\n`);

  const towns = stateFilter
    ? TOP_75_TOWNS.filter(t => t.state.toUpperCase() === stateFilter)
    : TOP_75_TOWNS;

  const results: Array<{
    name: string;
    slug: string;
    lessons: number;
    sources: number;
    worksheets: number;
    quizQs: number;
    passed: boolean;
  }> = [];

  for (const town of towns) {
    const [lessons, sources, worksheets] = await Promise.all([
      prisma.lessonPlan.count({ where: { townId: town.id, published: true } }),
      prisma.primarySourcePacket.count({ where: { townId: town.id, published: true } }),
      prisma.teacherWorksheet.findMany({ where: { townId: town.id, published: true, worksheetType: 'QUIZ' }, select: { quizData: true } }),
    ]);

    let quizQs = 0;
    for (const ws of worksheets) {
      if (ws.quizData) {
        const qd = ws.quizData as { questions?: unknown[] };
        quizQs += qd.questions?.length || 0;
      }
    }

    const wsCount = await prisma.teacherWorksheet.count({ where: { townId: town.id, published: true } });

    const passed =
      lessons >= PASS_CRITERIA.lessonPlans &&
      sources >= PASS_CRITERIA.primarySourcePackets &&
      wsCount >= PASS_CRITERIA.teacherWorksheets &&
      quizQs >= PASS_CRITERIA.quizQuestions;

    results.push({ name: town.name, slug: town.slug, lessons, sources, worksheets: wsCount, quizQs, passed });
  }

  // Print table
  const header = [
    'Town'.padEnd(25),
    'LP'.padStart(3),
    'SP'.padStart(3),
    'WS'.padStart(3),
    'QQ'.padStart(3),
    'Status'.padStart(6),
  ].join('  ');

  console.log(header);
  console.log('-'.repeat(header.length));

  for (const r of results) {
    const status = r.passed ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
    console.log([
      r.name.padEnd(25),
      String(r.lessons).padStart(3),
      String(r.sources).padStart(3),
      String(r.worksheets).padStart(3),
      String(r.quizQs).padStart(3),
      status.padStart(6 + 9),
    ].join('  '));
  }

  const passing = results.filter(r => r.passed).length;
  const total = results.length;
  const color = passing > 0 ? '\x1b[32m' : '\x1b[33m';
  const reset = '\x1b[0m';

  console.log('\n' + '-'.repeat(header.length));
  console.log(`${color}${passing}/${total} towns teacher-ready${reset}`);
  console.log(`\nLP=LessonPlans(>=${PASS_CRITERIA.lessonPlans}) SP=SourcePackets(>=${PASS_CRITERIA.primarySourcePackets}) WS=Worksheets(>=${PASS_CRITERIA.teacherWorksheets}) QQ=QuizQuestions(>=${PASS_CRITERIA.quizQuestions})`);
}

main()
  .catch((e) => { console.error('Error:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
