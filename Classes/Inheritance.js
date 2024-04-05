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