import { notFound } from "next/navigation";
import { getTown, getTownStoryDetail, getAllStoryParams, getTownSources } from "@/lib/api";
import type { TownSource } from "@/lib/api";

export async function generateStaticParams() {
  const stories = await getAllStoryParams();
  return stories.map((s) => ({ slug: s.townSlug, storySlug: s.storySlug }));
}
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

  const title = story.title;
  const description = story.textVersion.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/stories/${storySlug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug, storySlug } = await params;

  const [town, story, sourcesResponse] = await Promise.all([
    getTown(slug),
    getTownStoryDetail(slug, storySlug),
    getTownSources(slug),
  ]);

  const townSources: TownSource[] = sourcesResponse?.sources ?? [];

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
          <span className="inline-block px-2.5 py-1 font-ui text-[11px] uppercase tracking-[0.12em] text-cream bg-crimson">
            {story.storyType === "HISTORICAL_VOICE"
              ? "Historical Voice"
              : "Modern Voice"}
          </span>
          <span className="font-ui text-[0.7rem] text-ink/40 uppercase tracking-wide ml-2">
            {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
          </span>
        </div>

        {story.narratorName && (
          <p className="font-editorial italic text-[20px] text-ink mt-4">
            Narrated by {story.narratorName}
            {story.narratorRole ? ` \u2014 ${story.narratorRole}` : ""}
          </p>
        )}

        <div className="h-[3px] bg-crimson/20 w-full mt-6 mb-8" aria-hidden="true" />
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
              className="font-ui text-[11px] tracking-[0.1em] uppercase text-ink/60 border-2 border-ink/20 px-2.5 py-1"
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
              className="font-ui text-[11px] tracking-[0.1em] uppercase text-ink/60 border-2 border-ink/20 px-2.5 py-1"
            >
              {theme.name}
            </span>
          ))}
        </div>
      )}

      {/* Sources section */}
      <section className="bg-[#f2ece0] border-b-4 border-[#14100a] py-12 px-8 md:px-16 mt-16">
        <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] mb-4">
          Sources
        </p>
        <h2 className="font-display text-[28px] text-[#14100a] mb-8">
          Primary &amp; Secondary Sources
        </h2>

        {townSources.length === 0 ? (
          <p className="font-editorial text-[18px] text-[#14100a]/60">
            No sources on record for this town yet.
          </p>
        ) : (
          <ul className="divide-y divide-[#14100a]/10">
            {townSources.map((source) => {
              const row = (
                <div className="py-4">
                  <p className="font-editorial text-[18px] text-[#14100a]">
                    {source.title}
                  </p>
                  <p className="font-ui text-[11px] text-[#14100a]/50 mt-1">
                    {source.publisherOrHolder}
                    {source.type ? ` · ${source.type}` : ""}
                    {source.credibilityTier ? ` · ${source.credibilityTier}` : ""}
                  </p>
                  {source.notes && (
                    <p className="font-ui text-[11px] text-[#14100a]/40 mt-1 italic">
                      {source.notes}
                    </p>
                  )}
                </div>
              );

              return source.url ? (
                <li key={source.id}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline block transition-colors hover:bg-[#14100a]/[0.025]"
                  >
                    {row}
                  </a>
                </li>
              ) : (
                <li key={source.id}>{row}</li>
              );
            })}
          </ul>
        )}
      </section>

      <div className="mt-12 pt-8 border-t border-ink/8 flex items-center gap-6">
        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-ui text-[11px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors"
        >
          &larr; Back to stories
        </NextLink>

        <NextLink
          href={`/towns/${slug}/stories`}
          className="no-underline font-ui text-[11px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors"
        >
          More Stories from {town.name} &rarr;
        </NextLink>
      </div>
    </PageShell>
  );
}
