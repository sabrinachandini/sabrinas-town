import type { Metadata } from "next";
import "./globals.css";
import { TownLayout } from "@hife/town-site";
import { townConfig } from "@/lib/town.config";

export const metadata: Metadata = {
  title: "Lexington, MA — History Is for Everyone",
  description:
    "Explore the Revolutionary War history of Lexington, Massachusetts — where the first shot was fired on April 19, 1775.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TownLayout config={townConfig}>{children}</TownLayout>
      </body>
    </html>
  );
}
