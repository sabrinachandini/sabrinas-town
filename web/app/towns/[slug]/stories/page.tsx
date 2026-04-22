import { getTown, getRankings } from "@/lib/api";
import { notFound } from "next/navigation";
import NextLink from "next/link";

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
  const historical = stories.filter((s) => s.storyType === "HISTORICAL_VOICE");
  const modern = stories.filter((s) => s.storyType === "MODERN_VOICE");

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
          <p className="font-editorial italic font-light text-cream/60 text-[17px] mt-4 max-w-[520px] leading-relaxed">
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
          <div className="space-y-16">
            {[
              { label: "Historical Voices", group: historical },
              { label: "Modern Voices", group: modern },
            ].filter(({ group }) => group.length > 0).map(({ label, group }) => (
              <section key={label}>
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    {label}
                  </p>
                </div>
                <div className="space-y-0">
                  {group.map((story) => {
                    const href = `/towns/${slug}/stories/${story.slug ?? story.id}`;
                    const narrator = story.narratorName ?? story.subjectPersonName;
                    return (
                      <NextLink
                        key={story.id}
                        href={href}
                        className="no-underline group flex items-start gap-6 py-7 border-b border-ink/10 last:border-b-0 hover:pl-2 transition-all duration-150"
                      >
                        {/* Accent bar */}
                        <div className="flex-shrink-0 w-[3px] self-stretch bg-crimson/20 group-hover:bg-crimson transition-colors mt-1" />

                        <div className="flex-1 min-w-0">
                          {narrator && (
                            <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-crimson/70 mb-1.5">
                              {narrator}
                            </p>
                          )}
                          <p className="font-editorial text-[clamp(20px,2.5vw,26px)] text-ink group-hover:text-crimson transition-colors leading-tight">
                            {story.title}
                          </p>
                          {story.excerpt && (
                            <p className="font-ui text-[14px] text-ink/50 leading-relaxed mt-2 line-clamp-2">
                              {story.excerpt}
                            </p>
                          )}
                          {story.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {story.tags.slice(0, 4).map((tag) => (
                                <span key={tag} className="font-ui text-[10px] uppercase tracking-[0.1em] text-ink/30 border border-ink/15 px-1.5 py-0.5">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <span className="font-display text-crimson/40 group-hover:text-crimson transition-colors text-[20px] flex-shrink-0 mt-1.5">→</span>
                      </NextLink>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
