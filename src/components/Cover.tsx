import Image from "next/image";

export default function Cover({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={750}
      priority={priority}
      className={`aspect-[4/5] h-auto w-full object-cover shadow-lg shadow-black/60 ${className}`}
    />
  );
}
