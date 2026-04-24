import { TeacherModuleResponse } from "@/lib/api";
import { Standards } from "./types";

interface Props {
  module: TeacherModuleResponse;
}

export function TeacherProductMeta({ module }: Props) {
  const standards = module.standards as unknown as Standards;

  const tags: string[] = [];

  tags.push(module.overview.gradeRange);
  tags.push(module.overview.estimatedDuration);

  const ccStandards = standards?.commonCore ?? [];
  ccStandards.slice(0, 2).forEach((cc) => tags.push(cc));

  const c3 = standards?.c3Framework ?? [];
  if (c3.length > 0) {
    tags.push(c3[0]);
  }

  return (
    <div className="flex flex-wrap gap-2 mt-6 mb-10">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1 rounded-full border border-accent-blue/30 text-small text-text-muted font-body"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
