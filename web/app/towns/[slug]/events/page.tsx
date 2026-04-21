import { getTown, getLocalEvents } from "@/lib/api";
import { notFound } from "next/navigation";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const MONTH_NAMES = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CATEGORY_LABELS: Record<string, string> = {
  reenactment: "Reenactment",
  festival: "Festival",
  ceremony: "Ceremony",
  tour: "Guided Tour",
  lecture: "Lecture",
  exhibition: "Exhibition",
};

const CATEGORY_COLORS: Record<string, string> = {
  reenactment: "bg-crimson text-white",
  festival: "bg-yellow text-ink",
  ceremony: "bg-[#1a3a72] text-white",
  tour: "bg-ink text-cream",
  lecture: "bg-cream text-ink border border-ink/20",
  exhibition: "bg-cream text-ink border border-ink/20",
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Not Found" };
  return {
    title: `Events in ${town.name}, ${town.state}`,
    description: `Reenactments, festivals, and heritage events in ${town.name} — where American Revolution history comes alive.`,
  };
}

export default async function TownEventsPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, events] = await Promise.all([
    getTown(slug),
    getLocalEvents(slug),
  ]);

  if (!town) notFound();

  const currentMonth = new Date().getMonth() + 1; // 1-based

  // Split into upcoming (this month onward) and past (earlier months)
  const upcoming = events.filter((e) => e.month == null || e.month >= currentMonth);
  const past = events.filter((e) => e.month != null && e.month < currentMonth);
  // Sort upcoming: featured first, then by month
  const sortedUpcoming = [
    ...upcoming.filter((e) => e.featured),
    ...upcoming.filter((e) => !e.featured),
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="bg-[#1a3a72] py-10 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-cream/50 mb-2">
            {town.name}, {town.state}
          </p>
          <h1 className="font-display text-cream text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.02em]">
            Local Events
          </h1>
          <p className="font-ui text-cream/60 text-[14px] mt-3 max-w-[520px]">
            Reenactments, heritage festivals, and living history programs — experience the Revolution where it happened.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        {events.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-editorial text-[24px] text-ink/40 mb-4">No events listed yet</p>
            <p className="font-ui text-[13px] text-ink/30">
              Check back soon — we&rsquo;re adding local events for every town.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">
            {/* Main events list */}
            <div>
              {/* Upcoming events */}
              {sortedUpcoming.length > 0 && (
                <section className="mb-14">
                  <div className="border-t-[3px] border-ink pt-6 mb-8">
                    <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                      Upcoming This Year
                    </p>
                  </div>

                  <div className="space-y-6">
                    {sortedUpcoming.map((evt) => (
                      <EventCard key={evt.id} event={evt} />
                    ))}
                  </div>
                </section>
              )}

              {/* Earlier in the year */}
              {past.length > 0 && (
                <section>
                  <div className="border-t-[3px] border-ink/20 pt-6 mb-8">
                    <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-ink/20 before:block">
                      Earlier This Year
                    </p>
                  </div>

                  <div className="space-y-6">
                    {past.map((evt) => (
                      <EventCard key={evt.id} event={evt} />
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* By month quick nav */}
              {events.some((e) => e.month != null) && (
                <div>
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                    By Month
                  </p>
                  <ul>
                    {Array.from(new Set(events.map((e) => e.month).filter(Boolean) as number[]))
                      .sort((a, b) => a - b)
                      .map((month) => {
                        const count = events.filter((e) => e.month === month).length;
                        return (
                          <li key={month}>
                            <a
                              href={`#month-${month}`}
                              className="no-underline flex items-center justify-between py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                                {MONTH_NAMES[month]}
                              </span>
                              <span className="text-ink/30 text-[11px]">{count}</span>
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}

              {/* Categories */}
              <div>
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(events.map((e) => e.category))).map((cat) => (
                    <span
                      key={cat}
                      className={`font-ui text-[9px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm ${CATEGORY_COLORS[cat] ?? "bg-cream text-ink border border-ink/20"}`}
                    >
                      {CATEGORY_LABELS[cat] ?? cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Explore more */}
              <div>
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                  Explore {town.name}
                </p>
                <ul>
                  {[
                    { label: "Timeline", href: `/towns/${slug}/timeline` },
                    { label: "Places to Visit", href: `/towns/${slug}/places` },
                    { label: "Key People", href: `/towns/${slug}/people` },
                    { label: "Stories", href: `/towns/${slug}/stories` },
                  ].map((link) => (
                    <li key={link.label}>
                      <NextLink
                        href={link.href}
                        className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: import("@/lib/api").LocalEvent }) {
  const monthName = event.month ? MONTH_NAMES[event.month] : null;
  const catColor = CATEGORY_COLORS[event.category] ?? "bg-cream text-ink border border-ink/20";
  const catLabel = CATEGORY_LABELS[event.category] ?? event.category;

  return (
    <article
      id={event.month ? `month-${event.month}` : undefined}
      className={`flex gap-5 group ${event.featured ? "border-l-4 border-crimson pl-4" : ""}`}
    >
      {/* Date badge */}
      {monthName ? (
        <div className="flex-shrink-0 w-14 text-center">
          <div className="bg-ink text-cream py-1 px-1">
            <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-cream/60">{monthName.slice(0, 3)}</p>
            {event.day && (
              <p className="font-display text-[24px] leading-none text-cream">{event.day}</p>
            )}
          </div>
          {event.endDay && event.day && event.endDay !== event.day && (
            <p className="font-ui text-[9px] text-ink/40 mt-0.5">– {event.endDay}</p>
          )}
        </div>
      ) : (
        <div className="flex-shrink-0 w-14 text-center">
          <div className="bg-ink/10 text-ink/40 py-2 px-1">
            <p className="font-ui text-[9px] uppercase tracking-[0.1em]">Date</p>
            <p className="font-ui text-[9px] leading-none">TBD</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`font-ui text-[9px] uppercase tracking-[0.12em] px-2 py-0.5 ${catColor}`}>
            {catLabel}
          </span>
          {event.featured && (
            <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-crimson">
              Featured
            </span>
          )}
        </div>

        <h2 className="font-editorial text-[20px] text-ink leading-tight mb-1">
          {event.url ? (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-crimson transition-colors"
            >
              {event.name}
            </a>
          ) : (
            event.name
          )}
        </h2>

        {event.venue && (
          <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-ink/40 mb-2">
            {event.venue}
          </p>
        )}

        <p className="font-ui text-[13px] text-ink/70 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center gap-4 mt-3 flex-wrap">
          {event.admission && (
            <span className="font-ui text-[11px] text-ink/50">
              {event.admission}
            </span>
          )}
          {event.dateNote && (
            <span className="font-ui text-[11px] text-ink/40 italic">
              {event.dateNote}
            </span>
          )}
          {event.url && (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson font-semibold hover:underline"
            >
              More info →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
