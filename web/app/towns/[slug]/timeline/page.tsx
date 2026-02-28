import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";
import { Reveal } from "@/lib/scroll";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Events | Town Not Found" };
  return {
    title: `Events | ${town.name}, ${town.state} | History is for Everyone`,
    description: `Timeline of Revolutionary War events in ${town.name}, ${town.state}.`,
  };
}

export default async function TimelinePage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) return <ComingSoon slug={slug} section="Timeline" />;

  const sortedEvents = [...town.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${town.events.length} documented events in chronological order.`}
      />

      <EditorialSection id="timeline" title="Timeline">
        {sortedEvents.length > 0 ? (
          <ol className="space-y-0">
            {sortedEvents.map((event, index) => (
              <Reveal
                as="li"
                key={event.id}
                delay={index * 60}
                wrapperClassName="flex gap-6 py-4 border-b border-border-light last:border-b-0"
              >
                <span className="w-2 h-2 rounded-full bg-accent-red shrink-0 mt-2" />
                <span className="w-[100px] shrink-0 text-small text-text-muted font-body tabular-nums">
                  {formatDate(event.startDate)}
                </span>
                <div>
                  <p className="font-body font-medium">
                    <a
                      href={`/towns/${slug}/timeline/${(event as any).slug || event.id}`}
                      className="hover:text-accent-blue transition-colors"
                    >
                      {event.name}
                    </a>
                  </p>
                  {event.summary && (
                    <p className="mt-1 text-small text-text-muted font-body leading-relaxed">
                      {event.summary}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        ) : (
          <p className="text-text-muted font-body">
            Timeline for {town.name} is being researched.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
