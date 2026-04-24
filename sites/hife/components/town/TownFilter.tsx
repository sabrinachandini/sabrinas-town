"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface FilterableTown {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
}

interface Props {
  towns: FilterableTown[];
}

export function TownFilter({ towns }: Props) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return towns;
    return towns.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.state.toLowerCase().includes(q)
    );
  }, [towns, q]);

  const states = useMemo(() => {
    const stateSet = new Set(filtered.map((t) => t.state));
    return [...stateSet].sort();
  }, [filtered]);

  const byState = useMemo(() => {
    const map: Record<string, FilterableTown[]> = {};
    for (const t of filtered) {
      if (!map[t.state]) map[t.state] = [];
      map[t.state].push(t);
    }
    return map;
  }, [filtered]);

  return (
    <div>
      {/* Search input */}
      <div className="relative max-w-[360px] mb-component">
        <label className="block text-small text-text-muted font-body mb-2">
          Filter by town or state
        </label>
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Boston, Virginia..."
            className="w-full pl-9 pr-4 py-2.5 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors text-small"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        {q && (
          <p className="mt-1 text-small text-text-muted">
            {filtered.length} town{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {/* State quick nav (hidden when filtering) */}
      {!q && states.length > 1 && (
        <div className="flex flex-wrap items-center gap-3 mb-component">
          <span className="text-small text-text-muted">Jump to:</span>
          {states.map((state) => (
            <a
              key={state}
              href={`#${state}`}
              className="px-3 py-1 text-small bg-bg-secondary rounded hover:bg-border-light transition-colors"
            >
              {state} ({byState[state].length})
            </a>
          ))}
        </div>
      )}

      {/* Town grid grouped by state */}
      {filtered.length === 0 ? (
        <p className="text-text-muted py-section text-center">
          No towns match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        states.map((state) => (
          <section key={state} id={!q ? state : undefined} className="mb-section">
            <h2 className="text-h2 font-heading font-bold mb-element">{state}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-element">
              {byState[state]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((town) => (
                  <Link
                    key={town.id}
                    href={`/towns/${town.slug}`}
                    className="block p-element bg-bg-secondary rounded-lg hover:bg-border-light transition-colors no-underline group"
                  >
                    <p className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                      {town.name}
                    </p>
                    <p className="text-small text-text-muted mt-tight line-clamp-2">
                      {town.heroSummary40}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
