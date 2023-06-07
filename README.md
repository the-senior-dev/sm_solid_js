# Action Item: SOLID principles 💊

The SOLID principles help us write code that can be easily extended and maintained.

![solid-principles](/docs/solid_principles.png)

#### Single Responsability Principle

> "A class should have only **one reason to change**" - Clean Code

#### Open/Closed Principle

> "Software entities (classes, modules, functions, and so on) should be **open for extension, but closed for modification**" - Clean Code

#### Liskow Substitution Principle

> "...an object (such as a class) may be replaced by a sub-object (such as a class that extends the first class) without breaking the program"

#### Interface Segregation

> "Clients should not be forced to depend upon interfaces that they do not use." - Clean Code

#### Dependency Inversion Principle

> "Depend upon abstractions, [not] concretions." - Clean Code

## Tasks:

1. [ ] Apply the **Single Responsability Principle** to split the code in [src/calculateTotalPricePerCategory.ts](/src/calculateTotalPricePerCategory.ts) into `modules` that will evolve independently.

2. [ ] Apply the **Open/Closed Principle** to allow developers to add new `discount` rules without modifying the calculate discount function.

3. [ ] Apply the **O**pen/Closed Principle to allow developers to add new `discount` rules without modifying the calculate discount function.

4. [ ] Apply the **O**pen/Closed Principle to allow developers to add new `discount` rules without modifying the calculate discount function.

5. [ ] Apply the **O**pen/Closed Principle to allow developers to add new `discount` rules without modifying the calculate discount function.

---

<details closed>
<summary>CLICK ME! - ACTION ITEM SETUP</summary>

## Setup

1. Install dependencies

```
npm install
```

2. Run tests

```
npm test
```

You should see this in your terminal:

![test-results](/docs/test_results.png)

3. Run the program:

```
npm start
```

You should see this in your terminal:

![program-results](/docs/program_results.png)

</details>

---

## Walkthrough:

<details closed>
<summary>CLICK ME! - TASK 1 - Single Responsibility Principle</summary>

#### TASK 1 - Single Responsibility Principle

Apply the **Single Responsability Principle** to split the code in [src/calculateTotalPricePerCategory.ts](/src/calculateTotalPricePerCategory.ts) into `modules` that will evolve independently.

> "A class should have only one reason to change" - Clean Code

##### Applying this principle well will prevent unexpected secondary effects of code changes in the future.

To do so you need to identify the possible **sources of change** in the code. The most typical are:

- changes in the input shape
- changes in the output requirements
- changes in the logic(control flow)

In our case, after reading the [calculateTotalPricePerCategory.ts](/src/calculateTotalPricePerCategory.ts) function we have identified a couple of **SOURCES OF CHANGE**:

- the way we `extract categories` from the product list might change because the product list shape might change

- the way `discounts` are calculated for a product might change due to business requirements

- the way `tax` is applied might change and the tax rate might change also

To minimize the changes needed in the code to accommodate changes in requirements we will split the original function into smaller ones that address each problem individually.

Try to do this yourself to the best of your ability.

![single-resp-module-structure](/docs/task_1/folder_structure.png)

Advantages of the new structure:

- clear module and function boundaries
- the possibility of testing each function individually

### Solution:

- **🧪 Solution Code: `git checkout feature/single-responsability-principle`**

</details>

---

<details closed>
<summary>CLICK ME! - TASK 2 - Open/Closed Principle</summary>

#### TASK 2 - Open/Closed Principle

Before we start, checkout on the solution branch from the previous exercise or follow on your own code if you ended up with a similar structure:

```bash
git checkout task_two_open_closed_start
```

###### Open/Closed Principle

> > "Software entities (classes, modules, functions, and so on) should be **open for extension, but closed for modification**" - Clean Code

In the case of our original discount function:

