const number = Number("5.6");
const number3 = Number("goodNews");
const number4 = Number("");
const number7 = Number("444 3");
console.log(number7, 5); //NaN,number
console.log(number4, 4); // 0
console.log(number3, 3); //NaN,;number

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

//converting  number to string
let num = String(55555 + 333);
console.log(num);
console.log(typeof num, 35); //string

// toexponential()
let c = 10e5;
console.log(c.toExponential()); //1e+6
//toFixed()
let d = 2.0953488439584585;
console.log(d.toFixed(5));

let e = 5.6756435;
console.log(e.toPrecision(2));

let date = new Date();
console.log(typeof date);
console.log(Number(date));

//Converting Booleans to Numbers
let tBoolean = Number(true);
let fBoolean = Number(false);
console.log(tBoolean); //1
console.log(fBoolean); //0

/*
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

*/

