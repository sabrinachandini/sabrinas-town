import type { Metadata } from "next";
import "./globals.css";
import { TownLayout } from "@hife/town-site";
import { townConfig } from "@/lib/town.config";

export const metadata: Metadata = {
  metadataBase: new URL("https://visityorktownva.com"),
  title: "Yorktown, VA — History Is for Everyone",
  description:
    "Explore the history of Yorktown, VA with History Is for Everyone.",
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
