"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Map, MapMarker, MarkerContent, MarkerTooltip, MapRoute, MapControls } from "@/components/ui/map";
import type { MapTown, MapLink } from "@/lib/api";

const TIER_COLORS: Record<string, string> = {
  flagship: "#e8b84b",
  gateway:  "#cc3322",
  standard: "#1a3a72",
  emerging: "#5a7a5a",
};

function markerSize(score: number): number {
  return Math.round(7 + (score / 100) * 13); // 7–20px
}

interface TownNetworkMapProps {
  towns: MapTown[];
  links: MapLink[];
}

export function TownNetworkMap({ towns, links }: TownNetworkMapProps) {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeState, setActiveState] = useState<string | null>(null);

  const bySlug = useMemo(
    () => Object.fromEntries(towns.map((t) => [t.slug, t])),
    [towns]
  );

  const selectedTown = useMemo(
    () => (selectedSlug ? bySlug[selectedSlug] ?? null : null),
    [bySlug, selectedSlug]
  );

  const presentStates = useMemo(
    () => [...new Set(towns.map((t) => t.state))].sort(),
    [towns]
  );

  const visibleTowns = useMemo(
    () => (activeState ? towns.filter((t) => t.state === activeState) : towns),
    [towns, activeState]
  );

  const visibleSlugs = useMemo(
    () => new Set(visibleTowns.map((t) => t.slug)),
    [visibleTowns]
  );

  // Slugs directly connected to selected town
  const connectedToSelected = useMemo(() => {
    if (!selectedSlug) return new Set<string>();
    return new Set(
      links
        .filter((l) => l.fromSlug === selectedSlug || l.toSlug === selectedSlug)
        .map((l) => (l.fromSlug === selectedSlug ? l.toSlug : l.fromSlug))
    );
  }, [links, selectedSlug]);

  // Link keys that touch the selected town
  const selectedLinkKeys = useMemo(() => {
    if (!selectedSlug) return new Set<string>();
    return new Set(
      links
        .filter((l) => l.fromSlug === selectedSlug || l.toSlug === selectedSlug)
        .map((l) => [l.fromSlug, l.toSlug].sort().join("--"))
    );
  }, [links, selectedSlug]);

  const validLinks = useMemo(() => {
    const seen = new Set<string>();
    return links.filter((l) => {
      const from = bySlug[l.fromSlug];
      const to = bySlug[l.toSlug];
      if (!from?.lat || !from?.lng || !to?.lat || !to?.lng) return false;
      if (!visibleSlugs.has(l.fromSlug) || !visibleSlugs.has(l.toSlug)) return false;
      const key = [l.fromSlug, l.toSlug].sort().join("--");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [links, bySlug, visibleSlugs]);

  // Connected towns list for sidebar
  const connectedTowns = useMemo(() => {
    if (!selectedTown) return [];
    return links
      .filter((l) => l.fromSlug === selectedTown.slug || l.toSlug === selectedTown.slug)
      .map((l) => bySlug[l.fromSlug === selectedTown.slug ? l.toSlug : l.fromSlug])
      .filter((t): t is MapTown => !!t && visibleSlugs.has(t.slug))
      .slice(0, 5);
  }, [links, selectedTown, bySlug, visibleSlugs]);

  return (
    <div className="relative w-full h-full" style={{ minHeight: 600 }}>

      {/* ── State filter pills ── */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5 max-w-[calc(100%-16px)] sm:max-w-[calc(100%-320px)]">
        <button
          onClick={() => { setActiveState(null); setSelectedSlug(null); }}
          className={`font-ui text-[8px] uppercase tracking-[0.14em] px-2.5 py-1 border transition-colors whitespace-nowrap shadow-sm ${
            !activeState
              ? "bg-[#14100a] text-[#f2e6c8] border-[#14100a]"
              : "bg-white/90 text-[#14100a]/55 border-[#14100a]/20 hover:border-[#14100a]/50"
          }`}
        >
          All States
        </button>
        {presentStates.map((s) => (
          <button
            key={s}
            onClick={() => { setActiveState(s === activeState ? null : s); setSelectedSlug(null); }}
            className={`font-ui text-[8px] uppercase tracking-[0.14em] px-2.5 py-1 border transition-colors whitespace-nowrap shadow-sm ${
              activeState === s
                ? "bg-[#cc3322] text-white border-[#cc3322]"
                : "bg-white/90 text-[#14100a]/55 border-[#14100a]/20 hover:border-[#14100a]/50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* ── Map ── */}
      <Map
        theme="light"
        viewport={{ center: [-76, 41.5], zoom: 5.5 }}
        className="w-full h-full"
      >
        <MapControls showZoom showFullscreen position="bottom-right" />

        {/* Connection lines */}
        {validLinks.map((link) => {
          const from = bySlug[link.fromSlug]!;
          const to = bySlug[link.toSlug]!;
          const key = [link.fromSlug, link.toSlug].sort().join("--");
          const isHighlighted = selectedLinkKeys.has(key);
          return (
            <MapRoute
              key={key}
              id={`link-${key}`}
              coordinates={[[from.lng!, from.lat!], [to.lng!, to.lat!]]}
              color={isHighlighted ? "#cc3322" : "#1a3a72"}
              opacity={isHighlighted ? 0.75 : selectedSlug ? 0.05 : 0.18}
              width={isHighlighted ? 2.5 : 1}
            />
          );
        })}

        {/* Town markers */}
        {visibleTowns
          .filter((t) => t.lat && t.lng)
          .map((town) => {
            const size = markerSize(town.compositeScore);
            const color = TIER_COLORS[town.scoreTier] ?? "#1a3a72";
            const isSelected = town.slug === selectedSlug;
            const isConnected = connectedToSelected.has(town.slug);
            const opacity = selectedSlug
              ? isSelected ? 1 : isConnected ? 0.85 : 0.25
              : 1;

            return (
              <MapMarker
                key={town.id}
                latitude={town.lat!}
                longitude={town.lng!}
                onClick={() => setSelectedSlug(isSelected ? null : town.slug)}
              >
                <MarkerContent>
                  <div
                    style={{
                      width: isSelected ? size + 4 : size,
                      height: isSelected ? size + 4 : size,
                      backgroundColor: isSelected ? "#cc3322" : color,
                      border: `2px solid ${isSelected ? "#f2e6c8" : "rgba(255,255,255,0.9)"}`,
                      borderRadius: "50%",
                      boxShadow: isSelected
                        ? "0 0 0 3px rgba(204,51,34,0.4), 0 2px 6px rgba(0,0,0,0.3)"
                        : "0 1px 4px rgba(0,0,0,0.25)",
                      opacity,
                      transition: "all 0.15s ease",
                      cursor: "pointer",
                    }}
                  />
                </MarkerContent>
                <MarkerTooltip>
                  <span className="font-ui text-[11px] font-medium">
                    {town.name}, {town.state}
                  </span>
                </MarkerTooltip>
              </MapMarker>
            );
          })}
      </Map>

      {/* ── Sidebar panel ── */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[300px] bg-[#14100a] border-l-2 border-[#cc3322] z-20 flex flex-col overflow-hidden transition-transform duration-200 ease-out`}
        style={{ transform: selectedTown ? "translateX(0)" : "translateX(100%)" }}
      >
        {selectedTown && (
          <>
            {/* Close */}
            <button
              onClick={() => setSelectedSlug(null)}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-[#f2e6c8]/30 hover:text-[#f2e6c8] transition-colors z-10 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {/* Town header */}
            <div className="px-6 pt-8 pb-5 border-b border-[#f2e6c8]/8">
              <span className="font-ui text-[7px] uppercase tracking-[0.22em] text-[#e8b84b] block mb-2">
                {selectedTown.scoreTier} · {selectedTown.state}
              </span>
              <h2 className="font-display text-[#f2e6c8] text-[26px] leading-tight">
                {selectedTown.name}
              </h2>
              {/* Score bar */}
              <div className="mt-4 h-[2px] bg-[#f2e6c8]/8 w-full">
                <div
                  className="h-full bg-[#cc3322] transition-all duration-500"
                  style={{ width: `${selectedTown.compositeScore}%` }}
                />
              </div>
              <p className="font-ui text-[8px] uppercase tracking-[0.1em] text-[#f2e6c8]/20 mt-1.5">
                Historical significance: {selectedTown.compositeScore}/100
              </p>
            </div>

            {/* Summary */}
            {selectedTown.execSummary150 && (
              <div className="px-6 py-5 border-b border-[#f2e6c8]/8">
                <p className="font-editorial italic text-[13px] text-[#f2e6c8]/60 leading-relaxed">
                  &ldquo;{selectedTown.execSummary150}&rdquo;
                </p>
              </div>
            )}

            {/* Connected towns */}
            {connectedTowns.length > 0 && (
              <div className="px-6 py-4 border-b border-[#f2e6c8]/8">
                <p className="font-ui text-[8px] uppercase tracking-[0.16em] text-[#f2e6c8]/22 mb-3">
                  Connected Towns
                </p>
                <div className="space-y-0.5">
                  {connectedTowns.map((t) => (
                    <button
                      key={t.slug}
                      onClick={() => setSelectedSlug(t.slug)}
                      className="flex items-center gap-2 w-full text-left py-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc3322]/40 flex-shrink-0 group-hover:bg-[#cc3322] transition-colors" />
                      <span className="font-ui text-[11px] text-[#f2e6c8]/45 group-hover:text-[#e8b84b] transition-colors">
                        {t.name}, {t.state}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="px-6 py-5 mt-auto">
              <a
                href={`/towns/${selectedTown.slug}`}
                className="no-underline flex items-center justify-between w-full font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8] border border-[#cc3322]/60 px-4 py-3 hover:bg-[#cc3322] hover:border-[#cc3322] transition-colors"
              >
                <span>Explore {selectedTown.name}</span>
                <span aria-hidden>→</span>
              </a>
              <button
                onClick={() => router.push(`/towns/${selectedTown.slug}/timeline`)}
                className="mt-2 flex items-center justify-between w-full font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/40 border border-[#f2e6c8]/10 px-4 py-3 hover:text-[#f2e6c8]/70 hover:border-[#f2e6c8]/25 transition-colors"
              >
                <span>Timeline</span>
                <span aria-hidden>→</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* ── Legend (bottom-left) ── */}
      <div className={`absolute bottom-8 left-3 z-10 bg-white/90 border border-[#14100a]/10 px-4 py-3 shadow-sm ${selectedTown ? "hidden sm:block" : ""}`}>
        <p className="font-ui text-[7px] uppercase tracking-[0.16em] text-[#14100a]/40 mb-2">Significance</p>
        <div className="space-y-1.5">
          {Object.entries(TIER_COLORS).map(([tier, color]) => (
            <div key={tier} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-white shadow-sm flex-shrink-0" style={{ backgroundColor: color }} />
              <span className="font-ui text-[8px] uppercase tracking-[0.08em] text-[#14100a]/50 capitalize">{tier}</span>
            </div>
          ))}
        </div>
        <p className="font-ui text-[7px] text-[#14100a]/30 mt-2.5 pt-2 border-t border-[#14100a]/8">
          Size = historical score
        </p>
      </div>
    </div>
  );
}
