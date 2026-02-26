import type { TownSource } from "@/lib/api";

interface SourceGroupProps {
  label: string;
  sources: TownSource[];
}

export function SourceGroup({ label, sources }: SourceGroupProps) {
  if (sources.length === 0) return null;

  return (
    <details open className="group">
      <summary className="cursor-pointer list-none flex items-center gap-2 select-none">
        <span className="text-text-muted transition-transform group-open:rotate-90 text-small">
          &#9654;
        </span>
        <span className="text-small text-text-muted uppercase tracking-wide font-medium font-body">
          {label} ({sources.length})
        </span>
      </summary>
      <ul className="mt-4 space-y-2">
        {sources.map((source) => (
          <li key={source.id} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-blue shrink-0" />
            <div>
              <p className="text-small font-body">
                {source.url ? (
                  <a
                    href={source.url}
                    className="font-medium text-accent-blue hover:underline"
                  >
                    {source.title}
                  </a>
                ) : (
                  <span className="font-medium">{source.title}</span>
                )}
                {" — "}
                {source.publisherOrHolder}
                {source.notes?.toLowerCase().includes("needs verification") && (
                  <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-800">
                    Needs verification
                  </span>
                )}
              </p>
              {source.notes && (
                <p className="text-small text-text-muted font-body">
                  {source.notes}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </details>
  );
}
