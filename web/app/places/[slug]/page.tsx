import { notFound } from "next/navigation";
import { getPlaceBySlug } from "@/lib/api";
import NextLink from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) return { title: "Place Not Found" };
  const title = `${place.name} | History is for Everyone`;
  const description = place.description.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/places/${slug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: url },
  };
}

const PLACE_TYPE_LABELS: Record<string, string> = {
  BATTLEFIELD: "Battlefield",
  HISTORIC_HOUSE: "Historic House",
  MONUMENT: "Monument",
  MUSEUM: "Museum",
  CEMETERY: "Cemetery",
  CHURCH: "Church / Meeting House",
  GOVERNMENT: "Government Building",
  TAVERN: "Tavern / Inn",
  LANDMARK: "Landmark",
  TRAIL: "Trail / Path",
};

export default async function PlacePage({ params }: PageProps) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) notFound();

  const placeTypeLabel = PLACE_TYPE_LABELS[place.placeType] ?? place.placeType;
  const hasVisitorInfo = place.hours || place.admission || place.website || place.phone || place.address;
  const hasPracticalInfo = place.accessibilityNotes || place.parkingNotes || place.amenities.length > 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandmarkOrHistoricalBuilding",
    name: place.name,
    description: place.description.slice(0, 300),
    ...(place.lat && place.lng ? { geo: { "@type": "GeoCoordinates", latitude: place.lat, longitude: place.lng } } : {}),
    ...(place.address ? { address: place.address } : {}),
    ...(place.website ? { url: place.website } : {}),
  };

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd data={jsonLd} />

      {/* ── Hero ── */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 bottom-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(80px,16vw,220px)" }}>
          {placeTypeLabel.charAt(0)}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/places" className="no-underline hover:text-cream/60 transition-colors">Places</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${place.town.slug}`} className="no-underline hover:text-cream/60 transition-colors">{place.town.name}</NextLink>
            <span>/</span>
            <span className="text-cream/55">{place.name}</span>
          </nav>

          <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#4A6A9B] mb-3">{placeTypeLabel}</p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,7vw,88px)" }}>
            {place.name}
          </h1>
          <div className="flex flex-wrap gap-3 mt-5">
            <NextLink href={`/towns/${place.town.slug}`} className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-cream/50 border border-cream/15 px-3 py-1.5 hover:border-cream/40 transition-colors">
              {place.town.name}, {place.town.state}
            </NextLink>
            {place.featured && (
              <span className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#4A6A9B] border border-[#4A6A9B]/30 px-2.5 py-1">Featured Site</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">

          {/* Main column */}
          <div>
            {/* Description */}
            <section>
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  About This Place
                </p>
              </div>
              <div className="space-y-5">
                {place.description.split("\n\n").map((para, i) => (
                  <p key={i} className={`font-editorial text-[18px] text-ink leading-[1.75] ${i === 0 ? "drop-cap" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Historical note */}
            {place.historicalNote && (
              <section className="mt-12">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Revolutionary Significance
                  </p>
                </div>
                <div className="bg-[#1a3a72]/5 border-l-4 border-[#1a3a72] p-6">
                  <div className="space-y-4">
                    {place.historicalNote.split("\n\n").map((para, i) => (
                      <p key={i} className="font-editorial text-[17px] text-ink leading-[1.75]">{para}</p>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Map embed */}
            {place.lat && place.lng && (
              <section className="mt-12">
                <div className="border-t-[3px] border-ink pt-6 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Location
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline block bg-[#1a3a72]/5 border border-[#14100a]/10 p-4 hover:border-[#cc3322] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#cc3322] flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f2e6c8" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-ui text-[11px] text-ink font-semibold">{place.address ?? `${place.lat.toFixed(4)}, ${place.lng.toFixed(4)}`}</p>
                      <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-ink/40 mt-0.5">Open in Google Maps →</p>
                    </div>
                  </div>
                </a>
              </section>
            )}

            {/* Connected events */}
            {place.connectedEvents.length > 0 && (
              <section className="mt-16">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Events at This Location
                  </p>
                </div>
                <ol className="space-y-0">
                  {place.connectedEvents.map((ev) => (
                    <li key={ev.id} className="flex gap-5 py-4 border-b border-ink/8 last:border-b-0 group">
                      <div className="flex-shrink-0 w-14 text-right">
                        {ev.startDate ? (
                          <div className="bg-ink text-cream inline-block px-2 py-1 text-center">
                            <p className="font-display text-[16px] leading-none text-cream">{new Date(ev.startDate).getFullYear()}</p>
                          </div>
                        ) : (
                          <div className="bg-ink/10 inline-block px-2 py-2">
                            <p className="font-ui text-[10px] text-ink/30 uppercase">n.d.</p>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <NextLink
                          href={ev.slug ? `/events/${ev.slug}` : `/towns/${place.town.slug}/timeline`}
                          className="no-underline font-editorial text-[18px] text-ink group-hover:text-crimson transition-colors leading-snug block"
                        >
                          {ev.name}
                        </NextLink>
                        {ev.people.length > 0 && (
                          <p className="font-ui text-[11px] text-ink/40 mt-1">
                            {ev.people.slice(0, 3).map((p) => p.name).join(", ")}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Visitor info */}
            {hasVisitorInfo && (
              <div className="bg-[#1a3a72] p-5">
                <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-4">Visitor Information</p>
                <dl className="space-y-3">
                  {place.address && (
                    <div>
                      <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Address</dt>
                      <dd className="font-editorial text-[14px] text-cream mt-0.5 leading-snug">{place.address}</dd>
                    </div>
                  )}
                  {place.hours && (
                    <div>
                      <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Hours</dt>
                      <dd className="font-editorial text-[14px] text-cream mt-0.5">{place.hours}</dd>
                    </div>
                  )}
                  {place.admission && (
                    <div>
                      <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Admission</dt>
                      <dd className="font-editorial text-[14px] text-cream mt-0.5">{place.admission}</dd>
                    </div>
                  )}
                  {place.phone && (
                    <div>
                      <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Phone</dt>
                      <dd className="mt-0.5">
                        <a href={`tel:${place.phone}`} className="no-underline font-editorial text-[14px] text-[#4A6A9B] hover:text-cream transition-colors">{place.phone}</a>
                      </dd>
                    </div>
                  )}
                  {place.website && (
                    <div>
                      <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Website</dt>
                      <dd className="mt-0.5">
                        <a href={place.website} target="_blank" rel="noopener noreferrer" className="no-underline font-ui text-[10px] text-[#4A6A9B] hover:text-cream transition-colors uppercase tracking-[0.1em]">
                          Visit site →
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {/* Practical notes */}
            {hasPracticalInfo && (
              <div className="border border-ink/10 p-5">
                <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-ink/30 mb-4">Planning Your Visit</p>
                <div className="space-y-3">
                  {place.amenities.length > 0 && (
                    <div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-ink/40 mb-1">Amenities</p>
                      <div className="flex flex-wrap gap-1.5">
                        {place.amenities.map((a) => (
                          <span key={a} className="font-ui text-[10px] uppercase tracking-[0.08em] text-ink/50 border border-ink/10 px-1.5 py-0.5">{a}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {place.accessibilityNotes && (
                    <div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-ink/40 mb-1">Accessibility</p>
                      <p className="font-ui text-[11px] text-ink/60 leading-relaxed">{place.accessibilityNotes}</p>
                    </div>
                  )}
                  {place.parkingNotes && (
                    <div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-ink/40 mb-1">Parking</p>
                      <p className="font-ui text-[11px] text-ink/60 leading-relaxed">{place.parkingNotes}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div>
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore</p>
              <ul>
                {[
                  { label: "← All Places", href: "/places" },
                  { label: place.town.name, href: `/towns/${place.town.slug}` },
                  { label: "Events", href: "/events" },
                ].map((link) => (
                  <li key={link.label}>
                    <NextLink href={link.href} className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      {link.label}
                    </NextLink>
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
