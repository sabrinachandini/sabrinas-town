import { Container, Text, Link } from "@/components/ui";

export interface TransparencyFooterProps {
  lastUpdatedAt: string;
  townSlug: string;
}

export function TransparencyFooter({ lastUpdatedAt, townSlug }: TransparencyFooterProps) {
  return (
    <section>
      <Container>
        <div className="p-component bg-bg-secondary rounded-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Text size="small" muted className="uppercase tracking-wide">
                Last updated
              </Text>
              <Text className="mt-tight">
                {new Date(lastUpdatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </div>
            <Link href={`/towns/${townSlug}/updates`}>View changelog →</Link>
          </div>
          <Text size="small" muted className="mt-element max-w-[620px]">
            This page draws from primary sources and scholarly research. If you
            notice an error or have additional information, please let us know.
          </Text>
        </div>
      </Container>
    </section>
  );
}
