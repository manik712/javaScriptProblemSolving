//Create a function that takes an array of
//numbers and return both the minimum and
//maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

function minMax(arr) {
  if (arr.length === 0) return [undefined, undefined];
  let min = arr[0];
  let max = arr[0];
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

console.log(minMax([1, 8, 9, 30, 3]));//[1,30]
