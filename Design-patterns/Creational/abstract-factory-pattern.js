// The Abstract Factory pattern allows us to produce families of related objects
// without specifying concrete classes. It's useful in situations where we need to create objects
// that share only some properties and methods.

class Mango {
  constructor() {
    this.name = "Mango";
    this.color = "Yellow";
  }
}

class Strawberry {
  constructor() {
    this.name = "Strawberry";
    this.color = "Red";
  }
}

class Blueberry {
  constructor() {
    this.name = "Blueberry";
    this.color = "Blue";
  }
}

const FruitFactory = {
  createFruit: function (type) {
    switch (type) {
      case "Mango":
        return new Mango();
      case "Strawberry":
        return new Strawberry();
      case "Blueberry":
        return new Blueberry();
      default:
        return null;
    }
  }
}


const mango = FruitFactory.createFruit("Mango");
console.log(mango.name);
const strawberry = FruitFactory.createFruit("Strawberry");
const blueberry = FruitFactory.createFruit("Blueberry");
