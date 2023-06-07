import { calculateTotalPricePerCategory } from "./priceModule";
import list from "./productList";

console.info(JSON.stringify(calculateTotalPricePerCategory(list), null, 2));
