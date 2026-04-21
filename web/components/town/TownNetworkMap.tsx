"use client";

import { useRouter } from "next/navigation";
import { Map, MapMarker, MarkerContent, MarkerTooltip, MarkerPopup, MapRoute, MapControls } from "@/components/ui/map";
import type { MapTown, MapLink } from "@/lib/api";

interface TownNetworkMapProps {
  towns: MapTown[];
  links: MapLink[];
}


export function TownNetworkMap({ towns, links }: TownNetworkMapProps) {
  const router = useRouter();

  // Build slug→town lookup for route rendering
  const bySlug = Object.fromEntries(towns.map((t) => [t.slug, t]));

  // Only render links where both endpoints have coordinates
  const validLinks = links.filter((l) => {
    const from = bySlug[l.fromSlug];
    const to = bySlug[l.toSlug];
    return from?.lat && from?.lng && to?.lat && to?.lng;
  });

  // Deduplicate bidirectional links
  const seenLinks = new Set<string>();
  const dedupedLinks = validLinks.filter((l) => {
    const key = [l.fromSlug, l.toSlug].sort().join("--");
    if (seenLinks.has(key)) return false;
    seenLinks.add(key);
    return true;
  });

  return (
    <Map
      theme="light"
      viewport={{ center: [-76, 41.5], zoom: 5.5 }}
      className="w-full h-full"
    >
      <MapControls showZoom showFullscreen />

      {/* Town-link lines */}
      {dedupedLinks.map((link) => {
        const from = bySlug[link.fromSlug]!;
        const to = bySlug[link.toSlug]!;
        return (
          <MapRoute
            key={`${link.fromSlug}--${link.toSlug}`}
            id={`link-${link.fromSlug}--${link.toSlug}`}
            coordinates={[
              [from.lng!, from.lat!],
              [to.lng!, to.lat!],
            ]}
            color="#1a3a72"
            opacity={0.25}
            width={1}
          />
        );
      })}

      {/* Town markers */}
      {towns
        .filter((t) => t.lat && t.lng)
        .map((town) => {
          return (
            <MapMarker
              key={town.id}
              latitude={town.lat!}
              longitude={town.lng!}
              onClick={() => router.push(`/towns/${town.slug}`)}
            >
              <MarkerContent>
                <div
                  className="w-4 h-4 rounded-full bg-[#cc3322] border-2 border-white shadow cursor-pointer hover:scale-125 transition-transform"
                />
              </MarkerContent>
              <MarkerTooltip>
                <span className="font-ui text-[11px] font-medium">
                  {town.name}, {town.state}
                </span>
              </MarkerTooltip>
              <MarkerPopup>
                <div className="p-3 max-w-[220px]">
                  <p className="font-editorial text-[16px] font-semibold text-[#14100a] leading-tight mb-1">
                    {town.name}
                  </p>
                  <p className="font-ui text-[10px] uppercase tracking-widest text-[#14100a]/50 mb-2">
                    {town.state}
                  </p>
                  <p className="font-ui text-[11px] text-[#14100a]/70 leading-relaxed mb-3">
                    {town.execSummary150}
                  </p>
                  <a
                    href={`/towns/${town.slug}`}
                    className="font-ui text-[10px] tracking-[0.15em] uppercase text-[#cc3322] font-semibold hover:underline"
                  >
                    Explore →
                  </a>
                </div>
              </MarkerPopup>
            </MapMarker>
          );
        })}
    </Map>
  );
}
