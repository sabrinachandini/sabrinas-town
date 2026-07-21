import NextLink from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const ENTITY_TYPES = [
  { type: "TOWN", label: "Towns", accent: "#1a3a72" },
  { type: "PLACE", label: "Places", accent: "#2a5c45" },
  { type: "PERSON", label: "Persons", accent: "#5c2a2a" },
  { type: "EVENT", label: "Events", accent: "#14100a" },
  { type: "SOURCE", label: "Sources", accent: "#14100a" },
  { type: "STORY", label: "Stories", accent: "#14100a" },
  { type: "ORGANIZATION", label: "Organizations", accent: "#1a3a72" },
  { type: "ROUTE", label: "Routes", accent: "#2a5c45" },
  { type: "BUSINESS", label: "Businesses", accent: "#C8A24A" },
] as const;

export default async function GraphBrowserPage() {
  const [
    towns, places, persons, events, sources, stories, localEvents, routes, businesses
  ] = await Promise.all([
    prisma.town.count(),
    prisma.place.count(),
    prisma.person.count(),
    prisma.event.count(),
    prisma.source.count(),
    prisma.story.count(),
    prisma.localEvent.count(),
    prisma.route.count(),
    prisma.business.count(),
  ]);

  const counts: Record<string, number> = {
    TOWN: towns, PLACE: places, PERSON: persons, EVENT: events,
    SOURCE: sources, STORY: stories, ORGANIZATION: localEvents,
    ROUTE: routes, BUSINESS: businesses,
  };

  const linkCount = await prisma.entityLink.count();
  const needsReview = await prisma.entityLink.count({ where: { status: "NEEDS_REVIEW" } });

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">Graph Browser</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          {linkCount} entity links · {needsReview > 0 ? `${needsReview} need review` : "all links reviewed"}
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ENTITY_TYPES.map(({ type, label, accent }) => (
            <NextLink key={type} href={`/admin/graph/${type}`}
              className="block p-5 border-2 border-[#14100a]/10 bg-white/60 hover:bg-white/90 transition-colors no-underline group">
              <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-1">{label}</p>
              <p className="font-display text-[28px] tracking-[-0.03em]" style={{ color: accent }}>
                {counts[type] ?? 0}
              </p>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
}
