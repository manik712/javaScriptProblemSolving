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

  let x = 5
}

//x can not  be used outside

//Variables declared with the var keyword can NOT have block scope