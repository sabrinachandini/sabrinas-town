import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "body" | "small";
  muted?: boolean;
  className?: string;
  as?: "p" | "span" | "div";
}

export function Text({
  children,
  size = "body",
  muted = false,
  className = "",
  as: Component = "p",
}: TextProps) {
  const sizeClass = size === "body" ? "text-body" : "text-small";
  const colorClass = muted ? "text-text-muted" : "text-text-primary";

  return (
    <Component className={`font-body ${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}
