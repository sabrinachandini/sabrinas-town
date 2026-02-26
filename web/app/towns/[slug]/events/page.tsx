import { getTown, TownEvent } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@/components/ui";
import { EmptyState } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma"]);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Events | Town Not Found" };
  }

  return {
    title: `Events | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Timeline of Revolutionary War events in ${town.name}, ${town.state}.`,
  };
}

export default async function EventsPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  if (EDITORIAL_SLUGS.has(slug)) {
    return <EditorialEventsPage slug={slug} town={town} />;
  }

  return <ClassicEventsPage slug={slug} town={town} />;
}

function EditorialEventsPage({
  slug,
  town,
}: {
  slug: string;
  town: NonNullable<Awaited<ReturnType<typeof getTown>>>;
}) {
  const sortedEvents = [...town.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${town.events.length} documented events in chronological order.`}
      />

      <EditorialSection id="timeline" title="Timeline">
        {sortedEvents.length > 0 ? (
          <ol className="space-y-0">
            {sortedEvents.map((event) => (
              <li
                key={event.id}
                className="flex gap-6 py-4 border-b border-border-light last:border-b-0"
              >
                <span className="w-[100px] shrink-0 text-small text-text-muted font-body tabular-nums">
                  {formatDate(event.startDate)}
                </span>
                <div>
                  <p className="font-body font-medium">{event.name}</p>
                  {event.summary && (
                    <p className="mt-1 text-small text-text-muted font-body leading-relaxed">
                      {event.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-text-muted font-body">
            Timeline for {town.name} is being researched.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}

function ClassicEventsPage({
  slug,
  town,
}: {
  slug: string;
  town: NonNullable<Awaited<ReturnType<typeof getTown>>>;
}) {
  if (town.events.length === 0) {
    return (
      <EmptyState
        title="Timeline Coming Soon"
        description={`The timeline of events in ${town.name} is being researched and verified. This section will show what happened here, when, and why it mattered — placing local events in the context of the broader Revolutionary War.`}
        townSlug={slug}
      />
    );
  }

  const sortedByDate = [...town.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const sortedBySignificance = [...town.events].sort(
    (a, b) => b.significanceWeight - a.significanceWeight
  );

  return (
    <div className="py-section">
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          History unfolds in sequence. This timeline places {town.name}&apos;s key moments in chronological context, showing how local events connected to the broader war.
        </Text>
      </Container>

      <Divider spacing="section" />

      <section>
        <Container>
          <Heading level={2}>Chronological Timeline</Heading>
          <Text className="mt-element text-text-muted">
            {town.events.length} documented {town.events.length === 1 ? "event" : "events"}
          </Text>

          <div className="mt-component space-y-component">
            {sortedByDate.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                isLast={index === sortedByDate.length - 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>By Significance</Heading>
          <Text className="mt-element text-text-muted max-w-[620px]">
            The same events ranked by their historical significance — how much they shaped the course of the Revolution.
          </Text>

          <div className="mt-component space-y-element">
            {sortedBySignificance.map((event, index) => (
              <SignificanceRow key={event.id} event={event} rank={index + 1} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

function EventCard({ event, isLast }: { event: TownEvent; isLast: boolean }) {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Date unknown";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex gap-4">
      {/* Timeline marker */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent-red flex-shrink-0 mt-1.5" />
        {!isLast && <div className="w-px flex-1 bg-border-light mt-2" />}
      </div>

      {/* Content */}
      <div className="pb-component flex-1">
        <Text size="small" muted>
          {formatDate(event.startDate)}
        </Text>
        <Heading level={3} className="mt-1">
          {event.name}
        </Heading>
        <Text className="mt-element">{event.summary}</Text>
        <div className="mt-element flex flex-wrap gap-4">
          <Text size="small" muted>
            Significance:{" "}
            <span className="text-accent-blue font-medium">
              {event.significanceWeight}
            </span>
            /100
          </Text>
          {event.peopleCount > 0 && (
            <Text size="small" muted>
              {event.peopleCount} {event.peopleCount === 1 ? "person" : "people"} involved
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

function SignificanceRow({ event, rank }: { event: TownEvent; rank: number }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
        <span className="text-small font-medium text-accent-blue">{rank}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <Text className="font-medium">{event.name}</Text>
          <Text size="small" className="text-accent-blue font-mono flex-shrink-0">
            {event.significanceWeight}/100
          </Text>
        </div>
        <Text size="small" muted className="mt-tight line-clamp-2">
          {event.summary.slice(0, 150)}...
        </Text>
      </div>
    </div>
  );
}
