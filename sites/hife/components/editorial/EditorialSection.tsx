import { Separator } from "@/components/ui/separator";

interface EditorialSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function EditorialSection({
  id,
  title,
  children,
}: EditorialSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 pt-16 md:pt-20">
      <h2 className="font-heading text-[2rem] md:text-[2.25rem] tracking-tight">
        {title}
      </h2>
      <Separator className="mt-4 mb-8 bg-border-light" />
      <div className="space-y-6">{children}</div>
    </section>
  );
}
