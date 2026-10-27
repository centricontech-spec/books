import { formatPrice, FREE_POSTAGE, GLOBAL_EDITION_YEAR, products } from "@/data/shop";

export default function PriceBox() {
  return (
    <div className="rounded border-2 border-gold p-5 font-heading">
      <table className="w-full text-sm">
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="py-1.5 pr-4">{p.id === "hardcover" ? `Hard cover (Global Edition ${GLOBAL_EDITION_YEAR})` : p.name}</td>
              <td className="py-1.5 text-right">{formatPrice(p.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {FREE_POSTAGE && <p className="mt-3 text-center text-gold">FREE Postage</p>}
    </div>
  );
}
