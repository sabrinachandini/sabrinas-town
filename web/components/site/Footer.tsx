import Image from "next/image";
import NextLink from "next/link";
import { Container, Text, Divider } from "@/components/ui";

const FOOTER_LINKS = [
  { label: "Towns", href: "/towns" },
  { label: "Big Picture", href: "/clusters" },
  { label: "Teach", href: "/teach" },
  { label: "Partner", href: "/partner" },
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "Changelog", href: "/changelog" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="py-component">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-element">
          <div>
            <NextLink href="/" className="no-underline">
              <Image
                src="/images/logo.png"
                alt="History is for Everyone"
                width={200}
                height={36}
                className="h-9 w-auto"
              />
            </NextLink>
            <Text size="small" muted className="mt-2">
              A living network of America&apos;s Revolutionary towns — built for travelers, teachers, and towns themselves.
            </Text>
          </div>
          <div className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map(({ label, href }) => (
              <NextLink
                key={href}
                href={href}
                className="no-underline text-accent-blue hover:text-accent-blue-hover transition-colors duration-200 text-small"
              >
                {label}
              </NextLink>
            ))}
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
