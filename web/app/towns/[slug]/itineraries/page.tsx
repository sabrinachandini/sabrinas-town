import { getTown } from "@/lib/api";
import { Container, Heading, Text, Divider, Link } from "@/components/ui";
import { EmptyState } from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Itineraries | Town Not Found" };
  }

  return {
    title: `Itineraries | ${town.name}, ${town.state} | History is for Everyone`,
    description: `Suggested travel itineraries featuring ${town.name}, ${town.state}.`,
  };
}

export default async function ItinerariesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  const hasRoutes = town.routes.length > 0;
  const hasConnections = town.linkedTowns.length > 0;

  if (!hasRoutes && !hasConnections) {
    return (
      <EmptyState
        title="Itineraries Coming Soon"
        description={`Curated itineraries featuring ${town.name} are in development. These will help visitors plan trips that connect multiple Revolutionary sites, following historical routes and thematic journeys across the region.`}
        townSlug={slug}
      />
    );
  }

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          {town.name} doesn't exist in isolation. These suggested routes connect it to neighboring sites, creating journeys that reveal the Revolution's geographic logic.
        </Text>
      </Container>

      {/* Historical Routes */}
      {hasRoutes && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Historical Routes</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Documented routes that passed through {town.name} during the Revolutionary era.
              </Text>

              <div className="mt-component space-y-element">
                {town.routes.map((route) => (
                  <div
                    key={route.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{route.name}</Text>
                    <div className="mt-element flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: route.totalStops }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full border-2 -ml-1 first:ml-0 ${
                                i + 1 === route.stopOrder
                                  ? "bg-accent-blue border-accent-blue"
                                  : "bg-bg-primary border-border-light"
                              }`}
                            />
                          ))}
                        </div>
                        <Text size="small" muted>
                          Stop {route.stopOrder} of {route.totalStops}
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Suggested Day Trips */}
      {hasConnections && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Suggested Connections</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Towns connected to {town.name} that make natural additions to a visit. Grouped by connection type.
              </Text>

              {/* Group by link type */}
              {(() => {
                const byType = town.linkedTowns.reduce((acc, link) => {
                  if (!acc[link.linkType]) acc[link.linkType] = [];
                  acc[link.linkType].push(link);
                  return acc;
                }, {} as Record<string, typeof town.linkedTowns>);

                const typeLabels: Record<string, string> = {
                  SHARED_EVENT: "Shared Events",
                  SHARED_PERSON: "Shared Historical Figures",
                  SHARED_THEME: "Shared Themes",
                  ROUTE: "Route Connections",
                  COMPARISON: "Comparative Pairs",
                  GEOGRAPHIC_PROXIMITY: "Nearby Towns",
                  OTHER: "Other Connections",
                };

                return Object.entries(byType)
                  .sort(([, a], [, b]) => b.length - a.length)
                  .slice(0, 3)
                  .map(([type, links]) => (
                    <div key={type} className="mt-component">
                      <Text size="small" muted className="uppercase tracking-wide mb-element">
                        {typeLabels[type] || type}
                      </Text>
                      <div className="grid sm:grid-cols-2 gap-element">
                        {links.slice(0, 4).map((link) => (
                          <Link
                            key={link.townId}
                            href={`/towns/${link.townSlug}`}
                            className="block p-element bg-bg-secondary rounded-lg hover:border-accent-blue border border-border-light transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <Text className="font-medium">{link.townName}</Text>
                              <Text size="small" className="text-accent-blue font-mono">
                                {link.weight}%
                              </Text>
                            </div>
                            <Text size="small" muted className="mt-tight line-clamp-2">
                              {link.reason}
                            </Text>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ));
              })()}
            </Container>
          </section>
        </>
      )}

    </div>
  );
}
