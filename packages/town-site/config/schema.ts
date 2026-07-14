/**
 * TownConfig — the single per-town contract.
 *
 * Every town site declares exactly one of these (in `src/lib/town.config.ts`).
 * Nothing here is fetched from the database: it is the editorial/brand layer
 * that a town supplies. Historical content (people, events, businesses) always
 * comes from the shared database via each site's own `src/lib/api.ts`.
 *
 * NEVER hardcode hours, admission prices, or phone numbers in a TownConfig.
 * Those belong to official sources and must be linked, not embedded.
 */
export interface TownConfig {
  /** URL-safe town identifier, also the DB slug (e.g. "lexington-ma"). */
  slug: string;
  /** Short display name (e.g. "Lexington"). */
  name: string;
  /** Two-letter state code (e.g. "MA"). */
  state: string;
  /** Full name including state, spelled out (e.g. "Lexington, Massachusetts"). */
  fullName: string;
  /** One-line brand line (e.g. "Where the Revolution Began"). */
  tagline: string;
  /** Public marketing domain (no protocol), e.g. "visitlexingtonma.com". */
  domain: string;
  /** Geographic center used for maps and metadata. */
  coordinates: { lat: number; lng: number };
  /** Town accent token from the HIFE palette (e.g. "--rust", "--green"). */
  accentColor: string;
  /** Accessible alt text for the hero image. */
  heroImageAlt: string;
  /** Name of the signature annual event (e.g. "Patriots' Day"). */
  featuredEventName: string;
  /** 1-12 month the featured event falls in. */
  featuredEventMonth: number;
  /** Person slugs to surface first in the People gallery, in order. */
  featuredPeopleSlugs: string[];
  /** Editorial "Plan It" themes that deep-link into the HIFE Muster planner. */
  musterThemes: Array<{
    title: string;
    description: string;
    theme: string;
    icon: string;
  }>;
  /** How visitors arrive. Primary mode plus alternatives. */
  transitInfo: { primary: string; alternatives: string[] };
  /** Parking guidance (general — never specific prices). */
  parkingInfo: string[];
  /** Accessibility note pointing visitors to official up-to-date detail. */
  accessibilityNotes: string;
  /** Deep link into the HIFE Muster planner pre-scoped to this town. */
  hifeMusterUrl: string;

  /* ---- Optional editorial extras (kept optional for backward-compat) ---- */
  /** Small kicker line above the hero H1 (e.g. "April 19, 1775 · The First Shot"). */
  heroKicker?: string;
}
