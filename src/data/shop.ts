// Prices and ordering, from the client's website template.
//
// To take card payments, create a Stripe Payment Link for each product
// (dashboard.stripe.com → Payment Links) and paste it into `paymentLink`.
// While a link is empty, the Buy button opens an order email to the author instead.

// Shown on every Global Edition. Change it each year (2027, 2028, ...).
export const GLOBAL_EDITION_YEAR = 2026;

export const ORDER_EMAIL = "robinterry@mana-global.com";

export type Product = {
  id: "hardcover" | "softcover" | "video" | "ebook";
  name: string;
  price: number;
  note: string;
  paymentLink: string;
};

export const products: Product[] = [
  { id: "hardcover", name: `Global Edition ${GLOBAL_EDITION_YEAR} · Hard cover`, price: 48, note: "Every country edition in one hardback book", paymentLink: "" },
  { id: "softcover", name: "Soft cover", price: 35, note: "Your country edition, choice of black, colour or white cover", paymentLink: "" },
  { id: "video", name: "Video App", price: 10, note: "The book presented as video", paymentLink: "" },
  { id: "ebook", name: "E-Book", price: 8, note: "Read on any phone, tablet or computer", paymentLink: "" },
];

export const CURRENCY = "AUD";
export const FREE_POSTAGE = true;

export function getProduct(id: Product["id"]) {
  return products.find((p) => p.id === id)!;
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)} ${CURRENCY}`;
}
