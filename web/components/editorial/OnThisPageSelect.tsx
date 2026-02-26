"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "people", label: "People" },
  { id: "places", label: "Places" },
  { id: "teacher", label: "Teacher" },
  { id: "stories", label: "Stories" },
  { id: "sources", label: "Sources" },
] as const;

export function OnThisPageSelect() {
  function handleChange(value: string) {
    const el = document.getElementById(value);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${value}`);
    }
  }

  return (
    <div className="flex justify-end">
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full md:w-[200px] bg-white border-border-light text-small font-body">
          <SelectValue placeholder="On this page" />
        </SelectTrigger>
        <SelectContent>
          {SECTIONS.map((s) => (
            <SelectItem key={s.id} value={s.id} className="text-small font-body">
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
