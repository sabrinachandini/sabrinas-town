/**
 * Automated accessibility audit using axe-core via Playwright.
 *
 * Run against the local dev server (port 3000):
 *   npx tsx scripts/a11y-check.ts
 *
 * Exit code 1 if any violations found — CI-safe.
 * Install once: pnpm add -D @playwright/test @axe-core/playwright
 */

import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.A11Y_BASE_URL ?? "http://localhost:3000";

const PATHS = [
  "/",
  "/towns",
  "/towns/boston-ma",
  "/towns/boston-ma/timeline",
  "/towns/boston-ma/people",
  "/map",
  "/teach",
  "/partner/inquire",
  "/muster/new",
];

const IGNORE_RULES: string[] = [
  // MapLibre GL canvas — third-party, no fix available from our side
  "canvas-capture",
];

async function audit() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  let totalViolations = 0;
  const report: Array<{ path: string; count: number; items: string[] }> = [];

  for (const path of PATHS) {
    const url = `${BASE}${path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    } catch {
      console.warn(`⚠ Could not load ${url} — skipping`);
      continue;
    }

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .disableRules(IGNORE_RULES)
      .analyze();

    const count = results.violations.length;
    totalViolations += count;

    const items = results.violations.map(
      (v) => `  [${v.impact?.toUpperCase()}] ${v.id}: ${v.description} (${v.nodes.length} node${v.nodes.length === 1 ? "" : "s"})`
    );

    report.push({ path, count, items });

    const icon = count === 0 ? "✓" : "✗";
    console.log(`${icon}  ${path}  (${count} violation${count === 1 ? "" : "s"})`);
    for (const item of items) console.log(item);
  }

  await browser.close();

  console.log(`\n─────────────────────────────────`);
  console.log(`Total violations: ${totalViolations}`);
  console.log(`Pages checked: ${PATHS.length}`);

  if (totalViolations > 0) {
    console.error("\n❌ Accessibility violations found. Fix before merging.\n");
    process.exit(1);
  } else {
    console.log("\n✅ No violations found.\n");
  }
}

audit().catch((e) => { console.error(e); process.exit(1); });
