//Write a function that takes a two-digit
//number and determines if it's the largest
//of two possible digit swaps.

// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false
//  because swapping the digits gives us 72,
//  and 72 > 27. On the other hand, swapping
//  43 gives us 34, and 43 > 34.
     
// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true

function largestSwap(num) {
  //make the number string and split them (make array)
  let swap = num.toString().split("");
  let x = `${swap[1]}${swap[0]}`;
  let number = Number(x);
  //if else condition...
  if (num < number) {
    return false;
  } else {
    return true;
  }
}
//call and print the result
console.log(largestSwap(99)); //true
console.log(largestSwap(14)); //false
