import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  Prose,
  ImageWithCaption,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "History | Town Not Found" };
  }

  return {
    title: `History | ${town.name}, ${town.state} | History is for Everyone`,
    description: `The Revolutionary War history of ${town.name}, ${town.state}.`,
  };
}

export default async function HistoryPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return <ComingSoon slug={slug} section="History" />;
  }

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`The Revolutionary War history of ${town.name}.`}
        variant="bold"
      />

      {/* Narrative section */}
      <div className="mt-8">
        <div className="border-b border-[#0e1428]/20 pb-3 mb-6">
          <p className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
            Why {town.name} Matters
          </p>
        </div>
        {town.whyMatters ? (
          <Prose>
            {town.whyMatters.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        ) : (
          <p className="font-editorial text-[#0e1428]/60">
            The historical narrative for {town.name} is being researched and written.
          </p>
        )}
      </div>

      <ImageWithCaption
        alt={`Historical illustration of ${town.name}`}
        caption="Image placeholder — historical imagery will be added as sources are verified."
      />

      {town.themes.length > 0 && (
        <div className="mt-10">
          <div className="border-b border-[#0e1428]/20 pb-3 mb-0">
            <p className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
              Themes
            </p>
          </div>
          <div className="space-y-0">
            {town.themes.map((theme) => (
              <div
                key={theme.id}
                className="py-4 border-b border-[#0e1428]/8 last:border-b-0"
              >
                <p className="font-editorial text-[1.1rem] text-[#0e1428]">
                  {theme.name}
                </p>
                {theme.relevanceNote && (
                  <p className="font-ui text-[0.85rem] text-[#0e1428]/50 mt-1">
                    {theme.relevanceNote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {town.routes.length > 0 && (
        <div className="mt-10">
          <div className="border-b border-[#0e1428]/20 pb-3 mb-0">
            <p className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
              Historical Routes
            </p>
          </div>
          <div className="space-y-0">
            {town.routes.map((route) => (
              <div
                key={route.id}
                className="py-4 border-b border-[#0e1428]/8 last:border-b-0"
              >
                <p className="font-editorial text-[1.1rem] text-[#0e1428]">
                  {route.name}
                </p>
                <p className="font-ui text-[0.85rem] text-[#0e1428]/50 mt-1">
                  Stop {route.stopOrder} of {route.totalStops}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
