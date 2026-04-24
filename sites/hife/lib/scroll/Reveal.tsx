"use client";

import { ReactNode } from "react";
import { useIntersectionReveal } from "./useIntersectionReveal";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  delay?: number;
  wrapperClassName?: string;
}

export function Reveal({
  children,
  as: Tag = "div",
  delay,
  wrapperClassName = "",
}: RevealProps) {
  const { ref, isVisible } = useIntersectionReveal();

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={`reveal${isVisible ? " is-visible" : ""}${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
