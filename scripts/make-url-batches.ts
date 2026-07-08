import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

mkdirSync("scripts/audit-data/batches", { recursive: true });

const sources = JSON.parse(readFileSync(resolve("scripts/audit-data/sources.json"), "utf8"));
const packets = JSON.parse(readFileSync(resolve("scripts/audit-data/packets.json"), "utf8"));

const allUrls = [
  ...sources.filter(s => s.url).map(s => ({
    id: s.id, table: "Source", url: s.url,
    title: (s.title || "").slice(0, 60),
    type: s.type, tier: s.credibilityTier,
    towns: (s.sourceTowns || []).map(st => st.town?.slug).filter(Boolean).join(", "),
    publisherOrHolder: s.publisherOrHolder || "",
  })),
  ...packets.filter(p => p.url).map(p => ({
    id: p.id, table: "PrimarySourcePacket", url: p.url,
    title: (p.title || "").slice(0, 60),
    type: p.sourceType, tier: p.credibilityTier,
    towns: p.town?.slug || "",
    publisherOrHolder: p.publisherOrHolder || "",
  })),
];

const BATCH = 50;
let batchCount = 0;
for (let i = 0; i < allUrls.length; i += BATCH) {
  writeFileSync(`scripts/audit-data/batches/url-batch-${String(batchCount).padStart(3,"0")}.json`,
    JSON.stringify(allUrls.slice(i, i + BATCH), null, 2));
  batchCount++;
}

// Also write the primary sources for red-teaming
const primarySources = sources.filter(s => s.url && s.type === "PRIMARY").map(s => ({
  id: s.id, url: s.url, title: (s.title || "").slice(0,80),
  publisherOrHolder: s.publisherOrHolder || "", tier: s.credibilityTier,
  towns: (s.sourceTowns || []).map(st => st.town?.slug).filter(Boolean).slice(0,3).join(", "),
}));

const RT_BATCH = 15;
let rtCount = 0;
for (let i = 0; i < primarySources.length; i += RT_BATCH) {
  writeFileSync(`scripts/audit-data/batches/rt-batch-${String(rtCount).padStart(3,"0")}.json`,
    JSON.stringify(primarySources.slice(i, i + RT_BATCH), null, 2));
  rtCount++;
}

// Write manifest
writeFileSync("scripts/audit-data/batches/manifest.json", JSON.stringify({
  totalUrls: allUrls.length,
  urlBatches: batchCount,
  rtBatches: rtCount,
  primarySources: primarySources.length,
  totalSources: sources.length,
  totalPackets: packets.length,
}, null, 2));

console.log(`Created ${batchCount} URL batches + ${rtCount} red-team batches`);
console.log(`Total URLs: ${allUrls.length} | Primary sources: ${primarySources.length}`);
