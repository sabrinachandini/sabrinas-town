import { getTown, getRankings } from "@/lib/api";
import { notFound } from "next/navigation";
import NextLink from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Itineraries | Town Not Found" };
  const title = `Itineraries from ${town.name}, ${town.state} | History is for Everyone`;
  const description = `Suggested multi-town itineraries featuring ${town.name}, ${town.state} — connecting Revolutionary sites along historic routes.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/itineraries`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    alternates: { canonical: url },
  };
}

const LINK_TYPE_LABELS: Record<string, string> = {
  SHARED_EVENT:          "Shared Battle or Event",
  SHARED_PERSON:         "Shared Historical Figure",
  SHARED_THEME:          "Shared Theme",
  ROUTE:                 "Historical Route",
  COMPARISON:            "Comparative Pair",
  GEOGRAPHIC_PROXIMITY:  "Nearby",
  OTHER:                 "Connected",
};

const LINK_TYPE_ORDER = [
  "ROUTE", "SHARED_EVENT", "SHARED_PERSON", "SHARED_THEME",
  "GEOGRAPHIC_PROXIMITY", "COMPARISON", "OTHER",
];

export default async function ItinerariesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) notFound();

  const hasRoutes = town.routes.length > 0;
  const hasConnections = town.linkedTowns.length > 0;

  // Group linked towns by type, sorted by priority order
  const byType = town.linkedTowns.reduce((acc, link) => {
    if (!acc[link.linkType]) acc[link.linkType] = [];
    acc[link.linkType].push(link);
    return acc;
  }, {} as Record<string, typeof town.linkedTowns>);

  const groupedTypes = LINK_TYPE_ORDER.filter((t) => byType[t]?.length > 0);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-14 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]" style={{ fontSize: "clamp(140px,26vw,340px)", letterSpacing: "-0.05em" }}>
          Plan
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/40 mb-2">
            {town.name}, {town.state}
          </p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(40px,7vw,88px)" }}>
            Itineraries
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-5" />
          <p className="font-editorial italic font-light text-[17px] text-cream/60 max-w-[520px] leading-[1.65]">
            {town.name} doesn&rsquo;t exist in isolation. These routes connect it to neighboring sites, creating journeys that reveal the Revolution&rsquo;s geographic logic.
          </p>
        </div>
      </div>

      {!hasRoutes && !hasConnections ? (
        /* Empty state */
        <div className="mx-auto max-w-[820px] px-8 md:px-16 py-24 text-center">
          <p className="font-display text-[80px] text-ink/5 leading-none mb-4">→</p>
          <p className="font-editorial text-[22px] text-ink/40 mb-3">Itineraries Coming Soon</p>
          <p className="font-ui text-[15px] text-ink/30 max-w-[480px] mx-auto leading-relaxed">
            Curated routes featuring {town.name} are in development. These will connect multiple Revolutionary sites, following historical routes and thematic journeys across the region.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <NextLink href={`/towns/${slug}/places`} className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-5 py-2.5 hover:border-crimson hover:text-crimson transition-colors">
              Places to Visit →
            </NextLink>
            <NextLink href={`/towns/${slug}/timeline`} className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-5 py-2.5 hover:border-crimson hover:text-crimson transition-colors">
              View Timeline →
            </NextLink>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16 space-y-20">

          {/* Historical Routes */}
          {hasRoutes && (
            <section>
              <div className="border-t-[3px] border-ink pt-6 mb-10">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  Historical Routes
                </p>
                <h2 className="font-display text-ink text-[clamp(28px,4vw,48px)] leading-none tracking-[-0.02em] mt-3">
                  Routes through {town.name}
                </h2>
                <p className="font-editorial italic font-light text-[15px] text-ink/50 mt-3 max-w-[520px]">
                  Documented routes that passed through {town.name} during the Revolutionary era.
                </p>
              </div>

              <div className="space-y-4">
                {town.routes.map((route) => (
                  <div key={route.id} className="bg-[#1a3a72] p-6 flex gap-6 items-center">
                    {/* Stop indicator */}
                    <div className="flex-shrink-0 text-center">
                      <p className="font-display text-[44px] text-cream/15 leading-none">{route.stopOrder}</p>
                      <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/30">of {route.totalStops}</p>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-editorial text-[20px] text-cream leading-snug">{route.name}</p>

                      {/* Stop dots */}
                      <div className="flex items-center gap-1.5 mt-3">
                        {Array.from({ length: route.totalStops }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full border-2 ${
                              i + 1 === route.stopOrder
                                ? "bg-[#4A6A9B] border-[#4A6A9B]"
                                : i + 1 < route.stopOrder
                                  ? "bg-cream/20 border-cream/20"
                                  : "bg-transparent border-cream/20"
                            }`}
                          />
                        ))}
                        <span className="font-ui text-[11px] text-cream/30 ml-2 uppercase tracking-[0.1em]">
                          Stop {route.stopOrder} of {route.totalStops}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Connected towns by type */}
          {hasConnections && groupedTypes.map((type) => {
            const links = byType[type].slice(0, 6);
            const label = LINK_TYPE_LABELS[type] ?? type;

            return (
              <section key={type}>
                <div className="border-t-[3px] border-ink/20 pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-ink/15 before:block">
                    {label}
                  </p>
                  <h2 className="font-display text-ink text-[clamp(22px,3vw,36px)] leading-none tracking-[-0.02em] mt-2">
                    {type === "ROUTE" ? "Along the Same Routes" :
                     type === "SHARED_EVENT" ? "Sites of the Same Battles" :
                     type === "SHARED_PERSON" ? "Connected by the Same People" :
                     type === "SHARED_THEME" ? "Towns with Shared Themes" :
                     type === "GEOGRAPHIC_PROXIMITY" ? "Nearby Towns" :
                     "Worth Combining"}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
                  {links.map((link) => (
                    <NextLink
                      key={link.townId}
                      href={`/towns/${link.townSlug}`}
                      className="no-underline bg-cream group block p-6 hover:bg-[#1a3a72] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-editorial text-[19px] text-ink group-hover:text-cream transition-colors leading-tight">
                          {link.townName}
                        </p>
                        <span className="font-display text-crimson group-hover:text-cream/40 transition-colors text-[18px] flex-shrink-0 mt-0.5">→</span>
                      </div>
                      <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-ink/35 group-hover:text-cream/35 transition-colors mb-3">
                        {link.linkType.replace(/_/g, " ")} · {link.weight}% match
                      </p>
                      {link.reason && (
                        <p className="font-ui text-[12px] text-ink/50 group-hover:text-cream/50 leading-relaxed line-clamp-2 transition-colors">
                          {link.reason}
                        </p>
                      )}
                    </NextLink>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <div className="border-t-2 border-ink/10 pt-10 flex flex-wrap gap-4">
            <NextLink
              href="/map"
              className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-ink border border-ink/20 px-6 py-3 hover:border-crimson hover:text-crimson transition-colors"
            >
              View network map →
            </NextLink>
          </div>
        </div>
      )}
    </div>
  );
}
