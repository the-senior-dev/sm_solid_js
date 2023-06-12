import Product from "./domain/Product";
import { DISCOUNT_RULES } from "./config";
import { CartItem } from "./domain/CartItem";

interface DiscountRule {
  quantity: number;
  discount: number;
}

// The rules array is passed as an argument to the calculateDiscount function
function calculateDiscountBasedOnRules(item: CartItem, rules: DiscountRule[]) {
  // Sort rules by quantity in descending order
  const sortedRules = [...rules].sort((a, b) => b.quantity - a.quantity);

  for (let rule of sortedRules) {
    if (item.quantity > rule.quantity) {
      // Apply the first matching rule
      return rule.discount;
    }
  }

  // No rule matched, return 0
  return 0;
}

// we use a higher-order function to pass the rules array to the calculateDiscount function
export default function calculateDiscount(item: CartItem) {
  return calculateDiscountBasedOnRules(item, DISCOUNT_RULES);
}
