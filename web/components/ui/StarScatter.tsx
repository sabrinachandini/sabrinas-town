export function StarScatter({ color = '#e8b84b', opacity = 0.22, className }: { color?: string; opacity?: number; className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      style={{ pointerEvents: 'none', userSelect: 'none', opacity }}
    >
      <path d="M12 28 L13.5 33 L19 33 L14.5 36.5 L16 42 L12 38.5 L8 42 L9.5 36.5 L5 33 L10.5 33 Z" fill={color} />
      <path d="M40 12 L41 15 L44 15 L41.8 16.8 L42.8 20 L40 18.2 L37.2 20 L38.2 16.8 L36 15 L39 15 Z" fill={color} />
      <path d="M46 38 L46.7 40.4 L49.3 40.4 L47.2 41.9 L47.9 44.3 L46 43 L44.1 44.3 L44.8 41.9 L42.7 40.4 L45.3 40.4 Z" fill={color} />
    </svg>
  );
}
