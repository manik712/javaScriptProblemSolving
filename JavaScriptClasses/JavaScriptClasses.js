//JavaScript Classes are templates for JavaScript Objects.

//JavaScript Class Syntax
/*
Use the keyword class to create a class.

Always add a method named constructor():


*/

class ClassName {
  constructor() {
    code;
  }
}

//example



// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const car = new Car("manik", 34);
// console.log(car);



//template
//মাপনদণ্ড নিয়ামক

//A JavaScript class is not an object.

//Using a Class
//When you have a class, you can use the class to create objects:

//The Constructor Method
/*



The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties



*/

//
//If you do not define a constructor method, JavaScript will add an empty constructor method.

/*
lass methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.


*/

// Syntax

// class ClassName {
//   constructor() {
//     c;
//   }
//   method_1() {
//     c;
//   }
//   method_2() {
//     c;
//   }
//   method_3() {
//     c;
//   }
// }


//Create a Class method named "age", that returns the Car age:


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log(`${this.name} is good student`);
  }
}

const person1 = new Person("manik", 30);
const person2 = new Person("gold", 35);

person1.play();
person2.play();