```typescript
import { Product } from "../types";

// SOURCE OF CHANGE: We want to add a new discount rule
export default function calculateDiscout(product: Product) {
  let discount = 0;
  if (product.quantity > 10) {
    // 10% discount if we buy more than 10
    discount = product.price.amount * 0.1 * product.quantity;
  } else if (product.quantity > 5) {
    // 5% discount if we buy more than 5
    discount = product.price.amount * 0.05 * product.quantity;
  } else if (product.quantity > 1) {
    // 0% discount if we buy more than 1
    discount = 0;
  }
  return discount;
}
```

##### We want to find a way to be able to add new discount rules without having to change the code of the `calculateDiscout` function.

🧠 Try and think about this for a couple of minutes.

Hmmm...

🙋🏽 What if we can provide the rules as an `array` of `objects` containing the `quantity` and the `discount` amount?

We can afterward use a `for` loop to find the rule that has to be applied depending on the `quantity`.

To do so, in [calculateDiscount.ts](src/priceModule/calculateDiscount.ts) :

1. Add an `interface` for `DiscountRules`

```typescript
interface DiscountRule {
  quantity: number;
  discount: number;
}
```

2. Extract the `rules` to the `config` file in this `module`

```typescript
export const DISCOUNT_RULES = [
  {
    quantity: 10,
    discount: 0.1,
  },
  {
    quantity: 5,
    discount: 0.05,
  },
  {
    quantity: 1,
    discount: 0,
  },
];
```

3. Update the code to use the `rules` array

```typescript
function calculateDiscountBasedOnRules(
  product: Product,
  rules: DiscountRule[]
) {
  // Sort rules by quantity in descending order
  const sortedRules = [...rules].sort((a, b) => b.quantity - a.quantity);

  for (let rule of sortedRules) {
    if (product.quantity >= rule.quantity) {
      // Apply the first matching rule
      return product.price.amount * rule.discount * product.quantity;
    }
  }
  return discount;

  // No rule matched, return 0
  return 0;
}
```

4. Apply the rules array to the exported version of the function so our clients(whoever is using this function) are not affected

```typescript
export default function calculateDiscount(product: Product) {
  return calculateDiscountBasedOnRules(product, DISCOUNT_RULES);
}
```

###### We can now extend the `calculateDiscount` behaivour without changing the `caculateDiscoutBasedOnRules` function - so we can say the function is `Open for extension` and at the same time `Closed for modification`.

### Solution:

- **🧪 Solution Code: `git checkout open-closed-principle`**

</details>

---

<details closed>
<summary>CLICK ME! - TASK 3 - Liskov Substitution</summary>

#### TASK 3 - Liskov Substitution

> "...an object (such as a class) may be replaced by a sub-object (such as a class that extends the first class) without breaking the program"

To illustrate this we will use `classes` for our products and move the relevant logic to class methods.

Before we start, checkout on the following branch:

```bash
git checkout feature/liskow-substitution-principle
```

Head over to [types.ts](/src/types.ts) and checkout our new `classes`:

#### Product Class

```typescript
export class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public quantity: number;
  public price: {
    amount: number;
    currency: string;
  };

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    quantity: number,
    price: { amount: number; currency: string }
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
  }

  calculateTotalPrice(): number {
    return this.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(taxRate: number): number {
    return this.calculateTotalPrice() * (1 + taxRate);
  }
}
```

And an example of a `class` that inherits from `Product`:

```typescript
// GIFT PRODUCT cannot be used in place of Product
export class GiftProduct extends Product {
  private isTaxable = true;
  calculateTotalPriceWithTax(taxRate: number): number {
    // violation of LSP
    throw new Error("Gift products are not taxable");
  }
}
```

⚠️ Violation of **Liskov Substitution**:

`GiftProduct` cannot be used in the code instead of its parent class(super object) because it will result in errors thrown when the `calculateTotalPriceWithTax` method is called.

To illustrate this we wrote a test in [liskovTest.spec.ts](src/test/liskovTest.spec.ts) that you can run:

```bash
npm test --t liskovTest
```

The test will fail, showing a violation of the `LSP`:

TODO - ad an image here []

### Solving the `LSP` violation:

In our case, becasuse we use `TypeScript` we ensure that at least from the shape perspective the children classes will comply with the interface of the parent. However we can stil break `LSP` with behaivour, like exception throwing. To avoid it we need to:

