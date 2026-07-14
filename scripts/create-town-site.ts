/**
 * create-town-site.ts — scaffold a new branded town site under sites/<slug>/.
 *
 * Usage:
 *   npx tsx scripts/create-town-site.ts \
 *     --slug yorktown-va --name Yorktown --state VA \
 *     --domain visityorktownva.com --tagline "Where the Revolution Was Won" \
 *     --accent "--green" --lat 37.2279 --lng -76.5074 [--port 3003]
 *
 * The scaffold is modeled EXACTLY on sites/lexington. It writes brand/editorial
 * placeholders only — NEVER hours, prices, or phone numbers. The operator fills
 * in editorial fields in src/lib/town.config.ts and links official sources.
 *
 * The optional DB probe (people/events counts) is best-effort: it is fully
 * wrapped so the script still scaffolds with no database available.
 */
import fs from "fs";
import path from "path";

// ── arg parsing (no deps) ────────────────────────────────────────────────
function parseArgs(argv: string[]): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

if (args.help || args.h) {
  console.log(`
create-town-site.ts — scaffold a new town site under sites/<slug>/

Required:
  --slug     URL-safe DB slug, e.g. yorktown-va
  --name     Short display name, e.g. Yorktown
  --state    Two-letter state, e.g. VA

Optional:
  --domain   Marketing domain (no protocol), e.g. visityorktownva.com
  --tagline  One-line brand line
  --accent   Accent token (default "--green")
  --lat      Latitude (default 0)
  --lng      Longitude (default 0)
  --port     Dev port (default: next free from 3003)

Example:
  npx tsx scripts/create-town-site.ts --slug yorktown-va --name Yorktown \\
    --state VA --domain visityorktownva.com \\
    --tagline "Where the Revolution Was Won" --accent "--green" \\
    --lat 37.2279 --lng -76.5074
`);
  process.exit(0);
}

const slug = String(args.slug ?? "");
const name = String(args.name ?? "");
const state = String(args.state ?? "");

if (!slug || !name || !state) {
  console.error("ERROR: --slug, --name, and --state are required. Run with --help.");
  process.exit(1);
}

const domain = String(args.domain ?? `visit${slug.replace(/-/g, "")}.com`);
const tagline = String(args.tagline ?? `Discover ${name}`);
const accent = String(args.accent ?? "--green");
const lat = Number(args.lat ?? 0);
const lng = Number(args.lng ?? 0);
const fullName = `${name}, ${state}`;

const repoRoot = path.resolve(__dirname, "..");
const siteDir = path.join(repoRoot, "sites", slug);

// ── dev port: accept --port, else next free from 3003 ────────────────────
function pickPort(): number {
  if (args.port) return Number(args.port);
  const sitesDir = path.join(repoRoot, "sites");
  const used = new Set<number>();
  try {
    for (const entry of fs.readdirSync(sitesDir)) {
      const pkgPath = path.join(sitesDir, entry, "package.json");
      if (!fs.existsSync(pkgPath)) continue;
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      const dev: string = pkg?.scripts?.dev ?? "";
      const m = dev.match(/--port\s+(\d+)/);
      if (m) used.add(Number(m[1]));
    }
  } catch {
    /* ignore — fall back to 3003 */
  }
  let port = 3003;
  while (used.has(port)) port++;
  return port;
}
const port = pickPort();

// ── optional DB probe (best-effort, fully wrapped) ───────────────────────
async function probeDb(): Promise<void> {
  try {
    const { PrismaClient } = await import("@prisma/client");
    const prisma = new PrismaClient();
    let people = 0;
    let events = 0;
    try {
      const town = await prisma.town.findUnique({
        where: { slug },
        select: { id: true },
      });
      if (town) {
        try {
          people = await prisma.person.count({
            where: { townPeople: { some: { townId: town.id } } },
          });
        } catch {
          people = 0;
        }
        try {
          events = await prisma.event.count({ where: { townId: town.id } });
        } catch {
          events = 0;
        }
        console.log(`DB probe: town "${slug}" found — ${people} people, ${events} events already in the database.`);
      } else {
        console.log(`DB probe: no town row for "${slug}" yet. Add DB rows before launch (people/events come from the shared database).`);
      }
    } finally {
      await prisma.$disconnect().catch(() => {});
    }
  } catch {
    console.log("DB probe: skipped (no database reachable). Scaffold does not depend on this.");
  }
}

