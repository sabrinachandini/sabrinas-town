import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components/site";
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
  metadataBase: new URL("https://sabrinas-town.vercel.app"),
  title: {
    default: "History is for Everyone | American Revolution Research Network",
    template: "%s | History is for Everyone",
  },
  description:
    "A living network of America's Revolutionary towns — built for travelers, teachers, and towns themselves. History is for everyone.",
  openGraph: {
    type: "website",
    siteName: "History is for Everyone",
    description:
      "A living network of America's Revolutionary towns — built for travelers, teachers, and towns themselves.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo-star.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "History is for Everyone",
      url: "https://sabrinas-town.vercel.app",
      logo: "https://sabrinas-town.vercel.app/logo.png",
      description: "A living network of America's Revolutionary towns — built for travelers, teachers, and towns themselves.",
      founder: { "@type": "Person", name: "Sabrina Bhattacharjya", url: "https://sabrinachandini.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "History is for Everyone",
      url: "https://sabrinas-town.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://sabrinas-town.vercel.app/search?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${instrumentSerif.variable} ${dmSans.variable} bg-cream text-ink`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#1a3a72] focus:text-white focus:text-sm focus:font-medium focus:rounded focus:no-underline"
        >
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
