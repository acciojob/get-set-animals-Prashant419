class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this._species; // Use private field for encapsulation
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }

  makeSound() {
    super.makeSound(); // Call parent's makeSound() for basic sound
    this.purr(); // Add cat-specific purring
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }

  makeSound() {
    super.makeSound(); // Call parent's makeSound() for basic sound
    this.bark(); // Add dog-specific barking
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;