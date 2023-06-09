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
      {
        id: 1,
        name: "product1",
        category: ProductCategory.ELECTRONICS,
        price: { amount: 100, currency: "USD" },
        quantity: 0,
      },
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 0 });
  });

  it("should return correct total price for each category when product quantity is between 1 and 5", () => {
    const productList: Product[] = [
      {
        id: 2,
        name: "product2",
        category: ProductCategory.ELECTRONICS,
        price: { amount: 100, currency: "USD" },
        quantity: 3,
      },
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 357 });
  });

  it("should return correct total price for each category when product quantity is between 6 and 10", () => {
    const productList: Product[] = [
      {
        id: 3,
        name: "product3",
        category: ProductCategory.ELECTRONICS,
        price: { amount: 100, currency: "USD" },
        quantity: 7,
      },
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 791.35 });
  });

  it("should return correct total price for each category when product quantity is more than 10", () => {
    const productList: Product[] = [
      {
        id: 4,
        name: "product4",
        category: ProductCategory.ELECTRONICS,
        price: { amount: 100, currency: "USD" },
        quantity: 15,
      },
    ];

    const result = calculateTotalPricePerCategory(productList);

    expect(result).toEqual({
      [ProductCategory.ELECTRONICS]: 1606.5000000000002,
    });
  });
});
