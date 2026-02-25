import { getTown, TownStory } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@/components/ui";
import { EmptyState } from "@/components/town";

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
    title: `Stories | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `First-person accounts and interpretive stories from ${town.name}, ${town.state}.`,
  };
}

export default async function StoriesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  if (town.stories.length === 0) {
    return (
      <EmptyState
        title="Stories Coming Soon"
        description={`First-person accounts and interpretive stories from ${town.name} will appear here — the human voices behind the historical record. We're collecting both historical voices (period accounts) and modern voices (contemporary interpreters) to bring this town's story to life.`}
        townSlug={slug}
      />
    );
  }

  const historicalVoices = town.stories.filter(
    (s) => s.storyType === "HISTORICAL_VOICE"
  );
  const modernVoices = town.stories.filter(
    (s) => s.storyType === "MODERN_VOICE"
  );

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          Beyond dates and facts, history lives in stories — the memories, interpretations, and voices that give meaning to what happened. These are {town.name}'s.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* Story Stats */}
      <section>
        <Container>
          <div className="flex flex-wrap gap-component">
            <div className="px-4 py-3 bg-bg-secondary rounded-lg">
              <Text size="small" muted className="uppercase tracking-wide">
                Total Stories
              </Text>
              <Text className="mt-1 text-h3 font-heading font-bold text-accent-blue">
                {town.stories.length}
              </Text>
            </div>
            {historicalVoices.length > 0 && (
              <div className="px-4 py-3 bg-bg-secondary rounded-lg">
                <Text size="small" muted className="uppercase tracking-wide">
                  Historical Voices
                </Text>
                <Text className="mt-1 text-h3 font-heading font-bold">
                  {historicalVoices.length}
                </Text>
              </div>
            )}
            {modernVoices.length > 0 && (
              <div className="px-4 py-3 bg-bg-secondary rounded-lg">
                <Text size="small" muted className="uppercase tracking-wide">
                  Modern Voices
                </Text>
                <Text className="mt-1 text-h3 font-heading font-bold">
                  {modernVoices.length}
                </Text>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Historical Voices */}
      {historicalVoices.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Historical Voices</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Accounts from the Revolutionary era — letters, depositions, memoirs, and recorded oral histories from people who were there.
              </Text>

              <div className="mt-component space-y-component">
                {historicalVoices.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Modern Voices */}
      {modernVoices.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>Modern Voices</Heading>
              <Text className="mt-element text-text-muted max-w-[620px]">
                Contemporary interpreters — historians, park rangers, descendants, and community members who keep these stories alive today.
              </Text>

              <div className="mt-component space-y-component">
                {modernVoices.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Verification Note */}
      <Divider spacing="section" />
      <section>
        <Container>
          <div className="p-element bg-bg-secondary rounded-lg">
            <Text size="small" muted className="uppercase tracking-wide mb-element">
              About Story Verification
            </Text>
            <Text size="small">
              Each story is labeled with its verification status: <strong>Verified</strong> accounts have documentary evidence; <strong>Oral Tradition</strong> stories have been passed down through generations; <strong>Anecdotal</strong> accounts are reported but unconfirmed. We believe all voices deserve preservation, but readers should understand the evidentiary basis of each.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}

function StoryCard({ story }: { story: TownStory }) {
  const verificationLabels: Record<string, { label: string; color: string }> = {
    VERIFIED: { label: "Verified", color: "text-accent-blue" },
    ORAL_TRADITION: { label: "Oral Tradition", color: "text-text-muted" },
    ANECDOTAL: { label: "Anecdotal", color: "text-text-muted" },
    UNVERIFIED: { label: "Unverified", color: "text-accent-red" },
  };

  const verification = verificationLabels[story.verificationStatus];

  return (
    <div className="p-element border-l-4 border-accent-blue bg-bg-secondary rounded-r-lg">
      <div className="flex flex-wrap items-center gap-3">
        <Text size="small" className="uppercase tracking-wide">
          {story.storyType === "HISTORICAL_VOICE"
            ? "Historical Voice"
            : "Modern Voice"}
        </Text>
        <span
          className={`text-small uppercase tracking-wide ${verification.color}`}
        >
          {verification.label}
        </span>
      </div>

      <Heading level={3} className="mt-2">
        {story.title}
      </Heading>

      {story.subjectPersonName && (
        <Text size="small" muted className="mt-1">
          Subject: {story.subjectPersonName}
        </Text>
      )}

      {story.narratorName && (
        <Text size="small" muted className="mt-1">
          {story.narratorName}
          {story.narratorRole && ` — ${story.narratorRole}`}
        </Text>
      )}

      <Text className="mt-element">{story.excerpt}</Text>

      {story.tags.length > 0 && (
        <div className="mt-element flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-small bg-bg-primary rounded border border-border-light"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
