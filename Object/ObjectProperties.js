//Object Properties

//A JavaScript object is a collection of unordered properties.

/*

JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.

Syntax



// */
// for (let variable in object) {
//   // code to be executed
// }

//Adding New Properties

// const person = {
//   fname: " John",
  lname: " Doe",
  // age: 25,
// };
person.country = "United States";
// console.log(person);

person.age = 34;

console.log(person);

// delete person.fname;
// or
delete person["fname"];

console.log(person);

//The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

/*



Nested Objects
Values in an object can be another object




*/

// myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };


//You can access nested objects using the dot notation or the bracket notation:

// Nested Arrays and Objects



const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};



//Property Attributes
let a = new String("John");
console.dir(a);
//Property 



