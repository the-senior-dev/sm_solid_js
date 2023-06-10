import Product from "./priceModule/domain/Product";
import ProductCategory from "./priceModule/domain/ProductCategory";
import {
  NonTaxableStrategy,
  StandardTaxStrategy,
} from "./priceModule/domain/TaxStrategy";
import Price from "./priceModule/domain/ProductPrice";
import { CartItem } from "./priceModule/domain/CartItem";

const list: CartItem[] = [
  new CartItem(
    new Product(1, "Milk", ProductCategory.FOOD, new Price(1.07, "EUR")),
    10,
    new NonTaxableStrategy()
  ),
  new CartItem(
    new Product(2, "Bread", ProductCategory.FOOD, new Price(2.5, "EUR")),
    5,
    new NonTaxableStrategy()
  ),
  new CartItem(
    new Product(3, "Apples", ProductCategory.FOOD, new Price(0.5, "EUR")),
    8,
    new NonTaxableStrategy()
  ),
  new CartItem(
    new Product(
      4,
      "Toothpaste",
      ProductCategory.BEAUTY,
      new Price(3.99, "EUR")
    ),
    3,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(5, "Shampoo", ProductCategory.BEAUTY, new Price(5.99, "EUR")),
    2,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(6, "T-shirt", ProductCategory.CLOTHING, new Price(9.99, "EUR")),
    7,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(7, "Jeans", ProductCategory.CLOTHING, new Price(39.99, "EUR")),
    4,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(
      8,
      "Laptop",
      ProductCategory.ELECTRONICS,
      new Price(999.99, "EUR")
    ),
    1,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(
      9,
      "Headphones",
      ProductCategory.ELECTRONICS,
      new Price(49.99, "EUR")
    ),
    6,
    new StandardTaxStrategy()
  ),
  new CartItem(
    new Product(10, "Book", ProductCategory.OTHER, new Price(14.99, "EUR")),
    12,
    new NonTaxableStrategy()
  ),
];

export default list;
