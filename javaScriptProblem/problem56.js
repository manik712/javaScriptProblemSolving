/*

Create a function that takes a number as
an argument and returns negative of that
number. Return negative numbers without any change.

*/
function negative(number) {
  if (number < 0) {
    return "its negative number";
  } else if (number == 0) {
    return 0;
  } else {
    return -number;
  }
}

console.log(negative(-6));
