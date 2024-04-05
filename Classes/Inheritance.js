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

//Note: even if the getter is a method, you do not use parentheses when you want to get the property value.

// Hoisting
// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

// That means that you must declare a class before you can use it:


// Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, 
// because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).