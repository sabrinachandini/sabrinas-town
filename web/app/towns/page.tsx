import { getRankings } from "@/lib/api";
import { PageHero, SectionHeader, Link } from "@/components/ui";
import { TownSearch } from "./TownSearch";

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
      <PageHero
        bg="navy"
        overline="The Revolutionary Town Network"
        title={`${towns.length} Revolutionary Towns`}
        titleEmphasis="Revolutionary"
        body="Every town where the American Revolution happened — walked, sourced, and connected. Across all 13 original states, from New Hampshire to Georgia."
      />

      {/* Search */}
      <section className="bg-cream border-b border-[#DDD8CE] py-6">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <TownSearch initialValue={q} />
          {query && (
            <p className="mt-3 font-condensed text-[0.8rem] text-slate">
              {filtered.length} town{filtered.length !== 1 ? "s" : ""} matching &ldquo;{q}&rdquo;.{" "}
              <Link href="/towns">Clear</Link>
            </p>
          )}
        </div>
      </section>

      {/* State quick-nav */}
      {!query && allStates.length > 1 && (
        <section className="bg-ivory border-b border-[#DDD8CE] py-4">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="flex flex-wrap gap-2">
              {allStates.map((state) => {
                const count = towns.filter((t) => t.state === state).length;
                return (
                  <a
                    key={state}
                    href={`#${state}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-condensed font-bold text-[0.72rem] tracking-[0.08em] uppercase text-navy border-b-2 border-transparent hover:border-crimson hover:text-crimson transition-colors no-underline"
                  >
                    {state}
                    <span className="text-[10px] font-medium text-slate">
                      {count}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Towns grid */}
      <section className="py-20 bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-charcoal text-[1.1rem]">No towns match &ldquo;{q}&rdquo;.</p>
              <div className="mt-6">
                <Link href="/towns">Browse all towns</Link>
              </div>
            </div>
          ) : (
            <div className="space-y-20">
              {filteredStates.map((state) => (
                <div key={state} id={state}>
                  <SectionHeader
                    overline={`${townsByState[state].length} town${townsByState[state].length !== 1 ? "s" : ""}`}
                    title={state}
                  />

                  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD8CE]">
                    {townsByState[state]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((town) => (
                        <a
                          key={town.id}
                          href={`/towns/${town.slug}`}
                          className="no-underline block bg-white p-5 group hover:bg-navy transition-colors duration-200"
                        >
                          <p className="font-heading font-bold text-[1.05rem] text-charcoal group-hover:text-white transition-colors">
                            {town.name}
                          </p>
                          <p className="mt-2 font-sans text-[0.85rem] text-slate group-hover:text-fog transition-colors line-clamp-2">
                            {(town as any).execSummary150 ?? town.heroSummary40}
                          </p>
                          <p className="mt-3 font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-crimson group-hover:text-gold transition-colors">
                            Explore &rarr;
                          </p>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
