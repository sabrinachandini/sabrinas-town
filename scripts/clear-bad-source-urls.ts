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

async function checkUrl(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });
    return r.status < 400 || r.status === 403;
  } catch {
    return false;
  }
}

async function main() {
  const packets = await p.primarySourcePacket.findMany({
    select: { id: true, title: true, url: true },
    where: { url: { not: null } },
  });

  console.log(`Checking ${packets.length} source URLs...\n`);
  let cleared = 0;
  let kept = 0;

  for (const pk of packets) {
    const ok = await checkUrl(pk.url!);
    if (!ok) {
      await p.primarySourcePacket.update({
        where: { id: pk.id },
        data: { url: null },
      });
      console.log(`✗ cleared: ${pk.title?.slice(0, 60)}`);
      cleared++;
    } else {
      console.log(`✓ kept:    ${pk.url?.slice(0, 70)}`);
      kept++;
    }
  }

  console.log(`\nDone. Cleared ${cleared} broken URLs. ${kept} working URLs remain.`);
}
main().catch(console.error).finally(() => p.$disconnect());
