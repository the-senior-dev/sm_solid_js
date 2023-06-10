import Product from "../priceModule/domain/Product";
import {
  NonTaxableStrategy,
  StandardTaxStrategy,
} from "../priceModule/domain/TaxStrategy";
import extractProductCategories from "../priceModule/extractProductCategories";
import ProductCategory from "../priceModule/domain/ProductCategory";

describe("extractProductCategories", () => {
  test("returns an object with unique categories", () => {
    const productList: Product[] = [
      new Product(
        1,
        "Product 1",
        ProductCategory.FOOD,
        1,
        {
          amount: 10,
          currency: "USD",
        },
        new StandardTaxStrategy()
      ),
      new Product(
        2,
        "Product 2",
        ProductCategory.DRINK,
        2,
        {
          amount: 5,
          currency: "USD",
        },
        new StandardTaxStrategy()
      ),
      new Product(
        3,
        "Product 3",
        ProductCategory.DRINK,
        3,
        {
          amount: 7,
          currency: "USD",
        },
        new StandardTaxStrategy()
      ),
      new Product(
        4,
        "Product 4",
        ProductCategory.ELECTRONICS,
        4,
        {
          amount: 100,
          currency: "USD",
        },
        new NonTaxableStrategy()
      ),
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
