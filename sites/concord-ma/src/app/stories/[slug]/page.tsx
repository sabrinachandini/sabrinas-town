export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getStory } from "@/lib/api";
import { Container, Heading, Text } from "@hife/ui";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) return { title: "Story Not Found" };
  return { title: `${story.title} — Concord, MA` };
}

const VERIFICATION_LABELS: Record<string, string> = {
  VERIFIED: "Verified",
  ORAL_TRADITION: "Oral tradition",
  ANECDOTAL: "Anecdotal",
  UNVERIFIED: "Unverified",
};

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  return (
    <Container>
      <div className="py-12 max-w-2xl">
        <a href="/stories" className="text-sm font-body text-red hover:underline mb-8 inline-block">
          ← All stories
        </a>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-red font-condensed text-xs tracking-widest uppercase">
            {story.storyType === "HISTORICAL_VOICE" ? "Historical voice" : "Modern voice"}
          </span>
          <span className="text-text-muted text-xs font-body">·</span>
          <span className="text-text-muted text-xs font-body">
            {VERIFICATION_LABELS[story.verificationStatus] ?? story.verificationStatus}
          </span>
        </div>

        <Heading level={1} className="text-4xl md:text-5xl font-condensed uppercase tracking-tight leading-tight">
          {story.title}
        </Heading>

        {(story.narratorName || story.subjectPersonName) && (
          <div className="mt-3 text-sm font-body text-text-muted">
            {story.subjectPersonName && <span>About: <strong>{story.subjectPersonName}</strong></span>}
            {story.narratorName && story.subjectPersonName && <span className="mx-2">·</span>}
            {story.narratorName && <span>Told by: <strong>{story.narratorName}</strong></span>}
          </div>
        )}

        {story.excerpt && (
          <Text className="mt-4 text-lg text-text-muted leading-relaxed italic border-l-2 border-red pl-4">
            {story.excerpt}
          </Text>
        )}

        {story.body && (
          <div className="mt-8 prose prose-sm max-w-none text-text-primary leading-relaxed space-y-4">
            {story.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
