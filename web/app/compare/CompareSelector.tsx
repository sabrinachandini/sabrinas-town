"use client";

import { useState } from "react";
import { RankedTown } from "@/lib/api";
import { Button } from "@/components/ui";

interface CompareSelectorProps {
  towns: RankedTown[];
}

export default function CompareSelector({ towns }: CompareSelectorProps) {
  const [townASlug, setTownASlug] = useState<string>(towns[0]?.slug ?? "");
  const [townBSlug, setTownBSlug] = useState<string>(towns[1]?.slug ?? "");

  const townA = towns.find((t) => t.slug === townASlug) ?? null;
  const townB = towns.find((t) => t.slug === townBSlug) ?? null;

  const bothSelected = townA !== null && townB !== null && townASlug !== townBSlug;

  const selectClass =
    "w-full border-2 border-navy bg-white font-condensed font-bold text-navy text-[0.85rem] tracking-[0.05em] uppercase px-4 py-3 focus:outline-none focus:border-crimson transition-colors";

  return (
    <div>
      {/* Selector row */}
      <section className="bg-cream border-b border-[#DDD8CE] py-8">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson mb-4">
            Choose Two Towns
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[640px]">
            <div>
              <label
                htmlFor="town-a"
                className="block font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase text-slate mb-2"
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
                className="block font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase text-slate mb-2"
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
            <p className="mt-3 font-condensed text-[0.8rem] text-crimson">
              Select two different towns to compare.
            </p>
          )}
        </div>
      </section>

      {/* Comparison panels */}
      {bothSelected && (
        <>
          <section className="bg-navy py-16">
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <div className="grid md:grid-cols-2 gap-px bg-[#1a2a4a]">
                {[townA, townB].map((town) => (
                  <div key={town.id} className="bg-navy p-8">
                    <p className="font-condensed font-bold text-[0.72rem] tracking-[0.1em] uppercase text-crimson mb-3">
                      {town.state}
                    </p>
                    <h2
                      className="font-heading font-black text-white leading-tight mb-3"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {town.name}
                    </h2>
                    <p className="font-serif italic text-fog text-[0.95rem] leading-relaxed mb-4">
                      {town.execSummary150 || town.heroSummary40}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div>
                        <p className="font-heading font-black text-white text-[1.8rem] leading-none">
                          {town.compositeScore}
                        </p>
                        <p className="font-condensed text-[0.65rem] tracking-[0.08em] uppercase text-gold mt-0.5">
                          Composite Score
                        </p>
                      </div>
                      <div>
                        <p className="font-heading font-black text-white text-[1.8rem] leading-none">
                          #{town.rank}
                        </p>
                        <p className="font-condensed text-[0.65rem] tracking-[0.08em] uppercase text-gold mt-0.5">
                          National Rank
                        </p>
                      </div>
                    </div>
                    <Button href={`/towns/${town.slug}`} variant="outline">
                      Explore {town.name} &rarr;
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Score comparison bar */}
          <section className="bg-ivory py-12 border-b border-[#DDD8CE]">
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson mb-6">
                Score Comparison
              </p>
              <div className="space-y-6">
                {[townA, townB].map((town) => {
                  const pct = Math.round((town.compositeScore / 100) * 100);
                  return (
                    <div key={town.id}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="font-heading font-bold text-navy text-[0.9rem]">
                          {town.name}
                        </span>
                        <span className="font-heading font-black text-navy text-[1.1rem]">
                          {town.compositeScore}
                        </span>
                      </div>
                      <div className="h-2 bg-[#DDD8CE] w-full">
                        <div
                          className="h-2 bg-crimson"
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
          <section className="bg-ivory py-16">
            <div className="mx-auto max-w-[1200px] px-6 md:px-10">
              <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson mb-4">
                Shared Connections
              </p>
              <h2 className="font-heading font-bold text-navy text-[1.8rem] md:text-[2.2rem] leading-tight mb-4">
                {townA.name} &amp; {townB.name}
              </h2>
              <p className="font-serif text-charcoal text-[1rem] leading-relaxed max-w-[640px]">
                Explore each town&rsquo;s full timeline, people, and places to discover
                how {townA.name} and {townB.name} are connected through shared events,
                historical figures, and Revolutionary themes. Use the links below to
                dive deeper into each town&rsquo;s complete record.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/towns/${townA.slug}/timeline`} variant="secondary">
                  {townA.name} Timeline
                </Button>
                <Button href={`/towns/${townB.slug}/timeline`} variant="secondary">
                  {townB.name} Timeline
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="bg-crimson py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
          <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-white opacity-70 mb-3">
            Keep Exploring
          </p>
          <h2 className="font-heading font-black text-white text-[2rem] md:text-[2.5rem] leading-tight mb-8">
            Every Town Has a Story
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/rankings" variant="outline">
              See All Rankings
            </Button>
            <Button href="/towns" variant="outline">
              Browse All Towns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
