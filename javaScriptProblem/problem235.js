
// A number array will be given to the function:
// [12, 7, 25, 40, 18, 33, 50, 9, 60, 15] 
// Your tasks are:
// Find how many even numbers are in the array.
// Find how many odd numbers are in the array.
// Find the largest number in the array.
// Find the smallest number in the array.
// Find the sum of all numbers that are 40 or greater.
// Find the sum of all numbers less than 10.
// Finally, return an array in this format:
// [ evenCount, oddCount, largest, smallest, sumOf40Plus, sumOfBelow10 ] 
// For the given array, the expected result is:


function checkNumbers(arr) {
  let odd = 0;
  let even = 0;
  let largest = arr[0];
  let sum = 0;
  let sumOfBelow40 = 0;
  let smallest = arr[0];
  let negativeNumber = 0;
  let positiveNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else if (arr[i] % 2 !== 0) {
      odd++;
    }
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] > 40) {
      sum += arr[i];
    }
    if (arr[i] < 40) {
      sumOfBelow40 += arr[i];
    }
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
    if (arr[i] < 0) {
      negativeNumber++;
    }
    if (arr[i] > 0) {
      positiveNumber++;
    }
  }

  let x = odd + even + largest + sum + sumOfBelow40 + smallest;

  return [
    odd,
    even,
    largest,
    sum,
    sumOfBelow40,
    smallest,
    x,

    negativeNumber,
    positiveNumber,
  ];
}

console.log(checkNumbers([-8, -40, 12, 7, 25, 40, 18, 33, 50, 9, 60, 15]));


