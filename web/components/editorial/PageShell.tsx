interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <article
      className={`mx-auto max-w-[860px] px-6 md:px-10 py-12 md:py-16 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
