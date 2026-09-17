
// avaScript Problem: ""analyzeNumbers(arr)""
// Create an analyzeNumbers(arr) function.
// For each number in the array:
// If the number is divisible by both 3 and 5 → increase both count.
// If the number is divisible by only 3 → increase divBy3 count.
// If the number is divisible by only 5 → increase divBy5 count.
// If the number is divisible by neither 3 nor 5 → increase none count.
// Find the largest number in the array.
// Find the smallest number in the array.
// Find the sum of all numbers divisible by either 3 or 5.









function analyzeNumbers(arr) {
  let both = 0;
  let divBy3 = 0;
  let divBy5 = 0;
  let none = 0;
  let largestNumber = arr[0];
  let smallest = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      both++;
    } else if (arr[i] % 3 === 0) {
      divBy3++;
    } else if (arr[i] % 5 === 0) {
      divBy5++;
    } else if (arr[i] % 3 != 0 && arr[i] % 5 != 0) {
      none++;
    }
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  let x = both + divBy3 + divBy5 + none + largestNumber + smallest;
  return [both, divBy3, divBy5, none, largestNumber, smallest, x];
}
console.log(analyzeNumbers([5, 3, 15, 13, 12, 45, 60]));

