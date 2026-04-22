import { marked } from "marked";

interface MarkdownBioProps {
  content: string;
  dropCap?: boolean;
  className?: string;
}

marked.setOptions({ gfm: true, breaks: false });

export function MarkdownBio({ content, dropCap = true, className }: MarkdownBioProps) {
  const html = marked.parse(content) as string;

  return (
    <div
      className={[
        "markdown-bio",
        "font-editorial text-[18px] text-ink leading-[1.75] max-w-[620px]",
        // Headings
        "[&_h2]:font-ui [&_h2]:text-[11px] [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-[0.28em] [&_h2]:text-crimson [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-2 [&_h2]:before:content-[''] [&_h2]:before:w-4 [&_h2]:before:h-[2px] [&_h2]:before:bg-crimson [&_h2]:before:block",
        "[&_h3]:font-ui [&_h3]:text-[11px] [&_h3]:uppercase [&_h3]:tracking-[0.22em] [&_h3]:text-ink/40 [&_h3]:mt-8 [&_h3]:mb-3",
        // Paragraphs
        "[&_p]:mb-6",
        // Lists
        "[&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:pl-0 [&_ul]:list-none",
        "[&_ul_li]:flex [&_ul_li]:gap-3 [&_ul_li]:before:content-['—'] [&_ul_li]:before:text-crimson/50 [&_ul_li]:before:flex-shrink-0 [&_ul_li]:before:font-ui [&_ul_li]:before:text-[14px]",
        "[&_ol]:space-y-2 [&_ol]:mb-6 [&_ol]:pl-0 [&_ol]:list-none [&_ol]:counter-reset-[item]",
        "[&_ol_li]:flex [&_ol_li]:gap-3",
        // Bold / italic
        "[&_strong]:font-semibold [&_strong]:text-ink",
        "[&_em]:italic [&_em]:text-ink/70",
        // Drop cap on first paragraph
        dropCap ? "[&>p:first-of-type]:drop-cap" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
