/*

You need to create two functions to
substitute toString() and parseInt(); A function
called intToString() that converts
integers into strings and a function 
called stringToInt() that converts strings 
into integers.

*/

function stringOrInt(value) {
  if (typeof value == "string") {
    const str = parseInt(value);
    return str;
  } else {
    const int = String(value);
    console.log(typeof int);
    return int;
  }
}
console.log(stringOrInt("4"));
