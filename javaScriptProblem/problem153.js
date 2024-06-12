/*

Create a function that has some arguments and returns
the type of the fifth argument. In case the arguments
were less than 5, return "Not enough arguments".

Examples


fifth(1, 2, 3, 4, 5) ➞ "number"

fifth("a", 2, 3, true, "five") ➞ "string"

fifth() ➞ "Not enough arguments"

*/


function fifthArgument(...args) {
  if (args.length < 5) {
    return "Not enough arguments";
  } else {
    return typeof args[4];
  }
}
console.log(fifthArgument(2, 6, true, null));
