//JavaScript Closures
//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures
//Global Variables
//A function can access all variables defined inside the function, like this


// Example


function myFunction() {
  let a = 4;
  //here the a is local variable
  return a * a
};
console.log(myFunction());




//But a function can also access variables defined outside the function, like this:

// Example
let b = 5;
//here the b is global variable
function jFunction() {
  return b * b;
}
console.log(jFunction());