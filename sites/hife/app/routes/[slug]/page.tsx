import { notFound } from "next/navigation";
import { getRouteBySlug, getAllRoutes } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);
  if (!route) return { title: "Route Not Found" };
  const title = `${route.name} | History is for Everyone`;
  const description = route.description.slice(0, 160);
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);
  if (!route) notFound();

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-blue border-b-4 border-crimson py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 bottom-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(80px,16vw,220px)" }}>
          {route.stops.length}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <Link href="/" className="no-underline hover:text-cream/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/routes" className="no-underline hover:text-cream/60 transition-colors">Routes</Link>
            <span>/</span>
            <span className="text-cream/55">{route.name}</span>
          </nav>
          <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#4A6A9B] mb-3">
            {route.stops.length} {route.stops.length === 1 ? "Stop" : "Stops"}
            {route.totalMiles ? ` · ${route.totalMiles} Miles` : ""}
          </p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,7vw,88px)" }}>
            {route.name}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">

          {/* Main column */}
          <div>
            {/* Description */}
            <section>
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  About This Route
                </p>
              </div>
              <div className="space-y-5">
                {route.description.split("\n\n").map((para, i) => (
                  <p key={i} className={`font-editorial text-[18px] text-ink leading-[1.75] ${i === 0 ? "drop-cap" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Stops */}
            <section className="mt-16">
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  Stops Along the Way
                </p>
              </div>

              <ol className="space-y-0">
                {route.stops.map((stop, idx) => (
                  <li key={stop.id} className="flex gap-6 py-8 border-b border-ink/10 last:border-b-0 group">
                    {/* Stop number */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-ink flex items-center justify-center">
                        <span className="font-display text-cream text-[18px] leading-none">{stop.stopOrder}</span>
                      </div>
                      {idx < route.stops.length - 1 && (
                        <div className="w-[2px] flex-1 bg-ink/10 mt-1 min-h-[32px]" />
                      )}
                    </div>

                    {/* Stop content */}
                    <div className="flex-1 min-w-0 pt-1">
                      {stop.arrivalTime && (
                        <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-ink/30 mb-1">
                          {stop.arrivalTime}
                        </p>
                      )}
                      <Link
                        href={`/towns/${stop.town.slug}`}
                        className="no-underline font-display text-ink text-[24px] leading-snug tracking-[-0.01em] group-hover:text-crimson transition-colors block"
                      >
                        {stop.town.name}
                        <span className="font-ui text-[11px] text-ink/30 ml-2 tracking-[0.1em] uppercase font-normal align-middle">
                          {stop.town.state}
                        </span>
                      </Link>
                      <p className="font-editorial text-ink/60 text-[17px] mt-2 leading-relaxed">
                        {stop.town.execSummary150}
                      </p>
                      {stop.notes && (
                        <div className="mt-4 bg-blue/5 border-l-4 border-blue p-4">
                          <p className="font-editorial text-[17px] text-ink leading-relaxed">{stop.notes}</p>
                        </div>
                      )}
                      <div className="mt-4">
                        <Link
                          href={`/towns/${stop.town.slug}`}
                          className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-crimson hover:underline"
                        >
                          Explore {stop.town.name} →
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Quick facts */}
            <div className="bg-blue p-5">
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-4">Route Details</p>
              <dl className="space-y-3">
                <div>
                  <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Stops</dt>
                  <dd className="font-display text-cream text-[28px] leading-none mt-0.5">{route.stops.length}</dd>
                </div>
                {route.totalMiles && (
                  <div>
                    <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Total Distance</dt>
                    <dd className="font-display text-cream text-[28px] leading-none mt-0.5">{route.totalMiles} mi</dd>
                  </div>
                )}
                <div>
                  <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Towns</dt>
                  <dd className="mt-1 space-y-1">
                    {route.stops.map((s) => (
                      <div key={s.id}>
                        <Link
                          href={`/towns/${s.town.slug}`}
                          className="no-underline font-editorial text-[17px] text-[#4A6A9B] hover:text-cream transition-colors"
                        >
                          {s.town.name}
                        </Link>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore</p>
              <ul>
                {[
                  { label: "← All Routes", href: "/routes" },
                  { label: "Towns", href: "/towns" },
                  { label: "Plan a Visit", href: "/muster/new" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[19px] text-ink hover:text-crimson transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
