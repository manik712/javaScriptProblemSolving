/*

Create a function that takes two numbers num1, num2,
and an array arr and returns an array containing all 
the numbers in arr greater than num1 and less than num2.

*/

function arrBetween(num1, num2, arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1 && arr[i] < num2) {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));