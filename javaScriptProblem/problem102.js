/*

Write a JavaScript program to find the minimum number in an array

*/

function findMaxNumber(arr) {
  const myArr = arr;
  let maxNumber = arr[0];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] < maxNumber) {
      maxNumber = myArr[i];
    }
  }
  return maxNumber;
}
console.log(findMaxNumber([3, 5, 8, 1, 90, 0, 56]));
