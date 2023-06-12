import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";

export default interface ProductInterface<C> {
  id: number;
  name: string;
  category: C;
  price: ProductPrice;
}
