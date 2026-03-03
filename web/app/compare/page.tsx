import { Metadata } from "next";
import { getRankings, compareTowns, RankedTown, CompareResponse } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";
import { CompareSelector } from "./CompareSelector";

export const metadata: Metadata = {
  title: "Compare Towns | History is for Everyone",
  description:
    "Compare any two Revolutionary towns side-by-side: shared events, people, themes, and a suggested itinerary.",
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ townA?: string; townB?: string }>;
}

export default async function ComparePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const townA = params.townA ?? "";
  const townB = params.townB ?? "";

  const [towns, comparison] = await Promise.all([
    getRankings({ limit: 77 }),
    townA && townB ? compareTowns(townA, townB) : Promise.resolve(null),
  ]);

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Compare Towns</Heading>
        <Text className="mt-element max-w-[620px]">
          Select any two Revolutionary towns to see their shared history,
          connected figures, and a suggested combined itinerary.
        </Text>

        <div className="mt-component">
          <CompareSelector towns={towns} initialA={townA} initialB={townB} />
        </div>

        {comparison && townA && townB && (
          <>
            <Divider spacing="section" />
            <CompareResults comparison={comparison} townA={townA} townB={townB} />
          </>
        )}

        {!comparison && townA && townB && (
          <>
            <Divider spacing="section" />
            <Text muted>
              Could not load comparison data. Please try different towns.
            </Text>
          </>
        )}
      </Container>
    </main>
  );
}

function CompareResults({
  comparison,
  townA,
  townB,
}: {
  comparison: CompareResponse;
  townA: string;
  townB: string;
}) {
  const { comparison: cmp, suggestedItinerary } = comparison;

  return (
    <div className="space-y-section">
      {/* Town headers */}
      <div className="grid md:grid-cols-2 gap-component">
        <TownCard town={comparison.townA} />
        <TownCard town={comparison.townB} />
      </div>

      <Divider spacing="default" />

      {/* Shared Events */}
      {cmp.sharedEvents.length > 0 && (
        <section>
          <Heading level={2}>Shared Events</Heading>
          <Text className="mt-element" muted>
            Events that connect both towns.
          </Text>
          <div className="mt-component space-y-2">
            {cmp.sharedEvents.map((ev) => (
              <div key={ev.id} className="p-element bg-bg-secondary rounded-lg">
                <Text className="font-medium">{ev.name}</Text>
                {ev.startDate && (
                  <Text size="small" muted className="mt-tight">
                    {ev.startDate}
                  </Text>
                )}
                <Text size="small" className="mt-tight line-clamp-2">
                  {ev.summary}
                </Text>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Shared People */}
      {cmp.sharedPeople.length > 0 && (
        <section>
          <Heading level={2}>Shared Figures</Heading>
          <Text className="mt-element" muted>
            Historical figures connected to both towns.
          </Text>
          <div className="mt-component grid sm:grid-cols-2 gap-element">
            {cmp.sharedPeople.map((person) => (
              <div key={person.id} className="p-element bg-bg-secondary rounded-lg">
                <Text className="font-medium">{person.name}</Text>
                {person.roles.length > 0 && (
                  <Text size="small" muted className="mt-tight">
                    {person.roles.join(", ")}
                  </Text>
                )}
                <div className="mt-element grid grid-cols-2 gap-2 text-small text-text-muted">
                  <span>{comparison.townA.name}: {person.connectionA}</span>
                  <span>{comparison.townB.name}: {person.connectionB}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Shared Themes */}
      {cmp.sharedThemes.length > 0 && (
        <section>
          <Heading level={2}>Shared Themes</Heading>
          <div className="mt-component flex flex-wrap gap-2">
            {cmp.sharedThemes.map((theme) => (
              <span
                key={theme.id}
                className="px-3 py-1 bg-bg-secondary rounded-full text-small border border-border-light"
              >
                {theme.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Direct Link */}
      {cmp.directLink && (
        <section>
          <Heading level={2}>Direct Connection</Heading>
          <div className="mt-component p-element bg-bg-secondary rounded-lg">
            <Text className="font-medium">{cmp.directLink.linkType.replace(/_/g, " ")}</Text>
            <Text size="small" className="mt-element">{cmp.directLink.reason}</Text>
          </div>
        </section>
      )}

      {/* Suggested Itinerary */}
      {suggestedItinerary?.stops?.length > 0 && (
        <section>
          <Heading level={2}>Suggested Itinerary</Heading>
          {suggestedItinerary.totalMiles && (
            <Text className="mt-element" muted>
              Approximately {suggestedItinerary.totalMiles} miles between stops.
            </Text>
          )}
          <div className="mt-component space-y-element">
            {suggestedItinerary.stops.map((stop) => (
              <div key={stop.order} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center text-small font-medium flex-shrink-0">
                  {stop.order}
                </span>
                <div>
                  <Link href={`/towns/${stop.townId}`}>
                    <Text className="font-medium">{stop.townName}</Text>
                  </Link>
                  <Text size="small" muted className="mt-tight">
                    {stop.suggestedDuration}
                  </Text>
                  {stop.highlights.length > 0 && (
                    <ul className="mt-tight space-y-1">
                      {stop.highlights.map((h, i) => (
                        <li key={i} className="text-small text-text-muted">
                          · {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          {suggestedItinerary.notes && (
            <Text size="small" muted className="mt-element">
              {suggestedItinerary.notes}
            </Text>
          )}
        </section>
      )}

      {/* No connections */}
      {cmp.sharedEvents.length === 0 &&
        cmp.sharedPeople.length === 0 &&
        cmp.sharedThemes.length === 0 && (
          <Text muted>
            These towns share few direct connections, but both played important
            roles in the broader Revolution. Try comparing towns from the same
            state or campaign.
          </Text>
        )}
    </div>
  );
}

function TownCard({
  town,
}: {
  town: { name: string; state: string; slug: string; heroSummary40: string; compositeScore: number; scoreTier: string };
}) {
  return (
    <Link
      href={`/towns/${town.slug}`}
      className="block p-element bg-bg-secondary rounded-lg no-underline hover:bg-border-light transition-colors"
    >
      <Text className="font-medium text-accent-blue">{town.name}</Text>
      <Text size="small" muted className="mt-tight">
        {town.state} · Score {town.compositeScore.toFixed(1)} · {town.scoreTier}
      </Text>
      <Text size="small" className="mt-element line-clamp-2">
        {town.heroSummary40}
      </Text>
    </Link>
  );
}
