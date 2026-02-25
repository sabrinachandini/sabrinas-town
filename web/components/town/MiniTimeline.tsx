import { Text } from "@/components/ui";

export interface TimelineEvent {
  id: string;
  name: string;
  startDate: string | null;
}

export interface MiniTimelineProps {
  events: TimelineEvent[];
  maxItems?: number;
}

export function MiniTimeline({ events, maxItems = 5 }: MiniTimelineProps) {
  // Sort by date and take events with dates
  const sortedEvents = [...events]
    .filter((e) => e.startDate)
    .sort((a, b) => {
      if (!a.startDate || !b.startDate) return 0;
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    })
    .slice(0, maxItems);

  if (sortedEvents.length === 0) {
    return (
      <Text size="small" muted className="italic">
        Timeline dates being researched.
      </Text>
    );
  }

  return (
    <div className="relative pl-6 space-y-element">
      {/* Timeline line */}
      <div className="absolute left-2 top-2 bottom-2 w-px bg-border-light" />

      {sortedEvents.map((event) => (
        <div key={event.id} className="relative">
          {/* Timeline dot */}
          <div className="absolute left-[-18px] top-1.5 w-2 h-2 rounded-full bg-accent-blue" />
          <div className="flex items-baseline gap-3">
            <Text size="small" className="font-mono text-accent-blue flex-shrink-0">
              {new Date(event.startDate!).getFullYear()}
            </Text>
            <Text size="small">{event.name}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}
