"use client";

import { useState } from "react";
import NextLink from "next/link";

interface Story {
  id: string;
  slug?: string | null;
  title: string;
  excerpt?: string | null;
  storyType: string;
  narratorName?: string | null;
  subjectPersonName?: string | null;
  tags: string[];
}

interface StoriesFilterProps {
  stories: Story[];
  slug: string;
}

function StoryCard({
  story,
  slug,
  onTagClick,
}: {
  story: Story;
  slug: string;
  onTagClick: (tag: string) => void;
}) {
  const href = `/towns/${slug}/stories/${story.slug ?? story.id}`;
  const narrator = story.narratorName ?? story.subjectPersonName;

  return (
    <NextLink
      href={href}
      className="no-underline group flex items-start gap-6 py-7 border-b border-ink/10 last:border-b-0 hover:pl-2 transition-all duration-150"
    >
      {/* Accent bar */}
      <div className="flex-shrink-0 w-[3px] self-stretch bg-crimson/20 group-hover:bg-crimson transition-colors mt-1" />

      <div className="flex-1 min-w-0">
        {narrator && (
          <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-crimson/70 mb-1.5">
            {narrator}
          </p>
        )}
        <p className="font-editorial text-[clamp(20px,2.5vw,26px)] text-ink group-hover:text-crimson transition-colors leading-tight">
          {story.title}
        </p>
        {story.excerpt && (
          <p className="font-ui text-[18px] text-ink/50 leading-relaxed mt-2 line-clamp-2">
            {story.excerpt}
          </p>
        )}
        {story.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {story.tags.slice(0, 4).map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onTagClick(tag);
                }}
                className="font-ui text-[10px] uppercase tracking-[0.1em] text-ink/30 border border-ink/15 px-1.5 py-0.5 hover:border-crimson hover:text-crimson transition-colors cursor-pointer bg-transparent"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <span className="font-display text-crimson/40 group-hover:text-crimson transition-colors text-[20px] flex-shrink-0 mt-1.5">
        →
      </span>
    </NextLink>
  );
}

export default function StoriesFilter({ stories, slug }: StoriesFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(stories.flatMap((s) => s.tags))
  ).sort();

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  const filteredStories = activeTag
    ? stories.filter((s) => s.tags.includes(activeTag))
    : stories;

  const historical = filteredStories.filter(
    (s) => s.storyType === "HISTORICAL_VOICE"
  );
  const modern = filteredStories.filter(
    (s) => s.storyType === "MODERN_VOICE"
  );

  return (
    <div className="space-y-10">
      {/* Tag filter row */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setActiveTag(null)}
            className={`font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border transition-colors cursor-pointer ${
              activeTag === null
                ? "bg-crimson text-cream border-crimson"
                : "bg-transparent text-ink/50 border-ink/20 hover:border-crimson hover:text-crimson"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border transition-colors cursor-pointer ${
                activeTag === tag
                  ? "bg-crimson text-cream border-crimson"
                  : "bg-transparent text-ink/50 border-ink/20 hover:border-crimson hover:text-crimson"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Story list */}
      {activeTag ? (
        /* Filtered view — flat list under a single label */
        <section>
          <div className="border-t-[3px] border-ink pt-6 mb-8">
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Filtered by: {activeTag}
            </p>
          </div>
          {filteredStories.length === 0 ? (
            <p className="font-editorial italic text-[20px] text-ink/40 py-8">
              No stories match this tag.
            </p>
          ) : (
            <div className="space-y-0">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  slug={slug}
                  onTagClick={handleTagClick}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Default grouped view */
        <div className="space-y-16">
          {[
            { label: "Historical Voices", group: historical },
            { label: "Modern Voices", group: modern },
          ]
            .filter(({ group }) => group.length > 0)
            .map(({ label, group }) => (
              <section key={label}>
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    {label}
                  </p>
                </div>
                <div className="space-y-0">
                  {group.map((story) => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      slug={slug}
                      onTagClick={handleTagClick}
                    />
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}
    </div>
  );
}
