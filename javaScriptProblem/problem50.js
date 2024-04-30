/*

Write a function that returns true if
the given integer is even, and false if it's odd.

*/
function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    const result = num % 2;
    if (result == 0) {
      return num + " " + "is a EVEN Number";
    } else {
      return num + " " + "is a ODD Number";
    }
  } else {
    return "Input the integer number";
  }
}
console.log(evenOrOdd(2));
