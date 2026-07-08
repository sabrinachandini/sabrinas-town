export const dynamic = "force-dynamic";

import { getEvents } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@hife/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Lexington, MA",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Timeline of Events</Heading>
        <Text className="mt-2 text-text-muted">
          {events.length} events in Lexington&apos;s Revolutionary War record.
        </Text>
      </div>

      <div className="pb-16 space-y-0">
        {events.map((event, i) => (
          <div key={event.id}>
            {event.slug ? (
              <a href={`/events/${event.slug}`} className="flex gap-6 py-5 items-start group hover:bg-bg-secondary -mx-4 px-4 transition-colors">
                <div className="text-red font-condensed text-xl w-14 shrink-0 pt-0.5">
                  {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
                </div>
                <div className="flex-1">
                  <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors">{event.name}</div>
                  <Text className="mt-1 text-sm text-text-muted">{event.summary}</Text>
                  {(event.peopleCount > 0 || event.themesCount > 0) && (
                    <div className="flex gap-4 mt-2 text-xs font-body text-text-muted">
                      {event.peopleCount > 0 && <span>{event.peopleCount} people</span>}
                      {event.themesCount > 0 && <span>{event.themesCount} themes</span>}
                    </div>
                  )}
                </div>
              </a>
            ) : (
              <div className="flex gap-6 py-5 items-start">
                <div className="text-red font-condensed text-xl w-14 shrink-0 pt-0.5">
                  {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
                </div>
                <div className="flex-1">
                  <div className="font-body font-semibold text-text-primary">{event.name}</div>
                  <Text className="mt-1 text-sm text-text-muted">{event.summary}</Text>
                </div>
              </div>
            )}
            {i < events.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Container>
  );
}
