const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface TownGeo {
  lat: number;
  lng: number;
}

export interface TownEvent {
  id: string;
  name: string;
  startDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  peopleCount: number;
  themesCount: number;
}

export interface TownStory {
  id: string;
  title: string;
  storyType: "HISTORICAL_VOICE" | "MODERN_VOICE";
  verificationStatus: "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED";
  subjectPersonName: string | null;
  narratorName: string | null;
  narratorRole: string | null;
  excerpt: string;
  tags: string[];
}

export interface LinkedTown {
  townId: string;
  townName: string;
  townSlug: string;
  linkType: string;
  reason: string;
  weight: number;
}

export interface TownTheme {
  id: string;
  name: string;
  relevanceNote: string | null;
}

export interface TownRoute {
  id: string;
  name: string;
  stopOrder: number;
  totalStops: number;
}

export interface ScoreBreakdown {
  historical: { score: number; subfactors: Record<string, unknown> };
  preservation: { score: number; subfactors: Record<string, unknown> };
  accessibility: { score: number; subfactors: Record<string, unknown> };
  interpretation: { score: number; subfactors: Record<string, unknown> };
  interconnection: { score: number; subfactors: Record<string, unknown> };
  stories: { score: number; subfactors: Record<string, unknown> };
  sources: { score: number; subfactors: Record<string, unknown> };
  hints?: Array<{
    category: string;
    direction: string;
    suggestion: string;
    potentialImpact: number;
  }>;
}

export interface Town {
  id: string;
  name: string;
  state: string;
  country: string;
  slug: string;
  geo: TownGeo | null;
  heroSummary40: string;
  execSummary150: string;
  whyMatters: string;
  tourismInfo: Record<string, unknown> | null;
  compositeScore: number;
  scoreTier: string;
  scoreBreakdown: ScoreBreakdown | null;
  lastUpdatedAt: string;
  events: TownEvent[];
  stories: TownStory[];
  linkedTowns: LinkedTown[];
  themes: TownTheme[];
  routes: TownRoute[];
  recentChanges: Array<{
    id: string;
    createdAt: string;
    summary: string;
    publicNotes: string | null;
  }>;
}

export interface RankedTown {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
  execSummary150: string;
  compositeScore: number;
  scoreTier: string;
  rank: number;
  previousRank: number | null;
  rankChange: number | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  meta?: {
    timestamp: string;
    [key: string]: unknown;
  };
}

// Compare types
export interface TownSummary {
  id: string;
  name: string;
  state: string;
  slug: string;
  heroSummary40: string;
  execSummary150: string;
  compositeScore: number;
  scoreTier: string;
}

export interface SharedEvent {
  id: string;
  name: string;
  startDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  peopleCount: number;
  themesCount: number;
}

export interface SharedPerson {
  id: string;
  name: string;
  roles: string[];
  connectionA: string;
  connectionB: string;
}

export interface SharedTheme {
  id: string;
  name: string;
  relevanceA: string | null;
  relevanceB: string | null;
}

export interface SharedRoute {
  id: string;
  name: string;
  stopOrderA: number;
  stopOrderB: number;
}

export interface ItineraryStop {
  order: number;
  townId: string;
  townName: string;
  suggestedDuration: string;
  highlights: string[];
}

export interface CompareResponse {
  townA: TownSummary;
  townB: TownSummary;
  comparison: {
    sharedEvents: SharedEvent[];
    sharedPeople: SharedPerson[];
    sharedThemes: SharedTheme[];
    sharedRoutes: SharedRoute[];
    directLink: LinkedTown | null;
  };
  suggestedItinerary: {
    totalMiles: number | null;
    stops: ItineraryStop[];
    notes: string;
  };
}

export async function getTown(slug: string): Promise<Town | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch town: ${res.status}`);
    }

    const json: ApiResponse<Town> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching town:", error);
    return null;
  }
}

export async function getRankings(options?: {
  limit?: number;
  state?: string;
}): Promise<RankedTown[]> {
  try {
    const params = new URLSearchParams();
    if (options?.limit) params.set("limit", options.limit.toString());
    if (options?.state) params.set("state", options.state);

    const url = `${API_URL}/rankings${params.toString() ? `?${params}` : ""}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch rankings: ${res.status}`);
    }

    const json: ApiResponse<{ towns: RankedTown[] }> = await res.json();
    return json.data.towns;
  } catch (error) {
    console.error("Error fetching rankings:", error);
    return [];
  }
}

export async function getTeacherModule(slug: string) {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/teacher`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch teacher module: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching teacher module:", error);
    return null;
  }
}

export async function compareTowns(
  slugA: string,
  slugB: string
): Promise<CompareResponse | null> {
  try {
    const res = await fetch(
      `${API_URL}/compare?townA=${encodeURIComponent(slugA)}&townB=${encodeURIComponent(slugB)}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to compare towns: ${res.status}`);
    }

    const json: ApiResponse<CompareResponse> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error comparing towns:", error);
    return null;
  }
}
