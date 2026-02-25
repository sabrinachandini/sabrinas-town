export const metadata = {
  title: "Teacher Resources — Print",
  robots: "noindex",
};

export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return <div className="print-layout">{children}</div>;
}
