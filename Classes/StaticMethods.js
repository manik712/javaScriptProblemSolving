//Static Methods
// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
console.log(Car.hello());
//Hello!!


//If you want to use the myCar object inside the static method, you can send it as a parameter:


class Cars {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCars = new Cars("Ford");
console.log(Cars.hello(myCar));


