const ACCENTS = ["blue", "green", "rust", "ink"] as const;
export type TownAccent = (typeof ACCENTS)[number];

/** Deterministic slug → accent color. No DB required. */
export function getTownAccent(slug: string): TownAccent {
  const hash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return ACCENTS[hash % ACCENTS.length];
}
