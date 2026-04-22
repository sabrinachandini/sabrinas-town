import { getTown, getRankings } from "@/lib/api";
import { notFound } from "next/navigation";
import StoriesFilter from "./StoriesFilter";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Not Found" };
  const title = `Stories from ${town.name}, ${town.state} | History is for Everyone`;
  const description = `First-person accounts and historical voices from ${town.name}, ${town.state} during the Revolutionary War.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/stories`;
  const images = town.imageUrl ? [{ url: town.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image" as const, title, description, images: town.imageUrl ? [town.imageUrl] : undefined },
    alternates: { canonical: url },
  };
}

export default async function StoriesPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) notFound();

  const stories = town.stories ?? [];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-10 sm:py-14 px-5 sm:px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 font-display text-[240px] leading-none text-white/[0.04] pointer-events-none select-none tracking-[-0.04em]">
          {town.state.slice(0, 2).toUpperCase()}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/50 mb-2">
            {town.name}, {town.state}
          </p>
          <h1 className="font-display text-cream text-[clamp(36px,6vw,72px)] leading-none tracking-[-0.02em]">
            Stories
          </h1>
          <p className="font-editorial italic font-light text-cream/60 text-[21px] mt-4 max-w-[520px] leading-relaxed">
            {stories.length > 0
              ? `${stories.length} first-person account${stories.length !== 1 ? "s" : ""} from the Revolutionary era.`
              : `Historical voices from ${town.name} are being collected.`}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-16 py-10 sm:py-16">
        {stories.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-[80px] text-ink/5 leading-none mb-4">"</p>
            <p className="font-editorial italic text-[18px] text-ink/40">Research is ongoing. Stories will appear here as they are collected and verified.</p>
          </div>
        ) : (
          <StoriesFilter stories={stories} slug={slug} />
        )}
      </div>
    </div>
  );
}
