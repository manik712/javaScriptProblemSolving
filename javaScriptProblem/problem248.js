//The input contains exactly two subArrays.
//Return one array containing the items from the
//first subarray followed by the items from the second.

//Examples
//oneList([[1, 2], [3, 4]]) // [1, 2, 3, 4]
//oneList([["a", "b"], ["c", "d"]]) // ["a", "b", "c", "d"]
//oneList([[true, false], [false, false]]) // [true, false, false, false]

//method1
function oneList(arr1, arr2) {
  let x = [...arr1, ...arr2];
  return x;
}

console.log(oneList([1, 2, 3], [8, 7, 6]));//[ 1, 2, 3, 8, 7, 6 ]

//method2
function oneList(arr1, arr2) {
  let x =arr1.concat(arr2);
  return x;
}
console.log(oneList([1, 2, 3], [8, 7, 6]));//[ 1, 2, 3, 8, 7, 6 ]
