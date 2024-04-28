/*
Mubashir wants to swap two given numbers!

It is not returning the right values. 
Can you help him fix it?

*/

function swap(num1, num2) {
  let a = [num1, num2];

  [a[0], a[1]] = [a[1], a[0]];
  return a
}
console.log(swap(1, 2));





