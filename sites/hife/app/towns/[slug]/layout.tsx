import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";
import { getTownAccent } from "@/lib/townAccent";

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

  const accent = getTownAccent(slug);

  return (
    <div className="min-h-screen bg-cream" data-town-accent={accent}>
      <main>{children}</main>
    </div>
  );
}
