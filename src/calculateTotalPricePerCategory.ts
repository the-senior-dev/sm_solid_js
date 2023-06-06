import extractProductCategories from "./utils/extractProductCategories";
import { Product, ProductCategory } from "./types";
import calculateCategoryPrice from "./utils/calculateCategoryPrice";

export default function calculateTotalPricePerCategory(
  productList: Product[]
): Partial<Record<ProductCategory, number>> {
  // 1. Extract Categories
  const categories = extractProductCategories(productList);

  // 2. Calculate Total Price Per Category
  const totalPricePerCategory = Object.keys(categories).reduce(
    (acc, category: ProductCategory) => {
      const totalPrice = calculateCategoryPrice(productList, category);

      return {
        ...acc,
        [category]: totalPrice,
      };
    },
    categories
  );

  return totalPricePerCategory;
}
