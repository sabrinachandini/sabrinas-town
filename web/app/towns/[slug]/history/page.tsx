import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
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
      />

      <EditorialSection id="narrative" title={`Why ${town.name} Matters`}>
        {town.whyMatters ? (
          <Prose>
            {town.whyMatters.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        ) : (
          <p className="text-text-muted font-body">
            The historical narrative for {town.name} is being researched and written.
          </p>
        )}
      </EditorialSection>

      <ImageWithCaption
        alt={`Historical illustration of ${town.name}`}
        caption="Image placeholder — historical imagery will be added as sources are verified."
      />

      {town.themes.length > 0 && (
        <EditorialSection id="themes" title="Themes">
          <div className="grid sm:grid-cols-2 gap-4">
            {town.themes.map((theme) => (
              <div
                key={theme.id}
                className="py-4 px-5 border border-border-light rounded-lg"
              >
                <p className="font-body font-medium">{theme.name}</p>
                {theme.relevanceNote && (
                  <p className="mt-1 text-small text-text-muted font-body">
                    {theme.relevanceNote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </EditorialSection>
      )}

      {town.routes.length > 0 && (
        <EditorialSection id="routes" title="Historical Routes">
          <div className="space-y-0">
            {town.routes.map((route) => (
              <div
                key={route.id}
                className="py-4 border-b border-border-light last:border-b-0"
              >
                <p className="font-body font-medium">{route.name}</p>
                <p className="mt-1 text-small text-text-muted font-body">
                  Stop {route.stopOrder} of {route.totalStops}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>
      )}
    </PageShell>
  );
}
