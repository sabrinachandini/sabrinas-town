export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@hife/ui";

export default async function HomePage() {
  const town = await getTown();
  if (!town) notFound();

  return (
    <Container>
      <div className="py-16">
        <div className="text-red font-condensed text-sm tracking-widest uppercase mb-3">
          April 19, 1775 · The First Shot
        </div>
        <Heading level={1} className="text-5xl md:text-7xl font-condensed uppercase tracking-tight">
          {town.name}
        </Heading>
        <Text className="mt-4 text-xl max-w-xl">
          {town.execSummary150 || town.heroSummary40}
        </Text>

        <div className="flex gap-10 mt-10">
          <div>
            <div className="text-4xl font-condensed text-navy">{town.events.length}</div>
            <div className="text-sm font-body text-text-muted uppercase tracking-wide">Events</div>
          </div>
          <div>
            <div className="text-4xl font-condensed text-navy">{town.stories.length}</div>
            <div className="text-sm font-body text-text-muted uppercase tracking-wide">Stories</div>
          </div>
          <div>
            <div className="text-4xl font-condensed text-navy">{town.linkedTowns.length}</div>
            <div className="text-sm font-body text-text-muted uppercase tracking-wide">Connected Towns</div>
          </div>
        </div>
      </div>

      <Divider />

      <section className="py-12">
        <Heading level={2} className="mb-6">Key Events</Heading>
        <div className="space-y-4">
          {town.events.slice(0, 6).map((event) => (
            <a
              key={event.id}
              href={event.slug ? `/events/${event.slug}` : "/events"}
              className="flex gap-4 items-start group"
            >
              <div className="text-red font-condensed text-lg w-12 shrink-0">
                {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
              </div>
              <div>
                <div className="font-body font-semibold group-hover:text-red transition-colors">{event.name}</div>
                <Text className="text-sm text-text-muted">{event.summary}</Text>
              </div>
            </a>
          ))}
        </div>
        <a href="/events" className="inline-block mt-6 text-sm font-body text-red hover:underline">
          View all events →
        </a>
      </section>
    </Container>
  );
}
