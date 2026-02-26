interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <article
      className={`mx-auto max-w-[860px] px-6 py-16 md:py-24 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
