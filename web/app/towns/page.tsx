import { getRankings } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";
import { PeopleSearch } from "@/components/town";
import { TownSearchInput } from "./TownSearchInput";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "Explore all 77 Revolutionary towns in our network — from Lexington to Yorktown. Filter by state and score tier.",
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function TownsPage({ searchParams }: PageProps) {
  const { q = "" } = await searchParams;
  const towns = await getRankings({ limit: 77 });

  const query = q.trim().toLowerCase();
  const filtered = query
    ? towns.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.state.toLowerCase().includes(query)
      )
    : towns;

  const states = [...new Set(filtered.map((t) => t.state))].sort();

  const townsByState: Record<string, typeof filtered> = {};
  for (const town of filtered) {
    if (!townsByState[town.state]) townsByState[town.state] = [];
    townsByState[town.state].push(town);
  }

  return (
    <main className="py-section">
      <Container size="wide">
        <Heading level={1}>Browse Towns</Heading>
        <Text className="mt-element max-w-[620px]">
          {towns.length} Revolutionary towns across{" "}
          {[...new Set(towns.map((t) => t.state))].length} states. Select a
          town to explore its full profile.
        </Text>

        {/* People search */}
        <div className="mt-component">
          <PeopleSearch />
        </div>

        {/* Town search */}
        <div className="mt-component">
          <TownSearchInput initialValue={q} />
          {query && (
            <Text size="small" muted className="mt-2">
              {filtered.length} town{filtered.length !== 1 ? "s" : ""} matching &ldquo;{q}&rdquo;.{" "}
              <Link href="/towns">Clear</Link>
            </Text>
          )}
        </div>

        <Divider spacing="section" />

        {/* State Quick Nav */}
        {!query && states.length > 1 && (
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
        )}

        {/* Towns Grid by State */}
        {filtered.length === 0 ? (
          <div className="py-section text-center">
            <Text muted>No towns match &ldquo;{q}&rdquo;.</Text>
          </div>
        ) : (
          states.map((state) => (
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
          ))
        )}
      </Container>
    </main>
  );
}
