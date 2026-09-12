//Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    const x = -num;
    return x;
  }
}
console.log(returnNegative(-3))

