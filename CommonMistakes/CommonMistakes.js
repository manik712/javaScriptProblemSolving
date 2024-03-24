//Accidentally Using the Assignment Operator
//JavaScript programs may generate unexpected results
//  if a programmer accidentally uses an assignment
//  operator (=), instead of a comparison operator (==) in an if statement.

//An assignment always returns the value of the assignment.

//Expecting Loose Comparison

let x = 10;
switch (x) {
  case 10:
    alert("Hello");
}
console.log(x);

//Confusing Addition & Concatenation

// Misunderstanding Floats

/*
All numbers in JavaScript are stored as 64-bits Floating point numbers (Floats).

All programming languages, including JavaScript, have difficulties with precise floating point values:



*/
//Breaking a JavaScript String
//JavaScript will allow you to break a statement into two lines:
//But, breaking a statement in the middle of a string will not work:

//You must use a "backslash" if you must break a statement in a string:
let x1 =
  "Hello \
World!";

/*
Misplacing Semicolon
Because of a misplaced semicolon, this code block will execute regardless of the value of x:

*/

if (x == 19);
{
  // code block
}
/*
Breaking a Return Statement
It is a default JavaScript behavior to close a statement automatically at the end of a line.

Because of this, these two examples will return the same result:


*/

// Example 1
function myFunction(a) {
  let power = 10;
  return a * power;
}

// Example 2
function myFunction(a) {
  let power = 10;
  return a * power;
}

//Accessing Arrays with Named Indexes

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // person.length will return 3
person[0]; // person[0] will return "John"



// In JavaScript, objects use named indexes.

// If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.

// After the automatic redefinition, array methods and properties will produce undefined or incorrect results:


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;      // person.length will return 0
person[0];          // person[0] will return undefined



//Undefined is Not Null

// JavaScript objects, variables, properties, and methods can be undefined.

// In addition, empty JavaScript objects can have the value null.

// This can make it a little bit difficult to test if an object is empty.

// You can test if an object exists by testing if the type is undefined:






// Incorrect:
// if (myObj !== null && typeof myObj !== "undefined") 
// Because of this, you must test for not undefined before you can test for not null:




// Correct:
// if (typeof myObj !== "undefined" && myObj !== null) 