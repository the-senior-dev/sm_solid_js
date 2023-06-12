import { calculateTotalPricePerCategory } from "../priceModule";
import Product from "../priceModule/domain/Product";
import {
  NonTaxableStrategy,
  StandardTaxStrategy,
} from "../priceModule/domain/TaxStrategy";
import ProductCategory from "../priceModule/domain/ProductCategory";
import { CartItem } from "../priceModule/domain/CartItem";
import Price from "../priceModule/domain/ProductPrice";

describe("calculateTotalPricePerCategory", () => {
  it("should return an empty object when the productList is empty", () => {
    const cartItemList: CartItem[] = [];

    const result = calculateTotalPricePerCategory(cartItemList);

    expect(result).toEqual({});
  });

  it("should return correct total price for each category when product quantity is less than 1", () => {
    const cartItemList: CartItem[] = [
      new CartItem(
        new Product(
          1,
          "product1",
          ProductCategory.ELECTRONICS,
          new Price(100, "USD")
        ),
        0,
        new StandardTaxStrategy()
      ),
    ];

    const result = calculateTotalPricePerCategory(cartItemList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 0 });
  });

  it("should return correct total price for each category when product quantity is between 1 and 5", () => {
    const cartItemList: CartItem[] = [
      new CartItem(
        new Product(
          2,
          "product2",
          ProductCategory.ELECTRONICS,
          new Price(100, "USD")
        ),
        3,
        new StandardTaxStrategy()
      ),
    ];

    const result = calculateTotalPricePerCategory(cartItemList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 357 }); // 300 + 57 for tax
  });

  it("should return correct total price for each category when product quantity is between 6 and 10", () => {
    const cartItemList: CartItem[] = [
      new CartItem(
        new Product(
          3,
          "product3",
          ProductCategory.ELECTRONICS,
          new Price(100, "USD")
        ),
        7,
        new StandardTaxStrategy()
      ),
    ];

    const result = calculateTotalPricePerCategory(cartItemList);

    expect(result).toEqual({ [ProductCategory.ELECTRONICS]: 833 }); // 700 + 133 for tax
  });

  it("should return correct total price for each category when product quantity is more than 10", () => {
    const cartItemList: CartItem[] = [
      new CartItem(
        new Product(
          4,
          "product4",
          ProductCategory.ELECTRONICS,
          new Price(100, "USD")
        ),
        15,
        new StandardTaxStrategy()
      ),
    ];

    const result = calculateTotalPricePerCategory(cartItemList);

    expect(result).toEqual({
      [ProductCategory.ELECTRONICS]: 1785,
    }); // 1500 + 285 for tax
  });
});
