export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  quantity: number;
  price: {
    amount: number;
    currency: string;
  };
};

export enum ProductCategory {
  FOOD = "FOOD",
  DRINK = "DRINK",
  ELECTRONICS = "ELECTRONICS",
  BEAUTY = "BEAUTY",
  CLOTHING = "CLOTHING",
  OTHER = "OTHER",
}
