/*

Due to a programming concept known as truthiness,
certain values can be evaluated to (i.e. take the
place of) booleans. For example, 1 (or any number
other than 0) is often equivalent to true, and 0 
is often equivalent to false.

Create a function that returns the opposite of the 
given boolean, as a number.


*/
function oppositeBoolean(value) {
  if (value === true) {
    return 0;
  } else if (value === false) {
    return 1;
  } else if (value === 1) {
    return 0;
  } else if (value === 0) {
    return 1;
  }
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));
console.log(oppositeBoolean(1));
console.log(oppositeBoolean(0));