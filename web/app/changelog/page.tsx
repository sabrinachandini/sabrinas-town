import { getChangelog } from "@/lib/api";
import NextLink from "next/link";

interface PageProps {
  searchParams: Promise<{ town?: string }>;
}

export const metadata = {
  title: "Changelog | History Is For Everyone",
  description: "Updates to town pages, sources, teacher materials, and site infrastructure.",
};

const CATEGORY_LABELS: Record<string, { label: string; bg: string; text: string }> = {
  CONTENT: { label: "Content", bg: "#1a3a72", text: "#f2e6c8" },
  SOURCES: { label: "Sources", bg: "#e8b84b", text: "#14100a" },
  TEACHER: { label: "Teacher", bg: "#2a5c45", text: "#f2e6c8" },
  INFRA:   { label: "Infra",   bg: "#14100a", text: "#f2e6c8" },
  FIX:     { label: "Fix",     bg: "#cc3322", text: "#f2e6c8" },
};

export default async function ChangelogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const townFilter = params.town || undefined;
  const data = await getChangelog({ town: townFilter, limit: 50 });

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#14100a] border-b-4 border-[#cc3322] py-16 px-6 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-30px] font-display leading-none pointer-events-none select-none text-white/[0.03]" style={{ fontSize: "clamp(140px,28vw,380px)", letterSpacing: "-0.05em" }}>
          Log
        </div>
        <svg className="absolute top-5 right-5 pointer-events-none" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden style={{ opacity: 0.18 }}>
          <path d="M9 21 L10.2 25.5 L15 25.5 L11.2 28.5 L12.6 33 L9 30.3 L5.4 33 L6.8 28.5 L3 25.5 L7.8 25.5 Z" fill="#e8b84b" />
          <path d="M32 8 L33 11 L36 11 L33.8 12.8 L34.8 16 L32 14.2 L29.2 16 L30.2 12.8 L28 11 L31 11 Z" fill="#f2e6c8" />
        </svg>
        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
            Transparency
          </p>
          <h1 className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(40px,7vw,88px)" }}>
            Changelog
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-6" />
          <p className="font-editorial italic font-light text-[17px] leading-[1.65] text-[rgba(242,230,200,0.65)] max-w-[500px]">
            Every update to a town profile, score adjustment, or source addition is logged here. If something changed, you can see when and why.
          </p>
          {townFilter && (
            <div className="mt-6 flex items-center gap-4">
              <p className="font-ui text-[11px] text-[rgba(242,230,200,0.5)]">
                Filtered: <span className="text-[#f2e6c8] font-medium">{townFilter}</span>
              </p>
              <NextLink href="/changelog" className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-[rgba(242,230,200,0.4)] hover:text-[#f2e6c8] transition-colors">
                Clear ×
              </NextLink>
            </div>
          )}
        </div>
      </section>

      {/* Entries */}
      <section className="bg-[#f2ece0] py-16 px-6 sm:px-16 border-b-4 border-[#14100a]">
        <div className="mx-auto max-w-[820px]">
          {data.entries.length > 0 ? (
            <div className="space-y-0">
              {data.entries.map((entry) => {
                const cat = entry.category ? CATEGORY_LABELS[entry.category] : null;
                return (
                  <div key={entry.id} className="flex gap-5 py-5 border-b border-[rgba(20,16,10,0.08)] last:border-b-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cc3322] flex-shrink-0 mt-2" />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-ui text-[11px] text-[rgba(20,16,10,0.4)]">
                          {new Date(entry.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        {cat && (
                          <span className="font-ui text-[9px] tracking-[0.1em] uppercase px-2 py-0.5" style={{ backgroundColor: cat.bg, color: cat.text }}>
                            {cat.label}
                          </span>
                        )}
                      </div>
                      <p className="font-editorial text-[17px] text-[#14100a] leading-snug">
                        {entry.town && (
                          <>
                            <NextLink href={`/towns/${entry.town.slug}`} className="no-underline text-[#1a3a72] hover:text-[#cc3322] transition-colors">
                              {entry.town.name}
                            </NextLink>
                            <span className="text-[rgba(20,16,10,0.35)]"> — </span>
                          </>
                        )}
                        {entry.title ?? entry.summary}
                      </p>
                      {entry.publicNotes && (
                        <p className="font-ui text-[12px] text-[rgba(20,16,10,0.5)] leading-relaxed mt-1">
                          {entry.publicNotes}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-display text-[80px] text-[rgba(20,16,10,0.06)] leading-none mb-4">0</p>
              <p className="font-editorial italic text-[18px] text-[rgba(20,16,10,0.4)]">No changes logged yet.</p>
            </div>
          )}

          {data.total > data.entries.length && (
            <p className="font-ui text-[11px] text-[rgba(20,16,10,0.4)] mt-8">
              Showing {data.entries.length} of {data.total} entries.
            </p>
          )}

          <div className="mt-12 pt-8 border-t-2 border-[rgba(20,16,10,0.1)]">
            <p className="font-ui text-[11px] text-[rgba(20,16,10,0.4)]">
              See our{" "}
              <NextLink href="/methodology" className="text-[#1a3a72] hover:text-[#cc3322] transition-colors no-underline border-b border-[rgba(26,58,114,0.3)]">
                Methodology
              </NextLink>{" "}
              for how data is evaluated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
