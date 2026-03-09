import { notFound } from "next/navigation";
import { getTown, getTownEventDetail } from "@/lib/api";
import { PageShell, PageHeader, Prose } from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; eventSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, eventSlug } = await params;
  const event = await getTownEventDetail(slug, eventSlug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.name} | History is for Everyone`,
    description: event.summary.slice(0, 160),
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug, eventSlug } = await params;

  const [town, event] = await Promise.all([
    getTown(slug),
    getTownEventDetail(slug, eventSlug),
  ]);

  if (!town || !event) {
    notFound();
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedDate = formatDate(event.startDate);

  return (
    <PageShell>
      <PageHeader
        variant="bold"
        name={event.name}
        state={town.state}
        subtitle={formattedDate ?? undefined}
      />

      {/* Metadata strip */}
      {(formattedDate || event.datePrecision) && (
        <div className="flex flex-wrap gap-8 mt-4 mb-2">
          {formattedDate && (
            <div>
              <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#0e1428]/40 block">
                Date
              </span>
              <span className="font-editorial text-[1rem] text-[#0e1428]">
                {formattedDate}
              </span>
            </div>
          )}
          {event.datePrecision && event.datePrecision !== "EXACT" && (
            <div>
              <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#0e1428]/40 block">
                Precision
              </span>
              <span className="font-editorial text-[1rem] text-[#0e1428] capitalize">
                {event.datePrecision.toLowerCase()}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Red accent rule */}
      <div className="w-12 h-[3px] bg-[#c8222a] my-6" />

      <Prose>
        {event.summary.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {event.people.length > 0 && (
        <div className="mt-10">
          <p className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
            People Involved
          </p>
          <div className="border-b border-[#0e1428]/10 mb-6 mt-2" />
          <div className="space-y-0">
            {event.people.map((person) => (
              <div
                key={person.id}
                className="py-4 border-b border-[#0e1428]/8 last:border-b-0"
              >
                <a
                  href={`/towns/${slug}/people/${(person as any).slug ?? person.id}`}
                  className="no-underline"
                >
                  <span className="font-editorial text-[1rem] text-[#0e1428] hover:text-[#c8222a] transition-colors">
                    {person.name}
                  </span>
                  {person.roleInEvent && (
                    <span className="ml-2 font-ui text-[0.7rem] uppercase text-[#0e1428]/40">
                      ({person.roleInEvent})
                    </span>
                  )}
                </a>
                <p className="mt-1 font-editorial text-[0.875rem] text-[#0e1428]/60 leading-relaxed">
                  {person.bioShort}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {event.themes.length > 0 && (
        <div className="mt-10">
          <p className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
            Themes
          </p>
          <div className="border-b border-[#0e1428]/10 mb-6 mt-2" />
          <div className="flex flex-wrap gap-2">
            {event.themes.map((theme) => (
              <span
                key={theme.id}
                className="font-ui text-[0.7rem] tracking-[0.06em] uppercase text-[#0e1428]/60 border border-[#0e1428]/10 px-2.5 py-1"
              >
                {theme.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-[#0e1428]/10">
        <a
          href={`/towns/${slug}/timeline`}
          className="font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#0e1428]/50 hover:text-[#c8222a] transition-colors no-underline"
        >
          &larr; Back to timeline
        </a>
      </div>
    </PageShell>
  );
}
