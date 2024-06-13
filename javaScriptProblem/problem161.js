/*

Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).

Examples

evenOrOdd([0]) ➞ "even"

evenOrOdd([1]) ➞ "odd"

evenOrOdd([]) ➞ "even"

evenOrOdd([0, 1, 5]) ➞ "even"


*/
function evenOrOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum === 0) {
    return "even";
  } else if (sum % 2 === 0) {
    return "even";
  } else if (sum % 2 !== 0) {
    return "odd";
  }
}
console.log(evenOrOdd([1]));
