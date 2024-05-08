/*

Create a function that takes a number as
an argument and returns "even" for even
numbers and "odd" for odd numbers.

*/

function evenOrOdd(num) {
  const number = num;
  if (typeof number === "number") {
    if (Number.isInteger(number)) {
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    } else {
      return "Input a integer number!";
    }
  } else if (typeof number === "string") {
    return "Input number not a string!";
  }
}

console.log(evenOrOdd(4.5));





// if (Number.isInteger(number)) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// } else {
//   return "Input a integer number";
// }
