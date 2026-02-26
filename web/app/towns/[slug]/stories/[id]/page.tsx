import { notFound } from "next/navigation";
import { getTown, getTownStoryDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  Prose,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma"]);

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, id } = await params;
  const story = await getTownStoryDetail(slug, id);

  if (!story) {
    return { title: "Story Not Found" };
  }

  return {
    title: `${story.title} | Sabrina's Town`,
    description: story.textVersion.slice(0, 160),
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug, id } = await params;

  if (!EDITORIAL_SLUGS.has(slug)) {
    notFound();
  }

  const [town, story] = await Promise.all([
    getTown(slug),
    getTownStoryDetail(slug, id),
  ]);

  if (!town || !story) {
    notFound();
  }

  return (
    <PageShell>
      <PageHeader
        name={story.title}
        state={town.state}
        subtitle={
          story.subjectPersonName
            ? `About ${story.subjectPersonName}`
            : undefined
        }
      />

      <div className="mb-6 flex flex-wrap gap-3 text-small text-text-muted font-body uppercase tracking-wide">
        <span>
          {story.storyType === "HISTORICAL_VOICE"
            ? "Historical voice"
            : "Modern voice"}
        </span>
        <span>&middot;</span>
        <span>{story.verificationStatus.toLowerCase().replace(/_/g, " ")}</span>
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
              className="px-2.5 py-1 text-small font-body border border-border-light rounded"
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
              className="px-2.5 py-1 text-small font-body text-text-muted border border-border-light rounded"
            >
              {theme.name}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/stories`}
          className="text-small text-accent-blue font-body hover:underline"
        >
          &larr; Back to stories
        </a>
      </div>
    </PageShell>
  );
}
