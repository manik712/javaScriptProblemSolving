//problem

let num = -16;
const len = num.toString(2);
console.log(len, 3);
let result = num >> 2;

console.log(result); //-4

//problem

let number = 20;
let shiftedResult = number >> 2;

console.log("Original number in binary: " + number.toString(2));
console.log("Result of signed right shift by 2 positions: " + shiftedResult);
