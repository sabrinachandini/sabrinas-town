import { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
}

const styles = {
  1: "text-h1 font-heading font-bold tracking-tight",
  2: "text-h2 font-heading font-semibold tracking-tight",
  3: "text-h3 font-heading font-semibold",
};

export function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as const;
  const baseStyle = styles[level];

  return <Tag className={`${baseStyle} ${className}`}>{children}</Tag>;
}
