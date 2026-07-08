/**
 * fix-standards-codes.ts
 * Adds missing "CCSS.ELA-LITERACY." prefix to 46 truncated standards codes.
 * Safe: only updates codes that match the truncated pattern.
 * Run: DATABASE_URL=... npx tsx scripts/fix-standards-codes.ts
 */
import { PrismaClient } from "@prisma/client";

const p = new PrismaClient({ datasources: { db: { url: process.env.DATABASE_URL } } });

// These prefixes are real CCSS strands that got their full prefix stripped
const TRUNCATED_PREFIXES = ["RH.", "WHST.", "RST.", "RI.", "W."];

function needsPrefix(code: string): boolean {
  return TRUNCATED_PREFIXES.some((pfx) => code.startsWith(pfx));
}

function fixCode(code: string): string {
  if (needsPrefix(code)) {
    return `CCSS.ELA-LITERACY.${code}`;
  }
  return code;
}

function fixCodes(codes: string[]): { fixed: string[]; changed: number } {
  let changed = 0;
  const fixed = codes.map((c) => {
    const f = fixCode(c.trim());
    if (f !== c.trim()) changed++;
    return f;
  });
  return { fixed, changed };
}

async function main() {
  console.log("=== Fixing Truncated CCSS Standards Codes ===\n");
  let plansUpdated = 0;
  let codesFixed = 0;

  const plans = await p.lessonPlan.findMany({
    select: { id: true, standards: true, town: { select: { name: true } } },
  });

  for (const plan of plans) {
    const std = plan.standards as Record<string, unknown> | null;
    if (!std) continue;

    let dirty = false;
    let planCodesFixed = 0;

    // Fix commonCore array
    const cc = (std.commonCore as string[]) ?? [];
    const { fixed: ccFixed, changed: ccChanged } = fixCodes(cc);
    if (ccChanged > 0) {
      std.commonCore = ccFixed;
      dirty = true;
      planCodesFixed += ccChanged;
    }

    // Fix c3Framework array
    const c3 = (std.c3Framework as string[]) ?? [];
    const { fixed: c3Fixed, changed: c3Changed } = fixCodes(c3);
    if (c3Changed > 0) {
      std.c3Framework = c3Fixed;
      dirty = true;
      planCodesFixed += c3Changed;
    }

    if (dirty) {
      await p.lessonPlan.update({
        where: { id: plan.id },
        data: { standards: std },
      });
      console.log(`  ✓ ${plan.town.name}: fixed ${planCodesFixed} code(s)`);
      plansUpdated++;
      codesFixed += planCodesFixed;
    }
  }

  console.log(`\nDone: ${plansUpdated} plans updated, ${codesFixed} codes fixed`);
  await p.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
