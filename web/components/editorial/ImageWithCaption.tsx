import Image from "next/image";

interface ImageWithCaptionProps {
  src?: string;
  alt: string;
  caption?: string;
}

// TODO: Replace placeholders with real images when available in public/
export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      {src ? (
        <div className="aspect-video relative overflow-hidden rounded-lg bg-bg-secondary">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video rounded-lg border-2 border-dashed border-border-light bg-bg-secondary flex items-center justify-center">
          <span className="text-small text-text-muted font-body">
            {alt}
          </span>
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 text-small text-text-muted font-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
