const number = Number("5.6");
const number3 = Number("goodNews");
const number4 = Number("");
const number7 = Number("444 3");
console.log(number7, 5); //NaN,number
console.log(number4, 4); // 0
console.log(number3, 3); //NaN

console.log(number); //number
console.log(typeof number); //number

const number1 = parseFloat("5.7");
console.log(typeof number1, 7); //number

const number2 = parseInt(666.86);
const number6 = parseInt("666 86");
console.log(number6, 15); //number, 666

console.log(typeof number2); //666

let y = "30";

let x = +y;

console.log(typeof y, typeof x); //number

let a = "good";
let b = +a;
console.log(b, 29); //NaN,number
