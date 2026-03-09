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
          <span className="inline-block px-2.5 py-1 font-ui text-[0.65rem] uppercase tracking-[0.12em] text-white bg-[#c8222a]">
            {story.storyType === "HISTORICAL_VOICE"
              ? "Historical Voice"
              : "Modern Voice"}
          </span>
          <span className="font-ui text-[0.7rem] text-[#0e1428]/40 uppercase tracking-wide ml-2">
            {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
          </span>
        </div>

        {story.narratorName && (
          <p className="font-editorial italic text-[1rem] text-[#0e1428] mt-4">
            Narrated by {story.narratorName}
            {story.narratorRole ? ` \u2014 ${story.narratorRole}` : ""}
          </p>
        )}

        <div className="h-px bg-[#c8222a]/20 w-full mt-6 mb-8" aria-hidden="true" />
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
              className="px-2.5 py-1 border border-[#0e1428]/10 font-ui text-[0.7rem] tracking-[0.06em] uppercase text-[#0e1428]/60"
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
              className="px-2.5 py-1 border border-[#0e1428]/10 font-ui text-[0.7rem] tracking-[0.06em] uppercase text-[#0e1428]/60"
            >
              {theme.name}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-[#0e1428]/8 flex items-center gap-6">
        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
        >
          &larr; Back to stories
        </NextLink>

        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
        >
          More Stories from {town.name} &rarr;
        </NextLink>
      </div>
    </PageShell>
  );
}
