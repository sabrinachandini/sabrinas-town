import Image from "next/image";

interface ImageWithCaptionProps {
  src?: string;
  alt: string;
  caption?: string;
}

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-10">
      {src ? (
        <div className="aspect-video relative overflow-hidden border-4 border-[#14100a]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video border-[3px] border-dashed border-[rgba(20,16,10,0.15)] bg-[#f2ece0] flex items-center justify-center">
          <span className="font-ui text-[11px] tracking-[0.1em] uppercase text-[rgba(20,16,10,0.35)]">
            {alt}
          </span>
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 font-ui text-[11px] text-[rgba(20,16,10,0.45)] leading-relaxed border-l-2 border-[#cc3322] pl-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
