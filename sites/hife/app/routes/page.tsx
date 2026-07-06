import { getAllRoutes } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Historical Routes | History is for Everyone",
  description: "Follow the paths of the American Revolution — from midnight rides to siege lines. Self-guided routes connecting the towns that shaped independence.",
};

export default async function RoutesPage() {
  const routes = await getAllRoutes();

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-blue border-b-4 border-crimson py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 bottom-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(80px,16vw,220px)" }}>
          R
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <Link href="/" className="no-underline hover:text-cream/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cream/55">Routes</span>
          </nav>
          <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#4A6A9B] mb-3">Self-Guided</p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,7vw,88px)" }}>
            Historical Routes
          </h1>
          <p className="font-editorial text-cream/70 text-[18px] mt-5 max-w-xl leading-relaxed">
            Follow the paths of the Revolution — from midnight rides to siege lines. Each route connects multiple towns through the shared story of American independence.
          </p>
        </div>
      </div>

      {/* Routes list */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        {routes.length === 0 ? (
          <p className="font-editorial text-ink/40 text-[18px]">No routes found.</p>
        ) : (
          <ol className="space-y-0">
            {routes.map((route, i) => (
              <li key={route.id} className="border-b border-ink/10 last:border-b-0">
                <Link
                  href={`/routes/${route.id}`}
                  className="no-underline flex gap-6 py-8 group hover:bg-ink/[0.02] transition-colors -mx-4 px-4"
                >
                  <div className="flex-shrink-0 w-10 pt-1 text-right">
                    <span className="font-display text-[32px] leading-none text-ink/15 group-hover:text-ink/25 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-ink text-[28px] leading-snug tracking-[-0.01em] group-hover:text-crimson transition-colors">
                      {route.name}
                    </h2>
                    <p className="font-editorial text-ink/60 text-[17px] mt-2 leading-relaxed line-clamp-2">
                      {route.description}
                    </p>
                    <div className="flex gap-4 mt-3">
                      <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-ink/30">
                        {route.stopCount} {route.stopCount === 1 ? "stop" : "stops"}
                      </span>
                      {route.totalMiles && (
                        <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-ink/30">
                          {route.totalMiles} miles
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center pt-1">
                    <span className="font-ui text-[11px] uppercase tracking-[0.15em] text-crimson/0 group-hover:text-crimson transition-colors">
                      Explore →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
