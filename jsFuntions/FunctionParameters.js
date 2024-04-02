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
const n =(a, b) => a*b;
//b=undefined
console.log(n(3));
//NaN


//Default Parameters

const m=(p,t=4)=>p*t
console.log(m(3));
//12
console.log(m(3,5));
//15
