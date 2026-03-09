import { notFound } from "next/navigation";
import { getTown, getTownStoryDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  Prose,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; storySlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, storySlug } = await params;
  const story = await getTownStoryDetail(slug, storySlug);

  if (!story) {
    return { title: "Story Not Found" };
  }

  return {
    title: `${story.title} | History is for Everyone`,
    description: story.textVersion.slice(0, 160),
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug, storySlug } = await params;

  const [town, story] = await Promise.all([
    getTown(slug),
    getTownStoryDetail(slug, storySlug),
  ]);

  if (!town || !story) {
    notFound();
  }

  return (
    <PageShell>
      <PageHeader
        variant="bold"
        name={story.title}
        state={town.state}
        subtitle={
          story.subjectPersonName
            ? `About ${story.subjectPersonName}`
            : undefined
        }
      />

      <div className="mb-6 flex flex-wrap gap-3">
        <span className="font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-crimson">
          {story.storyType === "HISTORICAL_VOICE"
            ? "Historical voice"
            : "Modern voice"}
        </span>
        <span className="font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-crimson">
          &middot;
        </span>
        <span className="font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-crimson">
          {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
        </span>
      </div>

      {story.narratorName && (
        <p className="mb-8 text-small text-text-muted font-body">
          {story.narratorName}
          {story.narratorRole && ` — ${story.narratorRole}`}
        </p>
      )}

      <Prose>
        {story.textVersion.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {story.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-small font-body border border-[#DDD8CE] bg-cream font-condensed text-[0.7rem] tracking-[0.06em] uppercase text-navy"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {story.themes.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {story.themes.map((theme) => (
            <span
              key={theme.id}
              className="px-2.5 py-1 text-small font-body border border-[#DDD8CE] bg-cream font-condensed text-[0.7rem] tracking-[0.06em] uppercase text-navy"
            >
              {theme.name}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/stories`}
          className="font-condensed font-bold text-[0.72rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors"
        >
          &larr; Back to stories
        </a>
      </div>
    </PageShell>
  );
}
