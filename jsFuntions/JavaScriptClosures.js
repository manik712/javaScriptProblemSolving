//JavaScript Closures
//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures
//Global Variables
//A function can access all variables defined inside the function, like this

// Example

function myFunction() {
  let a = 4;
  //here the a is local variable
  return a * a;
}
console.log(myFunction());

//But a function can also access variables defined outside the function, like this:

// Example
let b = 5;
//here the b is global variable
function jFunction() {
  return b * b;
}
console.log(jFunction());

/*
In a web page, global variables belong to the page.

Global variables can be used (and changed) by all other scripts in the page.// var

In the first example, a is a local variable.

A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

Global and local variables with the same name are different variables. Modifying one, does not modify the other.




*/

// Note
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
//example
function myFunction() {
  a = 4;
  //here the a is global variable
}
