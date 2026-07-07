"use client";

import { useState, useTransition } from "react";
import { createMusterFromRoute } from "@/app/muster/actions";

interface Props {
  routeId: string;
  routeName: string;
}

export function MusterRouteButton({ routeId, routeName }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await createMusterFromRoute(fd);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="bg-[#cc3322] p-5 space-y-4">
      <div>
        <p className="font-ui text-[9px] uppercase tracking-[0.24em] text-cream/60 mb-1">Follow this route</p>
        <p className="font-display text-cream text-[22px] leading-none tracking-[-0.01em]">Muster this trip</p>
        <p className="font-editorial italic text-cream/60 text-[14px] mt-1 leading-snug">
          Claude drafts a day-by-day muster following the {routeName}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="hidden" name="routeId" value={routeId} />

        <div className="space-y-1">
          <label htmlFor="muster-start" className="font-ui text-[9px] uppercase tracking-[0.18em] text-cream/60 block">
            Start Date
          </label>
          <input
            id="muster-start"
            type="date"
            name="startDate"
            value={startDate}
            min={today}
            onChange={(e) => {
              setStartDate(e.target.value);
              if (e.target.value > endDate) setEndDate(e.target.value);
            }}
            required
            className="w-full bg-white/10 border border-white/20 text-cream font-ui text-[13px] px-3 py-2 focus:outline-none focus:border-white/50 [color-scheme:dark]"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="muster-end" className="font-ui text-[9px] uppercase tracking-[0.18em] text-cream/60 block">
            End Date
          </label>
          <input
            id="muster-end"
            type="date"
            name="endDate"
            value={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full bg-white/10 border border-white/20 text-cream font-ui text-[13px] px-3 py-2 focus:outline-none focus:border-white/50 [color-scheme:dark]"
          />
        </div>

        {error && (
          <p className="font-ui text-[11px] text-cream bg-black/20 px-3 py-2 leading-snug">{error}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-cream text-[#cc3322] font-ui font-semibold text-[11px] uppercase tracking-[0.18em] py-3 hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-3 h-3 border border-[#cc3322]/40 border-t-[#cc3322] rounded-full animate-spin" />
              Mustering your route…
            </span>
          ) : (
            "Muster this trip →"
          )}
        </button>
      </form>
    </div>
  );
}
