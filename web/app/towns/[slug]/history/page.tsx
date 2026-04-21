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
        <div className="border-b-[3px] border-ink pb-3 mb-6">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            Why {town.name} Matters
          </p>
        </div>
        {town.whyMatters ? (
          <Prose>
            {town.whyMatters.split("\n\n").map((p, i) => (
              <p key={i} className="font-editorial">{p}</p>
            ))}
          </Prose>
        ) : (
          <p className="font-editorial text-ink/60">
            The historical narrative for {town.name} is being researched and written.
          </p>
        )}
      </div>

      {(town.imageUrl || true) && (
        <ImageWithCaption
          src={town.imageUrl ?? "/images/paul-revere-boston-massacre.jpg"}
          alt={town.imageUrl ? `Historical image of ${town.name}` : "Paul Revere's engraving of the Boston Massacre, 1770"}
          caption={town.imageCredit ?? "Paul Revere, 'The Bloody Massacre Perpetrated in King Street Boston on March 5th 1770' — hand-colored engraving, 1770. Library of Congress. Public domain."}
        />
      )}

      {town.themes.length > 0 && (
        <div className="mt-10">
          <div className="border-b-[3px] border-ink pb-3 mb-0">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Themes
            </p>
          </div>
          <div className="space-y-0">
            {town.themes.map((theme) => (
              <div
                key={theme.id}
                className="py-4 border-b border-ink/8 last:border-b-0"
              >
                <p className="font-editorial text-[18px] text-ink">
                  {theme.name}
                </p>
                {theme.relevanceNote && (
                  <p className="font-ui text-[13px] text-ink/50 mt-1">
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
          <div className="border-b-[3px] border-ink pb-3 mb-0">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Historical Routes
            </p>
          </div>
          <div className="space-y-0">
            {town.routes.map((route) => (
              <div
                key={route.id}
                className="py-4 border-b border-ink/8 last:border-b-0"
              >
                <p className="font-editorial text-[18px] text-ink">
                  {route.name}
                </p>
                <p className="font-ui text-[13px] text-ink/50 mt-1">
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
