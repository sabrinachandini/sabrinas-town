interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={`font-body text-body text-[1.0625rem] md:text-[1.125rem] leading-[1.85] text-text-primary [&>p+p]:mt-7 max-w-[660px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
