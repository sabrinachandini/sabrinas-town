interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <article className={`mx-auto max-w-[1100px] px-8 md:px-16 py-16 bg-cream ${className ?? ""}`}>
      {children}
    </article>
  );
}
