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

console.log(hoisted());

const hoisted = function () {
  //code
};
//ReferenceError: Cannot access 'hoisted' before initialization





//Self-Invoking Functions

(function () {
  console.log("Self-Invoking Functions");
})();
