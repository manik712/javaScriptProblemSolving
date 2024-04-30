/*
Create a function that calculates
 the area of a rectangle. If the 
 arguments are invalid, your function 
 must return -1.

*/

function calculateArea(a, b) {
  if (a == 0 || b == 0 || a < 0 || b < 0) {
    return -1;
  } else {
    const area = a * b;
    return "Area is" + " " + area+" "+"units";
  }
}

console.log(calculateArea(3, 10));
