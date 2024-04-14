//Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.


function doubleAndReturnArgs(arr, ...args) {
  // Map over the args array and double each element
  const doubledArgs = args.map(arg => arg * 2);

  // Return the original array concatenated with the doubled arguments
  return arr.concat(doubledArgs);
}

// Example usage:
const result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
console.log(result); // [1, 2, 3, 8, 10, 12]

