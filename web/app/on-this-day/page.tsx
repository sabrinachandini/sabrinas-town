import { getOnThisDay } from "@/lib/api";
import NextLink from "next/link";

export const revalidate = 3600;

export function generateMetadata() {
  const now = new Date();
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const day = now.getDate();
  return {
    title: `On This Day — ${month} ${day} | History is for Everyone`,
    description: `Revolutionary War events that happened on ${month} ${day} — battles, decisions, and turning points from 1775–1783.`,
    robots: { index: true, follow: true },
  };
}

export default async function OnThisDayPage() {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const events = await getOnThisDay(month, day);

  const monthName = now.toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
  const dayNum = now.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" });

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]" style={{ fontSize: "clamp(120px,22vw,300px)", letterSpacing: "-0.05em" }}>
          {dayNum}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/40 mb-2">
            The Revolution, Day by Day
          </p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(44px,8vw,96px)" }}>
            {monthName} {dayNum}
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-5" />
          <p className="font-editorial italic font-light text-[17px] text-cream/60 max-w-[520px] leading-[1.65]">
            {events.length > 0
              ? `${events.length} documented event${events.length !== 1 ? "s" : ""} in the Revolutionary War happened on this date.`
              : "No documented events fall on this exact date — but the war never stopped."}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        {events.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-display text-[80px] text-ink/5 leading-none mb-4">—</p>
            <p className="font-editorial text-[22px] text-ink/40 mb-3">Nothing recorded on {monthName} {dayNum}</p>
            <p className="font-ui text-[15px] text-ink/30 max-w-[480px] mx-auto leading-relaxed">
              The Revolutionary War produced thousands of documented events between 1763 and 1783.
              Not every date has a recorded battle or decision — but the work of building a nation
              continued regardless.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <NextLink href="/towns" className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-5 py-2.5 hover:border-crimson hover:text-crimson transition-colors">
                Explore Towns →
              </NextLink>
              <NextLink href="/map" className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-5 py-2.5 hover:border-crimson hover:text-crimson transition-colors">
                View Network Map →
              </NextLink>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-t-[3px] border-ink pt-6 mb-10">
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                Events on {monthName} {dayNum}
              </p>
            </div>

            <ol className="space-y-0">
              {events.map((event) => (
                <li key={event.id} className="flex gap-6 py-7 border-b border-ink/8 last:border-b-0 group">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-20">
                    <div className="bg-[#1a3a72] text-cream inline-block px-3 py-2 text-center w-full">
                      <p className="font-display text-[24px] leading-none text-cream">{event.year}</p>
                      <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cream/40 mt-0.5">{monthName.slice(0,3)} {dayNum}</p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <NextLink
                      href={`/towns/${event.town.slug}/timeline/${event.slug ?? event.id}`}
                      className="no-underline font-display text-[clamp(20px,2.5vw,28px)] text-ink group-hover:text-crimson transition-colors leading-tight block tracking-[-0.02em]"
                    >
                      {event.name}
                    </NextLink>
                    <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson/70 mt-1 mb-2">
                      {event.town.name}, {event.town.state}
                    </p>
                    {event.summary && (
                      <p className="font-ui text-[15px] text-ink/55 leading-relaxed line-clamp-3">
                        {event.summary}
                      </p>
                    )}
                    {event.themes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {event.themes.slice(0, 3).map((theme) => (
                          <span key={theme.id} className="font-ui text-[10px] uppercase tracking-[0.1em] text-ink/30 border border-ink/10 px-1.5 py-0.5">
                            {theme.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 pt-8 border-t-2 border-ink/10 flex flex-wrap gap-4">
              <NextLink
                href="/towns"
                className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-ink border border-ink/20 px-6 py-3 hover:border-crimson hover:text-crimson transition-colors"
              >
                Explore All Towns →
              </NextLink>
              <NextLink
                href="/map"
                className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-ink border border-ink/20 px-6 py-3 hover:border-crimson hover:text-crimson transition-colors"
              >
                View Network Map →
              </NextLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
