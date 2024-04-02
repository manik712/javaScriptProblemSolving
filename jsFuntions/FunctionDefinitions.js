//Function Definitions

/*

JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression.

*/

// before  the function declaration

function functionName(parameters) {
  // code to be executed
}

//Function Expressions

/*

A JavaScript function can also be defined using an expression.


*/

// Example

const x = function (a, b) {
  return a * b;
};

// After a function expression has been stored in a variable, the variable can be used as a function:

// Example
const x1 = function (a, b) {
  return a * b;
};

let z = x(4, 3);
console.log(z);

/*
Semicolons are used to separate executable JavaScript statements.
Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

*/

//Function Expressions

// 1;
// function sleep() {
//   console.log("Sleeping");
// }
// sleep();

//or
2;
const sleep = function () {
  console.log("Sleeping");
};
sleep();

//The function above is
//an anonymous function = a function without a name

//The Function() Constructor

//Function Hoisting

//v.v.i
//Functions defined using an expression are not hoisted.

// console.log(hoisted());

// const hoisted = function () {
//   //code
// };

//ReferenceError: Cannot access 'hoisted' before initialization

//Self-Invoking Functions=IIFE=immediately invoked functions expression

(function () {
  console.log("Self-Invoking Functions");
})();
//The function above is actually an anonymous self-invoking function (function without name).

//Functions Can Be Used as Values

function myFunction(a, b) {
  return a * b;
  // return undefined
}

let Values = myFunction(4, 3);
// let Values = myFunction(4, 3)*2
//return 24
console.log(Values);

//A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.

//Arrow Functions
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.

//ES5
const y = function (a, b) {
  return a * b;
};
//ES6
//arrow function
const m = (a, b) => a * b;

//or

// const m = (a, b) => {
// console.log("function");
// return a * b;

// }

/*
Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:



*/




const n = function (a, b) {
  console.log(arguments.length);
  //[Arguments] { '0': 5, '1': 6 }
  //console.log(arguments.length);
  // 2
  // console.log(arguments[1]);
  // 6


  return a * b;
}
console.log(n(5,6));
// 