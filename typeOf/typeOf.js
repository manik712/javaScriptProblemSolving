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
let myCar2 = 30;
console.log(typeof myCar2);
let boolean1 = false;
console.log(typeof boolean1);

let myCar3 = {
  car: "volvo",
  bike: "yamaha",
};
console.log(typeof myCar3,24);

let arr = [1, 2, 3, 4, 5, 6];

console.log(typeof arr, 28);

let date = new Date();
console.log(typeof date,31);

let pen
console.log(typeof pen,34);

let nan = NaN
console.log(typeof nan,37);