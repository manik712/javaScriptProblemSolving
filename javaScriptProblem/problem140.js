/*
Given an array that contains the fulcrum "f", the effort "e",
and the load "l", write a function that determines whether or
not the array shows a first class lever, second class lever,
or a third class lever.



Examples


determineLever(["e", "f", "l"]) ➞ "first class lever"

determineLever(["e", "l", "f"]) ➞ "second class lever"

determineLever(["f", "e", "l"]) ➞ "third class lever"

*/



function determineLever(arr) {
  if (arr[1] === 'f') {
      return "first class lever";
  } else if (arr[1] === 'l') {
      return "second class lever";
  } else if (arr[1] === 'e') {
      return "third class lever";
  } else {
      return "Invalid input";
  }
}

// // Test cases
// console.log(determineLever(["e", "f", "l"]));  // ➞ "first class lever"
// console.log(determineLever(["e", "l", "f"]));  // ➞ "second class lever"
// console.log(determineLever(["f", "e", "l"]));  // ➞ "third class lever"


console.log(Number("333"));