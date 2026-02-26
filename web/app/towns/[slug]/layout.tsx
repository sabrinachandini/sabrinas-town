import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { TownHeader, TownSubnav } from "@/components/town";
import { EditorialNav } from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma", "lexington-ma", "concord-ma", "salem-ma", "worcester-ma", "springfield-ma", "plymouth-ma"]);

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function TownLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    notFound();
  }

  if (EDITORIAL_SLUGS.has(slug)) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <EditorialNav slug={slug} />
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <TownHeader
        name={town.name}
        state={town.state}
        heroSummary40={town.heroSummary40}
        compositeScore={town.compositeScore}
        scoreTier={town.scoreTier}
      />
      <TownSubnav slug={slug} />
      <main>{children}</main>
    </div>
  );
}
