import { Suspense } from "react";
import { compareTowns, getRankings, CompareResponse } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

interface PageProps {
  searchParams: Promise<{ townA?: string; townB?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps) {
  const params = await searchParams;

  if (params.townA && params.townB) {
    return {
      title: `Compare Towns | Sabrina's Town`,
      description: `Compare Revolutionary War history between two towns.`,
    };
  }

  return {
    title: `Compare Towns | Sabrina's Town`,
    description: "Compare Revolutionary War towns side by side.",
  };
}

export default async function ComparePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const { townA, townB } = params;

  // If both towns provided, show comparison
  if (townA && townB) {
    const comparison = await compareTowns(townA, townB);

    if (!comparison) {
      return (
        <main className="py-section">
          <Container>
            <Heading level={1}>Towns Not Found</Heading>
            <Text className="mt-element">
              One or both of the towns could not be found. Please check the slugs and try again.
            </Text>
            <Link href="/compare" className="mt-element inline-block">
              ← Back to town selector
            </Link>
          </Container>
        </main>
      );
    }

    return <ComparisonView comparison={comparison} />;
  }

  // Otherwise show town selector
  return (
    <Suspense fallback={<LoadingSelector />}>
      <TownSelector />
    </Suspense>
  );
}

function LoadingSelector() {
  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Compare Towns</Heading>
        <Text className="mt-element text-text-muted">Loading towns...</Text>
      </Container>
    </main>
  );
}

