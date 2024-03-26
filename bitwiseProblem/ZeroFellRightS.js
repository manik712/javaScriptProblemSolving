//problem

function zeroFillRightShift(num, shift) {
  // Perform zero fill right shift operation and return the result
  a = num >>> shift;
  return a;
}

// Example usage:
let result = zeroFillRightShift(16, 2);
console.log(result); // Expected output: 4

//problem
/*
Write a Write a JavaScript function that checks if a given
 positive integer is a power of two.
  The function should return true if the number
   is a power of two and false otherwise. . 

*/

function isPowerOfTwo(num) {
  // Check if num is greater than 0 and has only one set bit
  return num > 0 && (num & (num - 1)) === 0;
}

// Example usage:
console.log(isPowerOfTwo(4)); // Expected output: true (2^2)
console.log(isPowerOfTwo(8)); // Expected output: true (2^3)
console.log(isPowerOfTwo(6)); // Expected output: false
console.log(isPowerOfTwo(16)); // Expected output: true (2^4)
