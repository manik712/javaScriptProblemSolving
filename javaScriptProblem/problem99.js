/*

Create a function that takes a string (a random name). 
If the last character of the name is an "n", 
return true, otherwise return false.

*/

function isN(string) {
  const myString = string;
  if (myString.endsWith("n")) {
    return true;
  } else {
    return false;
  }
}

console.log(isN("milk"));
