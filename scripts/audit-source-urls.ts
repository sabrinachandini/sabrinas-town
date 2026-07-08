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

async function checkUrl(url: string): Promise<number> {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });
    return r.status;
  } catch {
    return 0;
  }
}

async function main() {
  const packets = await p.primarySourcePacket.findMany({
    select: { id: true, title: true, url: true },
    where: { url: { not: null } },
  });

  console.log(`Checking ${packets.length} source URLs...\n`);
  let ok = 0, broken = 0;
  for (const pk of packets) {
    const status = await checkUrl(pk.url!);
    const icon = (status >= 200 && status < 300) || status === 403 ? "✓" : "✗";
    if (icon === "✓") ok++;
    else broken++;
    console.log(`${icon} ${status} | ${pk.url?.slice(0, 70)} | ${pk.title?.slice(0, 35)}`);
  }
  console.log(`\n${ok} OK, ${broken} broken`);
}
main().catch(console.error).finally(() => p.$disconnect());
