import { calculateTotalPricePerCategory } from "../calculateTotalPricePerCategory";
import { Product, ProductCategory, Price } from "../types";

describe("calculateTotalPricePerCategory", () => {
  it("should return an object containing the total price per category", () => {
    const productList: Product[] = [
      {
        id: 1,
        name: "Product 1",
        category: ProductCategory.ELECTRONICS,
        price: new Price({ amount: 100, currency: "USD" }),
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        category: ProductCategory.Fashion,
        price: new Price({ amount: 50, currency: "USD" }),
        quantity: 5,
      },
      {
        id: 3,
        name: "Product 3",
        category: ProductCategory.FOOD,
        price: new Price({ amount: 10, currency: "USD" }),
        quantity: 10,
      },
      {
        id: 4,
        name: "Product 4",
        category: ProductCategory.FOOD,
        price: new Price({ amount: 5, currency: "USD" }),
        quantity: 1,
      },
    ];

    const expectedOutput = {
      [ProductCategory.ELECTRONICS]: 238,
      [ProductCategory.FASHION]: 222.75,
      [ProductCategory.FOOD]: 193.6,
    };

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty object if the product list is empty", () => {
    const productList: Product[] = [];

    const expectedOutput = {};

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual(expectedOutput);
  });
});
