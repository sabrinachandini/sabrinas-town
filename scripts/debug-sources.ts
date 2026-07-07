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
    select: {
      id: true, title: true, url: true, published: true,
      town: { select: { slug: true } },
    },
  });

  console.log("=== ALL PACKETS ===");
  for (const pk of packets) {
    console.log(`[${pk.published ? "pub" : "UNPUB"}] ${pk.town.slug} | url=${pk.url ? "YES" : "no "} | ${pk.title?.slice(0,50)}`);
  }

  const towns = await p.town.findMany({
    where: { lessonPlans: { some: { published: true } } },
    select: {
      slug: true,
      primarySourcePackets: { select: { published: true, url: true } },
    },
  });

  console.log("\n=== TOWNS WITH LESSON PLANS ===");
  for (const t of towns) {
    const pubs = t.primarySourcePackets.filter(pk => pk.published);
    const withUrl = pubs.filter(pk => pk.url);
    console.log(`${t.slug}: ${pubs.length} pub packets, ${withUrl.length} with URL`);
  }
}
main().catch(console.error).finally(() => p.$disconnect());
