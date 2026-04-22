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
  return new Date(iso).getMonth();
}

export default async function EventsPage() {
  const [historicalEvents, localEvents] = await Promise.all([
    getAllEvents({ minSignificance: 65, limit: 300 }),
    getAllLocalEvents(),
  ]);

  const byMonth: Record<number, typeof historicalEvents> = {};
  for (let i = 0; i < 12; i++) byMonth[i] = [];
  const undated: typeof historicalEvents = [];
  for (const ev of historicalEvents) {
    const m = getMonthFromDate(ev.startDate);
    if (m !== null) byMonth[m].push(ev);
    else undated.push(ev);
  }

  const activeMonths = Object.entries(byMonth)
    .filter(([, evs]) => evs.length > 0)
    .sort(([, a], [, b]) => b.length - a.length);

  const maxMonthCount = Math.max(...Object.values(byMonth).map((arr) => arr.length), 1);
  const keyEvents = historicalEvents.filter((e) => e.significanceWeight >= 85).slice(0, 3);

  return (
    <div className="bg-[#f2e6c8] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] pt-16 pb-0 px-8 md:px-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute right-[-0.04em] bottom-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: "clamp(9rem,20vw,17rem)" }}
        >
          1776
        </div>
        <svg className="absolute top-0 left-[40%] h-full w-[1px] pointer-events-none" viewBox="0 0 1 400" fill="none" preserveAspectRatio="none" aria-hidden>
          <line x1="0.5" y1="0" x2="0.5" y2="400" stroke="rgba(232,184,75,0.06)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-[#f2e6c8]/25 mb-10">
            <NextLink href="/" className="no-underline hover:text-[#f2e6c8]/50 transition-colors">Home</NextLink>
            <span>/</span>
            <span className="text-[#f2e6c8]/45">Events</span>
          </nav>

          <div className="pb-16">
            <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#4A6A9B] mb-5">Historical Record</p>
            <h1
              className="font-display text-[#f2e6c8] leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(52px,10vw,130px)" }}
            >
              Events of the<br />Revolution
            </h1>
            <p className="font-editorial italic text-[19px] text-[#f2e6c8]/50 max-w-[540px] leading-[1.65] mt-6">
              {historicalEvents.length} recorded events — battles, signings, sieges, councils, and the moments that turned the tide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: historicalEvents.length, label: "Historical Events" },
          { n: localEvents.length, label: "Living History" },
          { n: activeMonths.length, label: "Active Months" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2.2rem] text-[#4A6A9B] leading-none">{s.n}</span>
            <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Key events spotlight ── */}
      {keyEvents.length > 0 && (
        <section className="border-b-4 border-[#14100a] bg-[#1a3a72]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-10">
            <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#4A6A9B] mb-8 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#4A6A9B] inline-block" />
              Pivotal Moments
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-[#f2e6c8]/10">
              {keyEvents.map((ev) => {
                const d = ev.startDate ? new Date(ev.startDate) : null;
                const year = d ? d.getUTCFullYear() : null;
                const month = d ? d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) : null;
                const day = d ? d.getUTCDate() : null;
                return (
                  <NextLink
                    key={ev.id}
                    href={ev.slug ? `/events/${ev.slug}` : `/towns/${ev.town.slug}/timeline`}
                    className="no-underline bg-[#1a3a72] hover:bg-[#1a3a72] group transition-colors p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
                  >
                    {year && (
                      <div
                        aria-hidden
                        className="absolute right-4 bottom-2 font-display text-white/[0.06] leading-none pointer-events-none select-none"
                        style={{ fontSize: "6rem" }}
                      >
                        {year}
                      </div>
                    )}
                    <div>
                      {day && month && (
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="font-display text-[2.5rem] text-[#4A6A9B] leading-none">{day}</span>
                          <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#f2e6c8]/40">{month} {year}</span>
                        </div>
                      )}
                      <p className="font-display text-[#f2e6c8] text-[clamp(17px,2vw,22px)] leading-tight group-hover:text-[#4A6A9B] transition-colors">
                        {ev.name}
                      </p>
                    </div>
                    <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#f2e6c8]/30 mt-4">
                      {ev.town.name}, {ev.town.state}
                    </p>
                  </NextLink>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-24">

        {/* ── Living History Events ── */}
        {localEvents.length > 0 && (
          <section>
            <div className="border-t-[3px] border-[#14100a] pt-6 mb-10">
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                Living History
              </p>
              <h2 className="font-display text-[#14100a] text-[clamp(28px,4vw,48px)] leading-[0.9] mt-2">Visit the Revolution</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#1a3a72]/12">
              {localEvents.map((ev) => {
                const monthLabel = ev.month ? MONTHS[ev.month - 1] : null;
                const dayLabel = ev.day ? (ev.endDay ? `${ev.day}–${ev.endDay}` : String(ev.day)) : null;
                return (
                  <div key={ev.id} className={`p-5 flex flex-col ${ev.featured ? "bg-[#1a3a72]" : "bg-[#f2e6c8]"}`}>
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div>
                        {monthLabel && (
                          <div className={`inline-block px-3 py-2 text-center mb-1 border-2 ${ev.featured ? "bg-[#4A6A9B] border-[#4A6A9B] text-[#14100a]" : "bg-[#1a3a72] border-[#14100a] text-[#f2e6c8]"}`}>
                            {dayLabel && <p className="font-display text-[18px] leading-none">{dayLabel}</p>}
                            <p className="font-ui text-[10px] uppercase tracking-[0.12em] opacity-70">{monthLabel}</p>
                          </div>
                        )}
                        {ev.recurrence === "annual" && (
                          <span className={`block font-ui text-[10px] uppercase tracking-[0.1em] mt-1 ${ev.featured ? "text-[#4A6A9B]" : "text-[#cc3322]"}`}>Annual</span>
                        )}
                      </div>
                      <span className={`font-ui text-[9px] uppercase tracking-[0.08em] border px-1.5 py-0.5 flex-shrink-0 ${ev.featured ? "border-[#f2e6c8]/20 text-[#f2e6c8]/50" : "border-[#14100a]/15 text-[#14100a]/40"}`}>
                        {CATEGORY_LABELS[ev.category] ?? ev.category}
                      </span>
                    </div>
                    <p className={`font-display text-[18px] leading-tight mb-2 flex-1 ${ev.featured ? "text-[#f2e6c8]" : "text-[#14100a]"}`}>{ev.name}</p>
                    <NextLink href={`/towns/${ev.town.slug}`} className={`no-underline font-ui text-[11px] uppercase tracking-[0.1em] hover:text-[#cc3322] transition-colors ${ev.featured ? "text-[#f2e6c8]/50" : "text-[#1a3a72]"}`}>
                      {ev.town.name}, {ev.town.state}
                    </NextLink>
                    {ev.venue && <p className={`font-ui text-[11px] mt-1 ${ev.featured ? "text-[#f2e6c8]/35" : "text-[#14100a]/40"}`}>{ev.venue}</p>}
                    {ev.dateNote && <p className={`font-ui text-[11px] italic mt-1 ${ev.featured ? "text-[#f2e6c8]/40" : "text-[#14100a]/50"}`}>{ev.dateNote}</p>}
                    {ev.url && (
                      <a href={ev.url} target="_blank" rel="noopener noreferrer" className={`no-underline block mt-4 font-ui text-[11px] uppercase tracking-[0.12em] hover:text-[#1a3a72] transition-colors ${ev.featured ? "text-[#4A6A9B]" : "text-[#cc3322]"}`}>
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
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
              The Historical Record
            </p>
            <h2 className="font-display text-[#14100a] text-[clamp(28px,4vw,48px)] leading-[0.9] mt-2">Events by Month</h2>
          </div>

          {/* Month activity bar — bold version */}
          <div className="grid grid-cols-12 gap-[2px] mb-14 border-2 border-[#14100a]/12 p-4 bg-[#1a3a72]/[0.02]">
            {MONTHS.map((month, i) => {
              const count = byMonth[i]?.length ?? 0;
              const pct = (count / maxMonthCount) * 100;
              return (
                <a key={month} href={`#month-${i}`} className="no-underline group flex flex-col items-center gap-2">
                  <div className="w-full relative flex items-end justify-center" style={{ height: 80 }}>
                    <div
                      className="w-full bg-[#cc3322] group-hover:bg-[#1a3a72] transition-colors"
                      style={{ height: count > 0 ? `${Math.max(pct, 8)}%` : "2px", opacity: count > 0 ? 1 : 0.15 }}
                    />
                  </div>
                  <span className="font-ui text-[9px] uppercase tracking-[0.06em] text-[#14100a]/40 group-hover:text-[#cc3322] transition-colors">{month.slice(0, 3)}</span>
                  {count > 0 && <span className="font-display text-[1.1rem] text-[#14100a]/25 leading-none group-hover:text-[#cc3322] transition-colors">{count}</span>}
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
                  <div className="flex items-baseline gap-6 mb-6">
                    <h3 className="font-display text-[#14100a] text-[clamp(24px,4vw,40px)] leading-none">{month}</h3>
                    <div className="flex-1 h-[2px] bg-[#1a3a72]/10" />
                    <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#14100a]/30 flex-shrink-0">{events.length}</span>
                  </div>
                  <div className="space-y-0">
                    {sorted.map((ev) => {
                      const d = ev.startDate ? new Date(ev.startDate) : null;
                      const day = d ? d.getUTCDate() : null;
                      const year = d ? d.getUTCFullYear() : null;
                      const isKey = ev.significanceWeight >= 85;
                      return (
                        <NextLink
                          key={ev.id}
                          href={ev.slug ? `/events/${ev.slug}` : `/towns/${ev.town.slug}/timeline`}
                          className={`no-underline flex gap-0 border-b border-[#14100a]/8 last:border-b-0 group items-stretch ${isKey ? "bg-[#1a3a72]/[0.03] hover:bg-[#1a3a72]/8" : "hover:bg-[#1a3a72]/[0.02]"} transition-colors`}
                        >
                          {/* Date column */}
                          <div className={`flex-shrink-0 w-20 flex flex-col items-center justify-center py-5 border-r-2 ${isKey ? "border-[#cc3322]/20 bg-[#cc3322]/[0.04]" : "border-[#14100a]/8"}`}>
                            {day && (
                              <p className={`font-display text-[2rem] leading-none ${isKey ? "text-[#cc3322]" : "text-[#14100a]/20"} group-hover:text-[#cc3322] transition-colors`}>
                                {day}
                              </p>
                            )}
                            {year && (
                              <p className="font-ui text-[10px] uppercase tracking-[0.06em] text-[#14100a]/25 mt-1">{year}</p>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 px-5 py-5">
                            <div className="flex items-start gap-3 flex-wrap">
                              <p className={`font-editorial text-[17px] leading-snug flex-1 min-w-0 ${isKey ? "text-[#14100a]" : "text-[#14100a]/80"} group-hover:text-[#cc3322] transition-colors`}>
                                {ev.name}
                              </p>
                              {isKey && (
                                <span className="flex-shrink-0 font-ui text-[9px] uppercase tracking-[0.15em] text-[#4A6A9B] border border-[#4A6A9B]/40 px-2 py-0.5 self-start">
                                  Key
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-2 flex-wrap">
                              <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#1a3a72]/55">{ev.town.name}, {ev.town.state}</span>
                              {ev.themes.slice(0, 2).map((t) => (
                                <span key={t.id} className="font-ui text-[10px] uppercase tracking-[0.06em] text-[#14100a]/22 border border-[#14100a]/10 px-1.5 py-0.5">{t.name}</span>
                              ))}
                            </div>
                          </div>

                          {/* Significance bar */}
                          <div className="hidden md:flex flex-col justify-center flex-shrink-0 w-14 pr-5">
                            <div className="h-[3px] bg-[#1a3a72]/8 w-full">
                              <div className={`h-full ${isKey ? "bg-[#cc3322]" : "bg-[#1a3a72]/30"} group-hover:bg-[#cc3322] transition-colors`} style={{ width: `${ev.significanceWeight}%` }} />
                            </div>
                            <span className="font-ui text-[10px] text-[#14100a]/20 mt-1 text-right">{ev.significanceWeight}</span>
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
