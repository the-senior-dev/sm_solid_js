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

1. [ ] Apply the **Single Responsability Principle** to split the code in [src/calculateTotalPricePerCategory.ts](/src/calculateTotalPricePerCategory.ts) into `modules` that will evolve independently.

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

#### SOLUTION

```bash
git checkout feature/single-responsability-principle
```

![single-resp-module-structure](/docs/task_1/folder_structure.png)

Advantages of the new structure:

- clear module and function boundaries
- the possibility of testing each function individually

</details>

---

![software-mastery](/docs/software_mastery.png)

##### To get additional feedback and support on this **Action Item**, you can:

👉 Attend one of our **Weekly Coaching Sessions** to receive feedback and advice on specific challenges. **[RSVP to an upcoming session here](https://community.theseniordev.com/c/coaching-calls/)**!

👉 Share a question or challenge in the **[Code Review Space](https://community.theseniordev.com/c/codereview/)** to receive insights and suggestions from the coaches!
