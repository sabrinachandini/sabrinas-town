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
      />

      <EditorialSection id="stories" title={`${town.stories.length} Stories`}>
        {town.stories.length > 0 ? (
          <div className="space-y-0">
            {town.stories.map((story) => (
              <div
                key={story.id}
                className="py-5 border-b border-border-light last:border-b-0"
              >
                <p className="font-heading text-[1.25rem] tracking-tight">
                  {story.title}
                </p>
                {story.subjectPersonName && (
                  <p className="mt-1 text-small text-text-muted font-body">
                    {story.subjectPersonName}
                  </p>
                )}
                <p className="mt-2 font-body leading-relaxed">
                  {story.excerpt}
                </p>
                <p className="mt-1 text-small text-text-muted font-body uppercase tracking-wide">
                  {story.storyType === "HISTORICAL_VOICE"
                    ? "Historical voice"
                    : "Modern voice"}
                  {" · "}
                  {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
                </p>
                <a
                  href={`/towns/${slug}/stories/${story.id}`}
                  className="mt-2 inline-block text-small text-accent-blue font-body hover:underline"
                >
                  Read story &rarr;
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Stories from {town.name} are being collected.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
