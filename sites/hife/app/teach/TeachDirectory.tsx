"use client";

/**
 * TeachDirectory.tsx — Client component for filterable town grid.
 * Receives pre-fetched data from the server component (teach/page.tsx).
 * Handles grade band + confidence level filtering without a server round-trip.
 */

import { useState, useMemo } from "react";

// State abbreviation → display name (for card labels)
const STATE_NAMES: Record<string, string> = {
  MA: "Massachusetts", NJ: "New Jersey", VA: "Virginia", NY: "New York",
  PA: "Pennsylvania", SC: "South Carolina", CT: "Connecticut", NC: "North Carolina",
  RI: "Rhode Island", MD: "Maryland", NH: "New Hampshire", GA: "Georgia",
  VT: "Vermont", DE: "Delaware", ME: "Maine", IL: "Illinois", IN: "Indiana",
  OH: "Ohio", WV: "West Virginia",
};

export interface TeachTownCard {
  slug: string;
  name: string;
  state: string; // 2-letter code
  gradeRange: string;
  estimatedDuration: string;
  summary: string;
  sourceCount: number;
  /** Dominant credibility tier of primary sources in this module */
  confidenceLevel: "TIER1" | "TIER2" | "TIER3" | "TODO" | "NONE";
  lessonCount: number;
  inquiryQuestion?: string;
}

interface TeachDirectoryProps {
  towns: TeachTownCard[];
}

const GRADE_BANDS = [
  { value: "all", label: "All Grades" },
  { value: "6-8", label: "Grades 6–8" },
  { value: "9-12", label: "Grades 9–12" },
  { value: "5-12", label: "Grades 5–12 (adaptable)" },
];

const CONFIDENCE_OPTIONS = [
  { value: "all", label: "All Sources" },
  { value: "TIER1", label: "✓ Verified (Tier 1)" },
  { value: "TIER2", label: "◎ Secondary (Tier 2)" },
  { value: "TIER3", label: "△ Reference (Tier 3)" },
];

function confidenceLabel(tier: TeachTownCard["confidenceLevel"]): {
  icon: string;
  text: string;
  color: string;
} {
  switch (tier) {
    case "TIER1":
      return { icon: "✓", text: "Verified", color: "text-[#2a5c45]" };
    case "TIER2":
      return { icon: "◎", text: "Secondary", color: "text-[#1a3a72]" };
    case "TIER3":
      return { icon: "△", text: "Reference", color: "text-[#b5431a]" };
    case "NONE":
      return { icon: "—", text: "No sources yet", color: "text-[#0e1428]/30" };
    default:
      return { icon: "?", text: "Pending", color: "text-[#0e1428]/30" };
  }
}

