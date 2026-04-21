import { getRankings } from "@/lib/api";
import CompareSelector from "./CompareSelector";

export const metadata = {
  title: "Compare Towns | History is for Everyone",
  description:
    "Select two Revolutionary towns to compare their history, significance, connections, and resources side by side.",
  openGraph: {
    title: "Compare Towns",
    description: "Select two Revolutionary towns to compare their history, significance, connections, and resources side by side.",
    url: "https://sabrinas-town.vercel.app/compare",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/compare" },
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ a?: string; b?: string }>;
}

export default async function ComparePage({ searchParams }: PageProps) {
  const [towns, params] = await Promise.all([getRankings({ limit: 77 }), searchParams]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#14100a] border-b-4 border-[#cc3322] py-16 px-6 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]" style={{ fontSize: "clamp(140px,26vw,340px)", letterSpacing: "-0.05em" }}>
          Compare
        </div>
        <div className="relative z-10 max-w-[680px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
            Town Comparison
          </p>
          <h1 className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(40px,7vw,88px)" }}>
            Compare Towns
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-6" />
          <p className="font-editorial italic font-light text-[17px] leading-[1.65] text-[rgba(242,230,200,0.65)] max-w-[480px]">
            Select two Revolutionary towns to compare their history, significance, connections, and resources side by side.
          </p>
        </div>
      </section>

      <CompareSelector towns={towns} initialSlugA={params.a} initialSlugB={params.b} />
    </main>
  );
}
