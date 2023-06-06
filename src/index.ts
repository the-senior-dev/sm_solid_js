import calculateTotalPricePerCategory from "./calculateTotalPricePerCategory";
import list from "./productList";

console.info(JSON.stringify(calculateTotalPricePerCategory(list), null, 2));
