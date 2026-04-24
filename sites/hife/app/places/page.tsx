import { getAllPlaces, PLACE_TYPE_ORDER } from "@/lib/api";
import NextLink from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Historic Places | History is for Everyone",
  description: "Battlefields, historic houses, monuments, museums, and landmarks of the American Revolution — visit where history happened.",
  openGraph: {
    title: "Historic Places | History is for Everyone",
    description: "Battlefields, historic houses, monuments, and landmarks of the American Revolution.",
    url: "https://sabrinas-town.vercel.app/places",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/places" },
};

const PLACE_TYPE_LABELS: Record<string, string> = {
  BATTLEFIELD: "Battlefields",
  HISTORIC_HOUSE: "Historic Houses",
  MONUMENT: "Monuments & Memorials",
  MUSEUM: "Museums",
  CEMETERY: "Cemeteries",
  CHURCH: "Churches & Meeting Houses",
  GOVERNMENT: "Government Buildings",
  TAVERN: "Taverns & Inns",
  LANDMARK: "Landmarks",
  TRAIL: "Trails & Paths",
};

const TYPE_ORDER = [...PLACE_TYPE_ORDER];

export default async function PlacesPage() {
  const places = await getAllPlaces();

  const grouped: Record<string, typeof places> = {};
  for (const type of TYPE_ORDER) grouped[type] = [];
  for (const place of places) {
    if (!grouped[place.placeType]) grouped[place.placeType] = [];
    grouped[place.placeType].push(place);
  }

  const totalFeatured = places.filter((p) => p.featured).length;

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-20 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-0.05em] bottom-[-0.15em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(8rem,18vw,14rem)" }}>
          PLACES
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/" className="no-underline hover:text-cream/60 transition-colors">Home</NextLink>
            <span>/</span>
            <span className="text-cream/55">Places</span>
          </nav>
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#4A6A9B] mb-4">Historic Sites</p>
          <h1 className="font-display text-cream leading-[0.88] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,7vw,88px)" }}>
            Historic Places
          </h1>
          <p className="font-editorial italic text-[18px] text-cream/60 max-w-[560px] leading-[1.65] mt-6">
            {places.length} sites across the Revolution network — battlefields, taverns, historic houses, and the places where decisions were made.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: places.length, label: "Sites" },
          { n: totalFeatured, label: "Featured" },
          { n: TYPE_ORDER.filter((t) => (grouped[t]?.length ?? 0) > 0).length, label: "Categories" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] text-white leading-none">{s.n}</span>
            <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Type navigation ── */}
      <div className="border-b border-[#14100a]/10 bg-cream sticky top-0 z-10 overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex gap-6 py-3">
          {TYPE_ORDER.filter((t) => (grouped[t]?.length ?? 0) > 0).map((type) => (
            <a key={type} href={`#${type}`} className="no-underline font-ui text-[11px] uppercase tracking-[0.12em] text-[#14100a]/40 hover:text-[#cc3322] transition-colors whitespace-nowrap">
              {PLACE_TYPE_LABELS[type]} ({grouped[type].length})
            </a>
          ))}
        </div>
      </div>

      {/* ── Places by type ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-20">
        {TYPE_ORDER.map((type) => {
          const typePlaces = grouped[type] ?? [];
          if (typePlaces.length === 0) return null;
          return (
            <section key={type} id={type}>
              <div className="border-t-[3px] border-[#14100a] pt-6 mb-8 flex items-baseline justify-between">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                  {PLACE_TYPE_LABELS[type] ?? type}
                </p>
                <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#14100a]/30">{typePlaces.length}</span>
              </div>
              <div className="space-y-0">
                {typePlaces.map((place) => (
                  <NextLink
                    key={place.id}
                    href={place.slug ? `/places/${place.slug}` : `/towns/${place.town.slug}/places`}
                    className="no-underline flex items-start gap-6 py-5 border-b border-[#14100a]/8 last:border-b-0 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-display text-[clamp(18px,2.5vw,26px)] text-[#14100a] group-hover:text-[#cc3322] transition-colors leading-tight">
                          {place.name}
                        </p>
                        {place.featured && (
                          <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#4A6A9B] border border-[#4A6A9B]/40 px-1.5 py-0.5">Featured</span>
                        )}
                      </div>
                      <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#1a3a72]/60 mt-1">
                        {place.town.name}, {place.town.state}
                      </p>
                      {place.description && (
                        <p className="font-ui text-[12px] text-[#14100a]/50 leading-relaxed mt-1.5 line-clamp-2">
                          {place.description}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0 hidden md:flex flex-col items-end gap-1">
                      {place.hours && (
                        <span className="font-ui text-[11px] text-[#14100a]/30">{place.hours}</span>
                      )}
                      {place.admission && (
                        <span className="font-ui text-[11px] uppercase tracking-[0.08em] text-[#14100a]/40 border border-[#14100a]/10 px-2 py-0.5">{place.admission}</span>
                      )}
                    </div>
                  </NextLink>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
