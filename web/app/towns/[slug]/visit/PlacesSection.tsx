"use client";

import { useState } from "react";
import { TownPlace, PlacesTotals } from "@/lib/api";
import { Container, Heading, Text } from "@/components/ui";

interface PlacesSectionProps {
  townName: string;
  totals: PlacesTotals;
  featured: TownPlace[];
  placesByCategory: Record<string, TownPlace[]>;
}

// Category groupings for filter chips
const CATEGORY_GROUPS: Record<string, { label: string; types: string[] }> = {
  all: { label: "All", types: [] },
  battlefields: { label: "Battlefields & Sites", types: ["BATTLEFIELD", "LANDMARK"] },
  museums: { label: "Museums", types: ["MUSEUM"] },
  houses: { label: "Historic Houses", types: ["HISTORIC_HOUSE", "TAVERN"] },
  monuments: { label: "Monuments", types: ["MONUMENT", "CEMETERY"] },
  trails: { label: "Trails", types: ["TRAIL"] },
  other: { label: "Churches & Government", types: ["CHURCH", "GOVERNMENT"] },
};

type CategoryKey = "all" | "battlefields" | "museums" | "houses" | "monuments" | "trails" | "other";

const PLACE_TYPE_LABELS: Record<string, string> = {
  BATTLEFIELD: "Battlefield",
  HISTORIC_HOUSE: "Historic House",
  MONUMENT: "Monument",
  MUSEUM: "Museum",
  CEMETERY: "Cemetery",
  CHURCH: "Church",
  GOVERNMENT: "Government Building",
  TAVERN: "Historic Tavern",
  LANDMARK: "Landmark",
  TRAIL: "Trail",
};

export function PlacesSection({
  townName,
  totals,
  featured,
  placesByCategory,
}: PlacesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");

  // Get categories that have places
  const availableCategories = Object.entries(CATEGORY_GROUPS).filter(
    ([key, group]) => {
      if (key === "all") return true;
      return group.types.some((type) => (totals.byCategory[type] || 0) > 0);
    }
  ) as [CategoryKey, { label: string; types: string[] }][];

  // Get count for a category group
  const getCategoryCount = (key: CategoryKey): number => {
    if (key === "all") return totals.total;
    const group = CATEGORY_GROUPS[key];
    return group.types.reduce((sum, type) => sum + (totals.byCategory[type] || 0), 0);
  };

  // Filter places based on active filter
  const getFilteredCategories = (): [string, TownPlace[]][] => {
    if (activeFilter === "all") {
      return Object.entries(placesByCategory);
    }
    const group = CATEGORY_GROUPS[activeFilter];
    return Object.entries(placesByCategory).filter(([type]) =>
      group.types.includes(type)
    );
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section>
      <Container>
        <Heading level={2}>Places to See</Heading>
        <Text className="mt-element text-text-muted max-w-[620px]">
          {totals.total} historic sites and points of interest in {townName}.
          {totals.featured > 0 && ` ${totals.featured} featured destinations.`}
        </Text>

        {/* Filter Chips */}
        <div className="mt-component flex flex-wrap gap-2">
          {availableCategories.map(([key, group]) => {
            const count = getCategoryCount(key);
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-3 py-1.5 rounded-full text-small transition-colors ${
                  isActive
                    ? "bg-accent-blue text-white"
                    : "bg-bg-secondary text-text-primary hover:bg-border-light"
                }`}
              >
                {group.label}
                <span className={`ml-1.5 ${isActive ? "text-white/80" : "text-text-muted"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Section - only show when "All" filter is active */}
        {activeFilter === "all" && featured.length > 0 && (
          <div className="mt-section">
            <Text size="small" muted className="uppercase tracking-wide mb-element">
              Featured Destinations
            </Text>
            <div className="grid md:grid-cols-2 gap-element">
              {featured.map((place) => (
                <PlaceCard key={place.id} place={place} featured />
              ))}
            </div>
          </div>
        )}

        {/* Category Sections */}
        <div className="mt-section space-y-section">
          {filteredCategories.map(([type, places]) => (
            <div key={type}>
              <div className="flex items-center gap-2 mb-element">
                <Text size="small" muted className="uppercase tracking-wide">
                  {PLACE_TYPE_LABELS[type] || type}
                </Text>
                <span className="text-small text-text-muted">({places.length})</span>
              </div>
              <div className="space-y-element">
                {places
                  .filter((p) => activeFilter !== "all" || !p.featured)
                  .map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="mt-component p-element bg-bg-secondary rounded-lg text-center">
            <Text size="small" muted>
              No places in this category yet.
            </Text>
          </div>
        )}
      </Container>
    </section>
  );
}

function PlaceCard({ place, featured = false }: { place: TownPlace; featured?: boolean }) {
  return (
    <div
      className={`p-element bg-bg-secondary rounded-lg ${
        featured ? "border-l-4 border-accent-blue" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Text className="font-medium">{place.name}</Text>
          <Text size="small" className="text-accent-blue">
            {PLACE_TYPE_LABELS[place.placeType] || place.placeType}
          </Text>
        </div>
        {place.admission && (
          <Text size="small" className="px-2 py-1 bg-bg-primary rounded">
            {place.admission}
          </Text>
        )}
      </div>

      <Text size="small" className="mt-element">
        {place.description}
      </Text>

      {place.historicalNote && (
        <Text size="small" muted className="mt-element italic">
          {place.historicalNote}
        </Text>
      )}

      <div className="mt-element flex flex-wrap gap-element text-small">
        {place.hours && (
          <div>
            <Text size="small" muted>Hours:</Text>
            <Text size="small" className="ml-1">{place.hours}</Text>
          </div>
        )}
        {place.address && (
          <div>
            <Text size="small" muted>Address:</Text>
            <Text size="small" className="ml-1">{place.address}</Text>
          </div>
        )}
      </div>

      <div className="mt-element flex flex-wrap gap-3">
        {place.website && (
          <a
            href={place.website}
            className="text-small text-accent-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website →
          </a>
        )}
        {place.phone && (
          <Text size="small" muted>
            {place.phone}
          </Text>
        )}
      </div>

      {place.amenities && place.amenities.length > 0 && (
        <div className="mt-element flex flex-wrap gap-2">
          {place.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 text-small bg-bg-primary rounded border border-border-light"
            >
              {amenity}
            </span>
          ))}
        </div>
      )}

      {place.accessibilityNotes && (
        <Text size="small" muted className="mt-element">
          Accessibility: {place.accessibilityNotes}
        </Text>
      )}
    </div>
  );
}
