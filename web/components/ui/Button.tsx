import { ReactNode, ButtonHTMLAttributes } from "react";
import NextLink from "next/link";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
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
    "inline-flex items-center justify-center font-body font-medium transition-all duration-200 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "border-accent-blue text-accent-blue bg-transparent hover:bg-accent-blue hover:text-white",
    secondary:
      "border-border-light text-text-primary bg-transparent hover:border-text-muted",
  };

  const sizeStyles = {
    default: "px-6 py-3 text-body",
    small: "px-4 py-2 text-small",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Link button
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

  // Regular button
  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
