import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Barlow, Lora } from "next/font/google";
import { Header, Footer } from "@/components/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "History is for Everyone | American Revolution Research Network",
  description:
    "A living network of America's Revolutionary towns — built for travelers, teachers, and towns themselves. History is for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${barlowCondensed.variable} ${barlow.variable} ${lora.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
