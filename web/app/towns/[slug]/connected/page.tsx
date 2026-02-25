import { getTown, LinkedTown } from "@/lib/api";
import { Container, Heading, Text, Divider, Link } from "@/components/ui";
import { EmptyState } from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Connected | Town Not Found" };
  }

  return {
    title: `Connected Towns | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Towns connected to ${town.name}, ${town.state} through shared events, people, themes, and routes.`,
  };
}

export default async function ConnectedPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  if (town.linkedTowns.length === 0) {
    return (
      <EmptyState
        title="Connections Coming Soon"
        description={`The network of towns connected to ${town.name} is being mapped. This section will show shared events, people, themes, and routes — revealing how this town fits into the broader Revolutionary story.`}
        townSlug={slug}
        showLinks={false}
      />
    );
  }

  // Group links by type
  const byType = town.linkedTowns.reduce((acc, link) => {
    if (!acc[link.linkType]) acc[link.linkType] = [];
    acc[link.linkType].push(link);
    return acc;
  }, {} as Record<string, LinkedTown[]>);

  const typeLabels: Record<string, { label: string; description: string }> = {
    SHARED_EVENT: {
      label: "Shared Events",
      description: "Towns that participated in the same historical events",
    },
    SHARED_PERSON: {
      label: "Shared Historical Figures",
      description: "Towns connected through individuals who moved between them",
    },
    SHARED_THEME: {
      label: "Shared Themes",
      description: "Towns that exemplify similar Revolutionary themes",
    },
    ROUTE: {
      label: "Route Connections",
      description: "Towns linked by historical travel routes",
    },
    COMPARISON: {
      label: "Comparative Pairs",
      description: "Towns that illuminate each other through comparison",
    },
    GEOGRAPHIC_PROXIMITY: {
      label: "Geographic Neighbors",
      description: "Nearby towns that shaped each other's Revolutionary experience",
    },
    OTHER: {
      label: "Other Connections",
      description: "Additional historical relationships",
    },
  };

  // Sort links by weight within each type
  Object.values(byType).forEach((links) => {
    links.sort((a, b) => b.weight - a.weight);
  });

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          The Revolution was a network. {town.name} connected to dozens of other places through shared people, events, themes, and routes. This map shows those connections.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* Summary Stats */}
      <section>
        <Container>
          <div className="flex flex-wrap gap-component">
            <div className="px-4 py-3 bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Connected Towns
              </Text>
              <Text className="mt-1 text-h3 font-heading font-bold text-accent-blue">
                {town.linkedTowns.length}
              </Text>
            </div>
            <div className="px-4 py-3 bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Connection Types
              </Text>
              <Text className="mt-1 text-h3 font-heading font-bold">
                {Object.keys(byType).length}
              </Text>
            </div>
            <div className="px-4 py-3 bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Strongest Link
              </Text>
              <Text className="mt-1 text-h3 font-heading font-bold">
                {Math.max(...town.linkedTowns.map((l) => l.weight))}%
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* All Connections - Flat List by Weight */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>All Connections</Heading>
          <Text className="mt-element text-text-muted max-w-[620px]">
            Every town in {town.name}'s network, ranked by connection strength.
          </Text>

          <div className="mt-component space-y-element">
            {[...town.linkedTowns]
              .sort((a, b) => b.weight - a.weight)
              .map((link) => (
                <LinkedTownCard key={`${link.townId}-${link.linkType}`} link={link} />
              ))}
          </div>
        </Container>
      </section>

      {/* By Connection Type */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>By Connection Type</Heading>

          {Object.entries(byType)
            .sort(([, a], [, b]) => b.length - a.length)
            .map(([type, links]) => (
              <div key={type} className="mt-component">
                <div className="flex items-start justify-between">
                  <div>
                    <Text className="font-medium">
                      {typeLabels[type]?.label || type}
                    </Text>
                    <Text size="small" muted>
                      {typeLabels[type]?.description || ""}
                    </Text>
                  </div>
                  <Text size="small" className="text-accent-blue font-mono">
                    {links.length} {links.length === 1 ? "town" : "towns"}
                  </Text>
                </div>

                <div className="mt-element grid sm:grid-cols-2 gap-element">
                  {links.map((link) => (
                    <Link
                      key={link.townId}
                      href={`/towns/${link.townSlug}`}
                      className="block p-element bg-bg-secondary rounded-lg border border-border-light hover:border-accent-blue transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <Text className="font-medium">{link.townName}</Text>
                        <Text size="small" className="text-accent-blue font-mono">
                          {link.weight}%
                        </Text>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </Container>
      </section>

      {/* Compare CTA */}
      <Divider spacing="section" />
      <section>
        <Container>
          <div className="p-component bg-bg-secondary rounded-lg text-center">
            <Heading level={3}>Explore a Connection</Heading>
            <Text className="mt-element max-w-[500px] mx-auto">
              Select any connected town to see a detailed comparison — shared events, people, themes, and a suggested itinerary.
            </Text>
            <div className="mt-element">
              <Link
                href={`/compare?townA=${slug}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent-blue text-accent-blue font-medium hover:bg-accent-blue hover:text-white transition-colors"
              >
                Compare with Another Town
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function LinkedTownCard({ link }: { link: LinkedTown }) {
  const linkTypeLabels: Record<string, string> = {
    SHARED_EVENT: "Shared Event",
    SHARED_PERSON: "Shared Person",
    SHARED_THEME: "Shared Theme",
    ROUTE: "Route",
    COMPARISON: "Comparison",
    GEOGRAPHIC_PROXIMITY: "Nearby",
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
