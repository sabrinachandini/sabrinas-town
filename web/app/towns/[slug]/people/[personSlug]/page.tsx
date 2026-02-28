import { notFound } from "next/navigation";
import { getTown, getTownPersonDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  EditorialSection,
  Prose,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; personSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, personSlug } = await params;
  const person = await getTownPersonDetail(slug, personSlug);

  if (!person) {
    return { title: "Person Not Found" };
  }

  return {
    title: `${person.name} | History is for Everyone`,
    description: person.bioShort.slice(0, 160),
  };
}

export default async function PersonDetailPage({ params }: PageProps) {
  const { slug, personSlug } = await params;

  const [town, person] = await Promise.all([
    getTown(slug),
    getTownPersonDetail(slug, personSlug),
  ]);

  if (!town || !person) {
    notFound();
  }

  const lifespan = person.birthYear && person.deathYear
    ? `${person.birthYear}–${person.deathYear}`
    : person.birthYear
      ? `b. ${person.birthYear}`
      : null;

  return (
    <PageShell>
      <PageHeader
        name={person.name}
        state={town.state}
        subtitle={[lifespan, ...person.roles].filter(Boolean).join(" · ")}
      />

      <Prose>
        {person.bioLong ? (
          person.bioLong.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{person.bioShort}</p>
        )}
      </Prose>

      {person.events.length > 0 && (
        <EditorialSection id="in-town" title={`In ${town.name}`}>
          <ol className="space-y-0">
            {person.events
              .sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              })
              .map((event) => (
                <li
                  key={event.id}
                  className="flex gap-6 py-4 border-b border-border-light last:border-b-0"
                >
                  <span className="w-[100px] shrink-0 text-small text-text-muted font-body tabular-nums">
                    {event.startDate
                      ? new Date(event.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })
                      : ""}
                  </span>
                  <div>
                    <a
                      href={`/towns/${slug}/timeline/${event.id}`}
                      className="font-body font-medium hover:text-accent-blue transition-colors"
                    >
                      {event.name}
                    </a>
                    {event.roleInEvent && (
                      <span className="ml-2 text-small text-text-muted font-body">
                        ({event.roleInEvent})
                      </span>
                    )}
                    <p className="mt-1 text-small text-text-muted font-body leading-relaxed">
                      {event.summary}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </EditorialSection>
      )}

      {person.stories.length > 0 && (
        <EditorialSection id="stories" title="Stories">
          <div className="space-y-4">
            {person.stories.map((story) => (
              <a
                key={story.id}
                href={`/towns/${slug}/stories/${story.id}`}
                className="block py-4 border-b border-border-light last:border-b-0 group"
              >
                <p className="font-body font-medium group-hover:text-accent-blue transition-colors">
                  {story.title}
                </p>
                <p className="mt-1 text-small text-text-muted font-body">
                  {story.excerpt}
                </p>
              </a>
            ))}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/people`}
          className="text-small text-accent-blue font-body hover:underline"
        >
          &larr; Back to people
        </a>
      </div>
    </PageShell>
  );
}
