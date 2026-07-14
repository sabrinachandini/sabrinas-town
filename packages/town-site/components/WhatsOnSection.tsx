import type { TownConfig } from "../config/schema";

export interface WhatsOnEvent {
  id: string;
  title: string;
  date?: string | null;
  description?: string;
  category?: string;
  /** Link target; falls back to the "all events" route when absent. */
  href?: string;
}

interface WhatsOnSectionProps {
  config: TownConfig;
  events: WhatsOnEvent[];
  /** Optional highlighted event rendered above the list (e.g. the annual signature event). */
  featuredEvent?: { title: string; description: string; date: string };
  /** Total number of events (for the "All N events →" link). Defaults to events.length. */
  totalCount?: number;
  /** Section heading. Defaults to "Key Events" to match existing town sites. */
  title?: string;
  allHref?: string;
  allLabel?: string;
}

/**
 * "What's On" / Key Events list. Markup for the list matches the original
 * Lexington "Key Events" section exactly. Renders a graceful empty state when
 * there are no events. Meant to be placed inside a <Container>.
 */
export function WhatsOnSection({
  config,
  events,
  featuredEvent,
  totalCount,
  title = "Key Events",
  allHref = "/events",
  allLabel = "events",
}: WhatsOnSectionProps) {
  const count = totalCount ?? events.length;

  return (
    <section className="py-14">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-condensed text-2xl uppercase tracking-wide">{title}</h2>
        {events.length > 0 && (
          <a href={allHref} className="font-body text-sm text-red hover:underline">
            All {count} {allLabel} →
          </a>
        )}
      </div>

      {featuredEvent && (
        <div className="mb-8 p-6 bg-navy text-cream rounded-lg">
          <div className="font-condensed text-xs tracking-[0.25em] uppercase text-red mb-2">
            {config.featuredEventName} · {featuredEvent.date}
          </div>
          <div className="font-condensed text-2xl uppercase tracking-wide">{featuredEvent.title}</div>
          <p className="font-body text-sm text-cream/75 mt-2 leading-relaxed max-w-2xl">
            {featuredEvent.description}
          </p>
        </div>
      )}

      {events.length === 0 ? (
        <p className="font-body text-sm text-text-muted">
          Event listings for {config.name} are on the way. Check back soon.
        </p>
      ) : (
        <div className="divide-y divide-border-light">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.href ?? allHref}
              className="flex gap-5 py-5 group"
            >
              <div className="font-condensed text-red text-xl w-12 shrink-0 tabular-nums pt-0.5">
                {event.date ? new Date(event.date).getFullYear() : "—"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors">
                  {event.title}
                </div>
                {event.description && (
                  <p className="font-body text-sm text-text-muted mt-0.5 leading-snug line-clamp-2">
                    {event.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
