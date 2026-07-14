import type { TownConfig } from "../config/schema";

interface PlanItSectionProps {
  config: TownConfig;
}

/**
 * "Plan It" — renders the town's editorial muster themes as cards that deep-link
 * into the HIFE Muster planner. Contains no town-specific database content; it
 * is driven entirely by config.musterThemes and config.hifeMusterUrl.
 * Meant to be placed inside a <Container>.
 */
export function PlanItSection({ config }: PlanItSectionProps) {
  return (
    <section className="py-14">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-condensed text-2xl uppercase tracking-wide">Plan It</h2>
        <a href={config.hifeMusterUrl} className="font-body text-sm text-red hover:underline">
          Build a muster →
        </a>
      </div>

      {config.musterThemes.length === 0 ? (
        <p className="font-body text-sm text-text-muted">
          Guided itineraries for {config.name} are being written. In the meantime,{" "}
          <a href={config.hifeMusterUrl} className="text-red hover:underline">
            build your own muster
          </a>
          .
        </p>
      ) : (
        <div className="grid sm:grid-cols-3 gap-4">
          {config.musterThemes.map((theme) => (
            <a
              key={theme.theme}
              href={`${config.hifeMusterUrl}&theme=${encodeURIComponent(theme.theme)}`}
              className="p-6 border border-border-light rounded-lg hover:border-red hover:bg-bg-secondary transition-colors group"
            >
              <div className="font-condensed text-xl uppercase tracking-wide group-hover:text-red transition-colors">
                <span aria-hidden="true" className="mr-2">{theme.icon}</span>
                {theme.title}
              </div>
              <p className="font-body text-sm text-text-muted mt-1">{theme.description}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
