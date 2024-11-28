/*

Calculate the sum of numbers within an array


*/

function calculate(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum;
}
console.log(calculate([2,3,5,6]));
