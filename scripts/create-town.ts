#!/usr/bin/env tsx
/**
 * create-town — scaffold a new branded town site from packages/template/
 *
 * Usage:
 *   pnpm create-town --slug concord-ma --name "Concord" --state MA --port 3002
 *
 * Required:
 *   --slug   URL-safe identifier matching the town's DB slug (e.g. concord-ma)
 *
 * Optional:
 *   --name   Display name (default: title-cased slug, e.g. "Concord Ma")
 *   --state  Two-letter state abbreviation (default: MA)
 *   --port   Dev server port (default: next available after 3000)
 */

import fs from "fs";
import path from "path";

// ── Arg parsing ────────────────────────────────────────────────────────────

function arg(flag: string): string | undefined {
  const idx = process.argv.indexOf(flag);
  return idx !== -1 ? process.argv[idx + 1] : undefined;
}

const slug = arg("--slug");
if (!slug) {
  console.error("Error: --slug is required (e.g. --slug concord-ma)");
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error("Error: --slug must be lowercase letters, numbers, and hyphens only");
  process.exit(1);
}

const stateName = arg("--state") ?? "MA";
const rawName = arg("--name") ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const portArg = arg("--port");

// ── Paths ──────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, "..");
const TEMPLATE_DIR = path.join(ROOT, "packages", "template");
const DEST_DIR = path.join(ROOT, "sites", slug);

if (fs.existsSync(DEST_DIR)) {
  console.error(`Error: sites/${slug}/ already exists`);
  process.exit(1);
}

// ── Auto-detect next available port ───────────────────────────────────────

function nextPort(): number {
  if (portArg) return parseInt(portArg, 10);
  const sitesDir = path.join(ROOT, "sites");
  let max = 3000;
  for (const dir of fs.readdirSync(sitesDir)) {
    const pkgPath = path.join(sitesDir, dir, "package.json");
    if (!fs.existsSync(pkgPath)) continue;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    const devScript: string = pkg.scripts?.dev ?? "";
    const m = devScript.match(/--port\s+(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}

const port = nextPort();

// ── File copy helpers ──────────────────────────────────────────────────────

function copyDir(src: string, dest: string, transform: (content: string, relPath: string) => string) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, transform);
    } else {
      const content = fs.readFileSync(srcPath, "utf8");
      const relPath = path.relative(TEMPLATE_DIR, srcPath);
      fs.writeFileSync(destPath, transform(content, relPath));
    }
  }
}

// ── Token substitution ─────────────────────────────────────────────────────

function transform(content: string, relPath: string): string {
  // package.json — rewrite programmatically
  if (relPath === "package.json") {
    const pkg = JSON.parse(content);
    pkg.name = slug;
    pkg.description = `${rawName}, ${stateName} — branded town site`;
    pkg.scripts.dev = `next dev --port ${port}`;
    pkg.scripts.build = "prisma generate --schema=../../prisma/schema.prisma && next build";
    pkg.scripts.postinstall = "prisma generate --schema=../../prisma/schema.prisma || true";
    pkg.prisma = { schema: "../../prisma/schema.prisma" };
    // add autoprefixer + postcss to devDependencies (needed by tailwind)
    pkg.devDependencies.autoprefixer = "^10.4.20";
    pkg.devDependencies.postcss = "^8.4.49";
    return JSON.stringify(pkg, null, 2) + "\n";
  }

  // withTown.ts — rewrite to hardcode slug (no slug parameter, like lexington)
  if (relPath === "src/lib/withTown.ts") {
    return `import prisma from "./prisma";

const SLUG = "${slug}";

export async function withTown<T>(fn: (townId: string) => Promise<T>): Promise<T | null> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return null;
  return fn(town.id);
}
`;
  }

  // layout.tsx — substitute town name in title/description/body
  if (relPath === "src/app/layout.tsx") {
    return content
      .replace(/Town Name — History Is for Everyone/g, `${rawName} — History Is for Everyone`)
      .replace(/\[Town Name\]/g, rawName)
      .replace(/Town Name/g, rawName);
  }

  // page.tsx — substitute town name in heading
  if (relPath === "src/app/page.tsx") {
    return content.replace(/Town Name/g, rawName);
  }

  return content;
}

// ── Scaffold ───────────────────────────────────────────────────────────────

console.log(`\nScaffolding sites/${slug}/...`);
copyDir(TEMPLATE_DIR, DEST_DIR, transform);

console.log(`
Done! New site created at sites/${slug}/

Next steps:
  1. Verify the town exists in the DB:
       psql $DATABASE_URL -c "SELECT id, name FROM \\"Town\\" WHERE slug = '${slug}';"

  2. Install dependencies:
       pnpm install

  3. Start the dev server:
       pnpm --filter ${slug} dev
     (runs on http://localhost:${port})

  4. Add pages in sites/${slug}/src/app/
     Copy the pattern from sites/lexington/src/app/ and wire to withTown().

  5. Add to Vercel as a new project pointing at sites/${slug}/
`);
