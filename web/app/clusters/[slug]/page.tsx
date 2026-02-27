// Cluster detail page — shows summary, hub town, member towns, and bridges

import { getCluster, ClusterTownEntry } from "@/lib/api";
import { Container, Heading, Text, Link, Divider } from "@/components/ui";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cluster = await getCluster(slug);

  if (!cluster) {
    return { title: "Cluster Not Found" };
  }

  return {
    title: `${cluster.name} | History Is For Everyone`,
    description: cluster.theme,
  };
}

function TownCard({
  town,
  isHub,
}: {
  town: ClusterTownEntry;
  isHub?: boolean;
}) {
  return (
    <Link
      href={`/towns/${town.slug}`}
      className="block p-4 rounded-lg border border-border-default hover:border-accent-blue transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <Text className="font-semibold">
            {town.name}, {town.state}
          </Text>
          <Text size="small" muted className="mt-1">
            {town.execSummary150}
          </Text>
        </div>
        {isHub && (
          <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800 flex-shrink-0">
            Start here
          </span>
        )}
      </div>
    </Link>
  );
}

export default async function ClusterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cluster = await getCluster(slug);

  if (!cluster) {
    return null;
  }

  const hubTowns = cluster.towns.filter((t) => t.role === "HUB");
  const coreTowns = cluster.towns.filter((t) => t.role === "CORE");
  const supportingTowns = cluster.towns.filter(
    (t) => t.role === "SUPPORTING"
  );

  return (
    <main className="py-section">
      <Container>
        {/* Back link */}
        <Link href="/clusters" className="text-small">
          ← All clusters
        </Link>

        {/* Header */}
        <Heading level={1} className="mt-4">
          {cluster.name}
        </Heading>
        <Text className="mt-element text-lg max-w-[620px]">
          {cluster.theme}
        </Text>

        {/* Summary */}
        <div className="mt-component max-w-[720px] space-y-4">
          {cluster.summary.split("\n").map((paragraph, i) => (
            <Text key={i}>{paragraph}</Text>
          ))}
        </div>

        {/* Hub Town */}
        {hubTowns.length > 0 && (
          <>
            <Divider spacing="section" />
            <Heading level={2}>Hub Town</Heading>
            <div className="mt-element max-w-[600px]">
              {hubTowns.map((town) => (
                <TownCard key={town.id} town={town} isHub />
              ))}
            </div>
          </>
        )}

        {/* Core Towns */}
        {coreTowns.length > 0 && (
          <>
            <Divider spacing="section" />
            <Heading level={2}>Core Towns</Heading>
            <Text size="small" muted className="mt-1">
              Central to this cluster's story arc.
            </Text>
            <div className="mt-element grid gap-3 max-w-[800px] sm:grid-cols-2">
              {coreTowns.map((town) => (
                <TownCard key={town.id} town={town} />
              ))}
            </div>
          </>
        )}

        {/* Supporting Towns */}
        {supportingTowns.length > 0 && (
          <>
            <Divider spacing="section" />
            <Heading level={2}>Supporting Towns</Heading>
            <Text size="small" muted className="mt-1">
              Broadening the context of this cluster.
            </Text>
            <div className="mt-element grid gap-3 max-w-[800px] sm:grid-cols-2">
              {supportingTowns.map((town) => (
                <TownCard key={town.id} town={town} />
              ))}
            </div>
          </>
        )}

        {/* Bridges */}
        {cluster.bridges.length > 0 && (
          <>
            <Divider spacing="section" />
            <Heading level={2}>Connected Clusters</Heading>
            <Text size="small" muted className="mt-1">
              How this cluster connects to the wider war.
            </Text>
            <div className="mt-element space-y-4 max-w-[720px]">
              {cluster.bridges.map((bridge) => (
                <div
                  key={bridge.id}
                  className="p-4 rounded-lg border border-border-default"
                >
                  <Link
                    href={`/clusters/${bridge.cluster.slug}`}
                    className="font-semibold"
                  >
                    {bridge.cluster.name}
                  </Link>
                  <Text size="small" className="mt-1 font-medium">
                    {bridge.label}
                  </Text>
                  <Text size="small" muted className="mt-1">
                    {bridge.rationale}
                  </Text>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Footer link */}
        <Divider spacing="section" />
        <Text size="small" muted>
          <Link href="/clusters">← Back to all clusters</Link>
          {" · "}
          <Link href="/methodology">How we evaluate towns</Link>
        </Text>
      </Container>
    </main>
  );
}
