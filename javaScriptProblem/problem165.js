/*

Create a function that takes an array of
numbers arr and returns an inverted array.
Examples

invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

invertArray([]) ➞ []

*/
function invertArray(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let arr2 = -arr[i];
    arr1.push(arr2);
  }
  return arr1;
}

console.log(invertArray([1, -3, 5, 7, 8]));
