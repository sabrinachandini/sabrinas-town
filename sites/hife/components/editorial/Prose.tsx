interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={`font-editorial text-[1.0625rem] md:text-[1.125rem] leading-[1.8] text-[#0e1428] [&>p+p]:mt-7 max-w-[620px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
