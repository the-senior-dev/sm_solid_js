import { Product } from "../types";
import calculateDiscount from "./calculateDiscount";

// SOURCE OF CHANGE: We want to add a new discount rule
// SOURCE OF CHANGE: We want to add a new TAX rule
export default function calculateProductPrice(product: Product) {
  const discount = calculateDiscount(product);
  const totalPrice =
    product.price.amount * (1 + 0.19) * product.quantity -
    discount * (1 + 0.19);
  return totalPrice;
}