export function TeachDirectory({ towns }: TeachDirectoryProps) {
  const [gradeBand, setGradeBand] = useState("all");
  const [confidence, setConfidence] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return towns.filter((t) => {
      if (gradeBand !== "all" && !t.gradeRange.includes(gradeBand.split("-")[0])) {
        return false;
      }
      if (confidence !== "all" && t.confidenceLevel !== confidence) {
        return false;
      }
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          (STATE_NAMES[t.state] ?? t.state).toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          (t.inquiryQuestion?.toLowerCase().includes(q) ?? false)
        );
      }
      return true;
    });
  }, [towns, gradeBand, confidence, query]);

  return (
    <section className="bg-[#f2ece0] py-12 sm:py-16 px-5 sm:px-16">
      {/* Section header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B53A29] flex items-center gap-3 mb-3">
              <span className="w-4 h-[2px] bg-[#cc3322] block flex-shrink-0" aria-hidden />
              Browse All Towns
            </p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.04em] text-[#14100a] m-0"
              style={{ fontSize: "clamp(28px,4vw,56px)" }}
            >
              {filtered.length} Module{filtered.length !== 1 ? "s" : ""}
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <label className="sr-only" htmlFor="teach-search">
              Search towns
            </label>
            <input
              id="teach-search"
              type="search"
              placeholder="Search towns…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="font-ui text-[12px] text-[#0e1428] bg-white border border-[#0e1428]/20 px-3 py-2 w-[160px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72] placeholder:text-[#0e1428]/30"
            />

            {/* Grade band */}
            <label className="sr-only" htmlFor="grade-filter">
              Filter by grade band
            </label>
            <select
              id="grade-filter"
              value={gradeBand}
              onChange={(e) => setGradeBand(e.target.value)}
              className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#0e1428] bg-white border border-[#0e1428]/20 px-3 py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72]"
            >
              {GRADE_BANDS.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>

            {/* Confidence */}
            <label className="sr-only" htmlFor="confidence-filter">
              Filter by source confidence
            </label>
            <select
              id="confidence-filter"
              value={confidence}
              onChange={(e) => setConfidence(e.target.value)}
              className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#0e1428] bg-white border border-[#0e1428]/20 px-3 py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72]"
            >
              {CONFIDENCE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        {(gradeBand !== "all" || confidence !== "all" || query.trim()) && (
          <p className="font-ui text-[11px] text-[#0e1428]/40 mb-5" aria-live="polite">
            Showing {filtered.length} of {towns.length} town{towns.length !== 1 ? "s" : ""}
            {gradeBand !== "all" ? ` · Grades ${gradeBand}` : ""}
            {confidence !== "all"
              ? ` · ${CONFIDENCE_OPTIONS.find((o) => o.value === confidence)?.label}`
              : ""}
          </p>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-editorial italic text-[20px] text-[#0e1428]/40 mb-4">
              No modules match your filters.
            </p>
            <button
              onClick={() => {
                setGradeBand("all");
                setConfidence("all");
                setQuery("");
              }}
              className="font-ui text-[11px] uppercase tracking-[0.18em] text-[#0e1428]/50 border border-[#0e1428]/15 px-5 py-2.5 hover:border-[#0e1428]/30 transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((town) => {
              const conf = confidenceLabel(town.confidenceLevel);
              return (
                <a
                  key={town.slug}
                  href={`/towns/${town.slug}/teacher`}
                  className="no-underline group bg-white border border-[#0e1428]/8 p-5 flex flex-col hover:border-[#0e1428]/20 hover:shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2"
                >
                  {/* Town + state */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-display text-[22px] text-[#0e1428] leading-none group-hover:text-[#1a3a72] transition-colors">
                        {town.name}
                      </p>
                      <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#0e1428]/40 mt-0.5">
                        {STATE_NAMES[town.state] ?? town.state}
                      </p>
                    </div>
                    {/* Grade badge */}
                    <span className="font-ui text-[9px] font-semibold tracking-[0.12em] uppercase bg-[#0e1428]/5 border border-[#0e1428]/10 text-[#0e1428]/50 px-2 py-1 flex-shrink-0">
                      Gr. {town.gradeRange}
                    </span>
                  </div>

                  {/* Inquiry question */}
                  {town.inquiryQuestion && (
                    <p className="font-editorial italic text-[15px] text-[#0e1428]/60 leading-[1.55] mb-3 flex-1">
                      {town.inquiryQuestion.length > 120
                        ? town.inquiryQuestion.slice(0, 117) + "…"
                        : town.inquiryQuestion}
                    </p>
                  )}

                  {/* Stats row */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#0e1428]/6">
                    <div className="flex items-center gap-3">
                      <span className="font-ui text-[10px] text-[#0e1428]/40">
                        {town.sourceCount} source{town.sourceCount !== 1 ? "s" : ""}
                      </span>
                      <span className={`font-ui text-[10px] font-semibold ${conf.color}`}>
                        {conf.icon} {conf.text}
                      </span>
                    </div>
                    <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#B53A29] group-hover:text-[#cc3322] transition-colors">
                      View →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
