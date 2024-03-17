/*
JavaScript variables have 3 types of scope:


Block scope
Function scope
Global scope

*/

//Block Scope

/*
Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

*/

{
  let x = 5;
}

//x can not  be used outside

//Variables declared with the var keyword can NOT have block scope

//Local Scope

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

function a() {
  let x = 5;
}

//let x can declare, but they are not same
function b() {
  let x = 5;
}

function myFunction() {
  var carName = "Volvo"; // Function Scope
}

function myFunction() {
  let carName = "Volvo"; // Function Scope
}

function myFunction() {
  const carName = "Volvo"; // Function Scope
}

//var global scope and function scope
//let and const block scope
//In JavaScript, objects and functions are also variables

let a = function my() {};

// Automatically Global

//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
//This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
console.log(carName);
//Volvo



//Strict Mode
//In "Strict Mode", undeclared variables are not automatically global.
