### SOLID principles

1. **S**eparation of concerns
2. **O**pen/Closed Principle
3. **L**iskow Substitution Principle
4. **I**nterface Segregatio
5. **D**ependency Inversion

## Challenges:

1. [ ] Apply **Separation of Concerns** to split the code in `original.js` into modules that will most likelly evolve independentlty.

- Identify the possible **sources of change** in the code
  - changes in the input shape
  - changes in the output requirements
  - changes in the logic(control flow)
- Split the code accordingly and add well defined interfaces

2. [ ] Separate and extend the formating logic in a `class` and extend it following the **Liskow Substitution Principle**

3. [ ] Apply **Dependency Inversion** to allow uses to specify different formaters when running the program
