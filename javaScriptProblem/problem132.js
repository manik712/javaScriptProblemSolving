/*
Create a function that takes an array with numbers and
 return an array with the elements multiplied by two.



Examples
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]


*/

function getMultipliedArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i] * 2;
    result.push(value);
  }
  return result;
}


console.log(getMultipliedArr([2,4,7]));


