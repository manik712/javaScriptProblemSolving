//
//
//Write a function setBit that takes an integer num and a position
//bitPos, and sets the bit at the specified position to 1 using bitwise OR.
//Return the modified intege
//

function setBit(num, bitPos) {
  return num | (1 << bitPos);
}

// Example usage:
const originalNumber = 5; // Binary: 101
const modifiedNumber = setBit(originalNumber, 1); // Set bit at position 1
console.log(modifiedNumber); // Expected output: 7 (Binary: 111)
