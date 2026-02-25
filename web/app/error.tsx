"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { Container, Heading, Text, Button, Divider } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main className="py-section">
      <Container>
        <div className="max-w-[620px] mx-auto text-center">
          <Text size="small" muted className="uppercase tracking-wide">
            Error
          </Text>
          <Heading level={1} className="mt-2">
            Something went wrong
          </Heading>
          <Text className="mt-element text-text-muted">
            An unexpected error occurred. You can try again, or browse our town
            directory.
          </Text>

          {error.digest && (
            <Text size="small" muted className="mt-element">
              Reference: {error.digest}
            </Text>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-component">
            <Button onClick={reset}>Try Again</Button>
            <Button href="/towns" variant="secondary">
              Browse Towns
            </Button>
          </div>
        </div>

        <Divider spacing="section" />

        <div className="max-w-[620px] mx-auto text-center">
          <Text size="small" muted>
            If this keeps happening, please let us know.
          </Text>
        </div>
      </Container>
    </main>
  );
}
