import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concord, MA — History Is for Everyone",
  description:
    "Explore the Revolutionary War history of Concord, Massachusetts — where the Redcoats turned back at the North Bridge on April 19, 1775.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-navy text-cream px-6 py-4 flex items-center gap-4">
          <a href="/" className="font-condensed text-2xl tracking-widest uppercase">
            Concord
          </a>
          <nav className="flex gap-6 text-sm font-body ml-auto">
            <a href="/events" className="hover:underline">Events</a>
            <a href="/people" className="hover:underline">People</a>
            <a href="/stories" className="hover:underline">Stories</a>
            <a href="/places" className="hover:underline">Places</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-navy text-cream/60 text-xs font-body text-center py-6 mt-16">
          Part of the History Is for Everyone network ·{" "}
          <a href="https://sabrinas-town.vercel.app" className="underline">
            sabrinas-town.vercel.app
          </a>
        </footer>
      </body>
    </html>
  );
}
