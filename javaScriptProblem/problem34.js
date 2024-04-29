/*

Create a function that takes a boolean
variable flag and returns it as a string.

*/

function booleanToString(flag) {
  const Boolean = flag;
  console.log(typeof Boolean);
  const String = Boolean.toString();
  console.log(typeof String);
  return String;
}

console.log(booleanToString(false));
