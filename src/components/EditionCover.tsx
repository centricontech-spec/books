import type { CoverVariant, Edition } from "@/data/editions";
import { coverSrc } from "@/data/editions";
import Cover from "./Cover";
import Flag from "./Flag";

const placeholder: Record<CoverVariant, { box: string; border: string; title: string; text: string }> = {
  black: { box: "bg-black", border: "border-gold", title: "text-gold", text: "text-white/80" },
  colour: { box: "bg-leaf", border: "border-gold", title: "text-gold", text: "text-white/85" },
  white: { box: "bg-white", border: "border-leaf", title: "text-leaf", text: "text-black/70" },
};

type Props = { edition: Edition; variant: CoverVariant; side?: "front" | "back"; className?: string; priority?: boolean };

// The edition's soft cover, or a cover-shaped stand-in for editions whose artwork hasn't been supplied yet.
// Stand-ins only exist for the front; a missing back cover renders nothing.
export default function EditionCover({ edition, variant, side = "front", className = "", priority = false }: Props) {
  const src = coverSrc(edition, variant, side);
  const label = `${edition.country} ${edition.language} edition, ${variant} ${side === "back" ? "back cover" : "cover"}`;
  if (src) return <Cover src={src} alt={label} className={className} priority={priority} />;
  if (side === "back") return null;

  const s = placeholder[variant];
  return (
    <div role="img" aria-label={`${edition.country} ${edition.language} edition, cover coming soon`} className={`@container w-full shadow-lg shadow-black/60 ${className}`}>
      <div className={`aspect-[4/5] p-[4cqw] ${s.box}`}>
        <div className={`flex h-full flex-col items-center justify-between border-2 border-dashed px-[4cqw] py-[6cqw] text-center ${s.border}`}>
          <span className={`self-start font-display text-[7cqw] font-bold leading-none ${s.title}`}>MANA GLOBAL</span>
          <div className="flex flex-col items-center gap-[4cqw]">
            <Flag code={edition.flag} label={edition.country} className="w-[26cqw]" />
            <span className={`font-display text-[10cqw] font-bold uppercase leading-none ${s.title}`}>{edition.country}</span>
            <span className={`font-heading text-[6cqw] uppercase tracking-wider ${s.text}`}>{edition.language} edition</span>
          </div>
          <div className="flex flex-col items-center gap-[2cqw]">
            <span className={`font-display text-[7cqw] font-bold ${s.title}`}>ROBIN TERRY</span>
            <span className={`font-heading text-[5cqw] uppercase tracking-wider ${s.text}`}>Cover coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
