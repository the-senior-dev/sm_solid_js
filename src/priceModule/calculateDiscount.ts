import { Product } from "../types";

// SOURCE OF CHANGE: We want to add a new discount rule
export default function calculateDiscout(product: Product) {
  let discount = 0;
  if (product.quantity > 10) {
    // 10% discount if we buy more than 10
    discount = 0.1;
  } else if (product.quantity > 5) {
    // 5% discount if we buy more than 5
    discount = 0.05;
  } else if (product.quantity > 1) {
    // 0% discount if we buy more than 1
    discount = 0;
  }
  return discount;
}
