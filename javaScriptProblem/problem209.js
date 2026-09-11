//Create a function that returns true if a string is empty and false otherwise.

function isEmpty(str) {
  const a = str.length;
  if (a === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(" "));
