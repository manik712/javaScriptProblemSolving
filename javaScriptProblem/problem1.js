//Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//Result should be arr = [1, 3, 4, 5, 6, 3]

// function deleteOccurrences(arr, num) {
//   return arr.filter((element) => element != num);
// }
// arr = [1, 2, 3, 4, 5, 6, 2, 3];
// num = 2;
// const array = deleteOccurrences(arr, num);
// console.log(array);

//or

// let numbers = [1, 2, 3, 4, 5, 6];
// let num = 2;
// let result = numbers.filter(lal);
// function lal(element) {
//   return element != num;
// }
// console.log(result);

// or

// let numbers1 = [1, 2, 3, 4, 5, 6,7];
// let num1 = 2;

// let answer = numbers1.filter((currentValue, index, arr) => {
//   console.log(currentValue,29);
//   console.log(index,30);
//   console.log(arr,31);
//   return currentValue != num1;
// });
// console.log(answer);

// or

let arr = [1, 2, 3, 4, 5, 6, 7];

let num = 2;

function deleteOccurrences(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
const array = deleteOccurrences(arr, num);

console.log(array);
