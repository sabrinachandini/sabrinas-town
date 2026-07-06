import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });

async function main() {
  const towns = await prisma.town.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      state: true,
      _count: {
        select: {
          events: true,
          townPeople: true,
          places: true,
          stories: true,
          sourceTowns: true,
          townThemes: true,
          businesses: true,
          routeStops: true,
          outgoingLinks: true,
          incomingLinks: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  const routes = await prisma.route.findMany({
    select: {
      id: true,
      name: true,
      _count: { select: { stops: true } },
    },
  });

  const globalCounts = await Promise.all([
    prisma.event.count(),
    prisma.person.count(),
    prisma.place.count(),
    prisma.story.count(),
    prisma.source.count(),
    prisma.business.count(),
    prisma.townLink.count(),
    prisma.route.count(),
    prisma.theme.count(),
  ]);

  const verificationBreakdown = await prisma.event.groupBy({
    by: ["verificationStatus"],
    _count: true,
  });

  const needsReviewCounts = await Promise.all([
    prisma.event.count({ where: { needsReview: true } }),
    prisma.person.count({ where: { needsReview: true } }),
    prisma.place.count({ where: { needsReview: true } }),
    prisma.story.count({ where: { needsReview: true } }),
  ]);

  console.log("=== CONTENT INVENTORY ===\n");

  console.log("GLOBAL TOTALS:");
  console.log(`  Events:     ${globalCounts[0]}`);
  console.log(`  People:     ${globalCounts[1]}`);
  console.log(`  Places:     ${globalCounts[2]}`);
  console.log(`  Stories:    ${globalCounts[3]}`);
  console.log(`  Sources:    ${globalCounts[4]}`);
  console.log(`  Businesses: ${globalCounts[5]}`);
  console.log(`  TownLinks:  ${globalCounts[6]}`);
  console.log(`  Routes:     ${globalCounts[7]}`);
  console.log(`  Themes:     ${globalCounts[8]}`);

  console.log("\nEVENT VERIFICATION STATUS:");
  for (const row of verificationBreakdown) {
    console.log(`  ${row.verificationStatus}: ${row._count}`);
  }

  console.log("\nNEEDS REVIEW (awaiting human check):");
  console.log(`  Events:  ${needsReviewCounts[0]}`);
  console.log(`  People:  ${needsReviewCounts[1]}`);
  console.log(`  Places:  ${needsReviewCounts[2]}`);
  console.log(`  Stories: ${needsReviewCounts[3]}`);

  console.log("\nPER-TOWN INVENTORY:");
  const header = [
    "Town".padEnd(32),
    "State".padEnd(6),
    "Events".padEnd(8),
    "People".padEnd(8),
    "Places".padEnd(8),
    "Stories".padEnd(9),
    "Sources".padEnd(9),
    "Biz".padEnd(5),
    "Links",
  ].join("");
  console.log(header);
  console.log("-".repeat(header.length));

  for (const t of towns) {
    const c = t._count;
    const links = c.outgoingLinks + c.incomingLinks;
    const row = [
      t.name.padEnd(32),
      (t.state ?? "").padEnd(6),
      String(c.events).padEnd(8),
      String(c.townPeople).padEnd(8),
      String(c.places).padEnd(8),
      String(c.stories).padEnd(9),
      String(c.sourceTowns).padEnd(9),
      String(c.businesses).padEnd(5),
      String(links),
    ].join("");
    console.log(row);
  }

  console.log("\nROUTES:");
  for (const r of routes) {
    console.log(`  ${r.name} — ${r._count.stops} stops`);
  }

  // Flag thin towns (fewer than 3 events or people)
  const thin = towns.filter(
    (t) => t._count.events < 3 || t._count.townPeople < 3
  );
  if (thin.length > 0) {
    console.log("\nTHIN TOWNS (< 3 events OR < 3 people — need content work):");
    for (const t of thin) {
      console.log(`  ${t.name} (${t.state}): ${t._count.events} events, ${t._count.townPeople} people`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
