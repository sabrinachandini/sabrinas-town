/**
 * MODEL: Claude Sonnet
 * Validates all external source URLs in the DB via HEAD requests.
 * Exit code 1 if any failures found.
 * Usage (from project root): npx tsx web/scripts/validateExternalLinks.ts
 */

import prisma from '../../src/db/client.js';

const TIMEOUT_MS = 10000;

async function checkUrl(url: string): Promise<{ ok: boolean; status?: number; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
    });
    clearTimeout(timer);
    return { ok: res.ok, status: res.status };
  } catch (err: any) {
    clearTimeout(timer);
    return { ok: false, error: err?.message ?? 'Unknown error' };
  }
}

async function main() {
  const sources = await prisma.source.findMany({
    where: { url: { not: null } },
    select: { id: true, title: true, url: true },
  });

  console.log(`Checking ${sources.length} external source URLs...`);

  let passed = 0;
  let failed = 0;
  const failures: { url: string; title: string; status?: number; error?: string }[] = [];

  for (const source of sources) {
    if (!source.url) continue;
    const result = await checkUrl(source.url);
    if (result.ok) {
      passed++;
    } else {
      failed++;
      failures.push({ url: source.url, title: source.title, ...result });
    }
  }

  console.log(`\nPassed: ${passed} / ${sources.length}`);

  if (failures.length > 0) {
    console.error(`\nFailed URLs (${failures.length}):`);
    for (const f of failures) {
      const detail = f.status ? `HTTP ${f.status}` : f.error ?? 'Unknown';
      console.error(`  [${detail}] ${f.url}`);
      console.error(`         "${f.title}"`);
    }
    await prisma.$disconnect();
    process.exit(1);
  }

  console.log('All source URLs passed.');
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
