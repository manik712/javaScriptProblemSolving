//write a function that take a array and return a array that contains how many even and odd number are the there


function checkNumber(arr) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return [even, odd];
}

console.log(checkNumber([2, 34, 65, 8, 7]));//[3,2]