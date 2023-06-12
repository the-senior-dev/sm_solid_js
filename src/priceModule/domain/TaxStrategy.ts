import { TAX_RATE } from "../config";

export interface TaxStrategy {
  calculateTax(amount: number): number;
}

export class StandardTaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * TAX_RATE;
  }
}

export class NonTaxableStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return 0;
  }
}
