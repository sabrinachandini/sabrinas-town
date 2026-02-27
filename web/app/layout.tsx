import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sabrina's Town | American Revolution Tourism Network",
  description:
    "A living network of America's Revolutionary towns — built for travelers, teachers, and towns themselves. History is for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const version = process.env.VERCEL_GIT_COMMIT_SHA
    ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7)
    : "dev";

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Header />
        {children}
        <div className="text-center pb-4">
          <a
            href="/changelog"
            className="text-small text-text-muted hover:text-text-secondary transition-colors"
          >
            v{version}
          </a>
        </div>
      </body>
    </html>
  );
}
