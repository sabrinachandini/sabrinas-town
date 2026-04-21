import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Timeline | Town Not Found" };
  const title = `Timeline | ${town.name}, ${town.state}`;
  const description = `Timeline of Revolutionary War events in ${town.name}, ${town.state}.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/timeline`;
  return {
    title, description,
    openGraph: { title, description, url },
    alternates: { canonical: url },
  };
}

export default async function TimelinePage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) return <ComingSoon slug={slug} section="Timeline" />;

  const sortedEvents = [...town.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  // Group by year
  const byYear: Record<string, typeof sortedEvents> = {};
  for (const event of sortedEvents) {
    const year = event.startDate
      ? new Date(event.startDate).getUTCFullYear().toString()
      : "Undated";
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(event);
  }
  const years = Object.keys(byYear).sort((a, b) =>
    a === "Undated" ? 1 : b === "Undated" ? -1 : parseInt(a) - parseInt(b)
  );

  const formatDateParts = (dateStr: string | null) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return {
      month: d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
      day: d.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" }),
    };
  };

  const totalPeople = sortedEvents.reduce((acc, e) => acc + e.peopleCount, 0);

  return (
    <div className="bg-[#f2e6c8] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-20 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-[-0.05em] bottom-[-0.15em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: "clamp(7rem,16vw,13rem)" }}
        >
          TIMELINE
        </div>

        {/* Decorative timeline SVG */}
        <svg
          className="absolute right-[15%] top-0 bottom-0 h-full pointer-events-none"
          width="60" viewBox="0 0 60 400" fill="none" preserveAspectRatio="none" aria-hidden
        >
          <line x1="30" y1="0" x2="30" y2="400" stroke="rgba(232,184,75,0.10)" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="30" cy="70"  r="5" fill="rgba(204,51,34,0.45)" />
          <circle cx="30" cy="160" r="4" fill="rgba(232,184,75,0.40)" />
          <circle cx="30" cy="250" r="6" fill="rgba(204,51,34,0.55)" />
          <circle cx="30" cy="330" r="3" fill="rgba(232,184,75,0.30)" />
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 mb-8">
            <NextLink href="/" className="no-underline hover:text-[#f2e6c8]/60 transition-colors">Home</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${slug}`} className="no-underline hover:text-[#f2e6c8]/60 transition-colors">{town.name}</NextLink>
            <span>/</span>
            <span className="text-[#f2e6c8]/55">Timeline</span>
          </nav>

          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#e8b84b] mb-4">
            {town.name}, {town.state}
          </p>
          <h1
            className="font-display text-[#f2e6c8] leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(48px,9vw,120px)" }}
          >
            Timeline
          </h1>
          <p className="font-editorial italic text-[18px] text-[#f2e6c8]/60 max-w-[560px] leading-[1.65] mt-6">
            {sortedEvents.length} documented events — from first stirrings to the final shots.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: sortedEvents.length, label: "Events" },
          { n: years.filter((y) => y !== "Undated").length, label: "Years" },
          { n: totalPeople, label: "People Involved" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{s.n}</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Year nav ── */}
      {years.length > 1 && (
        <div className="border-b border-[#14100a]/10 bg-[#f2e6c8] sticky top-0 z-10 overflow-x-auto">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex gap-6 py-3">
            {years.map((year) => (
              <a
                key={year}
                href={`#year-${year}`}
                className="no-underline font-ui text-[9px] uppercase tracking-[0.12em] text-[#14100a]/40 hover:text-[#cc3322] transition-colors whitespace-nowrap"
              >
                {year} <span className="text-[#14100a]/25">({byYear[year].length})</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── Events by year ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-20">
        {years.map((year) => (
          <section key={year} id={`year-${year}`}>

            {/* Year stamp */}
            <div className="flex items-center gap-6 mb-10">
              <div
                className="bg-[#14100a] text-[#e8b84b] font-display leading-none px-4 py-2 -rotate-[0.8deg] flex-shrink-0"
                style={{ fontSize: "clamp(40px,5vw,64px)" }}
              >
                {year}
              </div>
              <div className="flex-1 h-[3px] bg-[#14100a]/10" />
              <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#14100a]/30 flex-shrink-0">
                {byYear[year].length} event{byYear[year].length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Timeline rail */}
            <div className="relative pl-10 md:pl-16 border-l-[3px] border-[#14100a]/10">
              {byYear[year].map((event) => {
                const date = formatDateParts(event.startDate);
                const isKey = event.significanceWeight >= 70;
                const href = (event as { slug?: string }).slug
                  ? `/towns/${slug}/timeline/${(event as { slug?: string }).slug}`
                  : `/towns/${slug}/timeline/${event.id}`;

                return (
                  <NextLink
                    key={event.id}
                    href={href}
                    className="no-underline group flex gap-4 md:gap-6 py-5 border-b border-[#14100a]/8 last:border-b-0 relative"
                  >
                    {/* Rail dot */}
                    <div
                      className={`absolute left-[-22px] top-7 w-[10px] h-[10px] rounded-full border-2 border-[#f2e6c8] flex-shrink-0 transition-transform group-hover:scale-125 ${isKey ? "bg-[#cc3322]" : "bg-[#1a3a72]/50"}`}
                    />

                    {/* Date badge */}
                    <div className="flex-shrink-0 self-start">
                      {date ? (
                        <div className={`w-[52px] text-center px-1 py-2 ${isKey ? "bg-[#cc3322]" : "bg-[#1a3a72]"}`}>
                          <p className="font-display text-[20px] text-[#f2e6c8] leading-none">{date.day}</p>
                          <p className="font-ui text-[7px] uppercase tracking-[0.1em] text-[#f2e6c8]/60 mt-0.5">{date.month}</p>
                        </div>
                      ) : (
                        <div className="w-[52px] text-center bg-[#14100a]/8 px-1 py-3">
                          <p className="font-ui text-[7px] uppercase tracking-[0.06em] text-[#14100a]/30 leading-tight">n/a</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {isKey && (
                        <span className="inline-block font-ui text-[7px] uppercase tracking-[0.14em] text-[#cc3322] border border-[#cc3322]/40 px-1.5 py-0.5 mb-2">
                          Key Event
                        </span>
                      )}
                      <p className="font-display text-[clamp(18px,2.5vw,26px)] text-[#14100a] group-hover:text-[#cc3322] transition-colors leading-tight">
                        {event.name}
                      </p>
                      {event.summary && (
                        <p className="font-ui text-[12px] text-[#14100a]/50 leading-relaxed mt-2 line-clamp-2">
                          {event.summary}
                        </p>
                      )}
                      {(event.peopleCount > 0 || event.themesCount > 0) && (
                        <div className="flex items-center gap-4 mt-3">
                          {event.peopleCount > 0 && (
                            <span className="font-ui text-[9px] uppercase tracking-[0.08em] text-[#1a3a72]/50">
                              {event.peopleCount} {event.peopleCount === 1 ? "person" : "people"}
                            </span>
                          )}
                          {event.themesCount > 0 && (
                            <span className="font-ui text-[9px] uppercase tracking-[0.08em] text-[#14100a]/25">
                              {event.themesCount} theme{event.themesCount !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <span className="font-display text-[#cc3322] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 self-center text-[18px]">
                      →
                    </span>
                  </NextLink>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* ── Back to town ── */}
      <div className="border-t-4 border-[#14100a] bg-[#14100a] py-8 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <NextLink
            href={`/towns/${slug}`}
            className="no-underline font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/40 hover:text-[#f2e6c8] transition-colors"
          >
            ← Back to {town.name}
          </NextLink>
        </div>
      </div>
    </div>
  );
}
