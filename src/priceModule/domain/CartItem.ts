import ProductInterface from "./ProductInterface";
import { TaxStrategy } from "./TaxStrategy";

export class CartItem {
  public product: ProductInterface;
  public quantity: number;
  public taxStrategy: TaxStrategy;
  constructor(
    product: ProductInterface,
    quantity: number,
    taxStrategy: TaxStrategy
  ) {
    this.product = product;
    this.quantity = quantity;
    this.taxStrategy = taxStrategy;
  }

  calculateTotalPrice(): number {
    return this.product.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(): number {
    const tax = this.taxStrategy.calculateTax(this.calculateTotalPrice());
    return this.calculateTotalPrice() + tax;
  }
}
