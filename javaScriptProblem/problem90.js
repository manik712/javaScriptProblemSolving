/*

Write a function to check if an array contains a particular number.


*/

function checkArrayContains(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(checkArrayContains([],21));