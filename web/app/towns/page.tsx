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
      <section className="bg-ink border-b-4 border-crimson py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-cream/35 flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-cream/35 before:block">
            The Revolutionary Town Network
          </p>
          <h1 className="font-display text-cream leading-[0.88]" style={{ fontSize: "clamp(80px,12vw,160px)" }}>
            Revolutionary<br />Towns
          </h1>
          <p className="font-editorial italic text-cream/60 text-[18px] mt-6 max-w-[500px] leading-relaxed">
            Every town where the American Revolution happened — walked, sourced, and connected across all 13 original states.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-[#f8f0d8] border-b-[3px] border-ink py-6 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <TownSearch initialValue={q} />
          {query && (
            <p className="mt-3 font-ui text-[0.8rem] text-ink/50">
              {filtered.length} town{filtered.length !== 1 ? "s" : ""} matching &ldquo;{q}&rdquo;.{" "}
              <Link href="/towns">Clear</Link>
            </p>
          )}
        </div>
      </section>

      {/* State quick-nav */}
      {!query && allStates.length > 1 && (
        <section className="bg-[#f8f0d8] border-b border-ink/10 py-6 px-8 md:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-wrap gap-6">
              {allStates.map((state) => (
                <a
                  key={state}
                  href={`#${state}`}
                  className="font-display text-[16px] text-ink/50 hover:text-crimson border-b border-transparent hover:border-crimson no-underline transition-colors"
                >
                  {state}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Towns by state */}
      <section className="bg-cream py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-editorial italic text-ink text-[1.1rem]">No towns match &ldquo;{q}&rdquo;.</p>
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
                    <h2 className="font-display text-[48px] text-ink leading-none">{state}</h2>
                    <span className="font-ui text-[0.75rem] text-ink/40 uppercase tracking-[0.1em]">
                      {townsByState[state].length} town{townsByState[state].length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="border-b-[3px] border-ink mb-6" />

                  {/* Town list */}
                  <div>
                    {townsByState[state]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((town) => (
                        <a
                          key={town.id}
                          href={`/towns/${town.slug}`}
                          className="flex items-baseline justify-between gap-6 border-b border-ink/8 py-4 group no-underline"
                        >
                          <div className="flex items-baseline gap-4 min-w-0">
                            <span className="font-editorial text-[20px] text-ink group-hover:text-crimson transition-colors shrink-0">
                              {town.name}
                            </span>
                            <span className="font-ui text-[13px] text-ink/50 truncate hidden sm:block">
                              {(town as any).execSummary150 ?? town.heroSummary40}
                            </span>
                          </div>
                          <span className="font-display text-crimson shrink-0 group-hover:translate-x-1 transition-transform">
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
      <section className="bg-ink border-t-4 border-crimson py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-cream leading-none" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
            Teach the <span className="text-crimson">Revolution.</span>
          </p>
          <a
            href="/teach"
            className="no-underline border-2 border-cream text-cream font-ui font-medium text-[11px] uppercase tracking-[0.12em] px-8 py-3 hover:bg-crimson hover:border-crimson transition-colors whitespace-nowrap"
          >
            Teacher Resources
          </a>
        </div>
      </section>
    </main>
  );
}
