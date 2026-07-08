/**
 * Phase 1 — Source Integrity
 * Checks standards codes and flags state-specific codes that can't be verified.
 * Checks for potential quotes in lesson content.
 * Reports broken-link candidates (packets with no URL).
 * NOTE: LessonPlan model has no needsReview field — issues are logged only.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

// CCSS patterns that are verifiable (well-documented national standards)
const KNOWN_CCSS = /^CCSS\.ELA-LITERACY\.(RH|WHST|RI|W)\./;
// C3 Framework patterns (verifiable national standards)
const KNOWN_C3 = /^D2\.(His|Civ|Geo|Eco|Psy|Soc)\.\d+\.\d+-\d+/;
// AP History periods (verifiable)
const KNOWN_AP = /^AP (US|World|European) History/;

function classifyCode(code: string): "VERIFIED" | "NEEDS_REVIEW" {
  const c = code.trim();
  if (KNOWN_CCSS.test(c)) return "VERIFIED";
  if (KNOWN_C3.test(c)) return "VERIFIED";
  if (KNOWN_AP.test(c)) return "VERIFIED";
  return "NEEDS_REVIEW";
}

async function main() {
  console.log("=== PHASE 1: SOURCE INTEGRITY ===\n");

  const plans = await prisma.lessonPlan.findMany({
    include: { town: { select: { name: true, state: true } } },
  });

  let reviewCount = 0;
  const reviewList: string[] = [];

  // --- Standards check ---
  console.log("--- Standards Codes Classification ---");
  const allStateCodesFound: { code: string; town: string }[] = [];

  for (const plan of plans) {
    const std = plan.standards as Record<string, unknown> | null;
    if (!std) continue;

    const allCodes: string[] = [
      ...((std.commonCore as string[]) || []),
      ...((std.c3Framework as string[]) || []),
    ];
    const stateStd = std.stateStandards as Record<string, string> | undefined;
    if (stateStd?.placeholder) allCodes.push(stateStd.placeholder);

    const needsReviewCodes = allCodes.filter(c => classifyCode(c) === "NEEDS_REVIEW");
    if (needsReviewCodes.length > 0) {
      reviewCount++;
      needsReviewCodes.forEach(c => {
        allStateCodesFound.push({ code: c, town: `${plan.town.name} (${plan.town.state})` });
      });
    }
  }

  const uniqueStateCodes = [...new Map(allStateCodesFound.map(i => [i.code, i])).values()];
  console.log(`\nUnverifiable state standards codes found: ${uniqueStateCodes.length}`);
  uniqueStateCodes.slice(0, 20).forEach(({ code, town }) => {
    console.log(`  NEEDS_REVIEW: "${code}" — first seen in ${town}`);
  });

  // --- Packets with no URL ---
  const packets = await prisma.primarySourcePacket.findMany({
    include: { town: { select: { name: true, state: true } } },
  });
  const noUrlPackets = packets.filter(p => !p.url);
  console.log(`\n--- PrimarySourcePackets with no URL: ${noUrlPackets.length} ---`);
  noUrlPackets.slice(0, 10).forEach(p => {
    console.log(`  ⚠ ${p.title} — ${p.town.name} (${p.town.state})`);
  });

  // --- Check for quotes in lesson content ---
  console.log("\n--- Quote check in lesson lessonData ---");
  let quotedPlanCount = 0;
  const quotePattern = /"[^"]{20,200}"/g;
  for (const plan of plans) {
    const text = JSON.stringify(plan.lessonData);
    const matches = text.match(quotePattern);
    if (matches && matches.length > 0) {
      // Filter out JSON structure quotes — look for prose-like quotes
      const likelyQuotes = matches.filter(m => /[a-zA-Z]{10,}/.test(m) && m.includes(" "));
      if (likelyQuotes.length > 0) {
        quotedPlanCount++;
        if (quotedPlanCount <= 5) {
          console.log(`  ⚠ ${plan.town.name}: ${likelyQuotes.length} potential quote(s) in lessonData`);
          likelyQuotes.slice(0, 2).forEach(q => console.log(`    → ${q.slice(0, 80)}...`));
        }
      }
    }
  }
  console.log(`\nTotal plans with potential inline quotes: ${quotedPlanCount}`);
  console.log("NOTE: Cannot auto-verify quotes without transcription DB. Flag for manual review.");

  // Summary
  console.log("\n=== PHASE 1 SUMMARY ===");
  console.log(`Standards codes needing review: ${uniqueStateCodes.length} unique codes across ${reviewCount} plans`);
  console.log(`Source packets with no URL: ${noUrlPackets.length}`);
  console.log(`Plans with inline quotes (manual review needed): ${quotedPlanCount}`);
  console.log("\nNOTE: LessonPlan model has no needsReview field.");
  console.log("Recommendation: add needsReview Boolean to LessonPlan in a schema migration.");
  console.log("For now, issues are logged in TEACH-REPORT.md for manual review.");

  await prisma.$disconnect();
}

main().catch(e => { console.error(e); process.exit(1); });
