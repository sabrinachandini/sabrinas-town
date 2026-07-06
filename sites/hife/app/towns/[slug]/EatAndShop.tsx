"use client";

import type { TownBusiness, TownBusinesses } from "@/lib/api";

const CATEGORY_LABELS: Record<string, string> = {
  RESTAURANT: "Restaurants",
  CAFE_BAKERY: "Cafés & Bakeries",
  SHOPPING: "Shopping",
  LODGING: "Stay",
};

const CATEGORY_ORDER = ["RESTAURANT", "CAFE_BAKERY", "SHOPPING", "LODGING"] as const;

function MapLink({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const query = encodeURIComponent(`${name}`);
  const url = `https://maps.google.com/?q=${lat},${lng}&query=${query}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-ui text-[10px] uppercase tracking-[0.14em] text-crimson/70 hover:text-crimson no-underline border-b border-crimson/30 hover:border-crimson transition-colors"
    >
      Map →
    </a>
  );
}

function BusinessRow({ biz }: { biz: TownBusiness }) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-ink/8 gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          {biz.isHifePick && (
            <span className="font-ui text-[9px] font-bold tracking-[0.2em] uppercase text-[#2a5c45] bg-[#2a5c45]/10 px-1.5 py-0.5 rounded-sm flex-shrink-0">
              ★ HIFE Pick
            </span>
          )}
          <span className="font-editorial text-[17px] sm:text-[19px] text-ink leading-tight">
            {biz.website ? (
              <a href={biz.website} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-crimson transition-colors">
                {biz.name}
              </a>
            ) : (
              biz.name
            )}
          </span>
          {biz.priceRange && (
            <span className="font-ui text-[11px] text-ink/35 flex-shrink-0">{biz.priceRange}</span>
          )}
        </div>
        {biz.address && (
          <p className="font-ui text-[11px] text-ink/45 leading-relaxed">{biz.address}</p>
        )}
        {biz.hours && (
          <p className="font-ui text-[11px] text-ink/45 leading-relaxed">{biz.hours}</p>
        )}
        {biz.isHifePick && biz.blurb && (
          <p className="font-editorial italic text-[14px] text-ink/60 leading-relaxed mt-1.5">
            {biz.blurb}
          </p>
        )}
      </div>
      {biz.lat && biz.lng && (
        <div className="flex-shrink-0 mt-1">
          <MapLink lat={biz.lat} lng={biz.lng} name={biz.name} />
        </div>
      )}
    </div>
  );
}

interface Props {
  slug: string;
  townName: string;
  businesses: TownBusinesses;
}

export function EatAndShop({ townName, businesses }: Props) {
  const hasPicks = businesses.picks.length > 0;
  const hasAny = hasPicks || CATEGORY_ORDER.some((cat) => businesses.byCategory[cat].length > 0);

  if (!hasAny) return null;

  return (
    <section className="bg-[#f8f4e8] border-t border-ink/10 py-12 sm:py-16 px-5 sm:px-8 md:px-16">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mb-8 border-b-[3px] border-ink pb-6">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block mb-2">
            Eat &amp; Shop
          </p>
          <h2 className="font-editorial font-black text-ink leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            In &amp; Around {townName}
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            {/* ★ HIFE Picks */}
            {hasPicks && (
              <div className="mb-10">
                <p className="font-ui text-[11px] font-semibold tracking-[0.24em] uppercase text-[#2a5c45] flex items-center gap-2 mb-1">
                  ★ HIFE Picks
                </p>
                <p className="font-ui text-[12px] text-ink/40 mb-4">
                  Places chosen by HIFE — never paid for, always honest.
                </p>
                {businesses.picks.map((biz) => (
                  <BusinessRow key={biz.id} biz={biz} />
                ))}
              </div>
            )}

            {/* Full directory by category */}
            {CATEGORY_ORDER.map((cat) => {
              const items = businesses.byCategory[cat];
              if (!items.length) return null;
              return (
                <div key={cat} className="mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-ink/40 mb-1">
                    {CATEGORY_LABELS[cat]}
                  </p>
                  {items.map((biz) => (
                    <BusinessRow key={biz.id} biz={biz} />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Sidebar disclaimer */}
          <div className="hidden md:block">
            <div className="border border-ink/10 p-5 bg-white/50">
              <p className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-ink/40 mb-2">
                About this directory
              </p>
              <p className="font-ui text-[12px] text-ink/55 leading-relaxed">
                Directory data is refreshed regularly. ★ HIFE picks are chosen by our team and are never paid placements.
              </p>
              <p className="font-ui text-[12px] text-ink/45 leading-relaxed mt-3">
                Hours and details change — always call ahead or check the business website before visiting.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile disclaimer */}
        <p className="md:hidden font-ui text-[11px] text-ink/40 leading-relaxed mt-6 border-t border-ink/10 pt-4">
          Directory data is refreshed regularly. ★ picks are chosen by HIFE and never paid for. Hours change — call ahead.
        </p>
      </div>
    </section>
  );
}
