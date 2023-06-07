import { calculateTotalPricePerCategory } from "../priceModule";
import { Product, ProductCategory } from "../types";

describe("calculateTotalPricePerCategory", () => {
  it("should return an empty object when the productList is empty", () => {
    const productList: Product[] = [];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({});
  });

  it("should return correct total price for each category when product quantity is less than 1", () => {
    const productList: Product[] = [
      new Product(1, "product1", ProductCategory.ELECTRONICS, 0, {
        amount: 100,
        currency: "USD",
      }),
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 0 });
  });

  it("should return correct total price for each category when product quantity is between 1 and 5", () => {
    const productList: Product[] = [
      new Product(2, "product2", ProductCategory.ELECTRONICS, 3, {
        amount: 100,
        currency: "USD",
      }),
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 357 });
  });

  it("should return correct total price for each category when product quantity is between 6 and 10", () => {
    const productList: Product[] = [
      new Product(3, "product3", ProductCategory.ELECTRONICS, 7, {
        amount: 100,
        currency: "USD",
      }),
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 791.35 });
  });

  it("should return correct total price for each category when product quantity is more than 10", () => {
    const productList: Product[] = [
      new Product(4, "product4", ProductCategory.ELECTRONICS, 15, {
        amount: 100,
        currency: "USD",
      }),
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 1606.5 });
  });
});
