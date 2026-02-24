import { notFound } from "next/navigation";
import { getTown, Town, TownEvent, TownStory, LinkedTown } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Button,
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

export default async function TownPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    notFound();
  }

  return (
    <main className="py-section">
      {/* Header Section */}
      <Container>
        <div className="md:flex md:justify-between md:gap-component">
          {/* Left: Town Info */}
          <div className="flex-1 max-w-[620px]">
            <Text size="small" muted className="uppercase tracking-wide">
              {town.state}, {town.country}
            </Text>
            <Heading level={1} className="mt-2">
              {town.name}
            </Heading>
            <Text className="mt-element text-text-muted">
              {town.heroSummary40}
            </Text>
            <Text className="mt-tight">{town.execSummary150}</Text>
            {town.tourismInfo &&
              "placeholder" in town.tourismInfo &&
              town.tourismInfo.placeholder === true && (
                <Text size="small" muted className="mt-element italic">
                  This town profile is being developed. Content coming soon.
                </Text>
              )}
          </div>

          {/* Right: Score Panel */}
          <div className="mt-component md:mt-0 md:w-[280px] flex-shrink-0">
            <ScorePanel town={town} />
          </div>
        </div>
      </Container>

      <Divider spacing="section" />

      {/* Why It Matters */}
      <section>
        <Container>
          <Heading level={2}>Why it matters</Heading>
          <div className="mt-element prose-content">
            {town.whyMatters.split("\n\n").map((paragraph, i) => (
              <Text key={i} className={i > 0 ? "mt-element" : ""}>
                {paragraph}
              </Text>
            ))}
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Timeline / Events */}
      {town.events.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Timeline</Heading>
              <Text className="mt-element" muted>
                Key events in {town.name}'s Revolutionary history, ordered by
                significance.
              </Text>
              <div className="mt-component space-y-component">
                {town.events
                  .sort((a, b) => b.significanceWeight - a.significanceWeight)
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Themes */}
      {town.themes.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Themes</Heading>
              <Text className="mt-element" muted>
                Cross-cutting themes that connect {town.name} to the broader
                Revolutionary story.
              </Text>
              <div className="mt-component flex flex-wrap gap-3">
                {town.themes.map((theme) => (
                  <div
                    key={theme.id}
                    className="px-4 py-3 bg-bg-secondary rounded-lg border border-border-light"
                  >
                    <Text className="font-medium">{theme.name}</Text>
                    {theme.relevanceNote && (
                      <Text size="small" muted className="mt-1">
                        {theme.relevanceNote}
                      </Text>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Stories */}
      {town.stories.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Stories</Heading>
              <Text className="mt-element" muted>
                Voices from {town.name} — historical figures and modern
                interpreters.
              </Text>
              <div className="mt-component space-y-component">
                {town.stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Connected Towns */}
      {town.linkedTowns.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Connected towns</Heading>
              <Text className="mt-element" muted>
                The Revolution was networked. Here's how {town.name} connects to
                other towns in our system.
              </Text>
              <div className="mt-component space-y-element">
                {town.linkedTowns
                  .sort((a, b) => b.weight - a.weight)
                  .map((link) => (
                    <LinkedTownCard key={link.townId} link={link} />
                  ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Routes */}
      {town.routes.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Historical routes</Heading>
              <div className="mt-component space-y-element">
                {town.routes.map((route) => (
                  <div
                    key={route.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{route.name}</Text>
                    <Text size="small" muted className="mt-1">
                      Stop {route.stopOrder} of {route.totalStops}
                    </Text>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Transparency */}
      <section>
        <Container>
          <Heading level={2}>Transparency</Heading>
          <div className="mt-component p-element bg-bg-secondary rounded-lg">
            <div className="flex flex-wrap gap-component">
              <div>
                <Text size="small" muted className="uppercase tracking-wide">
                  Last Updated
                </Text>
                <Text className="mt-1">
                  {new Date(town.lastUpdatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </div>
              <div>
                <Text size="small" muted className="uppercase tracking-wide">
                  Composite Score
                </Text>
                <Text className="mt-1">
                  <span className="text-accent-blue font-medium">
                    {town.compositeScore.toFixed(2)}
                  </span>{" "}
                  ({town.scoreTier})
                </Text>
              </div>
              <div>
                <Text size="small" muted className="uppercase tracking-wide">
                  Town ID
                </Text>
                <Text className="mt-1 font-mono text-small">{town.id}</Text>
              </div>
            </div>
            {town.recentChanges.length > 0 && (
              <div className="mt-element pt-element border-t border-border-light">
                <Text size="small" muted className="uppercase tracking-wide">
                  Recent Changes
                </Text>
                <div className="mt-2 space-y-2">
                  {town.recentChanges.slice(0, 3).map((change) => (
                    <Text key={change.id} size="small">
                      {change.summary}
                    </Text>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Teacher CTA */}
      <section>
        <Container>
          <div className="p-component bg-bg-secondary rounded-lg text-center">
            <Heading level={3}>Teaching {town.name}?</Heading>
            <Text className="mt-element max-w-[500px] mx-auto">
              Access complete lesson plans, primary source packets, discussion
              questions, and quizzes for your classroom.
            </Text>
            <div className="mt-element">
              <Button href={`/towns/${town.slug}/teacher`}>
                View Teacher Module
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Score Panel Component
function ScorePanel({ town }: { town: Town }) {
  const breakdown = town.scoreBreakdown;

  const dimensions = breakdown
    ? [
        { label: "Historical", score: breakdown.historical.score },
        { label: "Preservation", score: breakdown.preservation.score },
        { label: "Accessibility", score: breakdown.accessibility.score },
        { label: "Interpretation", score: breakdown.interpretation.score },
        { label: "Interconnection", score: breakdown.interconnection.score },
        { label: "Stories", score: breakdown.stories.score },
        { label: "Sources", score: breakdown.sources.score },
      ]
    : [];

  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Text size="small" muted className="uppercase tracking-wide">
        Composite Score
      </Text>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-h1 font-heading font-bold text-accent-blue">
          {town.compositeScore.toFixed(1)}
        </span>
        <span className="text-body text-text-muted">/ 100</span>
      </div>
      <Text className="mt-1 font-medium">{town.scoreTier}</Text>

      {dimensions.length > 0 && (
        <div className="mt-element pt-element border-t border-border-light space-y-2">
          {dimensions.map((dim) => (
            <div key={dim.label} className="flex justify-between items-center">
              <Text size="small">{dim.label}</Text>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-border-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-blue rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
                <Text size="small" className="w-8 text-right font-mono">
                  {dim.score}
                </Text>
              </div>
            </div>
          ))}
        </div>
      )}

      {breakdown?.hints && breakdown.hints.length > 0 && (
        <div className="mt-element pt-element border-t border-border-light">
          <Text size="small" muted className="uppercase tracking-wide">
            Improvement Hints
          </Text>
          {breakdown.hints.slice(0, 2).map((hint, i) => (
            <Text key={i} size="small" className="mt-2">
              {hint.suggestion}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}

// Event Card Component
function EventCard({ event }: { event: TownEvent }) {
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
        <div className="w-px flex-1 bg-border-light mt-2" />
      </div>

      {/* Content */}
      <div className="pb-component">
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
              {event.peopleCount} people involved
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

// Story Card Component
function StoryCard({ story }: { story: TownStory }) {
  const verificationLabels: Record<string, { label: string; color: string }> = {
    VERIFIED: { label: "Verified", color: "text-accent-blue" },
    ORAL_TRADITION: { label: "Oral Tradition", color: "text-text-muted" },
    ANECDOTAL: { label: "Anecdotal", color: "text-text-muted" },
    UNVERIFIED: { label: "Unverified", color: "text-accent-red" },
  };

  const verification = verificationLabels[story.verificationStatus];

  return (
    <div className="p-element border-l-4 border-accent-blue bg-bg-secondary rounded-r-lg">
      <div className="flex flex-wrap items-center gap-3">
        <Text size="small" className="uppercase tracking-wide">
          {story.storyType === "HISTORICAL_VOICE"
            ? "Historical Voice"
            : "Modern Voice"}
        </Text>
        <span
          className={`text-small uppercase tracking-wide ${verification.color}`}
        >
          {verification.label}
        </span>
      </div>

      <Heading level={3} className="mt-2">
        {story.title}
      </Heading>

      {story.subjectPersonName && (
        <Text size="small" muted className="mt-1">
          {story.subjectPersonName}
        </Text>
      )}

      {story.narratorName && (
        <Text size="small" muted className="mt-1">
          {story.narratorName}
          {story.narratorRole && ` — ${story.narratorRole}`}
        </Text>
      )}

      <Text className="mt-element">{story.excerpt}</Text>

      {story.tags.length > 0 && (
        <div className="mt-element flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-small bg-bg-primary rounded border border-border-light"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Linked Town Card Component
function LinkedTownCard({ link }: { link: LinkedTown }) {
  const linkTypeLabels: Record<string, string> = {
    SHARED_EVENT: "Shared Event",
    SHARED_PERSON: "Shared Person",
    SHARED_THEME: "Shared Theme",
    ROUTE: "Route Connection",
    COMPARISON: "Comparison",
    GEOGRAPHIC_PROXIMITY: "Geographic Proximity",
    OTHER: "Connection",
  };

  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Link href={`/towns/${link.townSlug}`} className="font-medium">
            {link.townName}
          </Link>
          <Text size="small" muted className="mt-1">
            {linkTypeLabels[link.linkType] || link.linkType}
          </Text>
        </div>
        <Text size="small" className="text-accent-blue font-mono">
          {link.weight}%
        </Text>
      </div>
      <Text size="small" className="mt-element">
        {link.reason}
      </Text>
    </div>
  );
}
