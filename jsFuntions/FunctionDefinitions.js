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
