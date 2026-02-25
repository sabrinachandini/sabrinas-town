// MODEL: Claude Sonnet
// Global changelog page — server component fetching from changelog API

import { getChangelog } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

interface PageProps {
  searchParams: Promise<{ town?: string }>;
}

export const metadata = {
  title: "Changelog | Sabrina's Town",
  description:
    "Every change to town profiles, scores, and sources is logged here. Transparency is how we build trust.",
};

export default async function ChangelogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const townFilter = params.town || undefined;
  const data = await getChangelog({ town: townFilter, limit: 50 });

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Changelog</Heading>
        <Text className="mt-element max-w-[620px]">
          Every update to a town profile, score adjustment, or source addition
          is logged here. We believe transparency is how you build trust with
          readers. If something changed, you can see when and why.
        </Text>

        {townFilter && (
          <div className="mt-element">
            <Text size="small" muted>
              Filtered by town:{" "}
              <span className="font-medium text-text-primary">
                {townFilter}
              </span>
            </Text>
            <Link href="/changelog" className="text-small mt-1 inline-block">
              View all changes
            </Link>
          </div>
        )}

        <Divider spacing="section" />

        {data.entries.length > 0 ? (
          <div className="space-y-element max-w-[720px]">
            {data.entries.map((entry) => (
              <div key={entry.id} className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent-blue flex-shrink-0" />
                <div>
                  <Text size="small" muted>
                    {new Date(entry.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Text>
                  <Text>
                    <Link href={`/towns/${entry.town.slug}`}>
                      {entry.town.name}
                    </Link>
                    {" — "}
                    {entry.summary}
                  </Text>
                  {entry.publicNotes && (
                    <Text size="small" muted className="mt-1">
                      {entry.publicNotes}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-component text-center">
            <Text muted>No changes logged yet.</Text>
          </div>
        )}

        {data.total > data.entries.length && (
          <Text size="small" muted className="mt-component">
            Showing {data.entries.length} of {data.total} entries.
          </Text>
        )}
      </Container>
    </main>
  );
}
