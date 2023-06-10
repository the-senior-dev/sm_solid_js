import Product from "./Product";

export default class GiftProduct extends Product {
  private isTaxable = true;
  calculateTotalPriceWithTax(taxRate: number): number {
    // violation of LSP
    throw new Error("Gift products are not taxable");
  }
}