// ── file writer (skip existing) ──────────────────────────────────────────
function writeFile(rel: string, contents: string): void {
  const full = path.join(siteDir, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  if (fs.existsSync(full)) {
    console.log(`  skip (exists): ${rel}`);
    return;
  }
  fs.writeFileSync(full, contents);
  console.log(`  wrote: ${rel}`);
}

// ── templates ────────────────────────────────────────────────────────────
const pkgJson = `{
  "name": "${slug}",
  "version": "0.0.1",
  "private": true,
  "description": "${fullName} — branded town site",
  "scripts": {
    "dev": "next dev --port ${port}",
    "build": "prisma generate --schema=../../prisma/schema.prisma && next build",
    "postinstall": "prisma generate --schema=../../prisma/schema.prisma || true",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hife/content": "workspace:*",
    "@hife/town-site": "workspace:*",
    "@hife/ui": "workspace:*",
    "@prisma/client": "5.22.0",
    "next": "^16.2.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "prisma": "5.22.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5"
  },
  "prisma": {
    "schema": "../../prisma/schema.prisma"
  }
}
`;

const nextConfig = `import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@hife/ui", "@hife/content", "@hife/town-site"],
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname, "../.."),
  },
};

export default nextConfig;
`;

const tailwindConfig = `import type { Config } from "tailwindcss";
import preset from "@hife/ui/tailwind.preset";

const config: Config = {
  presets: [preset as unknown as Config],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
`;

const tsconfig = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`;

const postcssConfig = `const config = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
export default config;
`;

const nextEnv = `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
`;

const vercelJson = `{
  "installCommand": "cd ../.. && pnpm install",
  "buildCommand": "pnpm build",
  "framework": "nextjs"
}
`;

const middleware = `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\\\.ico).*)"],
};
`;

const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-navy:  #0a0e1a;
  --color-cream: #f2ece0;
  --color-red:   #c8222a;
  --color-ink:   #0e1428;
}

body {
  background: var(--color-cream);
  color: var(--color-ink);
}
`;

const prismaTs = `import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
`;

const withTownTs = `import prisma from "./prisma";

const SLUG = "${slug}";

export async function withTown<T>(
  fn: (townId: string) => Promise<T>,
): Promise<T | null> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return null;
  return fn(town.id);
}
`;

