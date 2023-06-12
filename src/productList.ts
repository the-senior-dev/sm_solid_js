import { ProductCategory } from "./types";
import Product from "./priceModule/domain/Product";

const productList: Product[] = [
  new Product(1, "Milk", ProductCategory.FOOD, 10, {
    amount: 1.07,
    currency: "EUR",
  }),
  new Product(2, "Bread", ProductCategory.FOOD, 5, {
    amount: 2.5,
    currency: "EUR",
  }),
  new Product(3, "Apples", ProductCategory.FOOD, 8, {
    amount: 0.5,
    currency: "EUR",
  }),
  new Product(4, "Toothpaste", ProductCategory.BEAUTY, 3, {
    amount: 3.99,
    currency: "EUR",
  }),
  new Product(5, "Shampoo", ProductCategory.BEAUTY, 2, {
    amount: 5.99,
    currency: "EUR",
  }),
  new Product(6, "T-shirt", ProductCategory.CLOTHING, 7, {
    amount: 9.99,
    currency: "EUR",
  }),
  new Product(7, "Jeans", ProductCategory.CLOTHING, 4, {
    amount: 39.99,
    currency: "EUR",
  }),
  new Product(8, "Laptop", ProductCategory.ELECTRONICS, 1, {
    amount: 999.99,
    currency: "EUR",
  }),
  new Product(9, "Headphones", ProductCategory.ELECTRONICS, 6, {
    amount: 49.99,
    currency: "EUR",
  }),
  new Product(10, "Book", ProductCategory.OTHER, 12, {
    amount: 14.99,
    currency: "EUR",
  }),
];

export default productList;
