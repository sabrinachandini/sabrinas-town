import type { MetadataRoute } from "next";
import { getRankings, type RankedTown } from "@/lib/api";

const BASE = "https://sabrinas-town.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const towns: RankedTown[] = (await getRankings({ limit: 100 })) ?? [];

  const TEACH_STATES = [
    "massachusetts", "virginia", "pennsylvania", "new-york", "new-jersey",
    "connecticut", "rhode-island", "maryland", "delaware", "north-carolina",
    "south-carolina", "georgia", "new-hampshire", "vermont", "maine", "frontier",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/map`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/teach`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/methodology`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/partner`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/changelog`, changeFrequency: "weekly", priority: 0.5 },
    ...TEACH_STATES.map((s) => ({
      url: `${BASE}/teach/${s}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const townPages: MetadataRoute.Sitemap = towns.flatMap((town: RankedTown) => {
    const base = `${BASE}/towns/${town.slug}`;
    return [
      { url: base, changeFrequency: "weekly" as const, priority: 0.9 },
      { url: `${base}/history`, changeFrequency: "weekly" as const, priority: 0.8 },
      { url: `${base}/timeline`, changeFrequency: "weekly" as const, priority: 0.8 },
      { url: `${base}/people`, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${base}/places`, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${base}/stories`, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${base}/events`, changeFrequency: "weekly" as const, priority: 0.7 },
      { url: `${base}/sources`, changeFrequency: "monthly" as const, priority: 0.5 },
    ];
  });

  return [...staticPages, ...townPages];
}
