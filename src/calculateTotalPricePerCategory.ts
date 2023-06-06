import list from "./productList";

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
          return acc + product.price.amount;
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

  // 2. Apply The Tax
  const priceWithTax = Object.keys(totalPricePerCategory).reduce(
    (acc, category) => {
      const price = totalPricePerCategory[category];
      const tax = price * 0.2;

      return {
        ...acc,
        [category]: price + tax,
      };
    },
    totalPricePerCategory
  );

  return priceWithTax;
}
