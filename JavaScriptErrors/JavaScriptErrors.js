//Throw, and Try...Catch...Finally

/*
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

*/
//try catch

try {
  //code
} catch (err) {
  console.log(err);
}

//example
try {
  addleat("try catch");
} catch (err) {
  // console.log(err.message);
}

//throw exception

// let x = "5";
// try {
//   if (x == "") throw "empty";
//   if (isNaN(x)) throw "not a number";
//   x = Number(x);
//   if (x < 5) throw "too low";
//   if (x > 10) throw "too high";
// } catch (err) {
//   console.log(err);
//   return;
// }

// console.log("code is ok");

//throw  with object

// let x1 = "15";
// try {
//   if (x1 == "") throw "empty";
//   if (isNaN(x1)) throw "not a number";
//   x = Number(x1);
//   if (x1 < 5) throw "too low";
//   if (x1 > 10)
//     throw {
//       message: "too high",
//       name: "highError",
//     };
// } catch (err) {
//   console.log(err);
//   return;
// }

// console.log("code is ok");

//throw with object with finally

// let x2 = "5";
// try {
//   if (x2 == "") throw "empty";
//   if (isNaN(x2)) throw "not a number";
//   x = Number(x2);
//   if (x2 < 5) throw "too low";
//   if (x2 > 10)
//     throw {
//       message: "too high",
//       name: "highError",
//     };
// } catch (err) {
//   console.log(err);
//   return;
// } finally {
//   console.log("code is ok, 88");
// }

/*
Error Object Properties

Property	    Description
name	        Sets or returns an error name
message	      Sets or returns an error message (a string)

*/

//range error

let num = 1;
try {
  num.toPrecision(500);
  console.log(a);
  // A number cannot have 500 significant digits
} catch (err) {
  console.log(err.name, 99);
  //RangeError
  //toPrecision() argument must be between 1 and 100 99
}

//reference error

let x5 = 5;
try {
  x5 = y + 1; // y cannot be used (referenced)
} catch (err) {
  console.log(err.name);
  //ReferenceError
}

//Syntax Error

try {
  eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
  console.log(err.name, 122);
  //SyntaxError
}
//Type Error

let num1 = 1;
try {
  num1.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
  console.log(err.name);
  //TypeError
}

//URI (Uniform Resource Identifier) Error


try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
console.log(err.name);
//URIError
}