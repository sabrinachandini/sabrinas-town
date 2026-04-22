import { getTown, getLocalEvents, getRankings, LocalEvent } from "@/lib/api";
import { notFound } from "next/navigation";
import NextLink from "next/link";
import { EventsSignup } from "@/components/town/EventsSignup";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ view?: string }>;
}

const MONTH_NAMES = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTH_SHORT = [
  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
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
    title: `Events in ${town.name}, ${town.state} | History is for Everyone`,
    description: `Reenactments, festivals, and heritage events in ${town.name} — where American Revolution history comes alive.`,
    openGraph: {
      title: `Events in ${town.name}, ${town.state}`,
      description: `Reenactments, festivals, and heritage events in ${town.name}.`,
      url: `https://sabrinas-town.vercel.app/towns/${slug}/events`,
    },
    alternates: { canonical: `https://sabrinas-town.vercel.app/towns/${slug}/events` },
  };
}

export default async function TownEventsPage({ params, searchParams }: PageProps) {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const view = sp.view === "calendar" ? "calendar" : "list";

  const [town, events] = await Promise.all([getTown(slug), getLocalEvents(slug)]);
  if (!town) notFound();

  const currentMonth = new Date().getMonth() + 1;
  const upcoming = events.filter((e) => e.month == null || e.month >= currentMonth);
  const past = events.filter((e) => e.month != null && e.month < currentMonth);
  const sortedUpcoming = [...upcoming.filter((e) => e.featured), ...upcoming.filter((e) => !e.featured)];

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-[#1a3a72] py-10 px-5 sm:px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/50 mb-2">
            {town.name}, {town.state}
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="font-display text-cream text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.02em]">
                Local Events
              </h1>
              <p className="font-ui text-cream/60 text-[20px] mt-3 max-w-[520px]">
                Reenactments, heritage festivals, and living history programs — experience the Revolution where it happened.
              </p>
            </div>
            {/* View toggle */}
            <div className="flex gap-1 self-end mb-1">
              <NextLink
                href={`/towns/${slug}/events`}
                className={`no-underline font-ui text-[11px] uppercase tracking-[0.14em] px-3 py-2 border transition-colors ${view === "list" ? "bg-cream text-ink border-cream" : "text-cream/50 border-cream/20 hover:text-cream hover:border-cream/50"}`}
              >
                List
              </NextLink>
              <NextLink
                href={`/towns/${slug}/events?view=calendar`}
                className={`no-underline font-ui text-[11px] uppercase tracking-[0.14em] px-3 py-2 border transition-colors ${view === "calendar" ? "bg-cream text-ink border-cream" : "text-cream/50 border-cream/20 hover:text-cream hover:border-cream/50"}`}
              >
                Calendar
              </NextLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-16 py-10 sm:py-16">
        {events.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-editorial text-[24px] text-ink/40 mb-4">No events listed yet</p>
            <p className="font-ui text-[19px] text-ink/30">
              Check back soon — we&rsquo;re adding local events for every town.
            </p>
          </div>
        ) : view === "calendar" ? (
          <CalendarView events={events} slug={slug} />
        ) : (
          <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">
            {/* Main list */}
            <div>
              {sortedUpcoming.length > 0 && (
                <section className="mb-14">
                  <div className="border-t-[3px] border-ink pt-6 mb-8">
                    <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                      Upcoming This Year
                    </p>
                  </div>
                  <div className="space-y-6">
                    {sortedUpcoming.map((evt) => <EventCard key={evt.id} event={evt} />)}
                  </div>
                </section>
              )}
              {past.length > 0 && (
                <section>
                  <div className="border-t-[3px] border-ink/20 pt-6 mb-8">
                    <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-ink/20 before:block">
                      Earlier This Year
                    </p>
                  </div>
                  <div className="space-y-6">
                    {past.map((evt) => <EventCard key={evt.id} event={evt} />)}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {events.some((e) => e.month != null) && (
                <div>
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">By Month</p>
                  <ul>
                    {Array.from(new Set(events.map((e) => e.month).filter(Boolean) as number[]))
                      .sort((a, b) => a - b)
                      .map((month) => {
                        const count = events.filter((e) => e.month === month).length;
                        return (
                          <li key={month}>
                            <a href={`#month-${month}`} className="no-underline flex items-center justify-between py-2.5 border-b border-ink/8 font-ui text-[19px] text-ink hover:text-crimson transition-colors">
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
              <div>
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(events.map((e) => e.category))).map((cat) => (
                    <span key={cat} className={`font-ui text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm ${CATEGORY_COLORS[cat] ?? "bg-cream text-ink border border-ink/20"}`}>
                      {CATEGORY_LABELS[cat] ?? cat}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore {town.name}</p>
                <ul>
                  {[
                    { label: "Timeline", href: `/towns/${slug}/timeline` },
                    { label: "Places to Visit", href: `/towns/${slug}/places` },
                    { label: "Key People", href: `/towns/${slug}/people` },
                    { label: "Stories", href: `/towns/${slug}/stories` },
                  ].map((link) => (
                    <li key={link.label}>
                      <NextLink href={link.href} className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[19px] text-ink hover:text-crimson transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <EventsSignup townName={town.name} townId={town.id} />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Calendar view ─────────────────────────────────────────────────────────

function CalendarView({ events, slug }: { events: LocalEvent[]; slug: string }) {
  const byMonth: Record<number, LocalEvent[]> = {};
  for (let m = 1; m <= 12; m++) byMonth[m] = [];
  // Events without a month go in a "Flexible" bucket (shown after grid)
  const noMonth: LocalEvent[] = [];
  for (const e of events) {
    if (e.month) byMonth[e.month].push(e);
    else noMonth.push(e);
  }

  const currentMonth = new Date().getMonth() + 1;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => {
          const monthEvents = byMonth[month];
          const isPast = month < currentMonth;
          const isCurrent = month === currentMonth;

          return (
            <div
              key={month}
              className={`bg-cream p-4 min-h-[140px] relative ${isPast ? "opacity-60" : ""}`}
            >
              {/* Month label */}
              <div className="flex items-baseline justify-between mb-3">
                <p className={`font-display text-[19px] tracking-[0.04em] ${isCurrent ? "text-crimson" : "text-ink/50"}`}>
                  {MONTH_SHORT[month]}
                </p>
                {isCurrent && (
                  <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson border border-crimson px-1 py-0.5 leading-none">
                    Now
                  </span>
                )}
                {monthEvents.length > 0 && !isCurrent && (
                  <span className="font-ui text-[11px] text-ink/30">{monthEvents.length}</span>
                )}
              </div>

              {/* Events */}
              <div className="space-y-1.5">
                {monthEvents.slice(0, 3).map((evt) => {
                  const catBg =
                    evt.category === "reenactment" ? "bg-crimson text-white" :
                    evt.category === "festival" ? "bg-yellow text-ink" :
                    evt.category === "ceremony" ? "bg-[#1a3a72] text-white" :
                    "bg-ink text-cream";

                  return (
                    <div key={evt.id} className="group">
                      {evt.url ? (
                        <a href={evt.url} target="_blank" rel="noopener noreferrer" className="no-underline block">
                          <EventPill evt={evt} catBg={catBg} />
                        </a>
                      ) : (
                        <EventPill evt={evt} catBg={catBg} />
                      )}
                    </div>
                  );
                })}
                {monthEvents.length > 3 && (
                  <p className="font-ui text-[11px] text-ink/40 pl-1">
                    +{monthEvents.length - 3} more
                  </p>
                )}
              </div>

              {monthEvents.length === 0 && (
                <p className="font-ui text-[10px] text-ink/15 absolute bottom-3 left-4">—</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Flexible / undated events */}
      {noMonth.length > 0 && (
        <div className="mt-10">
          <div className="border-t-[3px] border-ink/20 pt-6 mb-6">
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-ink/20 before:block">
              Flexible / Date TBD
            </p>
          </div>
          <div className="space-y-4">
            {noMonth.map((evt) => <EventCard key={evt.id} event={evt} />)}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-ink/10 flex flex-wrap gap-3">
        <p className="font-ui text-[11px] uppercase tracking-[0.14em] text-ink/30 self-center mr-2">Categories:</p>
        {[
          { label: "Reenactment", bg: "bg-crimson text-white" },
          { label: "Festival", bg: "bg-yellow text-ink" },
          { label: "Ceremony", bg: "bg-[#1a3a72] text-white" },
          { label: "Other", bg: "bg-ink text-cream" },
        ].map(({ label, bg }) => (
          <span key={label} className={`font-ui text-[11px] uppercase tracking-[0.1em] px-2 py-1 ${bg}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function EventPill({ evt, catBg }: { evt: LocalEvent; catBg: string }) {
  return (
    <div className={`${catBg} px-2 py-1 group-hover:opacity-80 transition-opacity`}>
      <p className="font-ui text-[11px] leading-snug truncate">
        {evt.day ? `${evt.day} · ` : ""}{evt.name}
      </p>
    </div>
  );
}

function EventCard({ event }: { event: LocalEvent }) {
  const monthName = event.month ? MONTH_NAMES[event.month] : null;
  const catColor = CATEGORY_COLORS[event.category] ?? "bg-cream text-ink border border-ink/20";
  const catLabel = CATEGORY_LABELS[event.category] ?? event.category;

  return (
    <article
      id={event.month ? `month-${event.month}` : undefined}
      className={`flex gap-5 group ${event.featured ? "border-l-4 border-crimson pl-4" : ""}`}
    >
      {monthName ? (
        <div className="flex-shrink-0 w-14 text-center">
          <div className="bg-ink text-cream py-1 px-1">
            <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-cream/60">{monthName.slice(0, 3)}</p>
            {event.day && <p className="font-display text-[24px] leading-none text-cream">{event.day}</p>}
          </div>
          {event.endDay && event.day && event.endDay !== event.day && (
            <p className="font-ui text-[11px] text-ink/40 mt-0.5">– {event.endDay}</p>
          )}
        </div>
      ) : (
        <div className="flex-shrink-0 w-14 text-center">
          <div className="bg-ink/10 text-ink/40 py-2 px-1">
            <p className="font-ui text-[11px] uppercase tracking-[0.1em]">Date</p>
            <p className="font-ui text-[11px] leading-none">TBD</p>
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`font-ui text-[11px] uppercase tracking-[0.12em] px-2 py-0.5 ${catColor}`}>{catLabel}</span>
          {event.featured && <span className="font-ui text-[11px] uppercase tracking-[0.12em] text-crimson">Featured</span>}
        </div>
        <h2 className="font-editorial text-[20px] text-ink leading-tight mb-1">
          {event.url ? (
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-crimson transition-colors">
              {event.name}
            </a>
          ) : event.name}
        </h2>
        {event.venue && <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-ink/40 mb-2">{event.venue}</p>}
        <p className="font-ui text-[19px] text-ink/70 leading-relaxed">{event.description}</p>
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          {event.admission && <span className="font-ui text-[11px] text-ink/50">{event.admission}</span>}
          {event.dateNote && <span className="font-ui text-[11px] text-ink/40 italic">{event.dateNote}</span>}
          {event.url && (
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson font-semibold hover:underline">
              More info →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
