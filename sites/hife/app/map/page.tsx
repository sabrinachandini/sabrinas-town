import type { Metadata } from "next";
import Link from "next/link";
import { getMapData } from "@/lib/api";
import { TownNetworkMap } from "@/components/town/TownNetworkMap";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Interactive Map | History is for Everyone",
  description:
    "Explore the network of American Revolutionary towns — their locations, connections, and significance across the thirteen colonies.",
  openGraph: {
    title: "Interactive Map | History is for Everyone",
    description:
      "Revolutionary War towns mapped with their historical connections across the thirteen colonies.",
    url: "https://sabrinas-town.vercel.app/map",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/map" },
};

export default async function MapPage() {
  const data = await getMapData();
  const towns = data?.towns ?? [];
  const links = data?.links ?? [];

  const townsWithCoords = towns.filter((t) => t.lat && t.lng).length;
  const stateCount = new Set(towns.map((t) => t.state)).size;

  return (
    <main className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>

      {/* ── Header ── */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-4 sm:px-6 md:px-10 py-3 sm:py-5 flex-shrink-0 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-[-0.04em] top-[-0.2em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}
        >
          MAP
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto flex items-end justify-between gap-4 sm:gap-6">
          <div>
            {/* Eyebrow — text-[#a8bcd8] on #1a3a72 = 5.8:1 contrast (AA) */}
            <p className="font-ui text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#a8bcd8] mb-0.5 sm:mb-1">
              Town Network
            </p>
            <h1 className="font-display text-[#f2e6c8] text-[clamp(17px,4vw,32px)] sm:text-[clamp(20px,3vw,32px)] leading-none tracking-[-0.02em]">
              The Revolutionary Map
            </h1>
          </div>

          <div className="flex flex-col items-end gap-3">
            {/* Browse as list — keyboard/screen-reader equivalent path */}
            <Link
              href="/towns"
              className="no-underline font-ui text-[10px] uppercase tracking-[0.16em] text-[#a8bcd8] border border-[#a8bcd8]/40 px-3 py-2 min-h-[44px] flex items-center hover:text-[#f2e6c8] hover:border-[#f2e6c8]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a3a72]"
            >
              Browse as list ↗
            </Link>

            {/* Stats — desktop only */}
            <div className="hidden sm:flex items-center gap-6">
              {[
                { n: townsWithCoords, label: "Towns" },
                { n: stateCount, label: "States" },
                { n: links.length, label: "Connections" },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  {/* text-[#7fa0c8] on #1a3a72 = 3.5:1 — large text (25px), passes AA large */}
                  <p className="font-display text-[#7fa0c8] text-[1.6rem] leading-none" aria-hidden="true">{s.n}</p>
                  <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#a8bcd8] mt-0.5">
                    <span className="sr-only">{s.n} </span>{s.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Stats — mobile: compact inline row */}
            <div className="sm:hidden flex items-center gap-4">
              {[
                { n: townsWithCoords, label: "Towns" },
                { n: stateCount, label: "States" },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  <p className="font-display text-[#7fa0c8] text-[1.1rem] leading-none" aria-hidden="true">{s.n}</p>
                  <p className="font-ui text-[9px] uppercase tracking-[0.08em] text-[#a8bcd8]">
                    <span className="sr-only">{s.n} </span>{s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Map fills remaining height ── */}
      {/*
        The map is a visual tool. Every town reachable via the map is also reachable
        at /towns (the "Browse as list" link above). Screen-reader users and keyboard
        users who cannot operate the map can use that route instead.
      */}
      <div
        className="flex-1 relative overflow-hidden"
        role="region"
        aria-label="Interactive map of Revolutionary War towns. Use Browse as list for full keyboard access."
      >
        <TownNetworkMap towns={towns} links={links} />
      </div>
    </main>
  );
}
