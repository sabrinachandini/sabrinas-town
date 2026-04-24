"use client";

import { ReactNode, useState, useRef, useEffect } from "react";

interface SourcePopoverProps {
  children: ReactNode;
  title: string;
  publisher?: string;
  url?: string;
  tier?: string;
  notes?: string;
}

export function SourcePopover({
  children,
  title,
  publisher,
  url,
  tier,
  notes,
}: SourcePopoverProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <span ref={wrapperRef} className="relative inline">
      <button
        type="button"
        className="underline decoration-dotted underline-offset-3 decoration-1 text-accent-blue hover:text-accent-blue-hover cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </button>

      {open && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-white border border-border-light rounded-lg shadow-lg p-4 z-50 text-left"
          role="tooltip"
        >
          <span className="block font-heading font-semibold text-small text-text-primary">
            {title}
          </span>
          {publisher && (
            <span className="block text-small text-text-muted mt-1">
              {publisher}
            </span>
          )}
          {tier && (
            <span className="block text-small text-text-muted mt-1">
              Tier: {tier}
            </span>
          )}
          {notes && (
            <span className="block text-small text-text-muted mt-2">
              {notes}
            </span>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-small text-accent-blue mt-2"
            >
              View source →
            </a>
          )}
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-border-light" />
        </span>
      )}
    </span>
  );
}
