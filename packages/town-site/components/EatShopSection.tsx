import type { TownConfig } from "../config/schema";

export interface Business {
  id: string;
  name: string;
  category: string;
  description?: string;
  isHifePick?: boolean;
  address?: string;
}

interface EatShopSectionProps {
  config: TownConfig;
  businesses: Business[];
}

/**
 * "Eat & Shop" — local businesses, with HIFE Picks surfaced first and badged.
 * Renders a graceful empty state when no businesses are supplied.
 * Meant to be placed inside a <Container>.
 */
export function EatShopSection({ config, businesses }: EatShopSectionProps) {
  const picks = businesses.filter((b) => b.isHifePick);
  const rest = businesses.filter((b) => !b.isHifePick);
  const ordered = [...picks, ...rest];

  return (
    <section className="py-14">
      <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">Eat &amp; Shop</h2>

      {ordered.length === 0 ? (
        <p className="font-body text-sm text-text-muted">
          Local business listings for {config.name} are coming soon.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ordered.map((biz) => (
            <div
              key={biz.id}
              className="p-5 bg-bg-secondary rounded-lg border border-border-light"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-body font-semibold text-text-primary">{biz.name}</div>
                {biz.isHifePick && (
                  <span className="shrink-0 font-body text-[10px] font-semibold uppercase tracking-widest text-cream bg-ink-deep px-2 py-[3px] rounded">
                    HIFE Pick
                  </span>
                )}
              </div>
              <div className="text-xs font-body text-red uppercase tracking-wide mt-1">
                {biz.category}
              </div>
              {biz.description && (
                <p className="font-body text-sm text-text-muted mt-2 leading-snug">
                  {biz.description}
                </p>
              )}
              {biz.address && (
                <p className="font-body text-xs text-text-muted mt-2">{biz.address}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