1. Avoid throwing errors in subclases that parent classes do not throw. In this class case we can just return 0 instead:

```typescript
export class GiftProduct extends Product {
  private isTaxable = false;

  calculateTotalPriceWithTax(taxRate: number): number {
    // Rather than throw an error, just ignore the tax for gift products
    if (this.isTaxable) {
      return super.calculateTotalPriceWithTax(taxRate);
    } else {
      // If the product is not taxable, return the total price without tax
      return this.calculateTotalPrice();
    }
  }
}
```

2. Prefer **Composition** over **Inheritance** - this is something frameworks like `React` adopted to avoid problems that come from having long inheritance chains(like the violation of `LSP`).

Instead of inheriting the tax application behaivour, we will add it to our objects at build time:

Our new class will looks something like this:

```typescript
interface TaxStrategy {
  calculateTax(amount: number): number;
}

class StandardTaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * 0.2; // 20% tax
  }
}

class NonTaxableStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return 0;
  }
}

export class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public quantity: number;
  public price: {
    amount: number;
    currency: string;
  };
  private taxStrategy: TaxStrategy;

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    quantity: number,
    price: { amount: number; currency: string },
    taxStrategy: TaxStrategy
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.taxStrategy = taxStrategy;
  }

  calculateTotalPrice(): number {
    return this.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(): number {
    const tax = this.taxStrategy.calculateTax(this.calculateTotalPrice());
    return this.calculateTotalPrice() + tax;
  }
}

// Tax Behaivour Comes from Composing the Object rather then being inherited from a parent class
const regularProduct = new Product(
  1,
  "Regular Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new StandardTaxStrategy()
);

const giftProduct = new Product(
  2,
  "Gift Product",
  ProductCategory.FOOD,
  2,
  { amount: 100, currency: "USD" },
  new NonTaxableStrategy()
);
```

You can implement any of the solutions above. We recommend you try this in any codebase you are working with to make sure you fixate the concept.

</details>

---

<details closed>
<summary>CLICK ME! - TASK 4 - Interface Segregation</summary>

#### TASK 4 - Interface Segregation

> "Clients should not be forced to depend upon interfaces that they do not use." - Clean Code

To make this principle simple you can say:

> "Aa class should not be forced to implement interfaces it doesn't use. Instead of one big interface, many small interfaces are preferred based on groups of methods, each one serving one submodule."

This principle is a bit abstract but we can easily understand it with our `Product` class:

```typescript
export class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public quantity: number;
  public price: {
    amount: number;
    currency: string;
  };

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    quantity: number,
    price: { amount: number; currency: string }
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
  }

  ...
}
```

Whoever wants information about the `Product` also ends up consuming the `quantiy` property, which is only relevant for certain usecase. If we just want to display a list of products or an individual product, the `quantity` is irelevant.

##### Apllied Interface Segregation Principle

If we apply the `Interface Segregation Principle` we will end up with smaller classes that deal with specific behaivours.

> :bell: **Reminder**: Every class in TypeScript inherently defines an interface. This interface includes all the public members of the class - properties, methods, etc. This makes TypeScript's class mechanics and type system very flexible and powerful, because you can use these implicit interfaces in type annotations just like explicit interfaces. Keep in mind, however, that this only applies to the public side of the class structure. If you have private or protected members in your class, they won't be part of the implicit interface.

![applied-interface-segragation](docs/task_4/interface_segregation.png)

Our new `Product` class will only be concerned with information about the product:

```typescript
import { ProductCategory } from "../types";

export class Product {
  public id: number;
  public name: string;
  public category: ProductCategory;
  public price: {
    amount: number;
    currency: string;
  };

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    price: { amount: number; currency: string }
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }
}
```

And we move all the `quantity` and `price` calculations to the `CartItem` class:

```typescript
import { Product } from "./Product";

export class CartItem {
  public product: Product;
  public quantity: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice(): number {
    return this.product.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(taxRate: number): number {
    return this.calculateTotalPrice() * (1 + taxRate);
  }
}
```

