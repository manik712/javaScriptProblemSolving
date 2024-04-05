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

  constructor(name ,year){
    this.name = name ;
    this.year = year;

  }
}
const car1 =new Car("COROLLA",1990)
console.log(typeof car1);
// object
// console.log(typeof Car);
//function
console.log(car1);
//Car { name: 'COROLLA', year: 1990 }
