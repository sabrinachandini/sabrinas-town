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
    return { title: "Updates | Town Not Found" };
  }

  return {
    title: `Updates | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Changelog and transparency information for ${town.name}, ${town.state}.`,
  };
}

export default async function UpdatesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  const hasChangelog = town.recentChanges.length > 0;

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          This profile evolves as new sources emerge and errors are corrected. Transparency matters: here's what changed and when.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* Quick Stats */}
      <section>
        <Container>
          <Heading level={2}>Profile Status</Heading>
          <div className="mt-component grid sm:grid-cols-2 lg:grid-cols-4 gap-element">
            <StatusCard
              label="Last Updated"
              value={new Date(town.lastUpdatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            />
            <StatusCard
              label="Town ID"
              value={town.id}
              mono
            />
            <StatusCard
              label="Composite Score"
              value={`${town.compositeScore.toFixed(1)} (${town.scoreTier})`}
            />
            <StatusCard
              label="Changes Logged"
              value={String(town.recentChanges.length)}
            />
          </div>
        </Container>
      </section>

      {/* Score Breakdown */}
      {town.scoreBreakdown && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Score Breakdown</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                How {town.name}'s composite score was calculated across seven dimensions.
              </Text>

              <div className="mt-component space-y-element">
                {[
                  { key: "historical", label: "Historical Significance" },
                  { key: "preservation", label: "Preservation Quality" },
                  { key: "accessibility", label: "Visitor Accessibility" },
                  { key: "interpretation", label: "Interpretation Resources" },
                  { key: "interconnection", label: "Network Interconnection" },
                  { key: "stories", label: "Stories Collected" },
                  { key: "sources", label: "Source Documentation" },
                ].map(({ key, label }) => {
                  const breakdown = town.scoreBreakdown?.[key as keyof Omit<typeof town.scoreBreakdown, 'hints'>];
                  const score = breakdown && 'score' in breakdown ? breakdown.score : 0;
                  return (
                    <div key={key} className="p-element bg-bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <Text size="small">{label}</Text>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-2 bg-border-light rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent-blue rounded-full transition-all"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                          <Text size="small" className="font-mono w-8 text-right">
                            {score}
                          </Text>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Improvement Hints */}
              {town.scoreBreakdown.hints && town.scoreBreakdown.hints.length > 0 && (
                <div className="mt-component p-element bg-bg-secondary rounded-lg">
                  <Text size="small" muted className="uppercase tracking-wide mb-element">
                    Improvement Opportunities
                  </Text>
                  <div className="space-y-element">
                    {town.scoreBreakdown.hints.map((hint, i) => (
                      <div key={i}>
                        <Text size="small" className="font-medium">
                          {hint.category}: {hint.direction}
                        </Text>
                        <Text size="small" muted className="mt-1">
                          {hint.suggestion}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </section>
        </>
      )}

      {/* Changelog */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>Changelog</Heading>

          {hasChangelog ? (
            <div className="mt-component space-y-element">
              {town.recentChanges.map((change) => (
                <div key={change.id} className="p-element bg-bg-secondary rounded-lg">
                  <div className="flex items-start justify-between gap-4">
                    <Text className="font-medium">{change.summary}</Text>
                    <Text size="small" muted className="flex-shrink-0">
                      {new Date(change.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Text>
                  </div>
                  {change.publicNotes && (
                    <Text size="small" muted className="mt-tight">
                      {change.publicNotes}
                    </Text>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-component p-element bg-bg-secondary rounded-lg text-center">
              <Text size="small" muted className="italic">
                No changes logged yet. This profile was recently added to the network.
              </Text>
            </div>
          )}
        </Container>
      </section>

      {/* Data Sources Note */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>Data Sources</Heading>
          <Text className="mt-element text-text-muted max-w-[720px]">
            Information in this profile comes from a combination of primary sources (period documents, letters, depositions), secondary sources (scholarly works, institutional research), and community contributions. Each fact is attributed where possible; gaps are noted.
          </Text>

          <div className="mt-component p-element bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide mb-element">
              How to Contribute
            </Text>
            <Text size="small">
              If you have corrections, additional sources, or local knowledge about {town.name}, we want to hear from you. Contributions are reviewed by our editorial team before publication.
            </Text>
            <div className="mt-element">
              <Link href="/partner">Learn about contributing →</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function StatusCard({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Text size="small" muted className="uppercase tracking-wide">
        {label}
      </Text>
      <Text className={`mt-tight ${mono ? "font-mono text-small" : ""}`}>
        {value}
      </Text>
    </div>
  );
}
