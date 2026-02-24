import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { Container, Heading, Text, Link, Button, Divider } from "@/components/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ partner?: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Embed Not Found" };
  }

  return {
    title: `${town.name} | Official Revolutionary Town Network`,
    description: town.execSummary150,
  };
}

export default async function EmbedPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { partner } = await searchParams;
  const town = await getTown(slug);

  if (!town) {
    notFound();
  }

  // Mock partner data (in production, this would come from the API)
  const partnerData = partner
    ? {
        name: `${town.name} Tourism Board`,
        logoUrl: null,
        primaryColor: "#2C4A7A",
      }
    : null;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Partner Header Strip */}
      <div className="bg-text-primary text-white">
        <Container>
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <NetworkBadge />
              <Text size="small" className="text-white/90">
                Official Revolutionary Town Network Member
              </Text>
            </div>
            {partnerData && (
              <div className="flex items-center gap-3">
                {partnerData.logoUrl ? (
                  <img
                    src={partnerData.logoUrl}
                    alt={partnerData.name}
                    className="h-6"
                  />
                ) : (
                  <Text size="small" className="text-white/70">
                    {partnerData.name}
                  </Text>
                )}
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <main className="py-component">
        <Container>
          {/* Town Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-element">
            <div className="flex-1">
              <Text size="small" muted className="uppercase tracking-wide">
                {town.state}
              </Text>
              <Heading level={1} className="mt-1">
                {town.name}
              </Heading>
              <Text className="mt-element">{town.execSummary150}</Text>
            </div>

            {/* Score Badge */}
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-bg-secondary rounded-lg">
                <div>
                  <Text size="small" muted>
                    Network Score
                  </Text>
                  <div className="flex items-baseline gap-1">
                    <span className="text-h2 font-heading font-bold text-accent-blue">
                      {town.compositeScore.toFixed(1)}
                    </span>
                    <span className="text-small text-text-muted">/100</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-border-light" />
                <div>
                  <Text size="small" className="font-medium">
                    {town.scoreTier}
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <Divider spacing="default" />

          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-element">
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Historical Events
              </Text>
              <Text className="mt-1 font-heading text-h3 font-semibold">
                {town.events.length}
              </Text>
            </div>
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Connected Towns
              </Text>
              <Text className="mt-1 font-heading text-h3 font-semibold">
                {town.linkedTowns.length}
              </Text>
            </div>
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Documented Stories
              </Text>
              <Text className="mt-1 font-heading text-h3 font-semibold">
                {town.stories.length}
              </Text>
            </div>
          </div>

          <Divider spacing="default" />

          {/* Featured Event */}
          {town.events.length > 0 && (
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Featured Event
              </Text>
              <Heading level={3} className="mt-2">
                {town.events[0].name}
              </Heading>
              <Text className="mt-element line-clamp-3">
                {town.events[0].summary.split("\n")[0]}
              </Text>
            </div>
          )}

          <Divider spacing="default" />

          {/* Connected Towns Preview */}
          {town.linkedTowns.length > 0 && (
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Part of a Connected Network
              </Text>
              <div className="mt-element flex flex-wrap gap-2">
                {town.linkedTowns.slice(0, 4).map((link) => (
                  <span
                    key={link.townId}
                    className="px-3 py-1 bg-bg-secondary rounded-full text-small"
                  >
                    {link.townName}
                  </span>
                ))}
                {town.linkedTowns.length > 4 && (
                  <span className="px-3 py-1 text-small text-text-muted">
                    +{town.linkedTowns.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-component flex flex-wrap gap-4">
            <Button href={`/towns/${town.slug}`}>
              Explore Full Profile
            </Button>
            <Button href={`/towns/${town.slug}/teacher`} variant="secondary">
              Teacher Resources
            </Button>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="py-element border-t border-border-light">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <NetworkBadge size="small" />
              <Text size="small" muted>
                Powered by Sabrina's Town
              </Text>
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="text-small">
                About the Network
              </Link>
              <Link href="/methodology" className="text-small">
                Methodology
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

function NetworkBadge({ size = "default" }: { size?: "default" | "small" }) {
  const sizeClasses = size === "small" ? "w-5 h-5" : "w-6 h-6";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-accent-blue flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={size === "small" ? "w-3 h-3" : "w-4 h-4"}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
