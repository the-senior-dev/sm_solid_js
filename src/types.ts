interface TaxStrategy {
  calculateTax(amount: number): number;
}

class StandardTaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * 0.2; // 20% tax
  }
}

class NonTaxableStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return 0;
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

export class ProductBase {
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

// Usage
const regularProduct = new ProductBase(
  1,
  "Regular Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new StandardTaxStrategy()
);

const giftProduct = new ProductBase(
  2,
  "Gift Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new NonTaxableStrategy()
);
