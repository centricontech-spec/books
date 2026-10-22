import Image from "next/image";

export default function Flag({ code, label, className = "" }: { code: string; label: string; className?: string }) {
  return (
    <Image
      src={`/flags/${code}.svg`}
      alt={`${label} flag`}
      width={64}
      height={48}
      className={`h-auto shrink-0 rounded-sm shadow ${className}`}
    />
  );
}
