"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  source: string;
  description?: string;
}

/**
 * Privacy-friendly YouTube embed.
 * Shows a static thumbnail with a play button until clicked,
 * then loads the iframe — avoiding third-party cookies on page load.
 */
export function YouTubeEmbed({ videoId, title, source, description }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <figure className="my-10">
      <div className="aspect-video relative overflow-hidden border-4 border-[#14100a] bg-[#14100a]">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Play: ${title}`}
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#14100a]/40 group-hover:bg-[#14100a]/25 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#cc3322] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7 ml-1"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#14100a]/80 to-transparent">
              <p className="font-ui text-[11px] tracking-[0.08em] uppercase text-white/90 text-left">
                {title}
              </p>
            </div>
          </button>
        )}
      </div>
      <figcaption className="mt-2 font-ui text-[11px] text-[rgba(20,16,10,0.45)] leading-relaxed border-l-2 border-[#cc3322] pl-3">
        {description
          ? `${description} — From ${source}.`
          : `From ${source}.`}
      </figcaption>
    </figure>
  );
}
