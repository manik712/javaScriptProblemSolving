/*

Write a function that takes two numbers and returns
if they should be added, subtracted, multiplied or divided to
get 24. If none of the operations can give 24, return null.


Examples

operation(15, 9) ➞ "added"

operation(26, 2) ➞ "subtracted"

operation(11, 11) ➞ null

*/

function operation(num1, num2) {
  if (num1 + num2 === 24) {
    return "add";
  } else if (num1 * num2 === 24) {
    return "multiplied";
  } else if (num1 - num2) {
    return "subtracted";
  } else if (num1 / num2 === 24) {
    return "divided";
  } else {
    return null;
  }
}
console.log(operation(26, 2));
