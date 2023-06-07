import { Product, GiftProduct, ProductCategory } from "../types";

describe("Liskov Substitution Principle", () => {
  it("should violate the Liskov Substitution Principle", () => {
    const taxRate = 0.2; // 20% tax rate

    const product = new Product(1, "Regular Product", ProductCategory.FOOD, 2, {
      amount: 100,
      currency: "USD",
    });

    const giftProduct = new GiftProduct(
      2,
      "Gift Product",
      ProductCategory.FOOD,
      2,
      {
        amount: 100,
        currency: "USD",
      }
    );

    // LSP Violation: The Two Classes are not substitutable
    expect(() => product.calculateTotalPriceWithTax(taxRate)).not.toThrow(); // This will pass
    expect(() => giftProduct.calculateTotalPriceWithTax(taxRate)).not.toThrow(); // This will fail, as a violation of LSP
  });
});
