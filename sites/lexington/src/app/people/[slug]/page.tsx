export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getPerson } from "@/lib/api";
import { Container, Heading, Text } from "@hife/ui";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) return { title: "Person Not Found" };
  return {
    title: `${person.name} — Visit Lexington MA`,
    description: person.bioShort || undefined,
  };
}

export default async function PersonDetailPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) notFound();

  const lifespan =
    person.birthYear && person.deathYear
      ? `${person.birthYear}–${person.deathYear}`
      : person.birthYear
      ? `b. ${person.birthYear}`
      : null;

  return (
    <Container>
      <div className="py-12 max-w-2xl">
        {/* Back link — text-sm (14px) needs crimson-ink not text-red */}
        <a href="/people" className="text-sm font-body text-crimson-ink hover:underline mb-8 inline-block">
          ← People
        </a>

        <div className="flex gap-6 items-start">
          {person.imageUrl && (
            <img
              src={person.imageUrl}
              alt={`Portrait of ${person.name}`}
              className="w-24 h-24 object-cover shrink-0 border-2 border-border-light"
            />
          )}
          <div>
            <Heading level={1} className="text-4xl font-condensed uppercase tracking-tight">
              {person.name}
            </Heading>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              {person.roles.length > 0 && (
                /* text-sm (14px) — use crimson-ink not text-red */
                <span className="text-crimson-ink font-condensed text-sm tracking-widest uppercase">
                  {person.roles
                    .slice(0, 2)
                    .map((r) => r.replace(/_/g, " "))
                    .join(" · ")}
                </span>
              )}
              {lifespan && (
                <span className="text-text-muted font-body text-sm">{lifespan}</span>
              )}
            </div>
          </div>
        </div>

        <Text className="mt-6 text-lg leading-relaxed">{person.bioShort}</Text>

        {person.bioLong && (
          <div className="mt-6 prose prose-sm max-w-none text-text-primary leading-relaxed space-y-4">
            {person.bioLong.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
