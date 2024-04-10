class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.makeSound();
cat.makeSound();
