import { getRankings } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

export const metadata = {
  title: "Browse Towns | Sabrina's Town",
  description:
    "Explore all 75 Revolutionary towns in our network — from Lexington to Yorktown. Filter by state and score tier.",
};

export const dynamic = "force-dynamic";

export default async function TownsPage() {
  const towns = await getRankings({ limit: 75 });

  const states = [...new Set(towns.map((t) => t.state))].sort();

  // Group towns by state
  const townsByState: Record<string, typeof towns> = {};
  for (const town of towns) {
    if (!townsByState[town.state]) townsByState[town.state] = [];
    townsByState[town.state].push(town);
  }

  return (
    <main className="py-section">
      <Container size="wide">
        <Heading level={1}>Browse Towns</Heading>
        <Text className="mt-element max-w-[620px]">
          {towns.length} Revolutionary towns across {states.length} states,
          scored for historical significance, preservation quality, and visitor
          experience. Select a town to explore its full profile.
        </Text>

        <div className="mt-element flex flex-wrap gap-4">
          <Button href="/rankings" size="small" variant="secondary">
            View Rankings Table
          </Button>
          <Button href="/compare" size="small" variant="secondary">
            Compare Two Towns
          </Button>
        </div>

        <Divider spacing="section" />

        {/* State Quick Nav */}
        <div className="flex flex-wrap items-center gap-3 mb-component">
          <Text size="small" muted>
            Jump to:
          </Text>
          {states.map((state) => (
            <a
              key={state}
              href={`#${state}`}
              className="px-3 py-1 text-small bg-bg-secondary rounded hover:bg-border-light transition-colors"
            >
              {state} ({townsByState[state].length})
            </a>
          ))}
        </div>

        {/* Towns Grid by State */}
        {states.map((state) => (
          <section key={state} id={state} className="mb-section">
            <Heading level={2} className="mb-element">
              {state}
            </Heading>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-element">
              {townsByState[state]
                .sort((a, b) => a.rank - b.rank)
                .map((town) => (
                  <Link
                    key={town.id}
                    href={`/towns/${town.slug}`}
                    className="block p-element bg-bg-secondary rounded-lg hover:bg-border-light transition-colors no-underline group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Text className="font-medium group-hover:text-accent-blue transition-colors">
                          {town.name}
                        </Text>
                        <Text size="small" muted className="mt-tight line-clamp-2">
                          {town.heroSummary40}
                        </Text>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span
                          className={`font-mono font-medium text-small ${
                            town.compositeScore >= 75
                              ? "text-accent-blue"
                              : town.compositeScore >= 40
                              ? "text-text-primary"
                              : "text-text-muted"
                          }`}
                        >
                          {town.compositeScore.toFixed(1)}
                        </span>
                        <Text size="small" muted className="mt-tight">
                          #{town.rank}
                        </Text>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}

        {towns.length === 0 && (
          <div className="py-section text-center">
            <Text muted>No towns found. Check back soon.</Text>
          </div>
        )}
      </Container>
    </main>
  );
}
