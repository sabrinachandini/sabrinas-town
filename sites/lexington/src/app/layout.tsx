import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visitlexingtonma.com"),
  title: {
    default: "Visit Lexington MA — Birthplace of American Liberty",
    template: "%s | Visit Lexington MA",
  },
  description:
    "Plan your visit to Lexington, Massachusetts — where the American Revolution began on April 19, 1775. Events, historic sites, restaurants, and everything you need before you go.",
  openGraph: {
    type: "website",
    siteName: "Visit Lexington MA",
    locale: "en_US",
    description:
      "Lexington, MA — where the first shot of the American Revolution was fired on April 19, 1775. Plan your visit: events, sites, restaurants, and parking.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@visitlexingtonma",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Lexington MA", "Visit Lexington Massachusetts", "Lexington Battle Green",
    "American Revolution", "Patriots Day", "Buckman Tavern", "Minute Man National Park",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body>
        {/* Skip to main content — visible on keyboard focus only */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <header className="bg-navy text-cream">
          {/* Top eyebrow: brand identity */}
          <div className="border-b border-cream/10">
            <div className="max-w-wide mx-auto px-5 py-3 flex items-center justify-between">
              <a
                href="/"
                className="font-condensed text-3xl tracking-widest uppercase leading-none hover:text-gold transition-colors"
                aria-label="Visit Lexington MA — home"
              >
                Visit Lexington <span className="text-crimson">MA</span>
              </a>
              <span className="font-ui text-[10px] tracking-[0.25em] uppercase text-cream/40 hidden sm:block">
                Birthplace of American Liberty
              </span>
            </div>
          </div>

          {/* Primary nav — traveler jobs */}
          <nav aria-label="Primary navigation" className="max-w-wide mx-auto px-5">
            <ul className="flex flex-wrap gap-x-6 gap-y-0 text-sm font-ui py-2" role="list">
              <li><a href="/events"    className="nav-link py-3 inline-block">What&apos;s On</a></li>
              <li><a href="/plan"      className="nav-link py-3 inline-block">Plan Your Day</a></li>
              <li><a href="/people"    className="nav-link py-3 inline-block">People</a></li>
              <li><a href="/eat-shop"  className="nav-link py-3 inline-block">Eat &amp; Shop</a></li>
              <li><a href="/visit"     className="nav-link py-3 inline-block">Before You Go</a></li>
              <li><a href="/stories"   className="nav-link py-3 inline-block text-cream/50 hover:text-cream">Stories</a></li>
            </ul>
          </nav>
        </header>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Footer: town brand first, HIFE endorsement secondary */}
        <footer className="section-border bg-navy text-cream mt-20">
          <div className="max-w-wide mx-auto px-5 py-10 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="font-condensed text-2xl tracking-widest uppercase mb-2">
                Visit Lexington <span className="text-crimson">MA</span>
              </div>
              <p className="font-ui text-xs text-cream/50 leading-relaxed">
                Birthplace of American Liberty.<br />
                April 19, 1775.
              </p>
            </div>
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-3">Quick links</div>
              <ul className="space-y-1.5 font-ui text-sm text-cream/70">
                <li><a href="/events"  className="hover:text-cream transition-colors">What&apos;s On</a></li>
                <li><a href="/plan"    className="hover:text-cream transition-colors">Plan Your Day</a></li>
                <li><a href="/people"  className="hover:text-cream transition-colors">People</a></li>
                <li><a href="/visit"   className="hover:text-cream transition-colors">Before You Go</a></li>
              </ul>
            </div>
            <div>
              <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-3">Powered by</div>
              <a
                href="https://sabrinas-town.vercel.app"
                className="font-ui text-sm text-cream/60 hover:text-cream transition-colors underline underline-offset-2"
              >
                History Is for Everyone
              </a>
              <p className="font-ui text-xs text-cream/30 mt-2 leading-relaxed">
                Research sourced and verified.<br />
                Nothing invented, nothing guessed.
              </p>
            </div>
          </div>
          <div className="border-t border-cream/10">
            <div className="max-w-wide mx-auto px-5 py-4 font-ui text-[11px] text-cream/30 text-center">
              © 2026 Visit Lexington MA · Part of the History Is for Everyone network
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
