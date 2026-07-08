export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getTown, getPeopleCount } from "@/lib/api";
import { Container, Divider } from "@hife/ui";

export default async function HomePage() {
  const [town, peopleCount] = await Promise.all([getTown(), getPeopleCount()]);
  if (!town) notFound();

  const topEvents = town.events.slice(0, 6);
  const topStories = town.stories.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-navy text-cream">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-14">
          <div className="text-red font-condensed text-xs tracking-[0.25em] uppercase mb-4">
            April 19, 1775 · The North Bridge
          </div>
          <h1 className="font-condensed text-[clamp(3.5rem,10vw,7rem)] leading-none uppercase tracking-tight">
            Concord
          </h1>
          <p className="font-condensed text-xl tracking-[0.15em] uppercase text-cream/50 mt-1 mb-6">
            Massachusetts
          </p>
          <p className="font-body text-base md:text-lg text-cream/75 max-w-2xl leading-relaxed">
            {town.execSummary150 || town.heroSummary40}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 border-t border-cream/10 pt-8">
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{town.events.length}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">Events</div>
            </div>
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{peopleCount}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">People</div>
            </div>
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{town.stories.length}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">Stories</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key Events ── */}
      <Container>
        <section className="py-14">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-condensed text-2xl uppercase tracking-wide">Key Events</h2>
            <a href="/events" className="font-body text-sm text-red hover:underline">
              All {town.events.length} events →
            </a>
          </div>

          <div className="divide-y divide-border-light">
            {topEvents.map((event) => (
              <a
                key={event.id}
                href={event.slug ? `/events/${event.slug}` : "/events"}
                className="flex gap-5 py-5 group"
              >
                <div className="font-condensed text-red text-xl w-12 shrink-0 tabular-nums pt-0.5">
                  {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors">
                    {event.name}
                  </div>
                  <p className="font-body text-sm text-text-muted mt-0.5 leading-snug line-clamp-2">
                    {event.summary}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {topStories.length > 0 && (
          <>
            <Divider />

            {/* ── Stories ── */}
            <section className="py-14">
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-condensed text-2xl uppercase tracking-wide">Voices from 1775</h2>
                <a href="/stories" className="font-body text-sm text-red hover:underline">
                  All {town.stories.length} stories →
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {topStories.map((story) => (
                  <a
                    key={story.id}
                    href={story.slug ? `/stories/${story.slug}` : "/stories"}
                    className="p-5 bg-bg-secondary rounded-lg border border-border-light hover:border-red transition-colors group"
                  >
                    <div className="font-body text-xs uppercase tracking-widest text-red mb-2">
                      {story.storyType === "HISTORICAL_VOICE" ? "Historical Voice" : "Modern Voice"}
                    </div>
                    <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors leading-snug">
                      {story.title}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </>
        )}

        <Divider />

        {/* ── Explore grid ── */}
        <section className="py-14">
          <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">Explore Concord</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/people", label: "People", desc: "Minutemen, farmers, officers, and witnesses of 1775" },
              { href: "/events", label: "Events", desc: "From the alarm riders to the retreat back to Boston" },
              { href: "/places", label: "Places", desc: "The North Bridge, taverns, and the roads that mattered" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-6 border border-border-light rounded-lg hover:border-red hover:bg-bg-secondary transition-colors group"
              >
                <div className="font-condensed text-xl uppercase tracking-wide group-hover:text-red transition-colors">
                  {item.label}
                </div>
                <p className="font-body text-sm text-text-muted mt-1">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
