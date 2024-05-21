/*

Create a function which validates whether a given number exists,
and could represent a real life quantity. Inputs will be given as a string.

*/





// function isExit(string) {
//   const str = string;
//   const number = parseInt(str);
//   if (typeof number === "number") {
//     return true;
//   } else {
//     false;
//   }
// }

// console.log(isExit("123"));




function validStrNumber(s) {
  // Check if the string is a valid number using a regular expression
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(s);
}

// Test cases
console.log(validStrNumber("3.2"));     // ➞ true
console.log(validStrNumber("324"));     // ➞ true
console.log(validStrNumber("54..4"));   // ➞ false
console.log(validStrNumber("number"));  // ➞ false
