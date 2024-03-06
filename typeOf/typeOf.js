typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
typeof null; // Returns "object"

let myCar1 = "volvo";

console.log(typeof myCar1);
//string
let myCar2 = 30;
console.log(typeof myCar2);
//number
let boolean1 = false;
console.log(typeof boolean1);
//boolean

let myCar3 = {
  car: "volvo",
  bike: "yamaha",
};
console.log(typeof myCar3, 24);
//object

let arr = [1, 2, 3, 4, 5, 6];

console.log(typeof arr, 28);
//object

let date = new Date();
console.log(typeof date, 31);
//object

let pen;
console.log(typeof pen, 34);
//undefined

let nan = NaN;
console.log(typeof nan, 37);
//number

function evenNumber() {}
console.log(typeof evenNumber);
//function

let mango = null;
console.log(typeof mango, 46);
//object

let a = "car";

let b = 6;

let c = a + "" + b;
console.log(c);
//car6
console.log(typeof c, 51);
//string

let contractors = "good".contractor;

// console.log(contractors,67);

function isArray(myArray) {
  console.log(myArray.constructor.toString().indexOf("Array") > -1);
}
// isArray({ fName: "good" });

function isArray(myArray) {
  console.log(myArray.constructor.toString().indexOf("Array") > -1);
}


//check if the object is an Array function
function isArray(myArray) {
  console.log(myArray.constructor === Array);
}

isArray([1, 2, 34, 5]);

function isDate(myDate) {
  console.log(myDate.constructor.toString().indexOf("Date") > -1, 87);
}

isDate(new Date());


//check if the object is an Array function
function isDate(myDate) {
  console.log(myDate.constructor === Date,91);
}

isDate(new Date());
