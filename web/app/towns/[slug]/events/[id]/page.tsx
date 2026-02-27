import { notFound } from "next/navigation";
import { getTown, getTownEventDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  EditorialSection,
  Prose,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma", "lexington-ma", "concord-ma", "salem-ma", "worcester-ma", "springfield-ma", "plymouth-ma", "trenton-nj", "princeton-nj", "monmouth-nj", "morristown-nj", "elizabeth-nj", "hackensack-nj"]);

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, id } = await params;
  const event = await getTownEventDetail(slug, id);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.name} | Sabrina's Town`,
    description: event.summary.slice(0, 160),
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug, id } = await params;

  if (!EDITORIAL_SLUGS.has(slug)) {
    notFound();
  }

  const [town, event] = await Promise.all([
    getTown(slug),
    getTownEventDetail(slug, id),
  ]);

  if (!town || !event) {
    notFound();
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <PageShell>
      <PageHeader
        name={event.name}
        state={town.state}
        subtitle={formatDate(event.startDate) ?? undefined}
      />

      <Prose>
        {event.summary.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {event.people.length > 0 && (
        <EditorialSection id="people" title="People Involved">
          <div className="space-y-0">
            {event.people.map((person) => (
              <div
                key={person.id}
                className="py-4 border-b border-border-light last:border-b-0"
              >
                <a
                  href={`/towns/${slug}/people/${person.id}`}
                  className="font-body font-medium hover:text-accent-blue transition-colors"
                >
                  {person.name}
                </a>
                {person.roleInEvent && (
                  <span className="ml-2 text-small text-text-muted font-body">
                    ({person.roleInEvent})
                  </span>
                )}
                <p className="mt-1 text-small text-text-muted font-body">
                  {person.roles.join(", ")}
                </p>
                <p className="mt-1 text-small font-body leading-relaxed">
                  {person.bioShort}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>
      )}

      {event.themes.length > 0 && (
        <EditorialSection id="themes" title="Themes">
          <div className="flex flex-wrap gap-2">
            {event.themes.map((theme) => (
              <span
                key={theme.id}
                className="px-3 py-1.5 text-small font-body border border-border-light rounded"
              >
                {theme.name}
              </span>
            ))}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/events`}
          className="text-small text-accent-blue font-body hover:underline"
        >
          &larr; Back to timeline
        </a>
      </div>
    </PageShell>
  );
}
