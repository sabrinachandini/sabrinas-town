import { readFileSync } from "fs";
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
  const towns = await p.town.count();
  const sources = await p.source.count();
  const sourcesWithUrl = await p.source.count({ where: { url: { not: null } } });
  const packets = await p.primarySourcePacket.count();
  const packetsWithUrl = await p.primarySourcePacket.count({ where: { url: { not: null } } });
  const events = await p.event.count();
  const stories = await p.story.count();
  
  console.log(`Towns: ${towns}`);
  console.log(`Sources: ${sources} total, ${sourcesWithUrl} with URL`);
  console.log(`PrimarySourcePackets: ${packets} total, ${packetsWithUrl} with URL`);
  console.log(`Events: ${events}`);
  console.log(`Stories: ${stories}`);

  const sourceSample = await p.source.findMany({ select: { id: true, url: true, title: true, type: true, credibilityTier: true }, take: 8 });
  console.log("\nSample Sources:");
  sourceSample.forEach(s => console.log(`  [${s.type}][${s.credibilityTier}] ${s.title?.slice(0,45)} → ${s.url?.slice(0,60) ?? 'NULL'}`));

  // Check story sources field
  const storySample = await p.story.findMany({ take: 3 });
  console.log("\nStory fields:", storySample.length > 0 ? Object.keys(storySample[0]).join(", ") : "none");

  // Check event relations
  const prismaSchema = readFileSync(resolve(process.cwd(), "prisma/schema.prisma"), "utf8");
  const evtSourceMatch = prismaSchema.match(/model EventSource[\s\S]{0,300}/);
  if (evtSourceMatch) console.log("\nEventSource model found:", evtSourceMatch[0].slice(0, 100));
}
main().catch(console.error).finally(() => p.$disconnect());
