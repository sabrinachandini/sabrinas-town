import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { TownHeader, TownSubnav } from "@/components/town";

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
