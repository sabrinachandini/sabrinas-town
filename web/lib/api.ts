function getApiUrl(): string {
  // Explicit override (works both server-side and client-side)
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  // On Vercel, prefer the stable production URL over the per-deployment URL.
  // VERCEL_URL is deployment-specific and may be password-protected (preview protection).
  // VERCEL_PROJECT_PRODUCTION_URL is always the canonical production domain.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}/api`;
  // Local development — Fastify runs on port 3000 without /api prefix
  return "http://localhost:3000";
}

const API_URL = getApiUrl();

export interface TownGeo {
  lat: number;
  lng: number;
}

export interface TownEvent {
  id: string;
  slug?: string;
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

export interface TownPlace {
  id: string;
  slug?: string;
  name: string;
  placeType: "BATTLEFIELD" | "HISTORIC_HOUSE" | "MONUMENT" | "MUSEUM" | "CEMETERY" | "CHURCH" | "GOVERNMENT" | "TAVERN" | "LANDMARK" | "TRAIL";
  description: string;
  lat: number | null;
  lng: number | null;
  address: string | null;
  hours: string | null;
  admission: string | null;
  website: string | null;
  phone: string | null;
  accessibilityNotes: string | null;
  parkingNotes: string | null;
  amenities: string[];
  historicalNote: string | null;
  featured: boolean;
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

export interface PlacesTotals {
  total: number;
  featured: number;
  byCategory: Record<string, number>;
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
  // Slimmed places - use getPlaces() for full data
  placesTotals?: PlacesTotals;
  featuredPlaces?: TownPlace[];
  // Deprecated: full places array (for backwards compat)
  places?: TownPlace[];
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

export interface PlacesResponse {
  town: {
    id: string;
    slug: string;
    name: string;
  };
  totals: PlacesTotals;
  featured: TownPlace[];
  placesByCategory: Record<string, TownPlace[]>;
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

export interface TeacherModuleResponse {
  town: { id: string; name: string; state: string; slug: string };
  overview: {
    title: string;
    gradeRange: string;
    estimatedDuration: string;
    summary: string;
  };
  lessonPlan: Record<string, unknown>;
  primarySources: Array<{
    id: string;
    title: string;
    type: string;
    sourceInfo: string;
    url: string | null;
    analysisPrompts: string[];
    credibilityTier: string;
    teacherNarrative?: string;
  }>;
  comparativeAssignment: Record<string, unknown>;
  handouts: Array<{
    title: string;
    type: string;
    description: string;
    content: string;
  }>;
  quiz: {
    title: string;
    instructions: string;
    questions: Array<{
      id: number;
      type: string;
      question: string;
      options?: string[];
      correctAnswer: string;
      explanation: string;
    }>;
  };
  slideOutline: Record<string, unknown>;
  standards: Record<string, unknown>;
  relatedTowns: Array<{
    townId: string;
    townName: string;
    connectionType: string;
    teachingConnection: string;
  }>;
  meta?: {
    contentSource: "curated" | "generated";
  };
}

export async function getTeacherModule(slug: string): Promise<TeacherModuleResponse | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/teacher`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch teacher module: ${res.status}`);
    }

    const json = await res.json();
    // Attach contentSource from meta to the data object for convenience
    if (json.meta?.contentSource && json.data) {
      json.data.meta = { contentSource: json.meta.contentSource };
    }
    return json.data;
  } catch (error) {
    console.error("Error fetching teacher module:", error);
    return null;
  }
}

