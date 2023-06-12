import ProductCategory from "./domain/ProductCategory";
import Product from "./domain/Product";
import { CartItem } from "./domain/CartItem";

export default function calculateCategoryPrice(
  itemList: CartItem[],
  category: ProductCategory
) {
  return itemList.reduce((acc, item) => {
    if (item.product.category === category) {
      const totalPrice = item.calculateTotalPriceWithTax();
      return acc + totalPrice;
    } else {
      return acc;
    }
  }, 0);
}
