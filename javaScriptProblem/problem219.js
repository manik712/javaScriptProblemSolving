//According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

function drop(arr, n) {
  const x = arr.slice(n);
  return x;
}

console.log(drop([1,2,3,4],5))
