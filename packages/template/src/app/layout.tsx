import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Town Name — History Is for Everyone",
  description: "Explore the Revolutionary War history of [Town Name].",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Replace with your town's <Header /> and <Footer /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
