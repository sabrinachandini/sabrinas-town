export const dynamic = "force-dynamic";

import { getPeople } from "@/lib/api";
import { Container, Heading, Text } from "@hife/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People — Lexington, MA",
};

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Historical Figures</Heading>
        <Text className="mt-2 text-text-muted">
          {people.length} people connected to Lexington&apos;s Revolutionary War history.
        </Text>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {people.map((person) => (
          <div
            key={person.id}
            className="p-5 bg-bg-secondary rounded-lg border border-border-light"
          >
            <div className="font-body font-semibold text-text-primary">{person.name}</div>
            {person.roles.length > 0 && (
              <div className="text-xs font-body text-red uppercase tracking-wide mt-1">
                {person.roles.slice(0, 2).join(" · ")}
              </div>
            )}
            <Text className="mt-2 text-sm text-text-muted line-clamp-3">
              {person.bioShort}
            </Text>
          </div>
        ))}
      </div>
    </Container>
  );
}
