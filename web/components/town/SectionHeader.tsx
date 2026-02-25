import { Heading, Link } from "@/components/ui";

export interface SectionHeaderProps {
  title: string;
  linkHref?: string;
  linkText?: string;
}

export function SectionHeader({ title, linkHref, linkText }: SectionHeaderProps) {
  if (linkHref && linkText) {
    return (
      <div className="flex items-center justify-between">
        <Heading level={2}>{title}</Heading>
        <Link href={linkHref}>{linkText}</Link>
      </div>
    );
  }

  return <Heading level={2}>{title}</Heading>;
}
