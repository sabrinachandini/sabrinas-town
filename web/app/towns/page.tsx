import { getRankings } from "@/lib/api";
import { Link } from "@/components/ui";
import { TownSearch } from "./TownSearch";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "Explore Revolutionary towns across 13 states — from Lexington to Yorktown.",
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
      <section className="bg-[#0a0e1a] py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-white/40 mb-4">The Revolutionary Town Network</p>
          <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: "clamp(80px,12vw,160px)" }}>
            Revolutionary<br />Towns
          </h1>
          <p className="font-editorial italic text-white/60 text-[1.1rem] mt-6 max-w-[500px] leading-relaxed">
            Every town where the American Revolution happened — walked, sourced, and connected across all 13 original states.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-[#f2ece0] py-6 px-8 md:px-16 border-b border-[#0e1428]/10">
        <div className="mx-auto max-w-[1200px]">
          <TownSearch initialValue={q} />
          {query && (
            <p className="mt-3 font-ui text-[0.8rem] text-[#0e1428]/50">
              {filtered.length} town{filtered.length !== 1 ? "s" : ""} matching &ldquo;{q}&rdquo;.{" "}
              <Link href="/towns">Clear</Link>
            </p>
          )}
        </div>
      </section>

      {/* State quick-nav */}
      {!query && allStates.length > 1 && (
        <section className="bg-[#f2ece0] py-6 px-8 md:px-16 border-b border-[#0e1428]/10">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap gap-6">
              {allStates.map((state) => (
                <a
                  key={state}
                  href={`#${state}`}
                  className="font-display text-[1rem] text-[#0e1428]/50 hover:text-[#c8222a] border-b border-transparent hover:border-[#c8222a] transition-colors no-underline"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Towns by state */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-editorial italic text-[#0e1428] text-[1.1rem]">No towns match &ldquo;{q}&rdquo;.</p>
              <div className="mt-6">
                <Link href="/towns">Browse all towns</Link>
              </div>
            </div>
          ) : (
            <div className="space-y-20">
              {filteredStates.map((state) => (
                <div key={state} id={state}>
                  {/* State header */}
                  <div className="flex items-baseline gap-4 mb-2">
                    <h2 className="font-display text-[3rem] text-[#0e1428] leading-none">{state}</h2>
                    <span className="font-ui text-[0.75rem] text-[#0e1428]/40 uppercase tracking-[0.1em]">
                      {townsByState[state].length} town{townsByState[state].length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="border-b border-[#0e1428]/10 mb-6" />

                  {/* Town list */}
                  <div>
                    {townsByState[state]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((town) => (
                        <a
                          key={town.id}
                          href={`/towns/${town.slug}`}
                          className="no-underline flex items-baseline justify-between gap-6 border-b border-[#0e1428]/8 py-4 group"
                        >
                          <div className="flex items-baseline gap-4 min-w-0">
                            <span className="font-editorial text-[1.2rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors shrink-0">
                              {town.name}
                            </span>
                            <span className="font-ui text-[0.8rem] text-[#0e1428]/50 truncate hidden sm:block">
                              {(town as any).execSummary150 ?? town.heroSummary40}
                            </span>
                          </div>
                          <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#c8222a] shrink-0">
                            &rarr;
                          </span>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0a0e1a] py-20 px-8 md:px-16 mt-0">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            Teach the <span className="text-[#c8222a]">Revolution.</span>
          </p>
          <a
            href="/teach"
            className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
          >
            Teacher Resources
          </a>
        </div>
      </section>
    </main>
  );
}
