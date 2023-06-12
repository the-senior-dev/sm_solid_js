import ProductCategory from "./ProductCategory";
import Price from "./ProductPrice";

export default class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public price: Price;

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    price: Price
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }
}
