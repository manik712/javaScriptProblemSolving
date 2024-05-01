/*

According to the lodash documentation, _.drop creates a
slice of an array with n elements dropped from the beginning.


*/


function drop(arr, n) {
  return arr.slice(n);
}


console.log(drop([1, 2, 3], 1)); // ➞ [2, 3]
console.log(drop([1, 2, 3], 2)); // ➞ [3]
console.log(drop([1, 2, 3], 5)); // ➞ []
console.log(drop([1, 2, 3], 0)); // ➞ [1, 2, 3]