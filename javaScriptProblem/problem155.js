/*
Create a function that takes three numbers as arguments
and returns true if it's a triangle and false if not.


Examples

isTriangle(2, 3, 4) ➞ true

isTriangle(3, 4, 5) ➞ true

isTriangle(4, 3, 8) ➞ false

*/
function isTriangle(arg1, arg2, arg3) {
  if (arg1 + arg2 > arg3 && arg1 + arg3 > arg2 && arg2 + arg3 > arg1) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(4, 3, 8));
