"use client";

import { useState } from "react";
import { RankedTown } from "@/lib/api";

interface CompareSelectorProps {
  towns: RankedTown[];
  initialSlugA?: string;
  initialSlugB?: string;
}

export default function CompareSelector({ towns, initialSlugA, initialSlugB }: CompareSelectorProps) {
  const [townASlug, setTownASlug] = useState<string>(
    initialSlugA && towns.find((t) => t.slug === initialSlugA) ? initialSlugA : (towns[0]?.slug ?? "")
  );
  const [townBSlug, setTownBSlug] = useState<string>(
    initialSlugB && towns.find((t) => t.slug === initialSlugB) ? initialSlugB : (towns[1]?.slug ?? "")
  );

  const townA = towns.find((t) => t.slug === townASlug) ?? null;
  const townB = towns.find((t) => t.slug === townBSlug) ?? null;

  const bothSelected = townA !== null && townB !== null && townASlug !== townBSlug;

  const selectClass =
    "w-full border border-[#0e1428]/20 bg-[#f2ece0] font-ui text-[#0e1428] text-[0.85rem] px-4 py-3 focus:outline-none focus:border-[#c8222a] transition-colors";

  return (
    <div>
      {/* Selector row */}
      <section className="bg-[#f2ece0] border-b border-[#0e1428]/10 py-8 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#c8222a] mb-4">Choose Two Towns</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[640px]">
            <div>
              <label
                htmlFor="town-a"
                className="block font-ui text-[0.7rem] uppercase tracking-[0.12em] text-[#0e1428]/40 mb-2"
              >
                Town A
              </label>
              <select
                id="town-a"
                value={townASlug}
                onChange={(e) => setTownASlug(e.target.value)}
                className={selectClass}
              >
                {towns.map((t) => (
                  <option key={t.id} value={t.slug}>
                    {t.name} — {t.state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="town-b"
                className="block font-ui text-[0.7rem] uppercase tracking-[0.12em] text-[#0e1428]/40 mb-2"
              >
                Town B
              </label>
              <select
                id="town-b"
                value={townBSlug}
                onChange={(e) => setTownBSlug(e.target.value)}
                className={selectClass}
              >
                {towns.map((t) => (
                  <option key={t.id} value={t.slug}>
                    {t.name} — {t.state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {townASlug === townBSlug && (
            <p className="mt-3 font-ui text-[0.8rem] text-[#c8222a]">
              Select two different towns to compare.
            </p>
          )}
        </div>
      </section>

      {/* Comparison panels */}
      {bothSelected && (
        <>
          <section className="bg-[#0a0e1a] py-16 px-8 md:px-16">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid md:grid-cols-2 gap-px bg-white/5">
                {[townA, townB].map((town) => (
                  <div key={town.id} className="bg-[#0a0e1a] p-8">
                    <p className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-[#c8222a] mb-3">
                      {town.state}
                    </p>
                    <h2
                      className="font-display text-white leading-none mb-4"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {town.name}
                    </h2>
                    <p className="font-editorial italic text-white/50 text-[0.95rem] leading-relaxed mb-6">
                      {town.execSummary150 || town.heroSummary40}
                    </p>
                    <div className="flex items-center gap-8 mb-8 pb-6 border-b border-white/10">
                      <div>
                        <p className="font-display text-white text-[2.5rem] leading-none">
                          {town.compositeScore}
                        </p>
                        <p className="font-ui text-[0.65rem] uppercase tracking-[0.1em] text-white/30 mt-1">
                          Composite Score
                        </p>
                      </div>
                      <div>
                        <p className="font-ui text-[0.65rem] uppercase tracking-[0.1em] text-white/30 mt-1 uppercase tracking-[0.1em]">
                          {town.scoreTier}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`/towns/${town.slug}`}
                      className="no-underline inline-block border border-white/30 text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:border-white hover:bg-white/5 transition-colors"
                    >
                      Explore {town.name} &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Score comparison bar */}
          <section className="bg-[#f2ece0] py-12 px-8 md:px-16 border-b border-[#0e1428]/10">
            <div className="mx-auto max-w-[1200px]">
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#c8222a] mb-6">Score Comparison</p>
              <div className="space-y-6">
                {[townA, townB].map((town) => {
                  const pct = Math.round((town.compositeScore / 100) * 100);
                  return (
                    <div key={town.id}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="font-editorial text-[#0e1428] text-[0.95rem]">{town.name}</span>
                        <span className="font-display text-[#0e1428] text-[1.2rem] leading-none">{town.compositeScore}</span>
                      </div>
                      <div className="h-1 bg-[#0e1428]/10 w-full">
                        <div
                          className="h-1 bg-[#c8222a]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Shared Connections */}
          <section className="bg-[#f2ece0] py-16 px-8 md:px-16">
            <div className="mx-auto max-w-[1200px]">
              <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#c8222a] mb-4">Shared Connections</p>
              <h2 className="font-display text-[#0e1428]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                {townA.name} &amp; {townB.name}
              </h2>
              <div className="border-b border-[#0e1428]/10 my-6" />
              <p className="font-editorial text-[#0e1428]/70 text-[1rem] leading-relaxed max-w-[640px]">
                Explore each town&rsquo;s full timeline, people, and places to discover
                how {townA.name} and {townB.name} are connected through shared events,
                historical figures, and Revolutionary themes. Use the links below to
                dive deeper into each town&rsquo;s complete record.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`/towns/${townA.slug}/timeline`}
                  className="no-underline border border-[#0e1428]/20 text-[#0e1428] font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:border-[#c8222a] hover:text-[#c8222a] transition-colors"
                >
                  {townA.name} Timeline
                </a>
                <a
                  href={`/towns/${townB.slug}/timeline`}
                  className="no-underline border border-[#0e1428]/20 text-[#0e1428] font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-6 py-3 hover:border-[#c8222a] hover:text-[#c8222a] transition-colors"
                >
                  {townB.name} Timeline
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Banner */}
      <section className="bg-[#0a0e1a] py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            Every Town Has a <span className="text-[#c8222a]">Story.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/towns"
              className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
            >
              Browse All Towns
            </a>
            <a
              href="/map"
              className="no-underline border border-white/30 text-white/60 font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:border-white hover:text-white transition-colors whitespace-nowrap"
            >
              View Network Map
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
