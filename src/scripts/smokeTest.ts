// Comprehensive smoke tests for launch verification
// Usage: npx tsx src/scripts/smokeTest.ts
// Env: API_URL (default http://localhost:3000), WEB_URL (optional), ADMIN_TOKEN (optional)

const API_URL = process.env.API_URL || 'http://localhost:3000';
const WEB_URL = process.env.WEB_URL || '';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

interface TestResult {
  name: string;
  passed: boolean;
  skipped?: boolean;
  detail: string;
}

// ---------------------------------------------------------------------------
// API tests
// ---------------------------------------------------------------------------

async function testHealthEndpoint(): Promise<TestResult> {
  const name = 'API: GET /health';
  try {
    const res = await fetch(`${API_URL}/health`);
    const body = await res.json() as { ok?: boolean; db?: { ok?: boolean; latencyMs?: number } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (body.ok !== true) return { name, passed: false, detail: `ok=${body.ok}` };
    return { name, passed: true, detail: `200, ok=true, db.ok=${body.db?.ok ?? 'unknown'}, latency=${body.db?.latencyMs ?? '?'}ms` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testApiRoot(): Promise<TestResult> {
  const name = 'API: GET /';
  try {
    const res = await fetch(`${API_URL}/`);
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    return { name, passed: true, detail: '200' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testRankings(): Promise<TestResult> {
  const name = 'API: GET /rankings';
  try {
    const res = await fetch(`${API_URL}/rankings`);
    const body = await res.json() as any[];
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (!Array.isArray(body) || body.length === 0) return { name, passed: false, detail: 'Empty or non-array' };
    if (body[0].compositeScore === undefined) return { name, passed: false, detail: 'Missing compositeScore' };
    return { name, passed: true, detail: `200, ${body.length} towns` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testTownDetail(): Promise<TestResult> {
  const name = 'API: GET /towns/lexington-ma';
  try {
    const res = await fetch(`${API_URL}/towns/lexington-ma`);
    const body = await res.json() as { data?: { name?: string } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (body.data?.name !== 'Lexington') return { name, passed: false, detail: `name=${body.data?.name}` };
    return { name, passed: true, detail: '200, name=Lexington' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testTeacherModule(): Promise<TestResult> {
  const name = 'API: GET /towns/lexington-ma/teacher';
  try {
    const res = await fetch(`${API_URL}/towns/lexington-ma/teacher`);
    const body = await res.json() as { meta?: { contentSource?: string } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (!body.meta?.contentSource) return { name, passed: false, detail: 'Missing contentSource' };
    return { name, passed: true, detail: `200, contentSource=${body.meta.contentSource}` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testCompare(): Promise<TestResult> {
  const name = 'API: GET /compare?townA=lexington-ma&townB=concord-ma';
  try {
    const res = await fetch(`${API_URL}/compare?townA=lexington-ma&townB=concord-ma`);
    const body = await res.json() as { data?: { townA?: unknown; townB?: unknown } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (!body.data?.townA || !body.data?.townB) return { name, passed: false, detail: 'Missing town data' };
    return { name, passed: true, detail: '200, both towns present' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testChangelog(): Promise<TestResult> {
  const name = 'API: GET /changelog';
  try {
    const res = await fetch(`${API_URL}/changelog`);
    const body = await res.json() as { entries?: unknown[] };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (!Array.isArray(body.entries)) return { name, passed: false, detail: 'Missing entries array' };
    return { name, passed: true, detail: `200, ${body.entries.length} entries` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testNotFoundTown(): Promise<TestResult> {
  const name = 'API: GET /towns/nonexistent-xyz → 404';
  try {
    const res = await fetch(`${API_URL}/towns/nonexistent-xyz`);
    if (res.status !== 404) return { name, passed: false, detail: `Expected 404, got ${res.status}` };
    return { name, passed: true, detail: '404' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testPartnerInquireHappy(): Promise<TestResult> {
  const name = 'API: POST /api/partner/inquire (happy path)';
  try {
    const res = await fetch(`${API_URL}/api/partner/inquire`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orgName: 'Smoke Test Historical Society',
        contactName: 'Test Runner',
        email: 'smoke@test.local',
        role: 'director',
        townSlug: 'lexington-ma',
        message: 'Automated smoke test — please ignore',
      }),
    });
    const body = await res.json() as { success?: boolean };
    if (res.status !== 200 && res.status !== 201) return { name, passed: false, detail: `Status ${res.status}` };
    if (!body.success) return { name, passed: false, detail: 'success !== true' };
    return { name, passed: true, detail: `${res.status}, success=true` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testPartnerInquireHoneypot(): Promise<TestResult> {
  const name = 'API: POST /api/partner/inquire (honeypot)';
  try {
    const res = await fetch(`${API_URL}/api/partner/inquire`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orgName: 'Bot Org',
        contactName: 'Bot',
        email: 'bot@spam.local',
        role: 'director',
        townSlug: 'lexington-ma',
        message: 'Spam',
        website: 'http://spam.example.com', // honeypot field
      }),
    });
    const body = await res.json() as { success?: boolean };
    // Should silently accept (200) but discard
    if (res.status !== 200 && res.status !== 201) return { name, passed: false, detail: `Status ${res.status}` };
    if (!body.success) return { name, passed: false, detail: 'success !== true' };
    return { name, passed: true, detail: `${res.status}, silently discarded` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testMorristownTownDetail(): Promise<TestResult> {
  const name = 'API: GET /towns/morristown-nj';
  try {
    const res = await fetch(`${API_URL}/towns/morristown-nj`);
    const body = await res.json() as { data?: { name?: string } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (body.data?.name !== 'Morristown') return { name, passed: false, detail: `name=${body.data?.name}` };
    return { name, passed: true, detail: '200, name=Morristown' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testMorristownTeacher(): Promise<TestResult> {
  const name = 'API: GET /towns/morristown-nj/teacher';
  try {
    const res = await fetch(`${API_URL}/towns/morristown-nj/teacher`);
    const body = await res.json() as { meta?: { contentSource?: string } };
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    if (!body.meta?.contentSource) return { name, passed: false, detail: 'Missing contentSource' };
    return { name, passed: true, detail: `200, contentSource=${body.meta.contentSource}` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testAdminNoAuth(): Promise<TestResult> {
  const name = 'API: GET /admin/inquiries → 401 (no auth)';
  try {
    const res = await fetch(`${API_URL}/admin/inquiries`);
    if (res.status !== 401) return { name, passed: false, detail: `Expected 401, got ${res.status}` };
    return { name, passed: true, detail: '401' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

async function testAdminWithToken(): Promise<TestResult> {
  const name = 'API: GET /admin/inquiries (with token)';
  if (!ADMIN_TOKEN) return { name, passed: true, skipped: true, detail: 'ADMIN_TOKEN not set, skipped' };
  try {
    const res = await fetch(`${API_URL}/admin/inquiries`, {
      headers: { 'X-Admin-Token': ADMIN_TOKEN },
    });
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    return { name, passed: true, detail: '200' };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

// ---------------------------------------------------------------------------
// Web tests (skip if WEB_URL not set)
// ---------------------------------------------------------------------------

async function testWebPage(path: string, contains: string): Promise<TestResult> {
  const name = `Web: GET ${path}`;
  if (!WEB_URL) return { name, passed: true, skipped: true, detail: 'WEB_URL not set, skipped' };
  try {
    const res = await fetch(`${WEB_URL}${path}`);
    if (res.status !== 200) return { name, passed: false, detail: `Status ${res.status}` };
    const html = await res.text();
    if (!html.includes(contains)) return { name, passed: false, detail: `Missing "${contains}"` };
    return { name, passed: true, detail: `200, contains "${contains}"` };
  } catch (e) {
    return { name, passed: false, detail: err(e) };
  }
}

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

function err(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

async function main() {
  console.log('Smoke Tests');
  console.log(`API: ${API_URL}`);
  console.log(`Web: ${WEB_URL || '(not set — web tests will be skipped)'}`);
  console.log('='.repeat(60) + '\n');

  const results: TestResult[] = [];

  // API tests
  results.push(await testHealthEndpoint());
  results.push(await testApiRoot());
  results.push(await testRankings());
  results.push(await testTownDetail());
  results.push(await testTeacherModule());
  results.push(await testCompare());
  results.push(await testChangelog());
  results.push(await testNotFoundTown());
  results.push(await testPartnerInquireHappy());
  results.push(await testPartnerInquireHoneypot());
  results.push(await testMorristownTownDetail());
  results.push(await testMorristownTeacher());
  results.push(await testAdminNoAuth());
  results.push(await testAdminWithToken());

  // Web tests
  results.push(await testWebPage('/', 'History is for everyone'));
  results.push(await testWebPage('/partner', 'Partner'));
  results.push(await testWebPage('/terms', 'Terms of Service'));
  results.push(await testWebPage('/privacy', 'Privacy Policy'));
  results.push(await testWebPage('/teach/new-jersey', 'New Jersey'));
  results.push(await testWebPage('/methodology', 'Methodology'));
  results.push(await testWebPage('/changelog', 'Changelog'));

  // Print results
  const header = ['Test'.padEnd(55), 'Status'.padStart(6), 'Detail'].join('  ');
  console.log(header);
  console.log('-'.repeat(header.length + 30));

  for (const r of results) {
    const status = r.skipped
      ? `${YELLOW}SKIP${RESET}`
      : r.passed
        ? `${GREEN}PASS${RESET}`
        : `${RED}FAIL${RESET}`;
    console.log([r.name.padEnd(55), status.padStart(6 + 9), r.detail].join('  '));
  }

  const passing = results.filter((r) => r.passed).length;
  const skipped = results.filter((r) => r.skipped).length;
  const failed = results.filter((r) => !r.passed).length;
  const total = results.length;

  console.log('\n' + '-'.repeat(header.length + 30));
  const color = failed === 0 ? GREEN : RED;
  console.log(`${color}${passing}/${total} passed${RESET}${skipped > 0 ? ` (${skipped} skipped)` : ''}${failed > 0 ? `, ${RED}${failed} failed${RESET}` : ''}`);

  process.exit(failed === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error('Smoke test error:', e);
  process.exit(1);
});
