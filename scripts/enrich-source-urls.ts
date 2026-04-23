/**
 * Enriches PrimarySourcePacket records with publicly accessible archival URLs.
 * Uses Claude to identify the best free URL for each source based on title + publisher.
 *
 * Usage:
 *   npx tsx scripts/enrich-source-urls.ts
 *   npx tsx scripts/enrich-source-urls.ts --dry-run   (print URLs, don't write)
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const DRY_RUN = process.argv.includes("--dry-run");

interface SourceRecord {
  id: string;
  title: string;
  publisherOrHolder: string;
  sourceType: string;
}

async function findUrl(source: SourceRecord): Promise<string | null> {
  const prompt = `You are a historian and archivist. For the following historical primary source document, identify the single best publicly accessible URL where a teacher or student can read or view the actual document online for free.

Title: ${source.title}
Publisher/Holder: ${source.publisherOrHolder}
Type: ${source.sourceType}

Preferred sources in order:
1. Founders Online (founders.archives.gov) — for correspondence of Founders
2. Library of Congress (loc.gov) — for Congressional papers, manuscripts
3. Internet Archive (archive.org) — for digitized books and pamphlets
4. HathiTrust (hathitrust.org) — for digitized books
5. National Archives (archives.gov) — for government records
6. Massachusetts Historical Society (masshist.org) — for MA documents
7. American Antiquarian Society (americanantiquarian.org) — for New England documents
8. Mount Vernon (mountvernon.org) — for Washington family documents
9. National Park Service (nps.gov) — for contextual/educational pages
10. Museum or institutional collection pages

IMPORTANT: Return ONLY a real, specific URL that actually exists and links directly to this document or the best available digital version of it. Do not fabricate URLs. If you are not confident a specific document URL exists, return the best institutional landing page for the holding institution.

Respond with ONLY the URL, nothing else. No explanation, no markdown, just the raw URL.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 200,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].type === "text" ? msg.content[0].text.trim() : null;
  if (!text || !text.startsWith("http")) return null;
  return text;
}

async function main() {
  const sources = await prisma.primarySourcePacket.findMany({
    where: { url: null, published: true },
    select: { id: true, title: true, publisherOrHolder: true, sourceType: true },
    orderBy: { displayOrder: "asc" },
  });

  console.log(`Found ${sources.length} sources without URLs\n`);

  let updated = 0;
  let failed = 0;

  for (const source of sources) {
    process.stdout.write(`[${updated + failed + 1}/${sources.length}] ${source.title.slice(0, 60)}... `);
    try {
      const url = await findUrl(source);
      if (!url) {
        console.log("❌ no URL returned");
        failed++;
        continue;
      }
      console.log(`\n  → ${url}`);
      if (!DRY_RUN) {
        await prisma.primarySourcePacket.update({
          where: { id: source.id },
          data: { url },
        });
      }
      updated++;
    } catch (err) {
      console.log(`❌ error: ${err}`);
      failed++;
    }
    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`\n── Done ──`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed:  ${failed}`);
  if (DRY_RUN) console.log("(dry run — nothing written to DB)");

  await prisma.$disconnect();
}

main();
