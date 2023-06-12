import Product from "./priceModule/domain/Product";

export default function filterCategories(productList: Product[]) {
  return productList.reduce((acc, product) => {
    if (product.category in acc) {
      return acc;
    } else {
      return {
        ...acc,
        [product.category]: product.category,
      };
    }
  }, {});
}
