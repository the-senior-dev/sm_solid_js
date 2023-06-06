import { Product } from "../types";
import rules from "../config/discountRules";

interface DiscountRule {
  quantity: number;
  discount: number;
}

// The rules array is passed as an argument to the calculateDiscount function
function calculateDiscountBasedOnRules(
  product: Product,
  rules: DiscountRule[]
) {
  // Sort rules by quantity in descending order
  const sortedRules = [...rules].sort((a, b) => b.quantity - a.quantity);

  for (let rule of sortedRules) {
    if (product.quantity >= rule.quantity) {
      // Apply the first matching rule
      return product.price.amount * rule.discount * product.quantity;
    }
  }

  // No rule matched, return 0
  return 0;
}

// we use a higher-order function to pass the rules array to the calculateDiscount function
export default function calculateDiscount(product: Product) {
  return calculateDiscountBasedOnRules(product, rules);
}
