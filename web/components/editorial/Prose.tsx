interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={`font-body text-body leading-[1.8] text-text-primary [&>p+p]:mt-6 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
