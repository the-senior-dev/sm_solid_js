import { Product, ProductCategory } from "./types";

export function calculateTotalPricePerCategory(
  productList: Product[]
): Partial<Record<ProductCategory, number>> {
  // 1. Extract Categories
  const categories = productList.reduce((acc, product) => {
    if (product.category in acc) {
      return acc;
    } else {
      return {
        ...acc,
        [product.category]: product.category,
      };
    }
  }, {});

  // 2. Calculate Total Price Per Category
  const totalPricePerCategory = Object.keys(categories).reduce(
    (acc, category) => {
      const totalPrice = productList.reduce((acc, product) => {
        if (product.category === category) {
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
          return (
            acc +
            product.price.amount * (1 + 0.19) * product.quantity -
            discount
          );
        } else {
          return acc;
        }
      }, 0);

      return {
        ...acc,
        [category]: totalPrice,
      };
    },
    categories
  );

  return totalPricePerCategory;
}