export async function compareTeacherModules(
  slugA: string,
  slugB: string
): Promise<{
  townA: TeacherModuleResponse;
  townB: TeacherModuleResponse;
  comparison: {
    sharedSourceTypes: string[];
    suggestedAssignment: {
      title: string;
      description: string;
      guideQuestions: string[];
    };
  };
} | null> {
  try {
    const res = await fetch(
      `${API_URL}/compare/teacher?townA=${encodeURIComponent(slugA)}&townB=${encodeURIComponent(slugB)}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to compare teacher modules: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error comparing teacher modules:", error);
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

// People types
export interface TownPerson {
  id: string;
  slug?: string;
  name: string;
  roles: string[];
  bioShort: string;
  bioLong: string | null;
  birthYear: number | null;
  deathYear: number | null;
  verificationStatus: string;
}

export interface TownPeopleResponse {
  town: { id: string; slug: string; name: string };
  people: TownPerson[];
  count: number;
}

// Story detail type (full text, not truncated)
export interface TownStoryDetail {
  id: string;
  title: string;
  storyType: "HISTORICAL_VOICE" | "MODERN_VOICE";
  verificationStatus: "VERIFIED" | "ORAL_TRADITION" | "ANECDOTAL" | "UNVERIFIED";
  subjectPersonName: string | null;
  narratorName: string | null;
  narratorRole: string | null;
  textVersion: string;
  tags: string[];
  themes: Array<{ id: string; name: string }>;
}

export async function getTownPeople(
  slug: string
): Promise<TownPeopleResponse | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/people`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch people: ${res.status}`);
    }

    const json: ApiResponse<TownPeopleResponse> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching people:", error);
    return null;
  }
}

export async function getTownStoryDetail(
  slug: string,
  storyId: string
): Promise<TownStoryDetail | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/stories/${storyId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch story: ${res.status}`);
    }

    const json: ApiResponse<TownStoryDetail> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching story detail:", error);
    return null;
  }
}

// Source types
export interface TownSource {
  id: string;
  type: string;
  title: string;
  publisherOrHolder: string;
  url: string | null;
  credibilityTier: string;
  notes: string | null;
}

export interface TownSourcesResponse {
  town: { id: string; slug: string; name: string };
  totalCount: number;
  sources: TownSource[];
  lastUpdated: string | null;
}

// Changelog types
export interface ChangelogEntry {
  id: string;
  createdAt: string;
  title: string | null;
  summary: string;
  publicNotes: string | null;
  category: string | null;
  town: { id: string; slug: string; name: string } | null;
}

export interface ChangelogResponse {
  entries: ChangelogEntry[];
  total: number;
}

export async function getTownSources(
  slug: string
): Promise<TownSourcesResponse | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/sources`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch sources: ${res.status}`);
    }

    const json: ApiResponse<TownSourcesResponse> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching sources:", error);
    return null;
  }
}

export async function getChangelog(options?: {
  town?: string;
  limit?: number;
  offset?: number;
}): Promise<ChangelogResponse> {
  try {
    const params = new URLSearchParams();
    if (options?.town) params.set("town", options.town);
    if (options?.limit) params.set("limit", options.limit.toString());
    if (options?.offset) params.set("offset", options.offset.toString());

    const url = `${API_URL}/changelog${params.toString() ? `?${params}` : ""}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch changelog: ${res.status}`);
    }

    const json: ApiResponse<ChangelogResponse> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching changelog:", error);
    return { entries: [], total: 0 };
  }
}

// Cluster types
export interface ClusterSummary {
  id: string;
  slug: string;
  name: string;
  state: string;
  theme: string;
  hubTown: { id: string; slug: string; name: string; state: string } | null;
  townCount: number;
}

export interface ClusterTownEntry {
  id: string;
  slug: string;
  name: string;
  state: string;
  heroSummary40: string;
  execSummary150: string;
  role: "HUB" | "CORE" | "SUPPORTING";
  sortOrder: number;
}

export interface ClusterBridgeEntry {
  id: string;
  label: string;
  rationale: string;
  direction: "outgoing" | "incoming";
  cluster: { id: string; slug: string; name: string; state: string; theme: string };
}

export interface ClusterDetail {
  id: string;
  slug: string;
  name: string;
  state: string;
  theme: string;
  summary: string;
  hubTown: {
    id: string;
    slug: string;
    name: string;
    state: string;
    heroSummary40: string;
    execSummary150: string;
    compositeScore: number;
  } | null;
  towns: ClusterTownEntry[];
  bridges: ClusterBridgeEntry[];
}

