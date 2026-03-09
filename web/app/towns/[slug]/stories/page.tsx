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
            <div className="border-b-[3px] border-ink pb-3 mb-6">
              <p className="font-display text-[24px] text-ink/30 tracking-[0.15em] uppercase">
                Accounts &amp; Voices
              </p>
            </div>

            <div>
              {town.stories.map((story) => (
                <a
                  key={story.id}
                  href={`/towns/${slug}/stories/${story.id}`}
                  className="block border-[3px] border-ink p-5 mb-3 group hover:bg-[#1a3a72] hover:border-[#1a3a72] transition-colors no-underline"
                >
                  <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-crimson group-hover:text-yellow/70 mb-1 block">
                    {story.storyType === "HISTORICAL_VOICE"
                      ? "Historical Voice"
                      : "Modern Voice"}
                  </span>

                  <p className="font-editorial text-[22px] text-ink group-hover:text-cream transition-colors leading-tight">
                    {story.title}
                  </p>

                  {story.subjectPersonName && (
                    <p className="font-ui text-[0.75rem] text-ink/50 group-hover:text-cream/60 mt-1">
                      {story.subjectPersonName}
                    </p>
                  )}

                  {story.excerpt && (
                    <p className="font-ui text-[13px] text-ink/60 group-hover:text-cream/60 leading-relaxed mt-2">
                      {story.excerpt}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <p className="font-ui text-[0.85rem] text-ink/50">
            Stories from {town.name} are being collected.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
