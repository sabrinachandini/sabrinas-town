"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui";

interface TownSubnavProps {
  slug: string;
}

const NAV_ITEMS = [
  { label: "Overview", path: "" },
  { label: "History", path: "/history" },
  { label: "People", path: "/people" },
  { label: "Visit", path: "/visit" },
  { label: "Events", path: "/events" },
  { label: "Itineraries", path: "/itineraries" },
  { label: "Stories", path: "/stories" },
  { label: "Teach", path: "/teacher" },
  { label: "Connected", path: "/connected" },
  { label: "Updates", path: "/updates" },
] as const;

export function TownSubnav({ slug }: TownSubnavProps) {
  const pathname = usePathname();
  const basePath = `/towns/${slug}`;

  const isActive = (itemPath: string) => {
    const fullPath = `${basePath}${itemPath}`;
    if (itemPath === "") {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname === fullPath || pathname.startsWith(`${fullPath}/`);
  };

  return (
    <nav className="bg-bg-secondary border-b border-border-light sticky top-0 z-10">
      <Container>
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-1 min-w-max py-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <NextLink
                  key={item.path}
                  href={`${basePath}${item.path}`}
                  className={`
                    px-4 py-2 text-small font-medium rounded-lg transition-colors whitespace-nowrap
                    ${
                      active
                        ? "bg-accent-blue text-white"
                        : "text-text-primary hover:bg-bg-primary"
                    }
                  `}
                >
                  {item.label}
                </NextLink>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
}
