/**
 * create-apify-tasks.ts
 *
 * Creates Apify actor tasks for the 7 HTML event sources added in the
 * overnight run, then updates the DB records with the task IDs and
 * flips type from "html" to "apify".
 *
 * Uses the same actor (moJRLRc85AitArpNN) and pageFunction as existing tasks.
 *
 * Usage:
 *   DATABASE_URL=... APIFY_API_KEY=... npx tsx scripts/create-apify-tasks.ts [--dry-run]
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const DRY_RUN = process.argv.includes("--dry-run");

const APIFY_API_KEY = process.env.APIFY_API_KEY;
const ACTOR_ID = "moJRLRc85AitArpNN"; // same cheerio/web-scraper actor used by all existing tasks

// Shared pageFunction — identical to existing tasks, proven to work across sites
const PAGE_FUNCTION = `async function pageFunction(context) {
  const { $, request, log } = context;
  const results = [];

  $('script[type="application/ld+json"]').each(function() {
    try {
      const raw = $(this).html() || '';
      const parsed = JSON.parse(raw);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      items.forEach(function(item) {
        if (item['@type'] === 'Event') {
          results.push({
            title: (item.name || '').trim(),
            startDate: item.startDate || null,
            endDate: item.endDate || null,
            description: (item.description || '').slice(0, 400).trim(),
            venue: item.location ? (item.location.name || item.location) : null,
            url: item.url || request.url,
            source: 'jsonld',
          });
        }
      });
    } catch(e) {}
  });

  if (results.length > 0) return results;

  var selectors = [
    '.event-item', '.tribe-event', 'article.event', '[class*="event-card"]',
    '.eventlist-event', '.event', '.listing-item', 'article', '.card'
  ];
  for (var s = 0; s < selectors.length; s++) {
    var $els = $(selectors[s]);
    if ($els.length < 2) continue;
    $els.each(function() {
      var $el = $(this);
      var title = $el.find('h1,h2,h3,h4,h5,.title,.event-title').first().text().trim();
      if (!title || title.length < 4 || title.length > 200) return;
      var $time = $el.find('time, .date, [class*="date"]').first();
      var date = $time.attr('datetime') || $time.text().trim() || null;
      var desc = $el.find('p, .description, .excerpt, .summary').first().text().trim().slice(0, 400);
      var href = $el.find('a[href]').first().attr('href') || null;
      if (href && !href.startsWith('http')) {
        try { href = new URL(href, request.url).href; } catch(e) {}
      }
      results.push({ title: title, startDate: date, description: desc, url: href || request.url, source: 'html-' + selectors[s] });
    });
    if (results.length > 0) break;
  }

  return results;
}`;

interface TaskDef {
  sourceName: string;     // Matches EventSource.name in DB
  taskName: string;       // Apify task name (slug format)
  url: string;
}

const TASKS_TO_CREATE: TaskDef[] = [
  {
    sourceName: "Massachusetts Historical Society",
    taskName: "hife-mass-historical-society",
    url: "https://www.masshist.org/events",
  },
  {
    sourceName: "Historic Annapolis",
    taskName: "hife-historic-annapolis",
    url: "https://annapolis.org/events",
  },
  {
    sourceName: "Maryland Historical Society",
    taskName: "hife-maryland-historical-society",
    url: "https://www.mdhs.org/public-programs",
  },
  {
    sourceName: "Old Barracks Museum — Trenton",
    taskName: "hife-old-barracks-museum",
    url: "https://www.barracks.org/events/",
  },
  {
    sourceName: "Morristown NHP — Friends of Jockey Hollow",
    taskName: "hife-morristown-nps-events",
    url: "https://www.nps.gov/morr/planyourvisit/events.htm",
  },
  {
    sourceName: "Newport Historical Society",
    taskName: "hife-newport-historical-society",
    url: "https://www.newporthistory.org/events/",
  },
  {
    sourceName: "Princeton Battlefield Society",
    taskName: "hife-princeton-battlefield-society",
    url: "https://www.theprincetonbattlefield.org/events",
  },
];

async function createApifyTask(def: TaskDef): Promise<string | null> {
  const body = {
    actId: ACTOR_ID,
    name: def.taskName,
    input: {
      startUrls: [{ url: def.url }],
      pseudoUrls: [],
      linkSelector: "",
      pageFunction: PAGE_FUNCTION,
      proxyConfiguration: { useApifyProxy: true },
      maxCrawlingDepth: 0,
      maxPagesPerCrawl: 1,
    },
  };

  const resp = await fetch("https://api.apify.com/v2/actor-tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APIFY_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Apify API ${resp.status}: ${err.slice(0, 200)}`);
  }

  const data = (await resp.json()) as { data: { id: string } };
  return data.data.id;
}

async function main() {
  if (!APIFY_API_KEY) {
    console.error("APIFY_API_KEY not set");
    process.exit(1);
  }

  console.log(`── Create Apify Tasks for HTML Event Sources ──`);
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
  console.log(`Actor: ${ACTOR_ID}\n`);

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const def of TASKS_TO_CREATE) {
    process.stdout.write(`  ${def.sourceName}... `);

    // Find the EventSource in DB
    const source = await prisma.eventSource.findFirst({
      where: { name: def.sourceName },
    });

    if (!source) {
      console.log("✗ source not found in DB");
      failed++;
      continue;
    }

    if (source.apifyTaskId) {
      console.log(`already has task ID: ${source.apifyTaskId}`);
      skipped++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`[dry] would create task: ${def.taskName}`);
      created++;
      continue;
    }

    try {
      const taskId = await createApifyTask(def);
      if (!taskId) {
        console.log("✗ no task ID returned");
        failed++;
        continue;
      }

      // Update DB record
      await prisma.eventSource.update({
        where: { id: source.id },
        data: { type: "apify", apifyTaskId: taskId },
      });

      console.log(`✓ taskId: ${taskId}`);
      created++;
    } catch (e) {
      console.log(`✗ ${(e as Error).message?.slice(0, 120)}`);
      failed++;
    }

    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`\n── Complete ──`);
  console.log(`  ${created} tasks created | ${skipped} already had IDs | ${failed} failed`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
