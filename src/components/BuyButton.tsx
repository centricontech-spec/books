import { formatPrice, ORDER_EMAIL, type Product } from "@/data/shop";

// Opens the product's Stripe Payment Link, or an order email while no link is set.
export default function BuyButton({ product, detail, label = "Buy", className = "" }: { product: Product; detail?: string; label?: string; className?: string }) {
  const item = detail ? `${product.name} (${detail})` : product.name;
  const href =
    product.paymentLink ||
    `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Book order: ${item}`)}&body=${encodeURIComponent(
      `Hello Robin,\n\nI would like to order:\n${item} · ${formatPrice(product.price)}\n\nName:\nPostal address:\nPhone:\n\nThank you.`
    )}`;
  return (
    <a
      href={href}
      target={product.paymentLink ? "_blank" : undefined}
      rel={product.paymentLink ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded bg-gold px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white ${className}`}
    >
      {label} · {formatPrice(product.price)}
    </a>
  );
}
