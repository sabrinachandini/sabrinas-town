import { Link, Text } from "@/components/ui";

export interface HubCardProps {
  href: string;
  title: string;
  description: string;
  count?: string;
}

export function HubCard({ href, title, description, count }: HubCardProps) {
  return (
    <Link
      href={href}
      className="block p-element bg-bg-secondary rounded-lg border border-border-light hover:border-accent-blue transition-colors group"
    >
      <div className="flex items-start justify-between">
        <Text className="font-medium group-hover:underline">{title}</Text>
        {count && (
          <Text size="small" className="text-accent-blue font-mono">
            {count}
          </Text>
        )}
      </div>
      <Text size="small" muted className="mt-tight">
        {description}
      </Text>
    </Link>
  );
}
