import { ProductCategory } from "../../types";
import { TaxStrategy } from "./TaxStrategy";

export default class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public quantity: number;
  public price: {
    amount: number;
    currency: string;
  };
  private taxStrategy: TaxStrategy;

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    quantity: number,
    price: { amount: number; currency: string },
    taxStrategy: TaxStrategy
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.taxStrategy = taxStrategy;
  }

  calculateTotalPrice(): number {
    return this.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(): number {
    const tax = this.taxStrategy.calculateTax(this.calculateTotalPrice());
    return this.calculateTotalPrice() + tax;
  }
}
