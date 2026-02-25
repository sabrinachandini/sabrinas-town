import { getTown } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@/components/ui";
import { EmptyState } from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "History | Town Not Found" };
  }

  return {
    title: `History | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `The Revolutionary War history of ${town.name}, ${town.state}.`,
  };
}

export default async function HistoryPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  const hasContent = town.whyMatters || town.themes.length > 0 || town.routes.length > 0;

  if (!hasContent) {
    return (
      <EmptyState
        title="History Coming Soon"
        description={`The full historical narrative of ${town.name}'s role in the Revolution is being researched and written. This section will feature the complete story of what happened here, the themes that connect this town to the broader struggle for independence, and the historical routes that passed through.`}
        townSlug={slug}
      />
    );
  }

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          Every town's Revolutionary story is both local and national — shaped by geography, economy, and the particular people who happened to live there. This section explores what makes {town.name}'s history distinctive.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* Why It Matters - Full */}
      <section>
        <Container>
          <Heading level={2}>Why {town.name} matters</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            {town.whyMatters.split("\n\n").map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </div>
        </Container>
      </section>

      {/* Themes */}
      {town.themes.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Themes</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Cross-cutting themes that connect {town.name} to the broader Revolutionary story.
              </Text>
              <div className="mt-component grid sm:grid-cols-2 gap-element">
                {town.themes.map((theme) => (
                  <div
                    key={theme.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{theme.name}</Text>
                    {theme.relevanceNote && (
                      <Text size="small" muted className="mt-tight">
                        {theme.relevanceNote}
                      </Text>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Historical Routes */}
      {town.routes.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Historical Routes</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Routes that passed through {town.name} during the Revolutionary era.
              </Text>
              <div className="mt-component space-y-element">
                {town.routes.map((route) => (
                  <div
                    key={route.id}
                    className="p-element bg-bg-secondary rounded-lg"
                  >
                    <Text className="font-medium">{route.name}</Text>
                    <Text size="small" muted className="mt-tight">
                      Stop {route.stopOrder} of {route.totalStops}
                    </Text>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}
    </div>
  );
}
