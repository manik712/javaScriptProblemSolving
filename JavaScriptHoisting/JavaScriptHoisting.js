//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.

//Example 1
x1 = 5; // Assign 5 to x

var x1; // Declare x

// Example 2

var x2; // Declare x
x2 = 5; // Assign 5 to x

// Example 3

x3 = undefined; // Assign undefined to x
x3 = 10;
console.log(x3);
var x3; // declare 10 to x

//another case let and const are declared but not assigned undefined
//example

x4 = //not undefined; // Assign undefined to x
  x4 = 11;
console.log(x4);
let x4; // declare

//same as const

//let ,var and const are hosted
//but only var is assigned
//let and const are stay temporary death zones

//error

function foo() {
  x = 8;
  console.log(x);
  let x; // declare
}
foo();
//ReferenceError: Cannot access 'x' before initialization


//syntaxError 

carName = "aaaaa"
const carName ;


//first syntaxError then ReferenceError