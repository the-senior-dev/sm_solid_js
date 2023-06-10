import { ProductCategory } from "../../types";

export default class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public quantity: number;
  public price: {
    amount: number;
    currency: string;
  };

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    quantity: number,
    price: { amount: number; currency: string }
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
  }

  calculateTotalPrice(): number {
    return this.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(taxRate: number): number {
    return this.calculateTotalPrice() * (1 + taxRate);
  }
}
