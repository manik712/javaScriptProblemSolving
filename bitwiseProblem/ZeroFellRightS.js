function zeroFillRightShift(num, shift) {
  // Perform zero fill right shift operation and return the result
  a = num >>> shift;
  return a;
}

// Example usage:
let result = zeroFillRightShift(16, 2);
console.log(result); // Expected output: 4
