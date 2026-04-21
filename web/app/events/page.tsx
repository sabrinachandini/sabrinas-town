import { getAllEvents, getAllLocalEvents } from "@/lib/api";
import NextLink from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Events of the Revolution | History is for Everyone",
  description: "Battles, signings, sieges, and turning points of the American Revolution — plus living history events and reenactments across the network.",
  openGraph: {
    title: "Events of the Revolution | History is for Everyone",
    description: "Battles, signings, sieges, and turning points of the American Revolution.",
    url: "https://sabrinas-town.vercel.app/events",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/events" },
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CATEGORY_LABELS: Record<string, string> = {
  reenactment: "Reenactment",
  festival: "Festival",
  ceremony: "Ceremony",
  tour: "Tour",
  lecture: "Lecture",
  exhibition: "Exhibition",
};

function getMonthFromDate(iso: string | null): number | null {
  if (!iso) return null;
  return new Date(iso).getMonth(); // 0-indexed
}

export default async function EventsPage() {
  const [historicalEvents, localEvents] = await Promise.all([
    getAllEvents({ minSignificance: 65, limit: 300 }),
    getAllLocalEvents(),
  ]);

  // Group historical events by month
  const byMonth: Record<number, typeof historicalEvents> = {};
  for (let i = 0; i < 12; i++) byMonth[i] = [];
  const undated: typeof historicalEvents = [];
  for (const ev of historicalEvents) {
    const m = getMonthFromDate(ev.startDate);
    if (m !== null) byMonth[m].push(ev);
    else undated.push(ev);
  }

  // Find months with most activity
  const activeMonths = Object.entries(byMonth)
    .filter(([, evs]) => evs.length > 0)
    .sort(([, a], [, b]) => b.length - a.length);

  const featuredLocal = localEvents.filter((e) => e.featured);
  const otherLocal = localEvents.filter((e) => !e.featured);

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-20 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-0.05em] bottom-[-0.15em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(8rem,20vw,16rem)" }}>
          1776
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/" className="no-underline hover:text-cream/60 transition-colors">Home</NextLink>
            <span>/</span>
            <span className="text-cream/55">Events</span>
          </nav>
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#e8b84b] mb-4">Historical Record</p>
          <h1 className="font-display text-cream leading-[0.88] tracking-[-0.02em]" style={{ fontSize: "clamp(48px,9vw,120px)" }}>
            Events of the<br />Revolution
          </h1>
          <p className="font-editorial italic text-[18px] text-cream/60 max-w-[560px] leading-[1.65] mt-6">
            {historicalEvents.length} recorded events — battles, signings, sieges, councils, and the moments that turned the tide.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: historicalEvents.length, label: "Historical Events" },
          { n: localEvents.length, label: "Living History Events" },
          { n: activeMonths.length, label: "Active Months" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{s.n}</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
      </section>

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-24">

        {/* ── Living History / Local Events ── */}
        {localEvents.length > 0 && (
          <section>
            <div className="border-t-[3px] border-[#14100a] pt-6 mb-10">
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                Living History — Reenactments & Events
              </p>
              <h2 className="font-display text-[#14100a] text-[clamp(28px,4vw,44px)] leading-[0.9] mt-2">Visit the Revolution</h2>
            </div>

            {/* Month grid for local events */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {localEvents.map((ev) => {
                const monthLabel = ev.month ? MONTHS[ev.month - 1] : null;
                const dayLabel = ev.day ? (ev.endDay ? `${ev.day}–${ev.endDay}` : String(ev.day)) : null;
                return (
                  <div key={ev.id} className={`border-2 p-4 ${ev.featured ? "border-[#cc3322] bg-white" : "border-[#14100a]/10 bg-white"}`}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        {monthLabel && (
                          <div className="bg-[#1a3a72] text-cream inline-block px-2 py-1 text-center mb-2">
                            {dayLabel && <p className="font-display text-[16px] leading-none text-[#e8b84b]">{dayLabel}</p>}
                            <p className="font-ui text-[8px] uppercase tracking-[0.12em] text-cream/70">{monthLabel}</p>
                          </div>
                        )}
                        {ev.recurrence === "annual" && (
                          <span className="block font-ui text-[8px] uppercase tracking-[0.1em] text-[#cc3322]">Annual</span>
                        )}
                      </div>
                      <span className="font-ui text-[7px] uppercase tracking-[0.08em] text-[#14100a]/40 border border-[#14100a]/15 px-1.5 py-0.5 flex-shrink-0">
                        {CATEGORY_LABELS[ev.category] ?? ev.category}
                      </span>
                    </div>
                    <p className="font-display text-[#14100a] text-[17px] leading-tight mb-1">{ev.name}</p>
                    <NextLink href={`/towns/${ev.town.slug}`} className="no-underline font-ui text-[9px] uppercase tracking-[0.1em] text-[#1a3a72] hover:text-[#cc3322] transition-colors">
                      {ev.town.name}, {ev.town.state}
                    </NextLink>
                    {ev.venue && <p className="font-ui text-[9px] text-[#14100a]/40 mt-1">{ev.venue}</p>}
                    {ev.dateNote && <p className="font-ui text-[9px] text-[#14100a]/50 italic mt-1">{ev.dateNote}</p>}
                    {ev.admission && (
                      <p className="font-ui text-[8px] uppercase tracking-[0.08em] text-[#14100a]/40 mt-2">{ev.admission}</p>
                    )}
                    {ev.url && (
                      <a href={ev.url} target="_blank" rel="noopener noreferrer" className="no-underline block mt-3 font-ui text-[9px] uppercase tracking-[0.12em] text-[#cc3322] hover:text-[#1a3a72] transition-colors">
                        More info →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Historical Events by Month ── */}
        <section>
          <div className="border-t-[3px] border-[#14100a] pt-6 mb-10">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
              The Historical Record
            </p>
            <h2 className="font-display text-[#14100a] text-[clamp(28px,4vw,44px)] leading-[0.9] mt-2">Events by Month</h2>
          </div>

          {/* Month activity bar */}
          <div className="grid grid-cols-12 gap-1 mb-12">
            {MONTHS.map((month, i) => {
              const count = byMonth[i]?.length ?? 0;
              const max = Math.max(...Object.values(byMonth).map((arr) => arr.length), 1);
              return (
                <a key={month} href={`#month-${i}`} className="no-underline group flex flex-col items-center gap-1">
                  <div className="w-full bg-[#14100a]/8 relative" style={{ height: 48 }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-[#cc3322] group-hover:bg-[#1a3a72] transition-colors"
                      style={{ height: `${(count / max) * 100}%` }}
                    />
                  </div>
                  <span className="font-ui text-[7px] uppercase tracking-[0.06em] text-[#14100a]/40">{month.slice(0, 3)}</span>
                  <span className="font-ui text-[8px] text-[#14100a]/60">{count}</span>
                </a>
              );
            })}
          </div>

          {/* Month sections */}
          <div className="space-y-16">
            {MONTHS.map((month, i) => {
              const events = byMonth[i] ?? [];
              if (events.length === 0) return null;
              const sorted = [...events].sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              });
              return (
                <div key={month} id={`month-${i}`}>
                  <div className="flex items-baseline justify-between mb-4 border-b border-[#14100a]/10 pb-4">
                    <h3 className="font-display text-[#1a3a72] text-[clamp(20px,3vw,32px)] leading-none">{month}</h3>
                    <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#14100a]/30">{events.length} events</span>
                  </div>
                  <div className="space-y-0">
                    {sorted.map((ev) => {
                      const d = ev.startDate ? new Date(ev.startDate) : null;
                      const day = d ? d.getDate() : null;
                      const year = d ? d.getFullYear() : null;
                      return (
                        <NextLink
                          key={ev.id}
                          href={ev.slug ? `/events/${ev.slug}` : `/towns/${ev.town.slug}/timeline`}
                          className="no-underline flex gap-5 py-4 border-b border-[#14100a]/8 last:border-b-0 group items-start"
                        >
                          {/* Date badge */}
                          <div className="flex-shrink-0 w-12 text-center">
                            {day && <p className="font-display text-[22px] leading-none text-[#14100a]/20 group-hover:text-[#cc3322] transition-colors">{day}</p>}
                            {year && <p className="font-ui text-[8px] text-[#14100a]/30 uppercase">{year}</p>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-editorial text-[17px] text-[#14100a] group-hover:text-[#cc3322] transition-colors leading-snug">{ev.name}</p>
                            <div className="flex items-center gap-3 mt-1 flex-wrap">
                              <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#1a3a72]/60">{ev.town.name}, {ev.town.state}</span>
                              {ev.themes.slice(0, 2).map((t) => (
                                <span key={t.id} className="font-ui text-[8px] uppercase tracking-[0.08em] text-[#14100a]/25 border border-[#14100a]/10 px-1.5 py-0.5">{t.name}</span>
                              ))}
                            </div>
                          </div>
                          {/* Significance bar */}
                          <div className="hidden md:flex flex-col justify-center flex-shrink-0 w-16">
                            <div className="h-[3px] bg-[#14100a]/8 w-full">
                              <div className="h-full bg-[#cc3322]" style={{ width: `${ev.significanceWeight}%` }} />
                            </div>
                          </div>
                        </NextLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
