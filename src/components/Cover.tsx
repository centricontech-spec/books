import Image from "next/image";

export default function Cover({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} width={580} height={724} className={`aspect-[580/724] h-auto w-full object-cover shadow-lg shadow-black/60 ${className}`} />;
}
