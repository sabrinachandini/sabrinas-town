import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // Get all events and the slugs town timeline pages would link to
  const events = await prisma.event.findMany({
    select: { id: true, slug: true, name: true, town: { select: { name: true, slug: true } } },
  });
  const missing = events.filter(e => !e.slug && !e.id);
  const noSlug = events.filter(e => !e.slug);
  console.log(`Total events: ${events.length}`);
  console.log(`Events with no slug (will use id): ${noSlug.length}`);
  console.log(`Events with neither: ${missing.length}`);
  // Check if any event id looks broken
  const weird = events.filter(e => !(e.slug ?? e.id));
  console.log(`Broken event links: ${weird.length}`);
  if (noSlug.length > 0) {
    console.log("\nSample events using id as URL:", noSlug.slice(0, 5).map(e => `${e.town.name}: ${e.id}`));
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
