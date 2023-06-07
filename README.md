### SOLID principles

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

1. [ ] Apply the **Single Responsability Principle** to split the code in [src/calculateTotalPricePerCategory.ts](/src/calculateTotalPricePerCategory.ts) into `modules` that will evolve independently.

> "A class should have only one reason to change" - Clean Code

To do so you need to identify the possible **sources of change** in the code. The most typical are:

- changes in the input shape
- changes in the output requirements
- changes in the logic(control flow)
