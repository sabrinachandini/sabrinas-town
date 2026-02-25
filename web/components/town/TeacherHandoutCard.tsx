interface TeacherHandoutCardProps {
  title: string;
  type: string;
  description: string;
}

export function TeacherHandoutCard({ title, type, description }: TeacherHandoutCardProps) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg print:border print:border-border-light">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-text-primary">{title}</p>
          <p className="text-small text-text-muted mt-1">
            {type.replace("_", " ")}
          </p>
        </div>
      </div>
      <p className="text-small mt-element">{description}</p>
    </div>
  );
}
