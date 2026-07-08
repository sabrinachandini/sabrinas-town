export const dynamic = "force-dynamic";

import { getStories } from "@/lib/api";
import { Container, Heading, Text } from "@hife/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voices from 1775 — Lexington, MA",
  description: "First-person accounts and historical voices from Lexington's Revolutionary War history.",
};

const VERIFICATION_LABELS: Record<string, string> = {
  VERIFIED: "Verified",
  ORAL_TRADITION: "Oral tradition",
  ANECDOTAL: "Anecdotal",
  UNVERIFIED: "Unverified",
};

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Voices from 1775</Heading>
        <Text className="mt-2 text-text-muted">
          {stories.length} {stories.length === 1 ? "account" : "accounts"} from Lexington&apos;s Revolutionary War record.
        </Text>
      </div>

      <div className="pb-16 space-y-0">
        {stories.map((story) => (
          <a
            key={story.id}
            href={`/stories/${story.slug}`}
            className="block py-6 border-t border-border-light hover:bg-bg-secondary -mx-4 px-4 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* group-hover: text is body-size (16px+), crimson passes AA for ≥18pt bold  */}
                {/* but at 16px it doesn't — use crimson-ink to be safe */}
                <div className="font-body font-semibold text-text-primary group-hover:text-crimson-ink transition-colors">
                  {story.title}
                </div>
                {story.excerpt && (
                  <Text className="mt-1 text-sm text-text-muted line-clamp-2">{story.excerpt}</Text>
                )}
              </div>
              {/* text-xs (12px) — use slate for metadata, never text-red */}
              <div className="shrink-0 text-xs font-body text-text-muted uppercase tracking-wide pt-0.5">
                {VERIFICATION_LABELS[story.verificationStatus] ?? story.verificationStatus}
              </div>
            </div>
          </a>
        ))}
        {stories.length === 0 && (
          <Text className="text-text-muted py-8">No stories yet.</Text>
        )}
      </div>
    </Container>
  );
}
