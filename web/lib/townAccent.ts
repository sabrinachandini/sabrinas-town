/**
 * Deterministic hero color for each town, derived from the town's slug.
 * Same slug always produces the same color. No config file needed.
 */

const MANUAL_OVERRIDES: Record<string, TownAccent> = {
  // Massachusetts
  "lexington-ma":      "rust",
  "concord-ma":        "blue",
  "boston-ma":         "ink",
  "cambridge-ma":      "blue",
  "salem-ma":          "rust",
  "marblehead-ma":     "blue",
  "worcester-ma":      "rust",
  // New Jersey
  "trenton-nj":        "yellow",
  "princeton-nj":      "yellow",
  "morristown-nj":     "rust",
  // Pennsylvania
  "philadelphia-pa":   "red",
  "valley-forge-pa":   "blue",
  "germantown-pa":     "rust",
  // Virginia
  "yorktown-va":       "green",
  "williamsburg-va":   "green",
  // New York
  "saratoga-ny":       "green",
  "albany-ny":         "blue",
  // South Carolina
  "charleston-sc":     "rust",
  // North Carolina
  "guilford-courthouse-nc": "green",
};

export type TownAccent = "blue" | "green" | "yellow" | "rust" | "ink" | "red";

export function getTownAccent(slug: string): TownAccent {
  if (MANUAL_OVERRIDES[slug]) return MANUAL_OVERRIDES[slug];
  const hash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const options: TownAccent[] = ["blue", "green", "yellow", "rust"];
  return options[hash % options.length];
}

export const ACCENT_HEX: Record<TownAccent, string> = {
  blue:   "#1a3a72",
  green:  "#2a5c45",
  yellow: "#e8b84b",
  rust:   "#b5431a",
  ink:    "#14100a",
  red:    "#cc3322",
};

export const ACCENT_TEXT: Record<TownAccent, string> = {
  blue:   "#f2e6c8",
  green:  "#f2e6c8",
  yellow: "#14100a",
  rust:   "#f2e6c8",
  ink:    "#f2e6c8",
  red:    "#f2e6c8",
};

export const ACCENT_HIGHLIGHT: Record<TownAccent, string> = {
  blue:   "#e8b84b",
  green:  "#e8b84b",
  yellow: "#cc3322",
  rust:   "#e8b84b",
  ink:    "#e8b84b",
  red:    "#e8b84b",
};
