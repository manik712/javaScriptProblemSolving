/*
The police send you an electronic statement 
for you to sign. As you begin to sign, an error pops up. 
Apparently, they sent you a protected document.


This challenge is a bit different as the 
function you are given already contains some 
code that you should not change or remove. Also, 
don't do a return statement, it is already included.
Your task is, given an object, prevent changes to that
object.

*/

// const obj = { noChanges: true, signature: "whatever" };

// function preventChanges(obj) {
//   // write your code here
//   // don't use a return statement

//   // DON'T CHANGE OR REMOVE THE LINES BELOW
//   obj.noChanges = false;
//   obj.signature = "whatever";
//   return obj;
// }

// console.log(preventChanges({ noChanges: true, signature: "what" }));

function protectDocument(obj) {
  // Prevent changes to the object
  Object.freeze(obj);
}

// Test the function
const document = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
};

protectDocument(document);

// Attempt to modify the object
document.age = 35;
document.address = "456 Elm St";
document.phoneNumber = "123-456-7890";

console.log(document);
