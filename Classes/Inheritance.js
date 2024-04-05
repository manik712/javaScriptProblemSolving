//Inheritance

// Class Inheritance
// To create a class inheritance, use the extends keyword.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a' + this.carname;
  }
}


class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
let myCarName = new Model("honda","1k2");

console.log(myCarName.show());
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


//Getters and Setters
//To add getters and setters in the class, use the get and set keywords.


class Cars {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCars = new Cars("Ford");
console.log(myCars.cnam);