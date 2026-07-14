/**
 * useTownData — intentionally a stub.
 *
 * Town sites are server-rendered. All historical data (town, people, events,
 * stories, businesses) is fetched on the server in each site's own
 * `src/lib/api.ts`, which enforces tenant isolation via the hardcoded slug in
 * `src/lib/withTown.ts`. There is no client-side data fetching in the template,
 * so this hook is a placeholder to reserve the surface if a future interactive
 * feature (e.g. a client-side filter) needs it.
 *
 * Do NOT put Prisma or database access here — this module can run in the browser.
 */
import type { TownConfig } from "../config/schema";

export interface TownDataResult {
  config: TownConfig;
}

/** Returns the static town config passed in. No network access. */
export function useTownData(config: TownConfig): TownDataResult {
  return { config };
}
