/*

Write a function that returns the string 
"even" if the given integer is even, and 
the string "odd" if it's odd.

*/

function parity(n) {
  let remainder = Boolean(n % 2);
  // console.log(remainder);
  if (remainder === false) {
    return "even";
  }
  if (remainder === true) {
    return "odd";
  }
}

console.log(parity(11));
