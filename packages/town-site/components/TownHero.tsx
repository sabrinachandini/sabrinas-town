import type { TownConfig } from "../config/schema";

interface TownHeroProps {
  config: TownConfig;
  /** "Why come" intro paragraph (usually town.execSummary150 || town.heroSummary40). */
  intro: string;
  /** Optional live counts rendered as the stat row. Omit to hide the row. */
  stats?: { events: number; people: number; stories: number };
}

/**
 * Navy full-bleed hero. Markup matches the original Lexington hero exactly so
 * refactored sites stay pixel-identical. Uses the shared `red` accent token
 * (not config.accentColor) to preserve the existing town-site look; accentColor
 * is reserved for future per-town theming.
 */
export function TownHero({ config, intro, stats }: TownHeroProps) {
  const stateLabel = config.fullName.includes(",")
    ? config.fullName.split(",").slice(1).join(",").trim()
    : config.state;

  return (
    <div className="bg-navy text-cream">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-14">
        {config.heroKicker && (
          <div className="text-red font-condensed text-xs tracking-[0.25em] uppercase mb-4">
            {config.heroKicker}
          </div>
        )}
        <h1 className="font-condensed text-[clamp(3.5rem,10vw,7rem)] leading-none uppercase tracking-tight">
          {config.name}
        </h1>
        <p className="font-condensed text-xl tracking-[0.15em] uppercase text-cream/50 mt-1 mb-6">
          {stateLabel}
        </p>
        <p className="font-body text-base md:text-lg text-cream/75 max-w-2xl leading-relaxed">
          {intro}
        </p>

        {stats && (
          <div className="flex flex-wrap gap-8 mt-10 border-t border-cream/10 pt-8">
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{stats.events}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">Events</div>
            </div>
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{stats.people}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">People</div>
            </div>
            <div>
              <div className="font-condensed text-4xl text-red leading-none">{stats.stories}</div>
              <div className="font-body text-xs uppercase tracking-widest text-cream/50 mt-1">Stories</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
