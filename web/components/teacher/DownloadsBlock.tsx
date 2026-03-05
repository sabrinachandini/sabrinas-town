import { TeacherModuleResponse } from "@/lib/api";
import { TeacherHandoutCard } from "@/components/town";
import { EditorialSection } from "@/components/editorial";

interface Props {
  handouts: TeacherModuleResponse["handouts"];
}

export function DownloadsBlock({ handouts }: Props) {
  if (handouts.length === 0) {
    return null;
  }

  return (
    <EditorialSection id="downloads" title="Handouts & Materials">
      <div className="space-y-4">
        {handouts.map((h) => (
          <TeacherHandoutCard
            key={h.title}
            title={h.title}
            type={h.type}
            description={h.description}
          />
        ))}
      </div>
    </EditorialSection>
  );
}