// api.ts — Lexington's api.ts with SLUG swapped.
const apiTs = `import prisma from "./prisma";
import type { Town, TownEvent, TownPerson } from "@hife/content";

const SLUG = "${slug}";

export async function getTown(): Promise<Town | null> {
  const row = await prisma.town.findUnique({
    where: { slug: SLUG },
    include: {
      events: {
        select: {
          id: true, name: true, startDate: true, datePrecision: true,
          summary: true, significanceWeight: true,
          _count: { select: { eventPeople: true, eventThemes: true } },
        },
        orderBy: { significanceWeight: "desc" },
      },
      stories: {
        select: { id: true, slug: true, title: true, storyType: true, verificationStatus: true },
      },
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    name: row.name,
    state: row.state,
    country: row.country,
    slug: row.slug,
    geo: row.lat && row.lng ? { lat: Number(row.lat), lng: Number(row.lng) } : null,
    heroSummary40: row.heroSummary40 ?? "",
    execSummary150: row.execSummary150 ?? "",
    whyMatters: row.whyMatters ?? "",
    tourismInfo: null,
    compositeScore: row.compositeScore ?? 0,
    scoreTier: "Notable",
    scoreBreakdown: null,
    lastUpdatedAt: row.updatedAt?.toISOString() ?? "",
    imageUrl: row.imageUrl ?? null,
    imageCredit: null,
    events: row.events.map((e) => ({
      id: e.id,
      name: e.name,
      startDate: e.startDate?.toISOString() ?? null,
      datePrecision: e.datePrecision,
      summary: e.summary ?? "",
      significanceWeight: e.significanceWeight,
      peopleCount: e._count.eventPeople,
      themesCount: e._count.eventThemes,
    } satisfies TownEvent)),
    stories: row.stories.map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      storyType: s.storyType as "HISTORICAL_VOICE" | "MODERN_VOICE",
      verificationStatus: s.verificationStatus as "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED",
      subjectPersonName: null,
      narratorName: null,
      narratorRole: null,
      excerpt: "",
      tags: [],
    })),
    linkedTowns: [],
    themes: [],
    routes: [],
    recentChanges: [],
  };
}

export async function getPeople(): Promise<TownPerson[]> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return [];

  const rows = await prisma.person.findMany({
    where: { townPeople: { some: { townId: town.id } } },
    select: {
      id: true, slug: true, name: true, roles: true,
      bioShort: true, bioLong: true,
      birthYear: true, deathYear: true,
      verificationStatus: true, imageUrl: true,
    },
    orderBy: { name: "asc" },
  });

  return rows.map((p) => ({
    id: p.id,
    slug: p.slug ?? undefined,
    name: p.name,
    roles: p.roles ?? [],
    bioShort: p.bioShort ?? "",
    bioLong: p.bioLong ?? null,
    birthYear: p.birthYear ?? null,
    deathYear: p.deathYear ?? null,
    verificationStatus: p.verificationStatus,
    imageUrl: p.imageUrl ?? null,
  } satisfies TownPerson));
}

export async function getEvent(slug: string): Promise<{
  id: string; slug: string | null; name: string;
  startDate: string | null; datePrecision: string;
  summary: string;
  people: { id: string; name: string; roles: string[]; slug: string | null }[];
} | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.event.findFirst({
    where: { townId: town.id, slug },
    select: {
      id: true, slug: true, name: true,
      startDate: true, datePrecision: true,
      summary: true,
      eventPeople: {
        include: {
          person: { select: { id: true, name: true, roles: true, slug: true } },
        },
      },
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    startDate: row.startDate?.toISOString() ?? null,
    datePrecision: row.datePrecision,
    summary: row.summary ?? "",
    people: row.eventPeople.map((ep) => ({
      id: ep.person.id,
      name: ep.person.name,
      roles: ep.person.roles ?? [],
      slug: ep.person.slug,
    })),
  };
}

export async function getPerson(slug: string): Promise<TownPerson | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.person.findFirst({
    where: { slug, townPeople: { some: { townId: town.id } } },
    select: {
      id: true, slug: true, name: true, roles: true,
      bioShort: true, bioLong: true,
      birthYear: true, deathYear: true,
      verificationStatus: true, imageUrl: true,
    },
  });
  if (!row) return null;

  return {
    id: row.id,
    slug: row.slug ?? undefined,
    name: row.name,
    roles: row.roles ?? [],
    bioShort: row.bioShort ?? "",
    bioLong: row.bioLong ?? null,
    birthYear: row.birthYear ?? null,
    deathYear: row.deathYear ?? null,
    verificationStatus: row.verificationStatus,
    imageUrl: row.imageUrl ?? null,
  };
}

export async function getStories(): Promise<{
  id: string; slug: string; title: string; storyType: string;
  excerpt: string; verificationStatus: string;
}[]> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return [];

  const rows = await prisma.story.findMany({
    where: { townId: town.id, slug: { not: null } },
    select: { id: true, slug: true, title: true, storyType: true, verificationStatus: true },
    orderBy: { createdAt: "desc" },
  });

  return rows
    .filter((s): s is typeof s & { slug: string } => s.slug !== null)
    .map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      storyType: s.storyType,
      excerpt: "",
      verificationStatus: s.verificationStatus,
    }));
}

export async function getStory(slug: string): Promise<{
  id: string; slug: string; title: string; storyType: string;
  body: string; excerpt: string; verificationStatus: string;
  subjectPersonName: string | null; narratorName: string | null;
} | null> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return null;

  const row = await prisma.story.findFirst({
    where: { townId: town.id, slug },
    select: {
      id: true, slug: true, title: true, storyType: true,
      textVersion: true, verificationStatus: true, narratorName: true,
      subjectPerson: { select: { name: true } },
    },
  });
  if (!row || !row.slug) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    storyType: row.storyType,
    body: row.textVersion ?? "",
    excerpt: "",
    verificationStatus: row.verificationStatus,
    subjectPersonName: row.subjectPerson?.name ?? null,
    narratorName: row.narratorName ?? null,
  };
}

export async function getPeopleCount(): Promise<number> {
  const town = await prisma.town.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (!town) return 0;
  return prisma.person.count({ where: { townPeople: { some: { townId: town.id } } } });
}

export async function getEvents(): Promise<TownEvent[]> {
  const town = await prisma.town.findUnique({
    where: { slug: SLUG },
    select: { id: true },
  });
  if (!town) return [];

  const rows = await prisma.event.findMany({
    where: { townId: town.id },
    select: {
      id: true, slug: true, name: true, startDate: true, datePrecision: true,
      summary: true, significanceWeight: true,
      _count: { select: { eventPeople: true, eventThemes: true } },
    },
    orderBy: [{ startDate: "asc" }, { significanceWeight: "desc" }],
  });

  return rows.map((e) => ({
    id: e.id,
    slug: e.slug ?? undefined,
    name: e.name,
    startDate: e.startDate?.toISOString() ?? null,
    datePrecision: e.datePrecision,
    summary: e.summary ?? "",
    significanceWeight: e.significanceWeight,
    peopleCount: e._count.eventPeople,
    themesCount: e._count.eventThemes,
  } satisfies TownEvent));
}
`;

