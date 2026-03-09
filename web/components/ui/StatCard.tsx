interface StatCardProps {
  value: string | number;
  label: string;
  detail?: string;
}

export function StatCard({ value, label, detail }: StatCardProps) {
  return (
    <div className="bg-navy px-6 py-5">
      <p
        className="font-heading font-black text-white leading-none"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        {value}
      </p>
      <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase mt-2 text-gold">
        {label}
      </p>
      {detail && (
        <p className="font-sans text-[0.8rem] text-fog mt-1">{detail}</p>
      )}
    </div>
  );
}
