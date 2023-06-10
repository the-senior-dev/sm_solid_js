import { ProductCategory } from "../../types";
import Product from "./Product";
import { NonTaxableStrategy, StandardTaxStrategy } from "./TaxStrategy";

// Composition Over Inheritance
const regularProduct = new Product(
  1,
  "Regular Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new StandardTaxStrategy()
);

const giftProduct = new Product(
  2,
  "Gift Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new NonTaxableStrategy()
);
