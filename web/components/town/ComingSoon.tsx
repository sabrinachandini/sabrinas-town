import { Container, Heading, Text, Link, Button } from "@/components/ui";

interface ComingSoonProps {
  slug: string;
  section?: string;
}

function formatTownName(slug: string): string {
  const parts = slug.split("-");
  const stateAbbr = parts.pop()?.toUpperCase() ?? "";
  const name = parts
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return `${name}, ${stateAbbr}`;
}

export function ComingSoon({ slug, section }: ComingSoonProps) {
  const townName = formatTownName(slug);
  const sectionLabel = section ? ` — ${section}` : "";

  return (
    <div className="py-section">
      <Container>
        <Heading level={1}>{townName}</Heading>
        <Text className="mt-element max-w-[620px]">
          {section
            ? `The ${section.toLowerCase()} section for ${townName} is being researched and verified.`
            : `The full profile for ${townName} is being researched and verified.`}
          {" "}We're building this town's Revolutionary story from primary sources — check back soon.
        </Text>

        <div className="mt-component flex flex-wrap gap-4">
          <Button href="/towns">Browse all towns</Button>
        </div>

        <div className="mt-element">
          <Text size="small" muted>
            Work for this town&apos;s tourism office or historical society?{" "}
            <Link href={`/partner/inquire?town=${slug}`}>
              Help us build this profile
            </Link>
            .
          </Text>
        </div>
      </Container>
    </div>
  );
}
