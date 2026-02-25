import { getTown, Town } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Town Not Found" };
  }

  return {
    title: `${town.name}, ${town.state} | Sabrina's Town`,
    description: town.execSummary150,
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null; // Layout handles 404
  }

  const isSkeletonTown =
    town.tourismInfo &&
    "placeholder" in town.tourismInfo &&
    town.tourismInfo.placeholder === true;

  return (
    <div className="py-section">
      {/* Executive Summary */}
      <Container>
        <div className="max-w-[720px]">
          <Text className="text-text-muted">{town.execSummary150}</Text>

          {isSkeletonTown && (
            <Text size="small" muted className="mt-element italic">
              This town profile is being developed. Content will expand as research is completed.
            </Text>
          )}
        </div>
      </Container>

      <Divider spacing="section" />

      {/* Why It Matters - Condensed */}
      <section>
        <Container>
          <Heading level={2}>Why it matters</Heading>
          <div className="mt-element max-w-[720px]">
            {town.whyMatters.split("\n\n").slice(0, 2).map((paragraph, i) => (
              <Text key={i} className={i > 0 ? "mt-element" : ""}>
                {paragraph}
              </Text>
            ))}
            {town.whyMatters.split("\n\n").length > 2 && (
              <Link href={`/towns/${slug}/history`} className="mt-element inline-block">
                Continue reading →
              </Link>
            )}
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Explore This Town - CTA Tiles */}
      <section>
        <Container>
          <Heading level={2}>Explore {town.name}</Heading>
          <Text className="mt-element text-text-muted max-w-[620px]">
            Each section offers a different lens on this town's Revolutionary story.
          </Text>

          <div className="mt-component grid sm:grid-cols-2 lg:grid-cols-3 gap-element">
            <CTATile
              href={`/towns/${slug}/history`}
              title="History"
              description="The full story of what happened here and why it mattered"
              count={town.themes.length > 0 ? `${town.themes.length} themes` : undefined}
            />
            <CTATile
              href={`/towns/${slug}/people`}
              title="People"
              description="Historical figures whose lives intersected with this town"
              count={getUniquePeopleCount(town) > 0 ? `${getUniquePeopleCount(town)} figures` : undefined}
            />
            <CTATile
              href={`/towns/${slug}/visit`}
              title="Visit"
              description="Practical information for planning your trip"
              count={town.tourismInfo ? "Info available" : undefined}
            />
            <CTATile
              href={`/towns/${slug}/events`}
              title="Events"
              description="A timeline of key moments in chronological order"
              count={town.events.length > 0 ? `${town.events.length} events` : undefined}
            />
            <CTATile
              href={`/towns/${slug}/stories`}
              title="Stories"
              description="First-person accounts and interpretive voices"
              count={town.stories.length > 0 ? `${town.stories.length} stories` : undefined}
            />
            <CTATile
              href={`/towns/${slug}/connected`}
              title="Connected"
              description="How this town links to the broader Revolutionary network"
              count={town.linkedTowns.length > 0 ? `${town.linkedTowns.length} towns` : undefined}
            />
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      {(town.events.length > 0 || town.linkedTowns.length > 0 || town.stories.length > 0) && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>At a glance</Heading>
              <div className="mt-component grid sm:grid-cols-2 lg:grid-cols-4 gap-element">
                {town.events.length > 0 && (
                  <StatCard
                    label="Events"
                    value={town.events.length}
                    subtext="documented"
                  />
                )}
                {town.linkedTowns.length > 0 && (
                  <StatCard
                    label="Connected Towns"
                    value={town.linkedTowns.length}
                    subtext="in network"
                  />
                )}
                {town.stories.length > 0 && (
                  <StatCard
                    label="Stories"
                    value={town.stories.length}
                    subtext="collected"
                  />
                )}
                {town.themes.length > 0 && (
                  <StatCard
                    label="Themes"
                    value={town.themes.length}
                    subtext="connected"
                  />
                )}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Featured Event Preview */}
      {town.events.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <div className="flex items-center justify-between">
                <Heading level={2}>Featured Event</Heading>
                <Link href={`/towns/${slug}/events`}>View all events →</Link>
              </div>
              <FeaturedEvent event={town.events[0]} />
            </Container>
          </section>
        </>
      )}

      {/* Teacher CTA */}
      <Divider spacing="section" />
      <section>
        <Container>
          <div className="p-component bg-bg-secondary rounded-lg text-center">
            <Heading level={3}>Teaching {town.name}?</Heading>
            <Text className="mt-element max-w-[500px] mx-auto">
              Access lesson plans, primary source packets, discussion questions, and assessments designed for classroom use.
            </Text>
            <div className="mt-element">
              <Link
                href={`/towns/${slug}/teacher`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-blue text-accent-blue font-medium hover:bg-accent-blue hover:text-white transition-colors"
              >
                View Teacher Module
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// Helper to count unique people from events
function getUniquePeopleCount(town: Town): number {
  // Events have peopleCount but we don't have individual people data here
  // Return the total people count from all events as an estimate
  return town.events.reduce((sum, e) => sum + e.peopleCount, 0);
}

// CTA Tile Component
function CTATile({
  href,
  title,
  description,
  count,
}: {
  href: string;
  title: string;
  description: string;
  count?: string;
}) {
  return (
    <Link
      href={href}
      className="block p-element bg-bg-secondary rounded-lg border border-border-light hover:border-accent-blue transition-colors group"
    >
      <div className="flex items-start justify-between">
        <Text className="font-medium group-hover:text-accent-blue transition-colors">
          {title}
        </Text>
        {count && (
          <Text size="small" className="text-accent-blue font-mono">
            {count}
          </Text>
        )}
      </div>
      <Text size="small" muted className="mt-tight">
        {description}
      </Text>
    </Link>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  subtext,
}: {
  label: string;
  value: number;
  subtext: string;
}) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg text-center">
      <Text size="small" muted className="uppercase tracking-wide">
        {label}
      </Text>
      <div className="mt-2">
        <span className="text-h2 font-heading font-bold text-accent-blue">
          {value}
        </span>
      </div>
      <Text size="small" muted className="mt-1">
        {subtext}
      </Text>
    </div>
  );
}

// Featured Event Component
function FeaturedEvent({ event }: { event: Town["events"][0] }) {
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
    <div className="mt-component p-element bg-bg-secondary rounded-lg border-l-4 border-accent-red">
      <Text size="small" muted>
        {formatDate(event.startDate)}
      </Text>
      <Heading level={3} className="mt-tight">
        {event.name}
      </Heading>
      <Text className="mt-element">{event.summary.slice(0, 300)}...</Text>
      <div className="mt-element flex items-center gap-4">
        <Text size="small" muted>
          Significance:{" "}
          <span className="text-accent-blue font-medium">
            {event.significanceWeight}
          </span>
          /100
        </Text>
      </div>
    </div>
  );
}
