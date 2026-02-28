import {
  getTown,
  getTownSources,
  getTownPeople,
} from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { Separator } from "@/components/ui/separator";
import {
  ComingSoon,
} from "@/components/town";
import {
  PageShell,
  PageHeader,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Town Not Found" };
  return {
    title: `${town.name}, ${town.state} | History Is For Everyone`,
    description: town.execSummary150,
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, sourcesData, peopleData] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
    getTownPeople(slug),
  ]);

  if (!town) return <ComingSoon slug={slug} />;

  void recordOrgEvent(slug, "TOWN_VIEW");

  const firstParagraph = town.whyMatters.split("\n\n")[0];
  const people = peopleData?.people ?? [];
  const featuredPeople = people.slice(0, 3);
  const featuredPlaces = (town.featuredPlaces ?? []).slice(0, 3);
  const featuredEvents = [...town.events]
    .sort((a, b) => b.significanceWeight - a.significanceWeight)
    .slice(0, 6);
  const featuredStories = town.stories.slice(0, 2);

  const sections = [
    { label: "History", href: `/towns/${slug}/history`, desc: "The full narrative of what happened here and why it mattered." },
    { label: "Timeline", href: `/towns/${slug}/timeline`, desc: `${town.events.length} documented events in chronological order.` },
    { label: "People", href: `/towns/${slug}/people`, desc: "Historical figures connected to this town through documented events." },
    { label: "Places", href: `/towns/${slug}/places`, desc: `${town.placesTotals?.total ?? 0} sites to visit, with hours and planning info.` },
    { label: "Stories", href: `/towns/${slug}/stories`, desc: `${town.stories.length} first-person accounts and interpretive voices.` },
    { label: "Teacher", href: `/towns/${slug}/teacher`, desc: "Lesson plans, primary sources, and classroom materials." },
    { label: "Sources", href: `/towns/${slug}/sources`, desc: `${sourcesData?.totalCount ?? 0} sources organized by credibility tier.` },
  ];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={town.execSummary150}
        lastUpdated={sourcesData?.lastUpdated ?? town.lastUpdatedAt}
      />

      <p className="font-body text-body leading-[1.8] text-text-primary mb-16">
        {firstParagraph}
      </p>

      {(featuredPeople.length > 0 || featuredPlaces.length > 0 || featuredEvents.length > 0 || featuredStories.length > 0) && (
        <div className="mb-16 space-y-10">
          {featuredPeople.length > 0 && (
            <div>
              <p className="text-small text-text-muted font-body uppercase tracking-wide mb-3">People</p>
              <div className="space-y-0">
                {featuredPeople.map((person) => (
                  <a
                    key={person.id}
                    href={`/towns/${slug}/people/${(person as any).slug || person.id}`}
                    className="flex items-center justify-between py-3 border-b border-border-light last:border-b-0 group"
                  >
                    <div>
                      <p className="font-body font-medium group-hover:text-accent-blue transition-colors">{person.name}</p>
                      <p className="text-small text-text-muted font-body">{person.roles.join(", ")}</p>
                    </div>
                    <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {featuredPlaces.length > 0 && (
            <div>
              <p className="text-small text-text-muted font-body uppercase tracking-wide mb-3">Places</p>
              <div className="space-y-0">
                {featuredPlaces.map((place) => (
                  <a
                    key={place.id}
                    href={`/towns/${slug}/places/${(place as any).slug || place.id}`}
                    className="flex items-center justify-between py-3 border-b border-border-light last:border-b-0 group"
                  >
                    <p className="font-body font-medium group-hover:text-accent-blue transition-colors">{place.name}</p>
                    <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {featuredEvents.length > 0 && (
            <div>
              <p className="text-small text-text-muted font-body uppercase tracking-wide mb-3">Key Events</p>
              <div className="space-y-0">
                {featuredEvents.map((event) => (
                  <a
                    key={event.id}
                    href={`/towns/${slug}/timeline/${(event as any).slug || event.id}`}
                    className="flex items-center justify-between py-3 border-b border-border-light last:border-b-0 group"
                  >
                    <div>
                      <p className="font-body font-medium group-hover:text-accent-blue transition-colors">{event.name}</p>
                      <p className="text-small text-text-muted font-body">
                        {event.startDate ? new Date(event.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : ""}
                      </p>
                    </div>
                    <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {featuredStories.length > 0 && (
            <div>
              <p className="text-small text-text-muted font-body uppercase tracking-wide mb-3">Stories</p>
              <div className="space-y-0">
                {featuredStories.map((story) => (
                  <a
                    key={story.id}
                    href={`/towns/${slug}/stories/${story.id}`}
                    className="flex items-center justify-between py-3 border-b border-border-light last:border-b-0 group"
                  >
                    <div>
                      <p className="font-body font-medium group-hover:text-accent-blue transition-colors">{story.title}</p>
                      <p className="text-small text-text-muted font-body">{story.excerpt}</p>
                    </div>
                    <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <nav>
        <ul className="space-y-0">
          {sections.map((section) => (
            <li key={section.label} className="border-b border-border-light last:border-b-0">
              <a href={section.href} className="flex items-center justify-between py-5 group">
                <div>
                  <p className="font-heading text-[1.25rem] tracking-tight group-hover:text-accent-blue transition-colors">
                    {section.label}
                  </p>
                  <p className="mt-1 text-small text-text-muted font-body">{section.desc}</p>
                </div>
                <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Separator className="mt-20 mb-10 bg-border-light" />
      <footer className="space-y-4 text-small text-text-muted font-body">
        <p>
          <a href={`/changelog?town=${slug}`} className="text-accent-blue hover:underline">
            View changes for this town
          </a>
          {" · "}
          <a href={`/partner/inquire?town=${slug}`} className="text-accent-blue hover:underline">
            Inquire about operating this site
          </a>
        </p>
      </footer>
    </PageShell>
  );
}
