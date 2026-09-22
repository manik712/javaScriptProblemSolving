//Create a function that will take a HEX
//number and returns the binary equivalent (as a string).

// Examples
// toBinary(0xFF) ➞ "11111111"
// toBinary(0xAA) ➞ "10101010"
// toBinary(0xFA) ➞ "11111010"

function hexToBinary(hex) {
  let binary = parseInt(hex, 16).toString(2);
  console.log(binary);
}
hexToBinary(0xff); //1001010101
