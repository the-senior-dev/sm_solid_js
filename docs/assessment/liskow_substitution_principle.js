class Animal {
  move() {
    console.log("The animal moves.");
  }
}

class Dog extends Animal {
  move() {
    throw new Error("This dog can't move");
  }
}

function makeAnimalMove(animal) {
  animal.move(); // this should always work
}

const myAnimal = new Animal();
const myDog = new Dog();

makeAnimalMove(myAnimal); // Works fine
makeAnimalMove(myDog); // Throws an error ❌❌❌
