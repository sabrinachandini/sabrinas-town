import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import { PageShell, PageHeader } from "@/components/editorial";

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
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${town.events.length} documented events in chronological order.`}
        variant="bold"
      />

      <div className="mt-8">
        <div className="border-b-[3px] border-ink pb-3 mb-0">
          <p className="font-display text-[24px] text-ink/30 tracking-[0.15em] uppercase">
            Timeline
          </p>
        </div>

        {sortedEvents.length > 0 ? (
          <ol className="space-y-0">
            {sortedEvents.map((event) => (
              <li key={event.id}>
                <a
                  href={`/towns/${slug}/timeline/${(event as any).slug || event.id}`}
                  className="flex gap-6 py-5 border-b border-ink/8 last:border-b-0 group no-underline hover:bg-yellow/10 transition-colors"
                >
                  <span className="font-ui text-[11px] text-ink/40 tabular-nums w-[90px] shrink-0 pt-0.5">
                    {formatDate(event.startDate)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-editorial text-[18px] text-ink group-hover:text-crimson transition-colors">
                      {event.name}
                    </p>
                    {event.summary && (
                      <p className="font-editorial text-[14px] text-ink/60 leading-relaxed mt-1">
                        {event.summary}
                      </p>
                    )}
                  </div>
                  <span className="font-display text-crimson shrink-0 ml-auto self-start pt-0.5">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        ) : (
          <p className="font-editorial text-ink/60 py-6">
            Timeline for {town.name} is being researched.
          </p>
        )}
      </div>
    </PageShell>
  );
}
