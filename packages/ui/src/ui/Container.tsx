import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "narrow" | "wide";
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  size = "narrow",
  className = "",
  as: Component = "div",
}: ContainerProps) {
  const maxWidth = size === "narrow" ? "max-w-narrow" : "max-w-wide";

  return (
    <Component
      className={`mx-auto w-full px-6 md:px-12 ${maxWidth} ${className}`}
    >
      {children}
    </Component>
  );
}
