import { Product, ProductCategory } from "../types";
import calculateProductPrice from "./calculateProductPrice";

export default function calculateCategoryPrice(
  productList: Product[],
  category: ProductCategory
) {
  return productList.reduce((acc, product) => {
    if (product.category === category) {
      const totalPrice = calculateProductPrice(product);
      return acc + totalPrice;
    } else {
      return acc;
    }
  }, 0);
}
