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
  const packets = await p.primarySourcePacket.findMany({
    select: { id: true, title: true, url: true, sourceId: true },
    take: 30,
  });
  let nullUrl = 0, hasUrl = 0;
  packets.forEach((pk) => {
    if (!pk.url) { nullUrl++; console.log("NO URL |", pk.title?.slice(0, 60)); }
    else { hasUrl++; console.log("URL:", pk.url.slice(0, 90)); }
  });
  console.log(`\n${hasUrl} with URL, ${nullUrl} without`);
  
  // also check Source table
  const sources = await p.source.findMany({ select: { id: true, name: true, url: true }, take: 10 });
  console.log("\nSample Source records:");
  sources.forEach(s => console.log("  ", s.url?.slice(0,80), "|", s.name?.slice(0,40)));
}
main().catch(console.error).finally(() => p.$disconnect());
