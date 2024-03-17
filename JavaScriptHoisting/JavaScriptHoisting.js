//JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.

//Example 1
x = 5; // Assign 5 to x

var x; // Declare x

// Example 2
var x; // Declare x
x = 5; // Assign 5 to x


// Example 3

x= undefined; // Assign undefined to x
x =10
console.log(x);
var x; // declare 10 to x

//another case let and const are declared but not assigned undefined
//example
x=  //not undefined; // Assign undefined to x
x =11
console.log(x);
let x; // declare

//same as const
//let ,var and const are hosted
//but only var is assigned