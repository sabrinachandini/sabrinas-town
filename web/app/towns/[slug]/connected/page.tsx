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

  const title = `Connected Towns | ${town.name}, ${town.state}`;
  const description = `Towns connected to ${town.name}, ${town.state} through shared events, people, themes, and routes.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/connected`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
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
    <div>
      {/* Bold navy hero */}
      <div className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="font-condensed font-bold text-[0.7rem] tracking-[0.12em] uppercase text-crimson mb-3">
            {town.state}, USA
          </p>
          <h1
            className="font-heading font-black text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Connected Towns
          </h1>
          <p className="mt-4 font-serif italic text-fog text-[1.05rem] leading-relaxed max-w-[600px]">
            The Revolution was a network. {town.name} connected to dozens of other places through shared people, events, themes, and routes. This map shows those connections.
          </p>
        </div>
      </div>

      <div className="py-section">
        <Divider spacing="section" />

        {/* Summary Stats */}
        <section>
          <Container>
            <div className="flex flex-wrap gap-component">
              <div className="bg-navy px-6 py-5 rounded-lg">
                <p className="font-condensed text-gold uppercase tracking-wide text-[0.7rem]">
                  Connected Towns
                </p>
                <p className="mt-2 font-heading font-black text-white text-h3">
                  {town.linkedTowns.length}
                </p>
              </div>
              <div className="bg-navy px-6 py-5 rounded-lg">
                <p className="font-condensed text-gold uppercase tracking-wide text-[0.7rem]">
                  Connection Types
                </p>
                <p className="mt-2 font-heading font-black text-white text-h3">
                  {Object.keys(byType).length}
                </p>
              </div>
              <div className="bg-navy px-6 py-5 rounded-lg">
                <p className="font-condensed text-gold uppercase tracking-wide text-[0.7rem]">
                  Strongest Link
                </p>
                <p className="mt-2 font-heading font-black text-white text-h3">
                  {Math.max(...town.linkedTowns.map((l) => l.weight))}%
                </p>
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
              Every town in {town.name}'s network, sorted by connection strength.
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
                    <Text size="small" className="text-crimson font-mono">
                      {links.length} {links.length === 1 ? "town" : "towns"}
                    </Text>
                  </div>

                  <div className="mt-element grid sm:grid-cols-2 gap-element">
                    {links.map((link) => (
                      <Link
                        key={link.townId}
                        href={`/towns/${link.townSlug}`}
                        className="block p-element bg-bg-secondary rounded-lg border border-border-light hover:border-crimson transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <Text className="font-medium">{link.townName}</Text>
                          <Text size="small" className="text-crimson font-mono">
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
      </div>
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
        <Text size="small" className="text-crimson font-mono">
          {link.weight}%
        </Text>
      </div>
      <Text size="small" className="mt-element">
        {link.reason}
      </Text>
    </div>
  );
}
