import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Link({
  href,
  children,
  className = "",
  external = false,
}: LinkProps) {
  const baseStyles =
    "text-accent-blue hover:text-accent-blue-hover underline decoration-accent-blue hover:decoration-accent-red underline-offset-3 decoration-1 transition-colors duration-200";

  if (external) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={`${baseStyles} ${className}`}>
      {children}
    </NextLink>
  );
}