> :bulb: **Note for future**: The `CartItem` class might implement future behaivour like `calculateShippingCosts` without poluting the `ProductInterface`. In this way, the users of these classes get exacttly what they need, not more,nor less.

### Todo:

- simplify the `Product`class even further by extracting the `ProductPrice` into its own separated class.

### Solution:

- **🧪 Solution Code: `git checkout feature/interface-segregation`**

</details>

---

<details closed>
<summary>CLICK ME! - TASK 5 - Dependency Inversion</summary>

#### TASK 5 - Dependency Inversion

"Depend upon abstractions, [not] concretions." - Clean Code

In simpler terms, the DIP suggests that software components (classes, modules, functions, etc.) should rely on abstract versions of components rather than concrete implementations.

This allows for better decoupling of software components, making the system more modular and enabling easier changes and maintenance. The dependencies between components are inverted compared to a traditional top-down or bottom-up design where high-level modules directly depend on low-level modules.

We can apply **Dependency Inversion** to many parts of our code, a good example is our `CartItem` class.

```typescript
import { Product } from "./Product";

export class CartItem {
  public product: Product;
  public quantity: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice(): number {
    return this.product.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(taxRate: number): number {
    return this.calculateTotalPrice() * (1 + taxRate);
  }
}
```

Above you can see, there is a direct dependecy between `CartItem` and `Product`. If the `Product` class implementation changes, there is a high probability that we will also have to change the `CartItem` class. This is also called `tigh coupling`.

![direct-dependecy](/docs/task_5/direct_dependecy.png)

To make the code more reusable we can instead move this dependecy to an interface, let's call that the `ProductIterface`.

```typescript
import { ProductCategory } from "../types";

export default interface ProductInterface {
  id: number;
  name: string;
  category: ProductCategory;
  price: {
    amount: number;
    currency: string;
  };
}
```

Our concrete classes: `Product` and `CartItem` will depend on the `ProductCategory` abstraction but not on each other, like this:

```typescript
import ProductInterface from "./ProductInterface";

export class CartItem {
  public product: ProductInterface;
  public quantity: number;
  constructor(product: ProductInterface, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice(): number {
    return this.product.price.amount * this.quantity;
  }

  calculateTotalPriceWithTax(taxRate: number): number {
    return this.calculateTotalPrice() * (1 + taxRate);
  }
}
```

And:

```typescript
import { ProductCategory } from "../types";
import ProductInterface from "./ProductInterface";

export class Product implements ProductInterface {
  public id: number;
  public name: string;
  public category: ProductCategory;
  private isOnSale: boolean = true;
  public price: {
    amount: number;
    currency: string;
  };

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    price: { amount: number; currency: string }
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }
}
```

![inverted-dependecy](/docs/task_5/inverted_dependency.png)

#### BONUS

We can go even further and apply the **Dependency Inversion Principle** to the `ProductInterface` and eliminate the dependency with the `ProductCategory`.

How would you do that?

<details closed>
<summary>CLICK ME! - BONUS SOLUTIOM</summary>

We can provie the type of the category at runtime by using `Generics`. This is also called `DependencyInjection` and can be applied to function, classes and modules.

```typescript
interface AbstractProductInterface<ProdCat> {
  id: number;
  name: string;
  category: ProdCat;
  price: {
    amount: number;
    currency: string;
  };
}

// Concrete Version of the AbstractProductInterface using the standard ProductCategory
export default ProductInterface = AbstractProductInterface<ProductCategory>;
```

</details>
</details>

---

![software-mastery](/docs/software_mastery.png)

##### To get additional feedback and support on this **Action Item**, you can:

👉 Attend one of our **Weekly Coaching Sessions** to receive feedback and advice on specific challenges. **[RSVP to an upcoming session here](https://community.theseniordev.com/c/coaching-calls/)**!

👉 Share a question or challenge in the **[Code Review Space](https://community.theseniordev.com/c/codereview/)** to receive insights and suggestions from the coaches!
