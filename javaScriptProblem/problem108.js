/*


Write a JavaScript function to check if a given number is prime.



*/
function isPrime(num) {
  if (Number.isInteger(num)) {
    if (num === 0 || num === 1) {
      return "not prime";
    } else if (num === 2 || num === 3) {
      return "prime";
    } else {
      for (let i = 3; i < num; i++) {
        if (num % i === 0) {
          return "prime";
        } else {
          return "not prime";
        }
      }
    }
  } else if (!Number.isInteger(num)) {
    return "Input integer number";
  }
}

console.log(isPrime(123));
