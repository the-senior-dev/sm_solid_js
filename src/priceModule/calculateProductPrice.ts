import Product from "./domain/Product";
import caculateProductPriceWithTax from "./caculateProductPriceWithTax";
import calculateDiscount from "./calculateDiscount";

export default function calculateProductPrice(product: Product) {
  const discount = calculateDiscount(product);
  const totalPrice =
    caculateProductPriceWithTax(product) * (1 - discount) * product.quantity;
  return totalPrice;
}
