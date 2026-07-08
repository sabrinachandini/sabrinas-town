export const dynamic = "force-dynamic";

import { getEvents } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Lexington, MA",
  description:
    "The full timeline of Lexington's Revolutionary War history — from the midnight ride to the final battle, every event documented and sourced.",
};

export default async function EventsPage() {
  const events = await getEvents();

  const byYear = events.reduce<Record<string, typeof events>>((acc, e) => {
    const year = e.startDate ? new Date(e.startDate).getFullYear().toString() : "Undated";
    (acc[year] ??= []).push(e);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => {
    if (a === "Undated") return 1;
    if (b === "Undated") return -1;
    return Number(a) - Number(b);
  });

  return (
    <div className="bg-cream">
      {/* Page header */}
      <div className="section-border bg-navy text-cream">
        <div className="max-w-wide mx-auto px-5 pt-12 pb-10">
          <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
            {events.length} events documented
          </div>
          <h1 className="font-condensed text-[clamp(3rem,8vw,6rem)] uppercase leading-none text-cream mb-4">
            What&apos;s On
          </h1>
          <p className="font-ui text-base text-cream/70 max-w-xl leading-relaxed">
            The full timeline — from the weeks before the battle to the decades that followed.
            Each event is sourced and cross-referenced to the people and places involved.
          </p>
        </div>
      </div>

      <div className="max-w-wide mx-auto px-5">
        {/* Patriots' Day fixed spotlight */}
        <div className="py-8 border-b-4 border-[#14100a]">
          <div className="p-6 border-l-4 border-crimson bg-paper">
            <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-crimson-ink font-medium mb-1">
              Annual Celebration · Third Monday in April
            </div>
            <h2 className="font-heading text-2xl text-ink mb-2">Patriots&apos; Day in Lexington</h2>
            <p className="font-ui text-sm text-slate leading-relaxed max-w-2xl mb-3">
              The largest Patriots&apos; Day observance in Massachusetts takes place on Lexington Green.
              The reenactment of the Battle of Lexington begins around 5:30&nbsp;AM and draws thousands.
              The parade marches Massachusetts Ave toward Concord shortly after. Plan to arrive before dawn.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.lexingtonma.gov/patriots-day"
                className="font-ui text-xs text-crimson-ink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Patriots' Day information from Lexington MA government"
              >
                Official Patriots&apos; Day information ↗
              </a>
              <a
                href="https://www.nps.gov/mima/patriots-day.htm"
                className="font-ui text-xs text-crimson-ink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Patriots' Day at Minute Man National Historical Park, National Park Service"
              >
                NPS — Minute Man NHP ↗
              </a>
            </div>
          </div>
        </div>

        {/* Timeline by year */}
        <div className="pb-16">
          {years.length === 0 && (
            <p className="font-ui text-sm text-slate py-12 text-center">
              Events loading — check back soon.
            </p>
          )}

          {years.map((year) => (
            <div key={year} className="border-b border-[#ddd8ce] last:border-0">
              {/* Year heading */}
              <div className="sticky top-0 bg-cream/95 backdrop-blur-sm py-3 flex items-center gap-4 z-10">
                <div className="font-condensed text-5xl text-crimson leading-none w-20 shrink-0">
                  {year}
                </div>
                <div className="h-px flex-1 bg-[#ddd8ce]" />
                <div className="font-ui text-xs text-slate shrink-0">
                  {byYear[year].length} event{byYear[year].length !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Events for this year */}
              <div className="pl-24 pb-6 space-y-0">
                {byYear[year].map((event) => (
                  event.slug ? (
                    <a
                      key={event.id}
                      href={`/events/${event.slug}`}
                      className="group flex gap-5 py-4 pr-4 hover:bg-paper -ml-24 pl-24 -mr-5 pr-5 transition-colors items-start"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-ui font-medium text-ink group-hover:text-crimson transition-colors">
                          {event.name}
                        </div>
                        <p className="font-ui text-sm text-slate mt-0.5 leading-snug line-clamp-2">
                          {event.summary}
                        </p>
                        {(event.peopleCount > 0 || event.themesCount > 0) && (
                          <div className="flex gap-4 mt-1.5 font-ui text-xs text-slate/60">
                            {event.peopleCount > 0 && (
                              <span>{event.peopleCount} {event.peopleCount === 1 ? "person" : "people"}</span>
                            )}
                            {event.themesCount > 0 && (
                              <span>{event.themesCount} {event.themesCount === 1 ? "theme" : "themes"}</span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-slate/30 group-hover:text-crimson/40 transition-colors font-condensed text-2xl self-start mt-0.5 shrink-0">→</div>
                    </a>
                  ) : (
                    <div key={event.id} className="py-4">
                      <div className="font-ui font-medium text-ink">{event.name}</div>
                      <p className="font-ui text-sm text-slate mt-0.5 leading-snug">
                        {event.summary}
                      </p>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
