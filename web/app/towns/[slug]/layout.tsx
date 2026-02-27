import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { TownSubnav } from "@/components/town";

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
      <TownSubnav slug={slug} />
      <main>{children}</main>
    </div>
  );
}
