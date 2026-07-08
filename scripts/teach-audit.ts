import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

async function main() {
  console.log("=== PHASE 0: TEACH SECTION AUDIT ===\n");

  // 1. Towns with lesson plans
  const towns = await prisma.town.findMany({
    include: {
      lessonPlans: { select: { id: true, published: true, title: true, standards: true, gradeRange: true } },
      primarySourcePackets: { select: { id: true, published: true, url: true, credibilityTier: true } },
      teacherWorksheets: { select: { id: true, published: true, worksheetType: true, quizData: true, content: true } },
    },
  });

  const townsWithModules = towns.filter(t => t.lessonPlans.length > 0 || t.primarySourcePackets.length > 0);
  console.log(`Towns with any teacher content: ${townsWithModules.length}`);
  console.log(`Towns with LessonPlans: ${towns.filter(t => t.lessonPlans.length > 0).length}`);

  const allLPs = towns.flatMap(t => t.lessonPlans);
  const publishedLPs = allLPs.filter(lp => lp.published);
  const draftLPs = allLPs.filter(lp => !lp.published);
  console.log(`\nLessonPlans: ${allLPs.length} total (${publishedLPs.length} published, ${draftLPs.length} draft)`);

  // 2. LessonPlans by town
  console.log("\n--- LessonPlans by Town ---");
  towns.filter(t => t.lessonPlans.length > 0).forEach(t => {
    const pub = t.lessonPlans.filter(lp => lp.published).length;
    const draft = t.lessonPlans.filter(lp => !lp.published).length;
    console.log(`  ${t.name} (${t.state}): ${pub} pub, ${draft} draft`);
  });

  // 3. PrimarySourcePackets
  const allPSP = towns.flatMap(t => t.primarySourcePackets);
  console.log(`\nPrimarySourcePackets: ${allPSP.length} total`);
  console.log(`  With URL: ${allPSP.filter(p => p.url).length}`);
  console.log(`  Without URL: ${allPSP.filter(p => !p.url).length}`);
  console.log(`  TIER1: ${allPSP.filter(p => p.credibilityTier === "TIER1").length}`);
  console.log(`  TIER2: ${allPSP.filter(p => p.credibilityTier === "TIER2").length}`);
  console.log(`  TIER3: ${allPSP.filter(p => p.credibilityTier === "TIER3").length}`);
  console.log(`  TODO: ${allPSP.filter(p => p.credibilityTier === "TODO").length}`);

  // 4. TeacherWorksheets / Quiz
  const allWS = towns.flatMap(t => t.teacherWorksheets);
  const quizzes = allWS.filter(w => w.worksheetType === "QUIZ");
  console.log(`\nTeacherWorksheets: ${allWS.length} total`);
  console.log(`  Quizzes: ${quizzes.length}`);
  
  // Check for placeholder text in quiz data
  let placeholderCount = 0;
  quizzes.forEach(q => {
    const str = JSON.stringify(q.quizData) + q.content;
    if (str.includes("placeholder") || str.includes("TODO") || str.includes("PLACEHOLDER") || str.includes("[Question")) {
      placeholderCount++;
      console.log(`  ⚠ PLACEHOLDER quiz: ${q.id}`);
    }
  });
  if (placeholderCount === 0) console.log("  No obvious placeholders found");

  // 5. Standards codes
  console.log("\n--- Standards Codes in LessonPlans ---");
  const allStandardsCodes: string[] = [];
  allLPs.forEach(lp => {
    const std = lp.standards as Record<string, unknown> | null;
    if (!std) return;
    const commonCore = (std.commonCore as string[]) || [];
    const c3 = (std.c3Framework as string[]) || [];
    allStandardsCodes.push(...commonCore, ...c3);
    const state = std.stateStandards as Record<string, string> | undefined;
    if (state?.placeholder) allStandardsCodes.push(state.placeholder);
  });
  const uniqueCodes = [...new Set(allStandardsCodes)];
  console.log(`Total unique standards codes: ${uniqueCodes.length}`);
  uniqueCodes.forEach(c => console.log(`  ${c}`));

  // 6. Sources (global)
  const sources = await prisma.source.findMany({
    include: { primarySourcePackets: true },
  });
  console.log(`\nSource records: ${sources.length} total`);
  console.log(`  Sources linked to packets: ${sources.filter(s => s.primarySourcePackets.length > 0).length}`);
  console.log(`  Sources with URL: ${sources.filter(s => s.url).length}`);
  console.log(`  Sources without URL: ${sources.filter(s => !s.url).length}`);
  console.log(`  TIER1: ${sources.filter(s => s.credibilityTier === "TIER1").length}`);
  console.log(`  TIER2: ${sources.filter(s => s.credibilityTier === "TIER2").length}`);
  console.log(`  TIER3: ${sources.filter(s => s.credibilityTier === "TIER3").length}`);
  console.log(`  TODO: ${sources.filter(s => s.credibilityTier === "TODO").length}`);

  // 7. LessonPlans with no primary source packets
  console.log("\n--- Orphaned LessonPlans (no primary source packets in their town) ---");
  const orphaned = towns.filter(t => t.lessonPlans.length > 0 && t.primarySourcePackets.length === 0);
  orphaned.forEach(t => {
    console.log(`  ⚠ ${t.name} (${t.state}): ${t.lessonPlans.length} lesson plan(s), 0 source packets`);
  });
  if (orphaned.length === 0) console.log("  None found");

  await prisma.$disconnect();
}

main().catch(e => { console.error(e); process.exit(1); });
