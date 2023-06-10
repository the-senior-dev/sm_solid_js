import { ProductCategory } from "../types";
import Product from "../priceModule/domain/Product";
import {
  StandardTaxStrategy,
  NonTaxableStrategy,
} from "../priceModule/domain/TaxStrategy";

describe("Liskov Substitution Principle", () => {
  it("should violate the Liskov Substitution Principle", () => {
    const taxStrategy = new StandardTaxStrategy();

    const product = new Product(
      1,
      "Regular Product",
      ProductCategory.FOOD,
      2,
      { amount: 100, currency: "USD" },
      taxStrategy
    );

    const giftTaxStrategy = new NonTaxableStrategy();

    const giftProduct = new Product(
      2,
      "Gift Product",
      ProductCategory.FOOD,
      2,
      { amount: 100, currency: "USD" },
      giftTaxStrategy
    );

    // LSP Violation: The Two Classes are not substitutable
    expect(() => product.calculateTotalPriceWithTax()).not.toThrow(); // This will pass
    expect(() => giftProduct.calculateTotalPriceWithTax()).not.toThrow(); // This will fail, as a violation of LSP
  });
});
