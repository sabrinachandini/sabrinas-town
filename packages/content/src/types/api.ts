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
  slug: string | null;
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
  imageUrl: string | null;
  imageCredit: string | null;
  events: TownEvent[];
  stories: TownStory[];
  placesTotals?: PlacesTotals;
  featuredPlaces?: TownPlace[];
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
  imageUrl?: string | null;
}

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
