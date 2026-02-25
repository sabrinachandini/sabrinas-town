import { Container, Heading, Text, Link } from "@/components/ui";

interface EmptyStateProps {
  title: string;
  description: string;
  townSlug: string;
  showLinks?: boolean;
}

export function EmptyState({
  title,
  description,
  townSlug,
  showLinks = true,
}: EmptyStateProps) {
  return (
    <div className="py-section">
      <Container>
        <div className="max-w-[620px] mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-element rounded-full bg-bg-secondary border border-border-light flex items-center justify-center">
            <svg
              className="w-8 h-8 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          <Heading level={2}>{title}</Heading>

          <Text className="mt-element text-text-muted">{description}</Text>

          <Text size="small" muted className="mt-component italic">
            This section is being developed. Content will appear here as research is completed and verified.
          </Text>

          {showLinks && (
            <div className="mt-component flex justify-center gap-4">
              <Link href={`/towns/${townSlug}`}>View Overview</Link>
              <Link href={`/towns/${townSlug}/connected`}>See Connections</Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
