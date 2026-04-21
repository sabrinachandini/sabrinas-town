import type { Metadata } from "next";
import { getMapData } from "@/lib/api";
import { TownNetworkMap } from "@/components/town/TownNetworkMap";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Interactive Map",
  description:
    "Explore the network of 78 American Revolutionary towns — their locations, connections, and significance across the thirteen colonies.",
  openGraph: {
    title: "Interactive Map | History is for Everyone",
    description:
      "78 Revolutionary War towns mapped with their historical connections across the thirteen colonies.",
    url: "https://sabrinas-town.vercel.app/map",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/map" },
};

export default async function MapPage() {
  const data = await getMapData();
  const towns = data?.towns ?? [];
  const links = data?.links ?? [];

  const townsWithCoords = towns.filter((t) => t.lat && t.lng).length;

  return (
    <main className="flex flex-col" style={{ minHeight: "calc(100vh - 64px)" }}>
      {/* Header strip */}
      <div className="bg-[#1a3a72] text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-6">
          <h1 className="font-display text-[28px] sm:text-[36px] leading-none tracking-wide uppercase text-white">
            Town Network
          </h1>
          <p className="font-ui text-[11px] tracking-[0.12em] uppercase text-white/60 pb-0.5">
            {townsWithCoords} towns · {links.length} connections
          </p>
        </div>
      </div>

      {/* Map — fills remaining viewport */}
      <div className="flex-1 relative" style={{ minHeight: "600px" }}>
        <TownNetworkMap towns={towns} links={links} />
      </div>

      {/* Legend */}
      <div className="bg-[#f2e6c8] border-t border-[#14100a]/10 px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#cc3322] border border-white shadow-sm" />
            <span className="font-ui text-[10px] uppercase tracking-widest text-[#14100a]/60">
              Town (size = significance)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-[#1a3a72] opacity-50" />
            <span className="font-ui text-[10px] uppercase tracking-widest text-[#14100a]/60">
              Historical connection
            </span>
          </div>
          <span className="font-ui text-[10px] text-[#14100a]/40 ml-auto">
            Click any marker to explore
          </span>
        </div>
      </div>
    </main>
  );
}
