### SOLID principles

1. **S**ingle Responsability Principle
2. **O**pen/Closed Principle
3. **L**iskow Substitution Principle
4. **I**nterface Segregation
5. **D**ependency Inversion Principle

## Challenges:

1. [ ] Apply the **Single Responsability Principle** to split the code in `index.ts` into modules that will most likely evolve independentlty.
2. [ ] Apply the **O**pen/Closed Principle to allow developers to add new `discout` rules without modifing the calculate discount function.

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

1. [ ] Apply the **Single Responsability Principle** to split the code in `index.ts` into modules that will most likely evolve independentlty.

- Identify the possible **sources of change** in the code
  - changes in the input shape
  - changes in the output requirements
  - changes in the logic(control flow)
- Split the code accordingly and add well defined interfaces
