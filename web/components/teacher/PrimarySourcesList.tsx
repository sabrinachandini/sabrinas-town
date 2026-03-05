import { TeacherModuleResponse } from "@/lib/api";
import { PrimarySourceCard } from "@/components/town";
import { EditorialSection } from "@/components/editorial";

interface Props {
  sources: TeacherModuleResponse["primarySources"];
}

export function PrimarySourcesList({ sources }: Props) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <EditorialSection id="primary-sources" title="Primary Sources">
      <div className="space-y-4">
        {sources.map((s) => (
          <PrimarySourceCard
            key={s.id}
            title={s.title}
            type={s.type}
            sourceInfo={s.sourceInfo}
            url={s.url}
            analysisPrompts={s.analysisPrompts}
            credibilityTier={s.credibilityTier}
            teacherNarrative={s.teacherNarrative}
          />
        ))}
      </div>
    </EditorialSection>
  );
}
