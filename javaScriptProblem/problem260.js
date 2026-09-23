//Given a number, return an array containing the two halves of the number.
// If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]


function numberSplit(value) {
  //if condition ..
  if (typeof value === "number" && value % 1 === 0) {
    // again if else  condition ..
    if (value % 2 === 0) {
      let x = value / 2;
      return [x, x];
    } else {
      let part1 = Math.ceil(value / 2);
      let part2 = Math.floor(value / 2);
      return [part2, part1];
    }
  } else {
    return "Input an integer number. This program is only for integer numbers.";
  }
}
//print the result..
console.log(numberSplit(9)); 
console.log(numberSplit(7.5)); // message
