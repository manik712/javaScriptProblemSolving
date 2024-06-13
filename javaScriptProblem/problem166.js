/*

Create a function that will put the first argument, a character, 
between every word in the second argument, a string.

Examples

add("R", "javascript is fun") ➞ "javascriptRisRfun"

add("#", "hello world!") ➞ "hello#world!"

add("#", " ") ➞ "#"

*/

function add(char, text) {
  // Split the text into words using whitespace as the delimiter
  let words = text.split(/\s+/);
  console.log(words);
  // Join the words with the specified character in between

  let result = words.join(char);
  return result;
}

// Test cases
console.log(add("R", "javascript is fun")); // "javascriptRisRfun"

// console.log(add("#", "hello world!"));       // "hello#world!"
// console.log(add("#", " "));                  // "#"
