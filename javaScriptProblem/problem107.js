/*

Write a JavaScript function that takes
an array of numbers and returns a new 
array with only the even numbers. 

*/

function evenNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(evenNumber([2,5,8,9,90,6,36]));