export async function getClusters(): Promise<ClusterSummary[]> {
  try {
    const res = await fetch(`${API_URL}/clusters`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch clusters: ${res.status}`);
    }

    const json: ApiResponse<ClusterSummary[]> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching clusters:", error);
    return [];
  }
}

export async function getCluster(slug: string): Promise<ClusterDetail | null> {
  try {
    const res = await fetch(`${API_URL}/clusters/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch cluster: ${res.status}`);
    }

    const json: ApiResponse<ClusterDetail> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching cluster:", error);
    return null;
  }
}

export async function getTownClusters(
  slug: string
): Promise<{ cluster: { slug: string; name: string }; role: string }[]> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/clusters`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const json: ApiResponse<{ cluster: { slug: string; name: string }; role: string }[]> = await res.json();
    return json.data;
  } catch {
    return [];
  }
}

// Entity detail types (for Boston detail pages)
export interface TownPersonDetail {
  id: string;
  name: string;
  roles: string[];
  bioShort: string;
  bioLong: string | null;
  birthYear: number | null;
  deathYear: number | null;
  verificationStatus: string;
  events: Array<{
    id: string;
    name: string;
    startDate: string | null;
    datePrecision: string;
    summary: string;
    roleInEvent: string | null;
    themes: Array<{ id: string; name: string }>;
  }>;
  stories: Array<{
    id: string;
    title: string;
    storyType: string;
    verificationStatus: string;
    excerpt: string;
    tags: string[];
  }>;
}

export interface TownPlaceDetail {
  id: string;
  name: string;
  slug: string | null;
  placeType: string;
  description: string;
  lat: number | null;
  lng: number | null;
  address: string | null;
  hours: string | null;
  admission: string | null;
  website: string | null;
  phone: string | null;
  accessibilityNotes: string | null;
  parkingNotes: string | null;
  amenities: string[];
  historicalNote: string | null;
  featured: boolean;
  connectedEvents: Array<{
    id: string;
    name: string;
    slug: string | null;
    startDate: string | null;
    summary: string;
    people: Array<{
      id: string;
      name: string;
      roleInEvent: string | null;
    }>;
  }>;
}

export interface TownEventDetail {
  id: string;
  name: string;
  slug: string | null;
  startDate: string | null;
  endDate: string | null;
  datePrecision: string;
  summary: string;
  significanceWeight: number;
  people: Array<{
    id: string;
    name: string;
    roles: string[];
    bioShort: string;
    roleInEvent: string | null;
  }>;
  themes: Array<{ id: string; name: string }>;
}

export async function getTownPersonDetail(
  slug: string,
  personId: string
): Promise<TownPersonDetail | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/people/${personId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch person: ${res.status}`);
    }

    const json: ApiResponse<TownPersonDetail> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching person detail:", error);
    return null;
  }
}

export async function getTownPlaceDetail(
  slug: string,
  placeSlug: string
): Promise<TownPlaceDetail | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/places/${placeSlug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch place: ${res.status}`);
    }

    const json: ApiResponse<TownPlaceDetail> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching place detail:", error);
    return null;
  }
}

export async function getTownEventDetail(
  slug: string,
  eventSlug: string
): Promise<TownEventDetail | null> {
  try {
    const res = await fetch(`${API_URL}/towns/${slug}/events/${eventSlug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch event: ${res.status}`);
    }

    const json: ApiResponse<TownEventDetail> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching event detail:", error);
    return null;
  }
}

export async function getPlaces(
  slug: string,
  options?: {
    category?: string;
    limit?: number;
    featuredOnly?: boolean;
  }
): Promise<PlacesResponse | null> {
  try {
    const params = new URLSearchParams();
    if (options?.category) params.set("category", options.category);
    if (options?.limit) params.set("limit", options.limit.toString());
    if (options?.featuredOnly) params.set("featuredOnly", "true");

    const url = `${API_URL}/towns/${slug}/places${params.toString() ? `?${params}` : ""}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch places: ${res.status}`);
    }

    const json: ApiResponse<PlacesResponse> = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    return null;
  }
}
