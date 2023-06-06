type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: {
    amount: number;
    currency: string;
  };
};

enum ProductCategory {
  FOOD = "FOOD",
  DRINK = "DRINK",
  ELECTRONICS = "ELECTRONICS",
  OTHER = "OTHER",
}
