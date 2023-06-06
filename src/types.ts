export class Product {
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

// This requires all subclasses to behave in the same way as the parent class.
// To achieve that, your subclasses need to follow these rules:

// Don’t implement any stricter validation rules on input parameters than implemented by the parent class.
// Apply at the least the same rules to all output parameters as applied by the parent class.

// GIFT PRODUCT cannot be used in place of Product
export class GiftProduct extends Product {
  private isTaxable = true;
  calculateTotalPriceWithTax(taxRate: number): number {
    // violation of LSP
    throw new Error("Gift products are not taxable");
  }
}

export enum ProductCategory {
  FOOD = "FOOD",
  DRINK = "DRINK",
  ELECTRONICS = "ELECTRONICS",
  BEAUTY = "BEAUTY",
  CLOTHING = "CLOTHING",
  OTHER = "OTHER",
}