const townConfigTs = `import type { TownConfig } from "@hife/town-site";

/**
 * ${fullName} — town brand/editorial config.
 *
 * Historical content (people, events, stories) comes from the shared database
 * via src/lib/api.ts. Nothing here hardcodes hours, prices, or phone numbers.
 *
 * TODO (operator): fill in the editorial fields below — heroKicker,
 * featuredEventName/Month, musterThemes, transitInfo, parkingInfo, and
 * accessibilityNotes. For anything time-sensitive (hours, transit schedules,
 * parking rates, admission), LINK to the official source instead of hardcoding.
 */
export const townConfig: TownConfig = {
  slug: "${slug}",
  name: "${name}",
  state: "${state}",
  fullName: "${fullName}",
  tagline: "${tagline}",
  domain: "${domain}",
  coordinates: { lat: ${lat}, lng: ${lng} },
  accentColor: "${accent}",
  heroImageAlt: "A landmark in ${fullName}",
  // heroKicker: "Month YEAR · The defining moment",  // TODO: operator to set
  featuredEventName: "Annual Commemoration", // TODO: operator to set
  featuredEventMonth: 1, // TODO: 1-12 month of the featured event
  featuredPeopleSlugs: [],
  musterThemes: [
    {
      title: "Walk the Historic Core",
      description: "A self-guided route through the town's key Revolutionary sites.",
      theme: "historic-core",
      icon: "🚶",
    },
    {
      title: "The Signature Day",
      description: "Plan a visit around the town's annual commemoration.",
      theme: "signature-day",
      icon: "🎖",
    },
    {
      title: "People & Places",
      description: "Meet the figures and landmarks that shaped the story here.",
      theme: "people-places",
      icon: "🏛",
    },
  ],
  transitInfo: {
    // TODO (operator): confirm and link official transit guidance.
    primary: "Check official visitor sources for current transit options",
    alternatives: ["Arrival by car", "Regional guided tours"],
  },
  parkingInfo: [
    // TODO (operator): general guidance only — never specific rates.
    "Public parking is available near the historic center",
    "Lots fill early on major event weekends — confirm with official sources",
  ],
  accessibilityNotes:
    "For current site access and program details, check the official ${name} visitor and National Park sources before you travel.",
  hifeMusterUrl: "https://sabrinas-town.vercel.app/muster/new?towns=${slug}",
};

export default townConfig;
`;

const layoutTsx = `import type { Metadata } from "next";
import "./globals.css";
import { TownLayout } from "@hife/town-site";
import { townConfig } from "@/lib/town.config";

export const metadata: Metadata = {
  metadataBase: new URL("https://${domain}"),
  title: "${fullName} — History Is for Everyone",
  description:
    "Explore the history of ${fullName} with History Is for Everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TownLayout config={townConfig}>{children}</TownLayout>
      </body>
    </html>
  );
}
`;

