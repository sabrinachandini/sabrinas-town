import { search, SearchResult } from "@/lib/api";
import NextLink from "next/link";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export function generateMetadata() {
  return {
    title: "Search | History is for Everyone",
    description: "Search towns, events, people, and places across the American Revolution network.",
    alternates: { canonical: "https://sabrinas-town.vercel.app/search" },
  };
}

const TYPE_LABELS: Record<SearchResult["type"], { label: string; bg: string; text: string }> = {
  town:   { label: "Town",   bg: "#1a3a72", text: "#f2e6c8" },
  event:  { label: "Event",  bg: "#cc3322", text: "#f2e6c8" },
  person: { label: "Person", bg: "#2a5c45", text: "#f2e6c8" },
  place:  { label: "Place",  bg: "#4A6A9B", text: "#14100a" },
};

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const results = q.length >= 2 ? await search(q, 40) : [];

  const grouped = {
    town:   results.filter((r) => r.type === "town"),
    event:  results.filter((r) => r.type === "event"),
    person: results.filter((r) => r.type === "person"),
    place:  results.filter((r) => r.type === "place"),
  };

  return (
    <main>
      {/* Hero / Search bar */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-14 px-6 sm:px-16">
        <div className="mx-auto max-w-[820px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] flex items-center gap-2.5 mb-6">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
            Search the Network
          </p>
          <h1 className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em] mb-8" style={{ fontSize: "clamp(36px,6vw,72px)" }}>
            Find anything.
          </h1>

          <form method="GET" action="/search" className="relative">
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Towns, events, people, places…"
              autoFocus
              className="w-full bg-[rgba(242,230,200,0.07)] border-2 border-[rgba(242,230,200,0.18)] text-[#f2e6c8] placeholder-[rgba(242,230,200,0.3)] font-editorial text-[18px] px-5 py-4 pr-14 focus:outline-none focus:border-[#cc3322] transition-colors"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[rgba(242,230,200,0.5)] hover:text-[#f2e6c8] transition-colors"
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
                <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {q && (
            <p className="font-ui text-[11px] text-[rgba(242,230,200,0.4)] mt-3">
              {results.length === 0
                ? `No results for "${q}"`
                : `${results.length} result${results.length !== 1 ? "s" : ""} for "${q}"`}
            </p>
          )}
        </div>
      </section>

      {/* Results */}
      {q && results.length > 0 && (
        <section className="bg-[#f2ece0] py-12 px-6 sm:px-16 border-b-4 border-[#14100a]">
          <div className="mx-auto max-w-[820px] space-y-12">

            {(["town", "event", "person", "place"] as const).map((type) => {
              const group = grouped[type];
              if (group.length === 0) return null;
              const meta = TYPE_LABELS[type];
              return (
                <div key={type}>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-ui text-[11px] tracking-[0.15em] uppercase px-2.5 py-1"
                      style={{ backgroundColor: meta.bg, color: meta.text }}
                    >
                      {meta.label}
                    </span>
                    <span className="font-ui text-[11px] text-[rgba(20,16,10,0.35)]">
                      {group.length} result{group.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="space-y-0">
                    {group.map((result) => (
                      <NextLink
                        key={result.id}
                        href={result.href}
                        className="no-underline flex gap-4 py-4 border-b border-[rgba(20,16,10,0.08)] last:border-b-0 group hover:bg-[rgba(26,58,114,0.04)] -mx-3 px-3 transition-colors"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#cc3322] flex-shrink-0 mt-2.5" />
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                            <span className="font-editorial text-[18px] text-[#14100a] group-hover:text-[#1a3a72] transition-colors leading-snug">
                              {result.title}
                            </span>
                            <span className="font-ui text-[11px] text-[rgba(20,16,10,0.4)]">
                              {result.subtitle}
                            </span>
                          </div>
                          {result.excerpt && (
                            <p className="font-ui text-[18px] text-[rgba(20,16,10,0.5)] leading-relaxed line-clamp-2">
                              {result.excerpt}
                            </p>
                          )}
                        </div>
                        <span className="font-ui text-[11px] text-[rgba(20,16,10,0.5)] group-hover:text-[#cc3322] transition-colors ml-auto flex-shrink-0 self-center">
                          →
                        </span>
                      </NextLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Empty state: no query */}
      {!q && (
        <section className="bg-[#f2ece0] py-20 px-6 sm:px-16 border-b-4 border-[#14100a]">
          <div className="mx-auto max-w-[820px]">
            <p className="font-display text-[100px] text-[rgba(20,16,10,0.05)] leading-none mb-4">?</p>
            <p className="font-editorial italic text-[18px] text-[rgba(20,16,10,0.4)]">
              Enter a query above to search towns, events, people, and places.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Lexington", "Paul Revere", "Valley Forge", "Battle of Bunker Hill", "Yorktown"].map((suggestion) => (
                <a
                  key={suggestion}
                  href={`/search?q=${encodeURIComponent(suggestion)}`}
                  className="no-underline font-ui text-[11px] tracking-[0.08em] text-[rgba(20,16,10,0.5)] border border-[rgba(20,16,10,0.15)] px-3 py-1.5 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors"
                >
                  {suggestion}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