async function TownSelector() {
  const towns = await getRankings({ limit: 75 });

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Compare Towns</Heading>
        <Text className="mt-element text-text-muted max-w-[600px]">
          Select two Revolutionary War towns to compare their history, shared events,
          people, and themes. Discover connections across the network.
        </Text>

        <div className="mt-component">
          <form action="/compare" method="GET" className="space-y-component">
            <div className="grid md:grid-cols-2 gap-component">
              <div>
                <label htmlFor="townA" className="block text-small font-medium mb-2">
                  First Town
                </label>
                <select
                  name="townA"
                  id="townA"
                  required
                  defaultValue="lexington-ma"
                  className="w-full p-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary"
                >
                  {towns.map((town) => (
                    <option key={town.id} value={town.slug}>
                      {town.name}, {town.state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="townB" className="block text-small font-medium mb-2">
                  Second Town
                </label>
                <select
                  name="townB"
                  id="townB"
                  required
                  defaultValue="concord-ma"
                  className="w-full p-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary"
                >
                  {towns.map((town) => (
                    <option key={town.id} value={town.slug}>
                      {town.name}, {town.state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors"
            >
              Compare Towns
            </button>
          </form>
        </div>

        <Divider spacing="section" />

        <div>
          <Heading level={2}>Suggested Comparisons</Heading>
          <div className="mt-component grid md:grid-cols-2 lg:grid-cols-3 gap-element">
            <SuggestedComparison
              title="Twin Birthplaces"
              description="Where the Revolution began"
              townA="lexington-ma"
              townB="concord-ma"
            />
            <SuggestedComparison
              title="Beginning and End"
              description="From first shots to final victory"
              townA="lexington-ma"
              townB="yorktown-va"
            />
            <SuggestedComparison
              title="The Ten Crucial Days"
              description="Washington's twin victories"
              townA="trenton-nj"
              townB="princeton-nj"
            />
            <SuggestedComparison
              title="Winter Headquarters"
              description="Where armies endured"
              townA="morristown-nj"
              townB="cambridge-ma"
            />
            <SuggestedComparison
              title="Southern Campaign"
              description="Where the south was contested"
              townA="charleston-sc"
              townB="yorktown-va"
            />
            <SuggestedComparison
              title="Political Capitals"
              description="Where ideas became action"
              townA="boston-ma"
              townB="philadelphia-pa"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

function SuggestedComparison({
  title,
  description,
  townA,
  townB,
}: {
  title: string;
  description: string;
  townA: string;
  townB: string;
}) {
  return (
    <Link
      href={`/compare?townA=${townA}&townB=${townB}`}
      className="block p-element bg-bg-secondary rounded-lg border border-border-light hover:border-accent-blue transition-colors"
    >
      <Text className="font-medium">{title}</Text>
      <Text size="small" muted className="mt-1">
        {description}
      </Text>
    </Link>
  );
}

function ComparisonView({ comparison }: { comparison: CompareResponse }) {
  const { townA, townB } = comparison;

  return (
    <main className="py-section">
      {/* Header */}
      <Container>
        <Text size="small" muted className="uppercase tracking-wide">
          Town Comparison
        </Text>
        <Heading level={1} className="mt-2">
          {townA.name} vs {townB.name}
        </Heading>

        {/* Side by side summaries */}
        <div className="mt-component grid md:grid-cols-2 gap-component">
          <TownCard town={townA} />
          <TownCard town={townB} />
        </div>
      </Container>

      <Divider spacing="section" />

      {/* Direct Link */}
      {comparison.comparison.directLink && (
        <>
          <section>
            <Container>
              <Heading level={2}>Direct Connection</Heading>
              <div className="mt-component p-element bg-bg-secondary rounded-lg border-l-4 border-accent-blue">
                <div className="flex items-center gap-2">
                  <Text className="font-medium">
                    {formatLinkType(comparison.comparison.directLink.linkType)}
                  </Text>
                  <Text size="small" className="text-accent-blue font-mono">
                    {comparison.comparison.directLink.weight}%
                  </Text>
                </div>
                <Text className="mt-element">
                  {comparison.comparison.directLink.reason}
                </Text>
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Shared Themes */}
      {comparison.comparison.sharedThemes.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Shared Themes</Heading>
              <Text className="mt-element" muted>
                Cross-cutting themes that connect both towns to the broader Revolutionary story.
              </Text>
              <div className="mt-component space-y-element">
                {comparison.comparison.sharedThemes.map((theme) => (
                  <div
                    key={theme.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{theme.name}</Text>
                    <div className="mt-element grid md:grid-cols-2 gap-element">
                      <div>
                        <Text size="small" muted className="uppercase tracking-wide">
                          {townA.name}
                        </Text>
                        <Text size="small" className="mt-1">
                          {theme.relevanceA || "—"}
                        </Text>
                      </div>
                      <div>
                        <Text size="small" muted className="uppercase tracking-wide">
                          {townB.name}
                        </Text>
                        <Text size="small" className="mt-1">
                          {theme.relevanceB || "—"}
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Shared People */}
      {comparison.comparison.sharedPeople.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Shared Historical Figures</Heading>
              <Text className="mt-element" muted>
                People whose stories connect both towns.
              </Text>
              <div className="mt-component space-y-element">
                {comparison.comparison.sharedPeople.map((person) => (
                  <div
                    key={person.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{person.name}</Text>
                    <Text size="small" muted className="mt-1">
                      {person.roles.join(", ")}
                    </Text>
                    <div className="mt-element grid md:grid-cols-2 gap-element">
                      <div>
                        <Text size="small" muted className="uppercase tracking-wide">
                          {townA.name}
                        </Text>
                        <Text size="small" className="mt-1">
                          {person.connectionA}
                        </Text>
                      </div>
                      <div>
                        <Text size="small" muted className="uppercase tracking-wide">
                          {townB.name}
                        </Text>
                        <Text size="small" className="mt-1">
                          {person.connectionB}
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Shared Routes */}
      {comparison.comparison.sharedRoutes.length > 0 && (
        <>
          <section>
            <Container>
              <Heading level={2}>Shared Routes</Heading>
              <Text className="mt-element" muted>
                Historical routes that connect both towns.
              </Text>
              <div className="mt-component space-y-element">
                {comparison.comparison.sharedRoutes.map((route) => (
                  <div
                    key={route.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{route.name}</Text>
                    <div className="mt-element flex gap-component">
                      <Text size="small">
                        <span className="text-text-muted">{townA.name}:</span> Stop{" "}
                        {route.stopOrderA}
                      </Text>
                      <Text size="small">
                        <span className="text-text-muted">{townB.name}:</span> Stop{" "}
                        {route.stopOrderB}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <Divider spacing="section" />
        </>
      )}

      {/* Suggested Itinerary */}
      <section>
        <Container>
          <Heading level={2}>Suggested Itinerary</Heading>
          {comparison.suggestedItinerary.totalMiles && (
            <Text className="mt-element" muted>
              Total distance: approximately {comparison.suggestedItinerary.totalMiles} miles
            </Text>
          )}
          <div className="mt-component space-y-element">
            {comparison.suggestedItinerary.stops.map((stop) => {
              // Map townId to slug using comparison data
              const slugMap: Record<string, string> = {
                [comparison.townA.id]: comparison.townA.slug,
                [comparison.townB.id]: comparison.townB.slug,
              };
              const townSlug = slugMap[stop.townId] || stop.townId;

              return (
              <div
                key={stop.townId}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-medium">
                    {stop.order}
                  </div>
                  {stop.order < comparison.suggestedItinerary.stops.length && (
                    <div className="w-px flex-1 bg-border-light mt-2" />
                  )}
                </div>
                <div className="pb-component">
                  <Link
                    href={`/towns/${townSlug}`}
                    className="font-medium hover:text-accent-blue"
                  >
                    {stop.townName}
                  </Link>
                  <Text size="small" muted className="mt-1">
                    Suggested duration: {stop.suggestedDuration}
                  </Text>
                  {stop.highlights.length > 0 && (
                    <div className="mt-2">
                      <Text size="small" muted>Highlights:</Text>
                      <ul className="mt-1 space-y-1">
                        {stop.highlights.map((highlight, i) => (
                          <li key={i}>
                            <Text size="small">• {highlight}</Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
          <Text size="small" muted className="mt-component italic">
            {comparison.suggestedItinerary.notes}
          </Text>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Teacher CTA */}
      <section>
        <Container>
          <div className="p-component bg-bg-secondary rounded-lg text-center">
            <Heading level={3}>Teaching a Comparative Unit?</Heading>
            <Text className="mt-element max-w-[500px] mx-auto">
              Use this comparison as a starting point for classroom discussion.
              What do these towns have in common? How did their experiences differ?
            </Text>
            <div className="mt-element flex justify-center gap-4">
              <Link
                href={`/towns/${townA.slug}/teacher`}
                className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90"
              >
                {townA.name} Teacher Module
              </Link>
              <Link
                href={`/towns/${townB.slug}/teacher`}
                className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90"
              >
                {townB.name} Teacher Module
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function TownCard({ town }: { town: CompareResponse["townA"] }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Link href={`/towns/${town.slug}`}>
        <Text size="small" muted className="uppercase tracking-wide">
          {town.state}
        </Text>
        <Heading level={3} className="mt-1 hover:text-accent-blue">
          {town.name}
        </Heading>
      </Link>
      <Text className="mt-element text-text-muted">{town.heroSummary40}</Text>
      <Text size="small" className="mt-tight">{town.execSummary150}</Text>
      <div className="mt-element pt-element border-t border-border-light flex justify-between items-center">
        <Text size="small" muted>Composite Score</Text>
        <div className="flex items-baseline gap-2">
          <span className="text-h3 font-heading font-bold text-accent-blue">
            {town.compositeScore.toFixed(1)}
          </span>
          <Text size="small" muted>{town.scoreTier}</Text>
        </div>
      </div>
    </div>
  );
}

function formatLinkType(linkType: string): string {
  const labels: Record<string, string> = {
    SHARED_EVENT: "Shared Event",
    SHARED_PERSON: "Shared Person",
    SHARED_THEME: "Shared Theme",
    ROUTE: "Route Connection",
    COMPARISON: "Historical Comparison",
    GEOGRAPHIC_PROXIMITY: "Geographic Proximity",
    OTHER: "Connection",
  };
  return labels[linkType] || linkType;
}
