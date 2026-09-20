//Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// Examples
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55
function numberSquares(n) {
  if (n < 0) {
    return "Input is a non-negative integer";
  } else {
    let x = (n * (n + 1)*(2*n + 1)) / 6;
    return x;
  }
}
console.log(numberSquares(3))
