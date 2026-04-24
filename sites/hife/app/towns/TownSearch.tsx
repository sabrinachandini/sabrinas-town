"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface PersonResult {
  id: string;
  name: string;
  roles: string[];
  towns: { name: string; slug: string; state: string }[];
}

export function TownSearch({ initialValue }: { initialValue: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [people, setPeople] = useState<PersonResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (value.trim().length < 2) { setPeople([]); setOpen(false); return; }

    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/people/search?q=${encodeURIComponent(value.trim())}`);
        const data = await res.json();
        setPeople(data.results ?? []);
        if ((data.results ?? []).length > 0) setOpen(true);
      } catch {
        setPeople([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [value]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
    const q = value.trim();
    router.push(q ? `/towns?q=${encodeURIComponent(q)}` : "/towns");
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-[520px]">
      <form onSubmit={handleSubmit}>
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => people.length > 0 && setOpen(true)}
              placeholder="Search towns, states, or historical figures..."
              className="w-full pl-9 pr-4 py-2.5 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors"
            />
            {loading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin" />
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 text-small font-body font-medium border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {open && people.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border-light rounded-lg shadow-lg z-50 max-h-[320px] overflow-y-auto">
          <p className="px-4 pt-3 pb-1 text-[0.7rem] font-body font-semibold uppercase tracking-wide text-text-muted">
            Historical Figures
          </p>
          {people.map((person) => (
            <div key={person.id} className="px-4 py-2.5 border-b border-border-light last:border-b-0">
              <p className="font-body font-medium text-text-primary">{person.name}</p>
              {person.roles.length > 0 && (
                <p className="text-small text-text-muted font-body mt-0.5">{person.roles.join(", ")}</p>
              )}
              {person.towns.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {person.towns.map((town) => (
                    <Link
                      key={town.slug}
                      href={`/towns/${town.slug}`}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center px-2 py-0.5 text-[0.75rem] font-body font-medium bg-bg-secondary text-accent-blue rounded hover:bg-accent-blue hover:text-white transition-colors no-underline"
                    >
                      {town.name}, {town.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