const pageTsx = `export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getTown, getPeopleCount } from "@/lib/api";
import { Container, Divider } from "@hife/ui";
import { TownHero, WhatsOnSection } from "@hife/town-site";
import { townConfig } from "@/lib/town.config";

export default async function HomePage() {
  const [town, peopleCount] = await Promise.all([getTown(), getPeopleCount()]);
  if (!town) notFound();

  const topEvents = town.events.slice(0, 6);
  const topStories = town.stories.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <TownHero
        config={townConfig}
        intro={town.execSummary150 || town.heroSummary40}
        stats={{
          events: town.events.length,
          people: peopleCount,
          stories: town.stories.length,
        }}
      />

      {/* ── Key Events ── */}
      <Container>
        <WhatsOnSection
          config={townConfig}
          totalCount={town.events.length}
          events={topEvents.map((event) => ({
            id: event.id,
            title: event.name,
            date: event.startDate,
            description: event.summary,
            href: event.slug ? \`/events/\${event.slug}\` : "/events",
          }))}
        />

        {topStories.length > 0 && (
          <>
            <Divider />

            {/* ── Stories ── */}
            <section className="py-14">
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-condensed text-2xl uppercase tracking-wide">Voices from the Past</h2>
                <a href="/stories" className="font-body text-sm text-red hover:underline">
                  All {town.stories.length} stories →
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {topStories.map((story) => (
                  <a
                    key={story.id}
                    href={story.slug ? \`/stories/\${story.slug}\` : "/stories"}
                    className="p-5 bg-bg-secondary rounded-lg border border-border-light hover:border-red transition-colors group"
                  >
                    <div className="font-body text-xs uppercase tracking-widest text-red mb-2">
                      {story.storyType === "HISTORICAL_VOICE" ? "Historical Voice" : "Modern Voice"}
                    </div>
                    <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors leading-snug">
                      {story.title}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </>
        )}

        <Divider />

        {/* ── Explore grid ── */}
        <section className="py-14">
          <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">Explore ${name}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/people", label: "People", desc: "The figures who shaped ${name}'s history" },
              { href: "/events", label: "Events", desc: "The full timeline of what happened here" },
              { href: "/places", label: "Places", desc: "The sites and landscapes that tell the story" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-6 border border-border-light rounded-lg hover:border-red hover:bg-bg-secondary transition-colors group"
              >
                <div className="font-condensed text-xl uppercase tracking-wide group-hover:text-red transition-colors">
                  {item.label}
                </div>
                <p className="font-body text-sm text-text-muted mt-1">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
`;

const publicReadme = `# public/ — ${fullName}

Drop the hero image for this site here (e.g. \`hero.jpg\`) and reference it from
\`src/lib/town.config.ts\` / the layout as needed.

Do NOT commit large binary hero images without confirming licensing/credit.
Prefer a properly attributed image (e.g. a Wikimedia Commons file) and record
the credit alongside it.
`;

// ── run ──────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nScaffolding sites/${slug}/ (${fullName})  dev port ${port}\n`);

  await probeDb();

  if (fs.existsSync(siteDir)) {
    console.log(`\nNOTE: sites/${slug} already exists — existing files are kept, only missing files are written.\n`);
  }

  console.log("Writing files:");
  writeFile("package.json", pkgJson);
  writeFile("next.config.ts", nextConfig);
  writeFile("tailwind.config.ts", tailwindConfig);
  writeFile("tsconfig.json", tsconfig);
  writeFile("postcss.config.mjs", postcssConfig);
  writeFile("next-env.d.ts", nextEnv);
  writeFile("vercel.json", vercelJson);
  writeFile("src/middleware.ts", middleware);
  writeFile("src/app/globals.css", globalsCss);
  writeFile("src/lib/prisma.ts", prismaTs);
  writeFile("src/lib/withTown.ts", withTownTs);
  writeFile("src/lib/api.ts", apiTs);
  writeFile("src/lib/town.config.ts", townConfigTs);
  writeFile("src/app/layout.tsx", layoutTsx);
  writeFile("src/app/page.tsx", pageTsx);
  writeFile("public/README.md", publicReadme);

  console.log(`
Done. Next steps:

  1. pnpm install                         # link the new workspace + generate Prisma
  2. Edit sites/${slug}/src/lib/town.config.ts
       - fill in heroKicker, featuredEventName/Month, musterThemes,
         transitInfo, parkingInfo, accessibilityNotes
       - LINK official sources for hours/transit/parking/prices — never hardcode
  3. Add DB rows for town "${slug}" (people, events, stories) via the shared database
  4. Drop a hero image in sites/${slug}/public/ (see public/README.md)
  5. cd sites/${slug} && npx tsc --noEmit   # typecheck
  6. Create the Vercel project pointed at sites/${slug}/ (Root Directory)
`);
}

main().catch((err) => {
  console.error("create-town-site failed:", err);
  process.exit(1);
});
