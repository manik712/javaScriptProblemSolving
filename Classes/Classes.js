// Classes

//JavaScript Class Syntax
/*


Use the keyword class to create a class.

Always add a method named constructor():


*/
//Syntax
class className {
  constructor() {}
}
//example

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const car1 = new Car("COROLLA", 1990);
console.log(typeof car1);

// object
// console.log(typeof Car);
//function
// A JavaScript class is not an object.
// It is a template for JavaScript objects.
console.log(car1);
//Car { name: 'COROLLA', year: 1990 }

//The constructor method is called automatically when a new object is created.

/*
The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

*/

//Class Methods
/*
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.


*/



/*

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

*/


class Bus {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  run(speed){
    console.log(this.name + " "+"is running"+  speed);
  }
}
const car2 = new Bus("COROLLA", 1990);
const car3 = new Bus("HONDA", 2000);
car3.run("100 km par hour");
console.log(car3);