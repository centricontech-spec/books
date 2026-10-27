import { EDITORIAL_REVIEW } from "@/data/editorialReview";

// Drawn as text, laid out like the manuscript pages around it. Sizes are points on the 433.8 pt wide
// manuscript page, scaled to the page's width; the wrapper is the size container.
const pt = (n: number) => `${((n * 100) / 433.8).toFixed(3)}cqw`;

export default function EditorialReviewPage() {
  return (
    <div className="@container">
      <div className="relative aspect-[900/1345] bg-white text-black" style={{ fontFamily: "Arial, 'Liberation Sans', Helvetica, sans-serif" }}>
        <div className="absolute border-solid border-black/80" style={{ inset: pt(24), borderWidth: pt(0.5) }} />
        <div
          className="absolute border-solid border-black"
          style={{ left: pt(54.6), top: pt(56.3), width: pt(327.5), height: pt(524.1), borderWidth: pt(0.75), padding: `${pt(4)} ${pt(7.2)}` }}
        >
          <h2 className="text-center font-bold" style={{ fontSize: pt(14), lineHeight: pt(16.1) }}>
            {EDITORIAL_REVIEW.title}
          </h2>
          <div style={{ marginTop: pt(12.4), fontSize: pt(11), lineHeight: pt(12.72) }}>
            {EDITORIAL_REVIEW.blocks.map((block, i) => (
              <div key={i} style={{ marginTop: i ? pt(12.72) : 0 }}>
                {block.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
