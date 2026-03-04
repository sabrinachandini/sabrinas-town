import { getRankings } from "@/lib/api";
import { Container, Heading, Text, Link, Divider } from "@/components/ui";
import { PeopleSearch } from "@/components/town";
import { TownSearchInput } from "./TownSearchInput";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "Explore 77 Revolutionary towns across 13 states — from Lexington to Yorktown.",
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

  const allStates = [...new Set(towns.map((t) => t.state))].sort();
  const filteredStates = [...new Set(filtered.map((t) => t.state))].sort();

  const townsByState: Record<string, typeof filtered> = {};
  for (const town of filtered) {
    if (!townsByState[town.state]) townsByState[town.state] = [];
    townsByState[town.state].push(town);
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-section border-b border-border-light">
        <Container size="wide">
          <Heading level={1}>
            {towns.length} Revolutionary Towns
          </Heading>
          <Text className="mt-element max-w-[560px] text-text-muted">
            Every town where the American Revolution happened — walked, sourced, and connected.
            Across {allStates.length} states, from New Hampshire to Georgia.
          </Text>

          <div className="mt-component flex flex-col sm:flex-row gap-4 items-start">
            <TownSearchInput initialValue={q} />
            <div className="self-center">
              <PeopleSearch />
            </div>
          </div>

          {query && (
            <Text size="small" muted className="mt-3">
              {filtered.length} town{filtered.length !== 1 ? "s" : ""} matching &ldquo;{q}&rdquo;.{" "}
              <Link href="/towns">Clear</Link>
            </Text>
          )}
        </Container>
      </section>

      {/* State quick-nav */}
      {!query && allStates.length > 1 && (
        <section className="py-element border-b border-border-light bg-bg-secondary">
          <Container size="wide">
            <div className="flex flex-wrap gap-2">
              {allStates.map((state) => {
                const count = towns.filter((t) => t.state === state).length;
                return (
                  <a
                    key={state}
                    href={`#${state}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-small font-body bg-white border border-border-light hover:border-accent-blue hover:text-accent-blue transition-colors no-underline"
                  >
                    {state}
                    <span className="text-[10px] font-medium bg-bg-secondary rounded-full px-1.5 py-0.5 text-text-muted">
                      {count}
                    </span>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Towns grid */}
      <section className="py-section">
        <Container size="wide">
          {filtered.length === 0 ? (
            <div className="py-section text-center">
              <Text muted>No towns match &ldquo;{q}&rdquo;.</Text>
              <div className="mt-element">
                <Link href="/towns">Browse all towns</Link>
              </div>
            </div>
          ) : (
            <div className="space-y-section">
              {filteredStates.map((state, idx) => (
                <div key={state} id={state}>
                  {/* State header */}
                  <div className="flex items-baseline gap-4 mb-component">
                    <Heading level={2}>{state}</Heading>
                    <Text size="small" muted as="span">
                      {townsByState[state].length} town{townsByState[state].length !== 1 ? "s" : ""}
                    </Text>
                  </div>

                  {/* Town cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-element">
                    {townsByState[state]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((town) => (
                        <Link
                          key={town.id}
                          href={`/towns/${town.slug}`}
                          className="block border-l-2 border-border-light pl-4 py-1 hover:border-accent-blue transition-colors no-underline group"
                        >
                          <Text className="font-semibold font-heading group-hover:text-accent-blue transition-colors">
                            {town.name}
                          </Text>
                          <Text size="small" muted className="mt-1 line-clamp-2">
                            {(town as any).execSummary150 ?? town.heroSummary40}
                          </Text>
                        </Link>
                      ))}
                  </div>

                  {idx < filteredStates.length - 1 && (
                    <Divider spacing="section" />
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
