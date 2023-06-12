import { Product, ProductCategory } from "../types";
import extractProductCategories from "../priceModule/extractProductCategories";

describe("extractProductCategories", () => {
  test("returns an object with unique categories", () => {
    const productList: Product[] = [
      {
        id: 1,
        name: "Product 1",
        category: ProductCategory.FOOD,
        quantity: 1,
        price: { amount: 10, currency: "USD" },
      },
      {
        id: 2,
        name: "Product 2",
        category: ProductCategory.DRINK,
        quantity: 2,
        price: { amount: 5, currency: "USD" },
      },
      {
        id: 3,
        name: "Product 3",
        category: ProductCategory.DRINK,
        quantity: 3,
        price: { amount: 7, currency: "USD" },
      },
      {
        id: 4,
        name: "Product 4",
        category: ProductCategory.ELECTRONICS,
        quantity: 4,
        price: { amount: 100, currency: "USD" },
      },
    ];
    const expected: Partial<Record<ProductCategory, number>> = {
      [ProductCategory.FOOD]: 0,
      [ProductCategory.DRINK]: 0,
      [ProductCategory.ELECTRONICS]: 0,
    };
    const result = extractProductCategories(productList);
    expect(result).toEqual(expected);
  });

  test("returns an empty object if input list is empty", () => {
    const productList: Product[] = [];
    const expected: Partial<Record<ProductCategory, number>> = {};
    const result = extractProductCategories(productList);
    expect(result).toEqual(expected);
  });
});
