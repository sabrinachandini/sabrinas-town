"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface PersonResult {
  id: string;
  name: string;
  roles: string[];
  towns: { name: string; slug: string; state: string }[];
}

export function PeopleSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PersonResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (query.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/people/search?q=${encodeURIComponent(query.trim())}`);
        const data = await res.json();
        setResults(data.results ?? []);
        setOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  return (
    <div ref={wrapperRef} className="relative max-w-[480px]">
      <label className="block text-small text-text-muted font-body mb-2">
        Search for a historical figure
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
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="e.g. Paul Revere, Samuel Adams..."
          className="w-full pl-9 pr-4 py-2.5 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin" />
        )}
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border-light rounded-lg shadow-lg z-50 max-h-[320px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-small text-text-muted font-body">
              No results found.
            </div>
          ) : (
            results.map((person) => (
              <div
                key={person.id}
                className="px-4 py-3 border-b border-border-light last:border-b-0"
              >
                <p className="font-body font-medium text-text-primary">
                  {person.name}
                </p>
                {person.roles.length > 0 && (
                  <p className="text-small text-text-muted font-body mt-0.5">
                    {person.roles.join(", ")}
                  </p>
                )}
                {person.towns.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {person.towns.map((town) => (
                      <Link
                        key={town.slug}
                        href={`/towns/${town.slug}`}
                        className="inline-flex items-center px-2 py-0.5 text-[0.75rem] font-body font-medium bg-bg-secondary text-accent-blue rounded hover:bg-accent-blue hover:text-white transition-colors no-underline"
                        onClick={() => setOpen(false)}
                      >
                        {town.name}, {town.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
