import type { TownConfig } from "../config/schema";

interface KnowBeforeSectionProps {
  config: TownConfig;
}

/**
 * "Know Before You Go" — transit, parking, and accessibility guidance drawn
 * from the TownConfig. Deliberately carries NO hours, prices, or phone numbers:
 * those change and must be checked against official sources at visit time.
 * Meant to be placed inside a <Container>.
 */
export function KnowBeforeSection({ config }: KnowBeforeSectionProps) {
  const { transitInfo, parkingInfo, accessibilityNotes } = config;

  return (
    <section className="py-14">
      <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">
        Know Before You Go
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-red mb-3">
            Getting Here
          </h3>
          <p className="font-body text-sm text-text-primary">{transitInfo.primary}</p>
          {transitInfo.alternatives.length > 0 && (
            <ul className="mt-3 space-y-1">
              {transitInfo.alternatives.map((alt) => (
                <li key={alt} className="font-body text-sm text-text-muted">
                  {alt}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-red mb-3">
            Parking
          </h3>
          {parkingInfo.length === 0 ? (
            <p className="font-body text-sm text-text-muted">
              Parking details coming soon.
            </p>
          ) : (
            <ul className="space-y-1">
              {parkingInfo.map((p) => (
                <li key={p} className="font-body text-sm text-text-muted">
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-red mb-3">
            Accessibility
          </h3>
          <p className="font-body text-sm text-text-muted">{accessibilityNotes}</p>
        </div>
      </div>

      <p className="font-body text-xs text-text-muted mt-8 border-t border-border-light pt-4">
        Hours, admission, and seasonal schedules change. Always confirm with the
        official site for {config.name} before you travel.
      </p>
    </section>
  );
}
