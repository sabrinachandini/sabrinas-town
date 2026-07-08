import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
const envPath = resolve(process.cwd(), "sites/hife/.env.local");
readFileSync(envPath, "utf8").split("\n").forEach((line) => {
  const eq = line.indexOf("=");
  if (eq < 1) return;
  const key = line.slice(0, eq).trim();
  const val = line.slice(eq + 1).trim().replace(/^"|"$/g, "");
  if (key) process.env[key] = val;
});
import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
async function main() {
  mkdirSync("scripts/audit-data", { recursive: true });

  const sources = await p.source.findMany({
    select: { id: true, title: true, url: true, type: true, credibilityTier: true,
      publisherOrHolder: true, notes: true,
      sourceTowns: { select: { town: { select: { slug: true, name: true } } } },
      sourceEvents: { select: { eventId: true } },
      sourceStories: { select: { storyId: true } },
    },
  });
  
  const packets = await p.primarySourcePacket.findMany({
    select: { id: true, title: true, url: true, sourceType: true, credibilityTier: true,
      publisherOrHolder: true, published: true,
      town: { select: { slug: true, name: true } }
    },
  });

  const stories = await p.story.findMany({
    select: { id: true, title: true, slug: true, storyType: true,
      textVersion: true, verificationStatus: true, needsReview: true,
      sourceStories: { select: { source: { select: { id: true, title: true, url: true, type: true } } } },
      town: { select: { slug: true, name: true } }
    },
  });

  const events = await p.event.findMany({
    select: { id: true, name: true, summary: true, slug: true,
      verificationStatus: true, needsReview: true,
      sourceEvents: { select: { source: { select: { id: true, title: true, url: true, type: true } } } },
      town: { select: { slug: true, name: true } }
    },
  });

  writeFileSync("scripts/audit-data/sources.json", JSON.stringify(sources, null, 2));
  writeFileSync("scripts/audit-data/packets.json", JSON.stringify(packets, null, 2));
  writeFileSync("scripts/audit-data/stories.json", JSON.stringify(stories, null, 2));
  writeFileSync("scripts/audit-data/events.json", JSON.stringify(events, null, 2));

  // Stats
  const byType: Record<string,number> = {};
  sources.forEach(s => { byType[s.type] = (byType[s.type]||0)+1; });
  const byTier: Record<string,number> = {};
  sources.forEach(s => { byTier[s.credibilityTier??'null'] = (byTier[s.credibilityTier??'null']||0)+1; });

  const storiesWithSources = stories.filter(s => s.sourceStories.length > 0).length;
  const eventsWithSources = events.filter(e => e.sourceEvents.length > 0).length;

  console.log(`Sources: ${sources.length} (${sources.filter(s=>s.url).length} with URL)`);
  console.log(`Packets: ${packets.length} (${packets.filter(p=>p.url).length} with URL)`);
  console.log(`Stories: ${stories.length} (${storiesWithSources} with linked sources)`);
  console.log(`Events: ${events.length} (${eventsWithSources} with linked sources)`);
  console.log("Source types:", JSON.stringify(byType));
  console.log("Source tiers:", JSON.stringify(byTier));
}
main().catch(console.error).finally(() => p.$disconnect());
