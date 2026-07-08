export const dynamic = "force-dynamic";

import { getBusinesses } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eat & Shop in Lexington — Local Directory",
  description:
    "Restaurants, cafes, and shops in Lexington, MA — independently owned businesses, HIFE Picks leading. Hours verified.",
};

const CATEGORY_LABELS: Record<string, string> = {
  RESTAURANT:   "Restaurant",
  CAFE_BAKERY:  "Café & Bakery",
  SHOPPING:     "Shopping",
  LODGING:      "Lodging",
  HISTORIC_SITE: "Historic Site",
};

export default async function EatShopPage() {
  const businesses = await getBusinesses();

  const picks = businesses.filter((b) => b.isHifePick);
  const byCategory = businesses.filter((b) => !b.isHifePick).reduce<Record<string, typeof businesses>>((acc, b) => {
    const cat = CATEGORY_LABELS[b.category] ?? b.category;
    (acc[cat] ??= []).push(b);
    return acc;
  }, {});

  const categories = Object.keys(byCategory).sort();

  return (
    <div className="bg-cream">
      {/* Header */}
      <div className="section-border bg-navy text-cream">
        <div className="max-w-wide mx-auto px-5 pt-12 pb-10">
          <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
            {businesses.length} businesses in Lexington
          </div>
          <h1 className="font-condensed text-[clamp(3rem,8vw,6rem)] uppercase leading-none text-cream mb-4">
            Eat &amp; Shop
          </h1>
          <p className="font-ui text-base text-cream/70 max-w-xl leading-relaxed">
            Independently owned restaurants, cafes, and shops within walking distance
            of Battle Green. HIFE Picks are editor-selected; we don&apos;t accept payment for placement.
          </p>
        </div>
      </div>

      <div className="max-w-wide mx-auto px-5 py-12">
        {/* HIFE Picks */}
        {picks.length > 0 ? (
          <section aria-label="HIFE Picks" className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-gold-ink font-medium">
                ★ HIFE Picks
              </div>
              <div className="h-px flex-1 bg-gold/30" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {picks.map((b) => (
                <article
                  key={b.id}
                  className="border-2 border-gold/40 bg-paper p-6"
                  aria-label={b.name}
                >
                  <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold-ink mb-2">
                    ★ HIFE Pick · {CATEGORY_LABELS[b.category] ?? b.category}
                  </div>
                  <h2 className="font-heading text-xl text-ink mb-2">{b.name}</h2>
                  {b.blurb && (
                    <p className="font-ui text-sm text-slate leading-relaxed mb-3">{b.blurb}</p>
                  )}
                  <div className="space-y-1 font-ui text-xs text-slate/80">
                    {b.address && <div>{b.address}</div>}
                    {b.hours && (
                      <div className="text-slate">
                        <span className="font-medium">Hours:</span> {b.hours}
                      </div>
                    )}
                    {b.phone && <div>{b.phone}</div>}
                  </div>
                  {b.website && (
                    <a
                      href={b.website}
                      className="inline-block mt-3 font-ui text-xs text-crimson-ink hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        ) : (
          <div className="mb-12 p-8 border border-[#ddd8ce] bg-paper text-center">
            <div className="font-condensed text-5xl text-gold/20 mb-3" aria-hidden="true">★</div>
            <div className="font-heading text-lg text-ink mb-2">HIFE Picks coming soon</div>
            <p className="font-ui text-sm text-slate max-w-md mx-auto leading-relaxed">
              We&apos;re curating our Lexington Picks — editor-selected businesses that connect
              to the town&apos;s history. No payment accepted; selection is editorial.
            </p>
          </div>
        )}

        {/* All other businesses by category */}
        {categories.length > 0 && (
          <div className="space-y-10">
            {categories.map((cat) => (
              <section key={cat} aria-label={cat}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-slate font-medium">
                    {cat}
                  </div>
                  <div className="h-px flex-1 bg-[#ddd8ce]" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {byCategory[cat].map((b) => (
                    <article
                      key={b.id}
                      className="p-4 border border-[#ddd8ce] hover:border-slate transition-colors bg-cream"
                      aria-label={b.name}
                    >
                      <h3 className="font-ui font-medium text-sm text-ink">{b.name}</h3>
                      {b.address && (
                        <div className="font-ui text-xs text-slate mt-0.5">{b.address}</div>
                      )}
                      {b.hours && (
                        <div className="font-ui text-xs text-slate mt-1">
                          <span className="font-medium">Hours:</span> {b.hours}
                        </div>
                      )}
                      {b.website && (
                        <a
                          href={b.website}
                          className="inline-block mt-2 font-ui text-xs text-crimson-ink hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Website ↗
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {businesses.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-ui text-sm text-slate">
              Lexington business directory is being compiled — check back soon.
            </p>
          </div>
        )}

        {/* Hours disclaimer */}
        <div className="mt-12 p-5 border border-[#ddd8ce] bg-paper">
          <p className="font-ui text-xs text-slate leading-relaxed">
            <span className="font-medium text-ink">Hours notice:</span> Business hours change. Verify with
            each business before visiting, especially on holidays and Patriots&apos; Day weekend. If you find
            incorrect hours, email{" "}
            <a href="mailto:info@visitlexingtonma.com" className="text-crimson-ink hover:underline">
              info@visitlexingtonma.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
