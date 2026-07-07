import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | History is for Everyone",
  description:
    "History Is For Everyone's commitment to digital accessibility — what we've done, where we are, and how to tell us if something isn't working.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-cream text-ink">
      {/* Hero */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-5 sm:px-10 py-14 sm:py-20">
        <div className="max-w-[820px] mx-auto">
          <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.3em] uppercase text-[#f2ece0] bg-[#14100a] px-3 py-[5px] mb-6 w-fit">
            Accessibility
          </span>
          <h1
            className="font-editorial font-black text-[#f2ece0] leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            History is for everyone —<br />
            <em className="font-editorial font-light italic text-[#C8A24A]">all of it</em>
          </h1>
          <p className="font-editorial italic font-light text-[20px] sm:text-[22px] text-[#a8bcd8] mt-6 max-w-[560px] leading-[1.45]">
            That sentence is our founding commitment. It means this site must work for every visitor, including those who use assistive technology.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-5 sm:px-10 py-14 sm:py-20 border-b-4 border-[#14100a]">
        <div className="max-w-[820px] mx-auto space-y-10">

          <div>
            <h2 className="font-editorial font-black text-[26px] sm:text-[32px] text-[#1a3a72] mb-4">Our standard</h2>
            <p className="font-body text-[17px] leading-[1.65] text-[#0e1428]">
              We aim to conform to <strong>WCAG 2.2 Level AA</strong> across the entire site. That means every page is operable by keyboard alone, every image has a text description, every form is labeled, and every piece of content meets minimum color contrast requirements.
            </p>
            <p className="font-body text-[17px] leading-[1.65] text-[#0e1428] mt-4">
              We also follow the design principle built into the site's visual identity: accessible and beautiful are not in tension. The brand crimson and gold colors that appear across the site use darker variants at small sizes specifically to pass contrast requirements — because a promise printed in ink you can't read isn't a promise at all.
            </p>
          </div>

          <div>
            <h2 className="font-editorial font-black text-[26px] sm:text-[32px] text-[#1a3a72] mb-4">What we've done</h2>
            <ul className="font-body text-[17px] leading-[1.65] text-[#0e1428] space-y-3 list-none pl-0">
              {[
                "All animations and transitions pause when you have \"prefer reduced motion\" turned on in your system settings.",
                "Every interactive element has a visible focus indicator — a navy ring on light backgrounds, a cream ring on dark ones.",
                "The interactive map has a \"Browse as list\" alternative at every entry point, so the full town network is reachable without the map.",
                "The Muster stop editor supports keyboard-only reordering via the drag-and-drop library's built-in keyboard sensor.",
                "All forms announce errors immediately to screen readers using live regions.",
                "Color is never the only signal — labels, icons, and text always accompany color coding.",
                "Touch targets are at least 44×44 pixels on all interactive controls.",
                "Every page has a skip-to-main-content link.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#B53A29] font-bold flex-shrink-0 mt-[2px]" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-editorial font-black text-[26px] sm:text-[32px] text-[#1a3a72] mb-4">Known limitations</h2>
            <p className="font-body text-[17px] leading-[1.65] text-[#0e1428] mb-4">
              We are honest about where gaps remain:
            </p>
            <ul className="font-body text-[17px] leading-[1.65] text-[#0e1428] space-y-3 list-none pl-0">
              {[
                "The interactive map uses a third-party mapping library (MapLibre GL) whose keyboard pan and zoom behavior does not fully meet WCAG 2.2. The full town list at /towns is the complete accessible alternative.",
                "Printed itineraries (PDFs generated via the browser's print function) may not have full tagged-PDF structure on all browsers. We are evaluating server-side PDF generation to address this.",
                "Primary source images in teacher modules do not yet have transcriptions alongside them. We are working to add this to the data model.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#6b7280] flex-shrink-0 mt-[2px]" aria-hidden="true">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-editorial font-black text-[26px] sm:text-[32px] text-[#1a3a72] mb-4">Tell us if something isn't working</h2>
            <p className="font-body text-[17px] leading-[1.65] text-[#0e1428]">
              If you encounter a barrier on this site — something you can't reach, can't read, or can't operate — please tell us. We take every report seriously and will respond within five business days.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/partner/inquire"
                className="no-underline inline-flex items-center gap-2 font-ui text-[13px] font-semibold uppercase tracking-[0.16em] bg-[#1a3a72] text-[#f2ece0] px-6 py-3 min-h-[44px] border-[3px] border-[#14100a] shadow-[4px_4px_0_#14100a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#14100a] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2"
              >
                Contact us
              </a>
              <a
                href="mailto:accessibility@lexington250.com"
                className="no-underline inline-flex items-center font-ui text-[13px] font-semibold uppercase tracking-[0.16em] text-[#1a3a72] border-b-2 border-[#1a3a72]/40 hover:border-[#1a3a72] transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2"
              >
                accessibility@lexington250.com
              </a>
            </div>
            <p className="font-body text-[15px] text-[#6b7280] mt-4">
              This statement was last reviewed in July 2026.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
