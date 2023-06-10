import extractProductCategories from "./extractProductCategories";
import ProductCategory from "./domain/ProductCategory";
import calculateCategoryPrice from "./calculateCategoryPrice";
import { CartItem } from "./domain/CartItem";

export function calculateTotalPricePerCategory(
  itemList: CartItem[]
): Partial<Record<ProductCategory, number>> {
  // 1. Extract Categories
  const categories = extractProductCategories(itemList);

  // 2. Calculate Total Price Per Category
  const totalPricePerCategory = Object.keys(categories).reduce(
    (acc, category: ProductCategory) => {
      const totalPrice = calculateCategoryPrice(itemList, category);

      return {
        ...acc,
        [category]: totalPrice,
      };
    },
    categories
  );

  return totalPricePerCategory;
}
