/**
 * Checks all PrimarySourcePacket URLs for HTTP errors.
 * Outputs a JSON summary of failing URLs.
 *
 * Usage:
 *   npx tsx scripts/check-source-urls.ts
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

interface CheckResult {
  id: string;
  title: string;
  publisherOrHolder: string;
  url: string | null;
  status: number | string;
  ok: boolean;
}

async function checkUrl(url: string): Promise<{ status: number | string; ok: boolean }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SabrinasTown URL checker)",
      },
    });
    clearTimeout(timeout);
    // Some servers don't support HEAD — treat 405 as possibly OK, retry with GET
    if (res.status === 405) {
      const res2 = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; SabrinasTown URL checker)",
        },
      });
      return { status: res2.status, ok: res2.ok };
    }
    return { status: res.status, ok: res.ok };
  } catch (err: any) {
    clearTimeout(timeout);
    return { status: err?.name === "AbortError" ? "TIMEOUT" : `ERROR: ${err?.message}`, ok: false };
  }
}

async function main() {
  const sources = await prisma.primarySourcePacket.findMany({
    select: { id: true, title: true, publisherOrHolder: true, url: true },
    orderBy: { displayOrder: "asc" },
  });

  console.log(`Checking ${sources.length} records...\n`);

  const results: CheckResult[] = [];

  for (const source of sources) {
    process.stdout.write(`  ${source.title.slice(0, 55).padEnd(55)} `);
    if (!source.url) {
      console.log("NO URL");
      results.push({ ...source, url: null, status: "NO_URL", ok: false });
      continue;
    }
    const { status, ok } = await checkUrl(source.url);
    const icon = ok ? "✓" : "✗";
    console.log(`${icon} ${status}  ${source.url}`);
    results.push({ ...source, url: source.url, status, ok });
  }

  const failing = results.filter((r) => !r.ok);
  console.log(`\n── Summary ──`);
  console.log(`Total: ${results.length}`);
  console.log(`OK:    ${results.filter((r) => r.ok).length}`);
  console.log(`FAIL:  ${failing.length}`);

  if (failing.length > 0) {
    console.log("\n── Failing records (JSON) ──");
    console.log(JSON.stringify(failing, null, 2));
  }

  await prisma.$disconnect();
}

main();
