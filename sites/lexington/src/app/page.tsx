export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getTown, getPeopleCount } from "@/lib/api";
import { Container, Divider } from "@hife/ui";
import { TownHero, WhatsOnSection } from "@hife/town-site";
import { townConfig } from "@/lib/town.config";

export default async function HomePage() {
  const [town, peopleCount] = await Promise.all([getTown(), getPeopleCount()]);
  if (!town) notFound();

  const topEvents = town.events.slice(0, 6);
  const topStories = town.stories.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <TownHero
        config={townConfig}
        intro={town.execSummary150 || town.heroSummary40}
        stats={{
          events: town.events.length,
          people: peopleCount,
          stories: town.stories.length,
        }}
      />

      {/* ── Key Events ── */}
      <Container>
        <WhatsOnSection
          config={townConfig}
          totalCount={town.events.length}
          events={topEvents.map((event) => ({
            id: event.id,
            title: event.name,
            date: event.startDate,
            description: event.summary,
            href: event.slug ? `/events/${event.slug}` : "/events",
          }))}
        />

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
          <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">Explore Lexington</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/people", label: "People", desc: "Soldiers, ministers, patriots, and witnesses" },
              { href: "/events", label: "Events", desc: "The full timeline from the alarm to the treaty" },
              { href: "/places", label: "Places", desc: "Sites, taverns, and landscapes of 1775" },
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
