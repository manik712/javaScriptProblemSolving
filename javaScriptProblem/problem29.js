/*
JavaScript has a logical operator &&.  
The && operator takes two boolean values,
 and returns true if both values are true.

*/



function and(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === true && b === false) {
    return false;
  } else if (a === false && b === true) {
    return false;
  } else if (a === false && b === false) {
    return false;
  }
}

console.log(and(true, false));