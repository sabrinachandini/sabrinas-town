import { notFound } from "next/navigation";
import { getTown, getTownStoryDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  Prose,
} from "@/components/editorial";
import NextLink from "next/link";

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

      {/* Byline / dateline strip */}
      <div className="mb-8">
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
          <span className="inline-block px-3 py-1 bg-crimson text-white font-condensed text-[0.68rem] tracking-[0.1em] uppercase">
            {story.storyType === "HISTORICAL_VOICE"
              ? "Historical Voice"
              : "Modern Voice"}
          </span>
          <span className="font-condensed text-[0.7rem] text-slate uppercase tracking-wide">
            {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
          </span>
        </div>

        {story.narratorName && (
          <p className="font-heading italic text-[1rem] text-navy mt-4 mb-0">
            Narrated by {story.narratorName}{story.narratorRole ? ` — ${story.narratorRole}` : ""}
          </p>
        )}

        <div className="h-px bg-crimson/20 w-full mt-6 mb-8" aria-hidden="true" />
      </div>

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
              className="px-2.5 py-1 border border-[#DDD8CE] bg-cream font-condensed text-[0.7rem] tracking-[0.06em] uppercase text-navy"
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
              className="px-2.5 py-1 border border-[#DDD8CE] bg-cream font-condensed text-[0.7rem] tracking-[0.06em] uppercase text-navy"
            >
              {theme.name}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border-light flex items-center gap-6">
        {/* More stories link */}
        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-condensed font-bold text-[0.72rem] tracking-[0.08em] uppercase text-crimson hover:text-navy transition-colors"
        >
          More Stories from {town.name} &rarr;
        </NextLink>

        {/* Back nav */}
        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-condensed font-bold text-[0.72rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors"
        >
          &larr; Back to stories
        </NextLink>
      </div>
    </PageShell>
  );
}
