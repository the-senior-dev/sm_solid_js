import { Product } from "../types";

// SOURCE OF CHANGE: We want to add a new discount rule
export default function calculateDiscout(product: Product) {
  let discount = 0;
  if (product.quantity > 10) {
    // 10% discount if we buy more than 10
    discount = product.price.amount * 0.1 * product.quantity;
  } else if (product.quantity > 5) {
    // 5% discount if we buy more than 5
    discount = product.price.amount * 0.05 * product.quantity;
  } else if (product.quantity > 1) {
    // 0% discount if we buy more than 1
    discount = 0;
  }
  return discount;
}
