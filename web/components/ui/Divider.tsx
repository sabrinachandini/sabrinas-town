interface DividerProps {
  className?: string;
  spacing?: "default" | "tight" | "section";
}

export function Divider({ className = "", spacing = "default" }: DividerProps) {
  const spacingStyles = {
    tight: "my-tight",
    default: "my-element",
    section: "my-component",
  };

  return (
    <hr
      className={`border-t border-border-light ${spacingStyles[spacing]} ${className}`}
      aria-hidden="true"
    />
  );
}
