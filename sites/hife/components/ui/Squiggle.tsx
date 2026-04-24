interface SquiggleProps {
  width?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export function Squiggle({ width = 220, color = '#cc3322', opacity = 0.4, className }: SquiggleProps) {
  const h = 12;
  const segments = Math.floor(width / 26);
  let d = `M0 8`;
  for (let i = 0; i < segments; i++) {
    const x1 = (i + 0.5) * (width / segments);
    const x2 = (i + 1) * (width / segments);
    const y1 = i % 2 === 0 ? 2 : 14;
    const y2 = 8;
    d += ` Q${x1} ${y1} ${x2} ${y2}`;
  }
  return (
    <svg className={className} width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ display: 'block' }}>
      <path d={d} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}
