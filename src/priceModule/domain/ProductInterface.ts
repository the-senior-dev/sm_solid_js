import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";

export default interface ProductInterface {
  id: number;
  name: string;
  category: ProductCategory;
  price: ProductPrice;
}
