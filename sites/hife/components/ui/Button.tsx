import { ReactNode, ButtonHTMLAttributes } from "react";
import NextLink from "next/link";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "small";
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-condensed font-bold tracking-[0.08em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

  const variantStyles = {
    // Crimson fill, white text
    primary: "bg-crimson text-white hover:bg-[#d4202f] active:scale-[0.98]",
    // Legacy — same as primary for now
    secondary: "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white active:scale-[0.98]",
    // Transparent, white border, white text — for dark backgrounds
    outline: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy active:scale-[0.98]",
    // Gold text + arrow, no border — for inline CTAs
    ghost: "text-gold bg-transparent hover:text-white active:scale-[0.98] p-0",
  };

  const sizeStyles = {
    default: variant === "ghost" ? "text-[0.9rem]" : "px-6 py-3 text-[0.875rem]",
    small:   variant === "ghost" ? "text-[0.8rem]" : "px-4 py-2 text-[0.8rem]",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;

    if (external) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} className={combinedStyles} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </NextLink>
    );
  }

  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
