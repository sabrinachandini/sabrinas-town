/**
 * FieldTripModule.tsx
 * Server component. Shown on muster output pages.
 * Finds lesson packets whose towns appear as stops on this muster.
 *
 * Linkage (application layer, no schema change):
 *   MusterStop.placeId → Place.townId → Town → LessonPlan + PrimarySourcePacket
 */

import prisma from "@/lib/prisma";

interface Stop {
  placeId?: string | null;
  customName?: string | null;
  place?: { id: string; name: string } | null;
}

interface Day {
  dayNumber: number;
  stops: Stop[];
}

interface FieldTripModuleProps {
  days: Day[];
}

interface TownModule {
  townId: string;
  townName: string;
  townSlug: string;
  townState: string;
  stopName: string; // The place name on the muster that triggered the match
  lessonPlan: {
    title: string;
    gradeRange: string;
    estimatedDuration: string;
    summary: string;
  } | null;
  sourceCount: number;
}

async function getFieldTripModules(days: Day[]): Promise<TownModule[]> {
  // Collect all placeIds from stops (via either placeId field or nested place.id)
  const placeIds = days
    .flatMap((d) => d.stops)
    .map((s) => s.placeId ?? s.place?.id ?? null)
    .filter((id): id is string => !!id);

  if (placeIds.length === 0) return [];

  // Fetch places → their towns
  const places = await prisma.place.findMany({
    where: { id: { in: placeIds } },
    select: {
      id: true,
      name: true,
      town: {
        select: {
          id: true,
          name: true,
          slug: true,
          state: true,
          lessonPlans: {
            where: { published: true },
            orderBy: { displayOrder: "asc" },
            take: 1,
            select: {
              title: true,
              gradeRange: true,
              estimatedDuration: true,
              summary: true,
            },
          },
          primarySourcePackets: {
            where: { published: true },
            select: { id: true },
          },
        },
      },
    },
  });

  // Deduplicate by townId (one town may appear multiple times)
  const seen = new Set<string>();
  const modules: TownModule[] = [];

  for (const place of places) {
    const town = place.town;
    if (!town) continue;
    if (seen.has(town.id)) continue;

    // Only surface towns that actually have lesson content
    if (town.lessonPlans.length === 0 && town.primarySourcePackets.length === 0) continue;

    seen.add(town.id);
    modules.push({
      townId: town.id,
      townName: town.name,
      townSlug: town.slug,
      townState: town.state,
      stopName: place.name,
      lessonPlan: town.lessonPlans[0] ?? null,
      sourceCount: town.primarySourcePackets.length,
    });
  }

  return modules;
}

export async function FieldTripModule({ days }: FieldTripModuleProps) {
  const modules = await getFieldTripModules(days);

  if (modules.length === 0) return null;

  return (
    <section className="bg-[#f2ece0] border-t-4 border-[#14100a] py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="font-ui text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B53A29] flex items-center gap-2 mb-2">
              <span className="w-3 h-[2px] bg-[#cc3322] block flex-shrink-0" aria-hidden />
              For Teachers &amp; School Groups
            </p>
            <h2
              className="font-display text-[#14100a] leading-[0.92]"
              style={{ fontSize: "clamp(22px,3vw,38px)" }}
            >
              Field Trip Materials
            </h2>
            <p className="font-editorial italic text-[16px] text-[#14100a]/50 mt-1.5 leading-[1.6] max-w-[420px]">
              {modules.length} town{modules.length !== 1 ? "s" : ""} on this muster{" "}
              {modules.length === 1 ? "has" : "have"} classroom materials. Download before you go.
            </p>
          </div>
          <a
            href="/teach"
            className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#14100a]/40 border border-[#14100a]/12 px-4 py-2.5 hover:border-[#14100a]/25 hover:text-[#14100a]/70 transition-colors self-start whitespace-nowrap hidden sm:block focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2 rounded-sm"
          >
            All Teach Resources →
          </a>
        </div>

        {/* Module cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.townId}
              className="bg-white border border-[#14100a]/8 p-4 flex flex-col"
            >
              {/* Stop → town connection */}
              <p className="font-ui text-[9px] uppercase tracking-[0.18em] text-[#14100a]/30 mb-1">
                Stop: {m.stopName}
              </p>
              <p className="font-display text-[20px] text-[#14100a] leading-none mb-1">
                {m.townName}
              </p>
              <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#14100a]/35 mb-3">
                {m.townState}
              </p>

              {/* Lesson info */}
              {m.lessonPlan ? (
                <div className="mb-3 flex-1">
                  <p className="font-editorial italic text-[14px] text-[#14100a]/60 leading-[1.55]">
                    {m.lessonPlan.summary.length > 120
                      ? m.lessonPlan.summary.slice(0, 117) + "…"
                      : m.lessonPlan.summary}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-[#14100a]/35 border border-[#14100a]/10 px-2 py-0.5">
                      Gr. {m.lessonPlan.gradeRange}
                    </span>
                    <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-[#14100a]/35 border border-[#14100a]/10 px-2 py-0.5">
                      {m.lessonPlan.estimatedDuration}
                    </span>
                    {m.sourceCount > 0 && (
                      <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-[#14100a]/35 border border-[#14100a]/10 px-2 py-0.5">
                        {m.sourceCount} source{m.sourceCount !== 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <p className="font-ui text-[12px] text-[#14100a]/30 italic mb-3 flex-1">
                  Lesson plan in development.
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-2 mt-auto pt-3 border-t border-[#14100a]/6">
                <a
                  href={`/towns/${m.townSlug}/teacher`}
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-[#14100a] border border-[#14100a]/20 px-3 py-1.5 hover:border-[#14100a]/40 transition-colors flex-1 text-center focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2 rounded-sm"
                >
                  View Module
                </a>
                <a
                  href={`/towns/${m.townSlug}/teacher/print`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-[#B53A29] border border-[rgba(181,58,41,0.25)] px-3 py-1.5 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors focus-visible:ring-2 focus-visible:ring-[#cc3322] focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
                >
                  ↓ Packet PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {modules.length > 0 && (
          <p className="font-ui text-[10px] text-[#14100a]/25 mt-4">
            Materials are formatted for letter-size printing. The student packet includes source analysis worksheets; the teacher guide includes the answer key.
          </p>
        )}
      </div>
    </section>
  );
}
