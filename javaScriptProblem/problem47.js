/*
Given two integers, a and b, return 
true if a can be divided evenly by b. 
Return false otherwise.

*/

function divide(a, b) {
  if (a > b) {
    const result = a / b;
    if (Number.isInteger(result)) {
      return true;
    } else {
      return false;
    }
  } else {
    return b + " " + "is" + " " + "is grater than"+ " " + a;
  }
}
console.log(divide(1, 2));
