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
git checkout task-two-start
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

To do so we:

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

##### We can now extend the `calculateDiscount` behaivour without changing the `caculateDiscoutBasedOnRules` function - so we can say the function is `Open for extension` and at the same time `Closed for modification`.

### Solution:

- **🧪 Solution Code: `git checkout open-closed-principle`**

</details>

---

![software-mastery](/docs/software_mastery.png)

##### To get additional feedback and support on this **Action Item**, you can:

👉 Attend one of our **Weekly Coaching Sessions** to receive feedback and advice on specific challenges. **[RSVP to an upcoming session here](https://community.theseniordev.com/c/coaching-calls/)**!

👉 Share a question or challenge in the **[Code Review Space](https://community.theseniordev.com/c/codereview/)** to receive insights and suggestions from the coaches!
