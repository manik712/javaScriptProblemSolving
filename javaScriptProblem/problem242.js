//Convert an integer from 0 through 1023 to a binary string with no leading zeroes. Return "0" for zero.

// Examples
// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10

// Notes
// Numbers will always be below 1024 (not including 1024).
// The && operator could be useful.
// If a binary conversion for 0 is attempted, return "0".

function binary(num) {
  if (num > 0 && num < 1024) {
    let x = num.toString(2);
    return x;
  } else if (num === 0) {
    return 0;
  }
}
console.log(binary(0));
