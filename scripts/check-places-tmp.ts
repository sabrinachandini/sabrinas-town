import "dotenv/config";
import { PrismaClient } from "../../web/node_modules/@prisma/client/index.js";
const prisma = new PrismaClient({ log: [] });
async function main() {
  const places = await (prisma as any).townPlace.findMany({
    where: { town: { slug: "lexington-ma" } },
    select: { id: true, slug: true, name: true }
  });
  console.log("Places:");
  places.forEach((p: any) => console.log("  slug:", p.slug ?? "null", "| id:", p.id.slice(0,8), "|", p.name.slice(0,35)));
  const events = await (prisma as any).event.findMany({
    where: { town: { slug: "lexington-ma" } },
    select: { id: true, slug: true, name: true }, take: 8
  });
  console.log("Events:");
  events.forEach((e: any) => console.log("  slug:", e.slug ?? "null", "| id:", e.id.slice(0,8)));
  await prisma.$disconnect();
}
main().catch((e: any) => { console.error("ERROR:", e.message); process.exit(1); });
