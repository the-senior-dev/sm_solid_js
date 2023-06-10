import ProductCategory from "./ProductCategory";

export default interface ProductInterface {
  id: number;
  name: string;
  category: ProductCategory;
  price: {
    amount: number;
    currency: string;
  };
}
