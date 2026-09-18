//

function largeNumber(arr) {
  let largeN = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largeN) {
      largeN = arr[i];
    }
  }

  return largeN;
}

console.log(largeNumber([23, 56, 70]));
