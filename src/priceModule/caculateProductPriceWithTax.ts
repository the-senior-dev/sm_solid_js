import { Product } from "../types";

const TAX = 0.19;

// SOURCE OF CHANGE: When the Tax Logic Changes
export default function caculateProductPriceWithTax(
  product: Product,
  discount: number
) {
  return (
    product.price.amount * (1 + TAX) * product.quantity - discount * (1 + TAX)
  );
}
