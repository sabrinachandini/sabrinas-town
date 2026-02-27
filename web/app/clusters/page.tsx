// Cluster directory page — lists all state clusters

import { getClusters } from "@/lib/api";
import { Container, Heading, Text, Link, Divider } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Clusters | History Is For Everyone",
  description:
    "Explore the American Revolution by region. Each cluster groups towns that share a common story arc, from Massachusetts to Virginia.",
};

export default async function ClustersPage() {
  const clusters = await getClusters();

  // Group by state
  const byState = new Map<string, typeof clusters>();
  for (const cluster of clusters) {
    const group = byState.get(cluster.state) ?? [];
    group.push(cluster);
    byState.set(cluster.state, group);
  }

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>The Big Picture</Heading>
        <Text className="mt-element max-w-[620px]">
          The American Revolution did not happen in isolation. These clusters
          group towns by state and story arc — tracing how local events connected
          to the wider war. Start with a hub town and explore outward.
        </Text>

        <Divider spacing="section" />

        {clusters.length > 0 ? (
          <div className="space-y-component max-w-[800px]">
            {Array.from(byState.entries()).map(([state, stateClusters]) => (
              <div key={state}>
                {stateClusters.map((cluster) => (
                  <Link
                    key={cluster.slug}
                    href={`/clusters/${cluster.slug}`}
                    className="block p-4 rounded-lg border border-border-default hover:border-accent-blue transition-colors mb-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Text className="font-semibold">{cluster.name}</Text>
                        <Text size="small" muted className="mt-1">
                          {cluster.theme}
                        </Text>
                        {cluster.hubTown && (
                          <Text size="small" muted className="mt-1">
                            Hub: {cluster.hubTown.name}, {cluster.hubTown.state}
                          </Text>
                        )}
                      </div>
                      <Text
                        size="small"
                        muted
                        className="flex-shrink-0 whitespace-nowrap"
                      >
                        {cluster.townCount}{" "}
                        {cluster.townCount === 1 ? "town" : "towns"}
                      </Text>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-component text-center">
            <Text muted>Clusters are being assembled. Check back soon.</Text>
          </div>
        )}
      </Container>
    </main>
  );
}
