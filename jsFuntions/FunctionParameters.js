//Function Parameters
//A JavaScript function does not perform any checking on parameter values (arguments).

const e = function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
};

console.log(e(3, 4, 5));
//3,4,5 are arguments

//Parameter Rules

/*


JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.

*/

//JavaScript functions do not check the number of arguments received.
const j = (a, b) => a * b;

console.log(j(3, 4, 5, 7));

//If a function is called with missing arguments (less than declared), the missing values are set to undefined.
const n = (a, b) => a * b;
//b=undefined
console.log(n(3));
//NaN

//Default Parameters

const m = (p, t = 4) => p * t;
console.log(m(3));
//12
console.log(m(3, 5));
//15

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);
//500

x1 = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(x1);
//871

//Arguments are Passed by Value

/*
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

*/

//Arguments are Passed by Value
function a(x) {
  x.manik = 8;
  return x.manik * x.sarker;
}

let h = {
  manik: 4,
  sarker: 5,
};
console.log(a(h));
//40
console.log(h);
//{manik: 8,sarker:5}
