// MODEL: Claude Sonnet
// Deployment preflight checks for the teacher pipeline
// Usage: npx tsx src/scripts/preflightTeacherDeploy.ts

import prisma from '../db/client.js';
import { seedTeacherContent } from '../seed/teacher/index.js';
import { buildApp } from '../app.js';

interface CheckResult {
  name: string;
  passed: boolean;
  detail: string;
}

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

async function checkMigrations(): Promise<CheckResult> {
  try {
    const migrations = await prisma.$queryRaw<
      Array<{ migration_name: string; finished_at: Date | null }>
    >`SELECT migration_name, finished_at FROM _prisma_migrations ORDER BY started_at DESC`;

    const pending = migrations.filter((m) => m.finished_at === null);
    if (pending.length > 0) {
      return {
        name: 'Migrations',
        passed: false,
        detail: `${pending.length} pending/failed migration(s): ${pending.map((m) => m.migration_name).join(', ')}`,
      };
    }

    return {
      name: 'Migrations',
      passed: true,
      detail: `${migrations.length} migration(s), all applied`,
    };
  } catch (error) {
    return {
      name: 'Migrations',
      passed: false,
      detail: `Failed to query migrations: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

async function checkIdempotency(): Promise<CheckResult> {
  try {
    const first = await seedTeacherContent();
    const second = await seedTeacherContent();

    const match =
      first.lessonPlans === second.lessonPlans &&
      first.primarySourcePackets === second.primarySourcePackets &&
      first.teacherWorksheets === second.teacherWorksheets;

    if (!match) {
      return {
        name: 'Seed Idempotency',
        passed: false,
        detail: `Counts differ: first(${first.lessonPlans}/${first.primarySourcePackets}/${first.teacherWorksheets}) vs second(${second.lessonPlans}/${second.primarySourcePackets}/${second.teacherWorksheets})`,
      };
    }

    return {
      name: 'Seed Idempotency',
      passed: true,
      detail: `LP=${first.lessonPlans} SP=${first.primarySourcePackets} WS=${first.teacherWorksheets} — consistent across runs`,
    };
  } catch (error) {
    return {
      name: 'Seed Idempotency',
      passed: false,
      detail: `Seed failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

async function checkHealthEndpoint(): Promise<CheckResult> {
  let app;
  let address: string;

  try {
    app = await buildApp();
    // Listen on a random available port to avoid conflicts
    address = await app.listen({ port: 0, host: '127.0.0.1' });
  } catch (error) {
    return {
      name: 'Health Endpoint',
      passed: false,
      detail: `Server failed to start: ${error instanceof Error ? error.message : String(error)}`,
    };
  }

  try {
    const res = await fetch(`${address}/health`);
    const body = await res.json() as { status?: string; db?: string };

    if (res.status !== 200 || body.status !== 'ok' || body.db !== 'connected') {
      return {
        name: 'Health Endpoint',
        passed: false,
        detail: `Unexpected response: status=${body.status}, db=${body.db}`,
      };
    }

    return {
      name: 'Health Endpoint',
      passed: true,
      detail: `status=ok, db=connected`,
    };
  } catch (error) {
    return {
      name: 'Health Endpoint',
      passed: false,
      detail: `Request failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  } finally {
    await app.close();
  }
}

async function checkTeacherEndpoint(): Promise<CheckResult> {
  let app;
  let address: string;

  try {
    app = await buildApp();
    address = await app.listen({ port: 0, host: '127.0.0.1' });
  } catch (error) {
    return {
      name: 'Teacher Endpoint (Lexington)',
      passed: false,
      detail: `Server failed to start: ${error instanceof Error ? error.message : String(error)}`,
    };
  }

  try {
    const res = await fetch(`${address}/towns/lexington-ma/teacher`);
    const body = await res.json() as { success?: boolean; meta?: { contentSource?: string } };

    if (!body.success) {
      return {
        name: 'Teacher Endpoint (Lexington)',
        passed: false,
        detail: `success=false`,
      };
    }

    const contentSource = body.meta?.contentSource;
    if (contentSource !== 'curated') {
      return {
        name: 'Teacher Endpoint (Lexington)',
        passed: false,
        detail: `Expected contentSource=curated, got ${contentSource}`,
      };
    }

    return {
      name: 'Teacher Endpoint (Lexington)',
      passed: true,
      detail: `success=true, contentSource=curated`,
    };
  } catch (error) {
    return {
      name: 'Teacher Endpoint (Lexington)',
      passed: false,
      detail: `Request failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  } finally {
    await app.close();
  }
}

async function checkCompareEndpoint(): Promise<CheckResult> {
  let app;
  let address: string;

  try {
    app = await buildApp();
    address = await app.listen({ port: 0, host: '127.0.0.1' });
  } catch (error) {
    return {
      name: 'Compare Endpoint (Salem/Marblehead)',
      passed: false,
      detail: `Server failed to start: ${error instanceof Error ? error.message : String(error)}`,
    };
  }

  try {
    const res = await fetch(`${address}/compare/teacher?townA=salem-ma&townB=marblehead-ma`);
    const body = await res.json() as { success?: boolean; data?: { townA?: unknown; townB?: unknown } };

    if (!body.success || !body.data) {
      return {
        name: 'Compare Endpoint (Salem/Marblehead)',
        passed: false,
        detail: `success=${body.success}`,
      };
    }

    const hasBoth = body.data.townA && body.data.townB;
    if (!hasBoth) {
      return {
        name: 'Compare Endpoint (Salem/Marblehead)',
        passed: false,
        detail: `Missing one or both teacher modules in comparison`,
      };
    }

    return {
      name: 'Compare Endpoint (Salem/Marblehead)',
      passed: true,
      detail: `Both modules present`,
    };
  } catch (error) {
    return {
      name: 'Compare Endpoint (Salem/Marblehead)',
      passed: false,
      detail: `Request failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  } finally {
    await app.close();
  }
}

async function main() {
  console.log('🔍 Teacher Deploy Preflight Checks');
  console.log('===================================\n');

  const results: CheckResult[] = [];

  console.log('Running check 1/5: Migrations...');
  results.push(await checkMigrations());

  console.log('Running check 2/5: Seed idempotency...');
  results.push(await checkIdempotency());

  console.log('Running check 3/5: Health endpoint...');
  results.push(await checkHealthEndpoint());

  console.log('Running check 4/5: Teacher endpoint (Lexington)...');
  results.push(await checkTeacherEndpoint());

  console.log('Running check 5/5: Compare endpoint (Salem/Marblehead)...');
  results.push(await checkCompareEndpoint());

  // Print results table
  console.log('\n');
  const header = ['Check'.padEnd(35), 'Status'.padStart(6), 'Detail'].join('  ');
  console.log(header);
  console.log('-'.repeat(header.length + 30));

  for (const r of results) {
    const status = r.passed
      ? `${GREEN}PASS${RESET}`
      : `${RED}FAIL${RESET}`;
    console.log([r.name.padEnd(35), status.padStart(6 + 9), r.detail].join('  '));
  }

  const passing = results.filter((r) => r.passed).length;
  const total = results.length;
  const allPassed = passing === total;

  console.log('\n' + '-'.repeat(header.length + 30));
  const color = allPassed ? GREEN : RED;
  console.log(`${color}${passing}/${total} checks passed${RESET}`);

  if (!allPassed) {
    console.log(`\n${RED}Preflight failed. Fix issues before deploying.${RESET}`);
  }

  await prisma.$disconnect();
  process.exit(allPassed ? 0 : 1);
}

main().catch((e) => {
  console.error('Preflight error:', e);
  process.exit(1);
});
