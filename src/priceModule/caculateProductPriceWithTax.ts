import { Product } from "../types";
import { TAX_RATE } from "./config";

// SOURCE OF CHANGE: When the Tax Logic Changes
export default function caculateProductPriceWithTax(
  product: Product,
  discount: number
) {
  return (
    product.price.amount * (1 + TAX_RATE) * product.quantity -
    discount * (1 + TAX_RATE)
  );
}
