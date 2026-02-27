import { Container, Text, Link, Divider } from "@/components/ui";

export function Footer() {
  return (
    <footer className="py-component">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-element">
          <div>
            <Text className="font-heading text-h3 font-semibold">
              History is for Everyone
            </Text>
            <Text size="small" muted>
              American Revolution Research Network
            </Text>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/towns">Towns</Link>
            <Link href="/clusters">Big Picture</Link>
            <Link href="/teach">Teach</Link>
            <Link href="/partner">Partner</Link>
            <Link href="/about">About</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <Divider spacing="default" />
        <Text size="small" muted className="text-center">
          History is for everyone. Built with care in 2026.
        </Text>
      </Container>
    </footer>
  );
}
