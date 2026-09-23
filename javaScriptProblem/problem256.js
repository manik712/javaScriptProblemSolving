//The two arrays are the same length and are either
//identical or differ at one position. Return true
//only when the value in the first array is greater
//at that differing position. Return false when the arrays are identical.

// Examples

// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// // The pair of items at each index are compared in turn.
// // 1 from the first array is the same as 1 from the second array.
// // 2 is the same as 2.
// // However, 4 is greater than 3, so first array is superior.
// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
// isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

// Notes

// Both arrays will be the same length.
// All values and their counterparts will always be of the same data type.
// If the two arrays are the same, return false.

// const compareArrays = (a, b) => {
//   if (a.length !== b.length) return false;
//   else {
//     // Comparing each element of your array
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// let array1 = [21, null, 33];
// let array2 = [21, 22, 23];
// let array3 = [21, undefined, 33];
// let array4 = [21, 22, 23];

// console.log(compareArrays(array1, array2)); //false
// console.log(compareArrays(array1, array3)); //false
// console.log(compareArrays(array2, array4)); //true
function compareArrays(array1,array2){
  //if condition
if(array1.length!==array2.length){
  return "please input same length of array"
}else{

}
}

