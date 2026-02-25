import { Link, Text } from "@/components/ui";

export interface FeaturedListItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  href?: string;
}

export interface FeaturedListProps {
  items: FeaturedListItem[];
  maxItems?: number;
}

export function FeaturedList({ items, maxItems = 5 }: FeaturedListProps) {
  const displayItems = items.slice(0, maxItems);

  if (displayItems.length === 0) {
    return (
      <div className="p-element bg-bg-secondary rounded-lg">
        <Text size="small" muted className="italic">
          No items yet.
        </Text>
      </div>
    );
  }

  return (
    <div className="space-y-element">
      {displayItems.map((item) => {
        const content = (
          <div className="flex items-start justify-between gap-4">
            <div>
              <Text className="font-medium">{item.title}</Text>
              {item.subtitle && (
                <Text size="small" muted className="mt-tight line-clamp-1">
                  {item.subtitle}
                </Text>
              )}
            </div>
            {item.badge && (
              <Text size="small" className="text-accent-blue flex-shrink-0">
                {item.badge}
              </Text>
            )}
          </div>
        );

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="block p-element bg-bg-secondary rounded-lg hover:border-accent-blue border border-transparent transition-colors"
            >
              {content}
            </Link>
          );
        }

        return (
          <div key={item.id} className="p-element bg-bg-secondary rounded-lg">
            {content}
          </div>
        );
      })}
    </div>
  );
}
