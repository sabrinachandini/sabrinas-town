"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function TownSearchInput({ initialValue }: { initialValue: string }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/towns?q=${encodeURIComponent(q)}` : "/towns");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[360px]">
      <label className="block text-small text-text-muted font-body mb-2">
        Filter by town or state
      </label>
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. Boston, Virginia..."
            className="w-full pl-9 pr-4 py-2.5 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 text-small font-body font-medium border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
