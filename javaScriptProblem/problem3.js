//Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = 287152;
// console.log(number);
let sNumber = number.toString();
// console.log(sNumber);
let sNumber1 = sNumber.split("").map(Number);
// console.log(sNumber1);

let sum = 0;
for (let i = 0; i < sNumber1.length; i++) {
  sum += sNumber1[i];
}
console.log(sum);
//25