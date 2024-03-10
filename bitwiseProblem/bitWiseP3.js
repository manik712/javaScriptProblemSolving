/*
problem:OR


*/

function bitwiseOrSum(a, b) {
  const or = a | b;
  console.log(or, 9);
  return or;
}

console.log(bitwiseOrSum(5, 3)); // Output should be 7 (5 | 3)
console.log(bitwiseOrSum(8, 12)); // Output should be 12 (8 | 12)
