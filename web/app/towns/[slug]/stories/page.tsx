import { getTown } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Stories | Town Not Found" };
  }

  return {
    title: `Stories | ${town.name}, ${town.state} | History is for Everyone`,
    description: `First-person accounts and interpretive stories from ${town.name}, ${town.state}.`,
  };
}

export default async function StoriesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) return <ComingSoon slug={slug} section="Stories" />;

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`First-person accounts and interpretive stories from ${town.name}.`}
        variant="bold"
      />

      <EditorialSection id="stories" title={`${town.stories.length} Stories`}>
        {town.stories.length > 0 ? (
          <div>
            {/* Section label */}
            <div className="mb-6 pb-3 border-b border-[#0e1428]/10">
              <p className="font-display text-[1.5rem] text-[#0e1428]/30 tracking-[0.15em] uppercase mb-1">
                Accounts &amp; Voices
              </p>
            </div>

            <div>
              {town.stories.map((story) => (
                <a
                  key={story.id}
                  href={`/towns/${slug}/stories/${story.id}`}
                  className="block py-5 border-b border-[#0e1428]/8 last:border-b-0 no-underline group"
                >
                  <span className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[#c8222a]">
                    {story.storyType === "HISTORICAL_VOICE"
                      ? "Historical Voice"
                      : "Modern Voice"}
                  </span>

                  <p className="font-editorial text-[1.375rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors mt-1 leading-tight">
                    {story.title}
                  </p>

                  {story.subjectPersonName && (
                    <p className="font-ui text-[0.75rem] text-[#0e1428]/50 mt-1">
                      {story.subjectPersonName}
                    </p>
                  )}

                  {story.excerpt && (
                    <p className="font-editorial text-[0.95rem] text-[#0e1428]/70 leading-relaxed mt-2">
                      {story.excerpt}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <p className="font-ui text-[0.85rem] text-[#0e1428]/50">
            Stories from {town.name} are being collected.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
