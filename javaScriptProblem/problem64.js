/*

Given a string, return true if its length is even or false if the length is odd.


*/

function oddOrEven(n) {
  const myLength = n.length;
  if (myLength % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(oddOrEven("l"));