import { getTown } from "@/lib/api";
import { Container, Heading, Text, Divider } from "@/components/ui";
import { EmptyState } from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "People | Town Not Found" };
  }

  return {
    title: `People | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Historical figures connected to ${town.name}, ${town.state} during the Revolutionary War.`,
  };
}

export default async function PeoplePage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  // Extract unique people from events (we have peopleCount but not detailed people data in this view)
  const totalPeopleCount = town.events.reduce((sum, e) => sum + e.peopleCount, 0);
  const hasContent = totalPeopleCount > 0;

  if (!hasContent) {
    return (
      <EmptyState
        title="People Coming Soon"
        description={`Historical figures connected to ${town.name} will appear here — commanders, civilians, and the many whose names history forgot to record. Research is ongoing to document the individuals whose lives intersected with this town during the Revolutionary era.`}
        townSlug={slug}
      />
    );
  }

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          The Revolution was made by individuals, most of whom left little trace in the official record. Here are the people whose lives intersected with {town.name} during the Revolutionary era.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* People from Events */}
      <section>
        <Container>
          <Heading level={2}>Figures in the Record</Heading>
          <Text className="mt-element text-text-muted max-w-[620px]">
            These individuals appear in documented events associated with {town.name}. The list grows as research continues.
          </Text>

          <div className="mt-component">
            <div className="p-element bg-bg-secondary rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
                  <span className="text-h3 font-heading font-bold text-accent-blue">
                    {totalPeopleCount}
                  </span>
                </div>
                <div>
                  <Text className="font-medium">People Documented</Text>
                  <Text size="small" muted>
                    Across {town.events.length} recorded events
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Event-based people listing */}
          <div className="mt-component space-y-element">
            {town.events
              .filter((e) => e.peopleCount > 0)
              .map((event) => (
                <div key={event.id} className="p-element bg-bg-secondary rounded-lg">
                  <Text className="font-medium">{event.name}</Text>
                  <Text size="small" muted className="mt-tight">
                    {event.peopleCount} {event.peopleCount === 1 ? "person" : "people"} involved
                  </Text>
                </div>
              ))}
          </div>

          <Text size="small" muted className="mt-component italic">
            Detailed biographical information for each individual is being compiled. Check back as this section expands.
          </Text>
        </Container>
      </section>
    </div>
  );
}
