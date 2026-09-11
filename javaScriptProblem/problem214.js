//JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

function isEqual(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(true,true))
