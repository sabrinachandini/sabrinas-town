import { getRankings } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
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
          {towns.length} Revolutionary towns across {states.length} states.
          Select a town to explore its full profile.
        </Text>

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
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((town) => (
                  <Link
                    key={town.id}
                    href={`/towns/${town.slug}`}
                    className="block p-element bg-bg-secondary rounded-lg hover:bg-border-light transition-colors no-underline group"
                  >
                    <Text className="font-medium group-hover:text-accent-blue transition-colors">
                      {town.name}
                    </Text>
                    <Text size="small" muted className="mt-tight line-clamp-2">
                      {town.heroSummary40}
                    </Text>
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
