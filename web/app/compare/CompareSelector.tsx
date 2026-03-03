"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RankedTown } from "@/lib/api";
import { Button } from "@/components/ui";

interface Props {
  towns: RankedTown[];
  initialA: string;
  initialB: string;
}

export function CompareSelector({ towns, initialA, initialB }: Props) {
  const router = useRouter();
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);

  function handleCompare() {
    if (!a || !b || a === b) return;
    router.push(`/compare?townA=${encodeURIComponent(a)}&townB=${encodeURIComponent(b)}`);
  }

  const stateGroups: Record<string, RankedTown[]> = {};
  for (const town of towns) {
    if (!stateGroups[town.state]) stateGroups[town.state] = [];
    stateGroups[town.state].push(town);
  }
  const states = Object.keys(stateGroups).sort();

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div>
        <label className="block text-small text-text-muted mb-1" htmlFor="townA">
          First town
        </label>
        <select
          id="townA"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="h-10 px-3 pr-8 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors appearance-none min-w-[220px]"
        >
          <option value="">Select a town...</option>
          {states.map((state) => (
            <optgroup key={state} label={state}>
              {stateGroups[state]
                .sort((x, y) => x.name.localeCompare(y.name))
                .map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-small text-text-muted mb-1" htmlFor="townB">
          Second town
        </label>
        <select
          id="townB"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="h-10 px-3 pr-8 text-[0.9375rem] font-body bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors appearance-none min-w-[220px]"
        >
          <option value="">Select a town...</option>
          {states.map((state) => (
            <optgroup key={state} label={state}>
              {stateGroups[state]
                .sort((x, y) => x.name.localeCompare(y.name))
                .map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>

      <Button
        onClick={handleCompare}
        disabled={!a || !b || a === b}
      >
        Compare
      </Button>
    </div>
  );
}
