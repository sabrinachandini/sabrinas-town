// MODEL: Claude Sonnet
// Lightweight smoke tests for the teacher pipeline
// Usage: npx tsx src/scripts/smokeTestTeacher.ts
// Note: Print page is Next.js SSR, not testable from API layer. Verify manually.

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

interface TestResult {
  name: string;
  passed: boolean;
  detail: string;
}

async function testHealth(): Promise<TestResult> {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    const body = await res.json() as { status?: string };

    if (res.status !== 200) {
      return { name: 'GET /health', passed: false, detail: `Status ${res.status}` };
    }
    if (body.status !== 'ok') {
      return { name: 'GET /health', passed: false, detail: `status=${body.status}` };
    }

    return { name: 'GET /health', passed: true, detail: `200, status=ok` };
  } catch (error) {
    return { name: 'GET /health', passed: false, detail: `${error instanceof Error ? error.message : String(error)}` };
  }
}

async function testTeacherCurated(): Promise<TestResult> {
  try {
    const res = await fetch(`${BASE_URL}/towns/lexington-ma/teacher`);
    const body = await res.json() as { meta?: { contentSource?: string } };

    if (res.status !== 200) {
      return { name: 'GET /towns/lexington-ma/teacher', passed: false, detail: `Status ${res.status}` };
    }
    if (body.meta?.contentSource !== 'curated') {
      return { name: 'GET /towns/lexington-ma/teacher', passed: false, detail: `contentSource=${body.meta?.contentSource}` };
    }

    return { name: 'GET /towns/lexington-ma/teacher', passed: true, detail: `200, contentSource=curated` };
  } catch (error) {
    return { name: 'GET /towns/lexington-ma/teacher', passed: false, detail: `${error instanceof Error ? error.message : String(error)}` };
  }
}

async function testCompare(): Promise<TestResult> {
  try {
    const res = await fetch(`${BASE_URL}/compare/teacher?townA=salem-ma&townB=marblehead-ma`);
    const body = await res.json() as { data?: { townA?: unknown; townB?: unknown } };

    if (res.status !== 200) {
      return { name: 'GET /compare/teacher (Salem/Marblehead)', passed: false, detail: `Status ${res.status}` };
    }

    const hasBoth = body.data?.townA && body.data?.townB;
    if (!hasBoth) {
      return { name: 'GET /compare/teacher (Salem/Marblehead)', passed: false, detail: `Missing module(s)` };
    }

    return { name: 'GET /compare/teacher (Salem/Marblehead)', passed: true, detail: `200, both modules present` };
  } catch (error) {
    return { name: 'GET /compare/teacher (Salem/Marblehead)', passed: false, detail: `${error instanceof Error ? error.message : String(error)}` };
  }
}

async function testFallback(): Promise<TestResult> {
  try {
    const res = await fetch(`${BASE_URL}/towns/arlington-ma/teacher`);

    if (res.status !== 200) {
      return { name: 'GET /towns/arlington-ma/teacher (fallback)', passed: false, detail: `Status ${res.status}` };
    }

    return { name: 'GET /towns/arlington-ma/teacher (fallback)', passed: true, detail: `200, renders (curated or fallback)` };
  } catch (error) {
    return { name: 'GET /towns/arlington-ma/teacher (fallback)', passed: false, detail: `${error instanceof Error ? error.message : String(error)}` };
  }
}

async function main() {
  console.log('💨 Teacher Smoke Tests');
  console.log(`Target: ${BASE_URL}`);
  console.log('======================\n');

  const results: TestResult[] = [];

  results.push(await testHealth());
  results.push(await testTeacherCurated());
  results.push(await testCompare());
  results.push(await testFallback());

  // Print results
  const header = ['Test'.padEnd(50), 'Status'.padStart(6), 'Detail'].join('  ');
  console.log(header);
  console.log('-'.repeat(header.length + 20));

  for (const r of results) {
    const status = r.passed
      ? `${GREEN}PASS${RESET}`
      : `${RED}FAIL${RESET}`;
    console.log([r.name.padEnd(50), status.padStart(6 + 9), r.detail].join('  '));
  }

  const passing = results.filter((r) => r.passed).length;
  const total = results.length;
  const allPassed = passing === total;

  console.log('\n' + '-'.repeat(header.length + 20));
  const color = allPassed ? GREEN : RED;
  console.log(`${color}${passing}/${total} smoke tests passed${RESET}`);

  console.log('\nManual verification needed:');
  console.log('  - Print page: /towns/lexington-ma/teacher/print (browser print dialog)');

  process.exit(allPassed ? 0 : 1);
}

main().catch((e) => {
  console.error('Smoke test error:', e);
  process.exit(1);
});
