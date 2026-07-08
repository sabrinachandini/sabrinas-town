export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getEvent } from "@/lib/api";
import { Container, Heading, Text } from "@hife/ui";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event Not Found" };
  return { title: `${event.name} — Lexington, MA` };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  const year = event.startDate ? new Date(event.startDate).getFullYear() : null;
  const dateLabel = event.startDate
    ? new Date(event.startDate).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      })
    : null;

  return (
    <Container>
      <div className="py-12 max-w-2xl">
        <a href="/events" className="text-sm font-body text-red hover:underline mb-8 inline-block">
          ← All events
        </a>

        {year && (
          <div className="text-red font-condensed text-sm tracking-widest uppercase mb-3">
            {dateLabel ?? year}
          </div>
        )}

        <Heading level={1} className="text-4xl md:text-5xl font-condensed uppercase tracking-tight leading-tight">
          {event.name}
        </Heading>

        <Text className="mt-4 text-lg text-text-muted leading-relaxed">
          {event.summary}
        </Text>


        {event.people.length > 0 && (
          <div className="mt-10 pt-8 border-t border-border-light">
            <div className="text-xs font-body text-text-muted uppercase tracking-widest mb-4">
              People in this event
            </div>
            <div className="flex flex-wrap gap-3">
              {event.people.map((person) => (
                <a
                  key={person.id}
                  href={person.slug ? `/people/${person.slug}` : "/people"}
                  className="inline-flex flex-col px-4 py-2 bg-bg-secondary rounded border border-border-light hover:border-red transition-colors"
                >
                  <span className="font-body font-semibold text-sm text-text-primary">{person.name}</span>
                  {person.roles.length > 0 && (
                    <span className="text-xs text-red uppercase tracking-wide mt-0.5">
                      {person.roles[0]}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
