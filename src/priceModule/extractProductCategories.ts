import { CartItem } from "./domain/CartItem";

export default function extractProductCategories(cartItemList: CartItem[]) {
  return cartItemList.reduce((acc, item) => {
    if (item.product.category in acc) {
      return acc;
    } else {
      return {
        ...acc,
        [item.product.category]: 0,
      };
    }
  }, {});
}
