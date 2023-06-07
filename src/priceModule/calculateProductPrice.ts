import { Product } from "../types";
import caculateProductPriceWithTax from "./caculateProductPriceWithTax";
import calculateDiscount from "./calculateDiscount";

export default function calculateProductPrice(product: Product) {
  const discount = calculateDiscount(product);
  const totalPrice = caculateProductPriceWithTax(product, discount);
  return totalPrice;
}
