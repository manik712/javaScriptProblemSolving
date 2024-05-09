/*


Fix the code in the code tab to pass this 
challenge (only syntax errors). Look at the
examples below to get an idea of what the
function should do.

*/

function sumOfArray(arr) {
  const myArr = arr;
  let sum = 0;
  for (let i = 0; i < myArr.length; i++) {
    sum = sum + myArr[i];
  }
  return sum;
}

console.log(sumOfArray([1, 3, 5, 7, 9]));
