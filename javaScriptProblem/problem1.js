//Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//Result should be arr = [1, 3, 4, 5, 6, 3]

function deleteOccurrences(arr, num) {
  return arr.filter((element) => element != num);
}
arr = [1, 2, 3, 4, 5, 6, 2, 3];
num = 2;
const array = deleteOccurrences(arr, num);
console.log(array);

//or

let numbers = [1, 2, 3, 4, 5, 6];
let num = 2;
let result = numbers.filter(lal);
function lal(element) {
  return element != num;
}
console.log(result);
