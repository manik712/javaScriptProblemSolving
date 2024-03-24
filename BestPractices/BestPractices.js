//JavaScript Best Practices

//Avoid global variables, avoid new, avoid ==, avoid eval()

/*


Avoid Global Variables
Minimize the use of global variables.

This includes all data types, objects, and functions.

Global variables and functions can be overwritten by other scripts.

Use local variables instead, and learn how to use closures.



*/

//Always Declare Local Variables

//Local variables must be declared with the var, the let, or the
// const keyword, otherwise they will become global variables

//Strict mode does not allow undeclared variables.

//Declarations on Top

// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};

// Declare Objects with const
// Declaring objects with const will prevent any accidental change of type:

//Example
let car1 = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Changes object to string

const car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Not possible

// Don't Use new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()

//Beware of Automatic Type Conversions

//JavaScript is loosely typed.

//A variable can contain all data types.

//A variable can change its data type:

//Example
let x = "Hello"; // typeof x is a string
x = 5; // changes typeof x to a number

Use === Comparison;

//The == comparison operator always converts (to matching types) before comparison.

//The === operator forces comparison of values and type:

0 == ""; // true
1 == "1"; // true
1 == true; // true

0 === ""; // false
1 === "1"; // false
1 === true; // false

// Use Parameter Defaults
// If a function is called with a missing argument, the value of the missing argument is set to undefined.

// Undefined values can break your code. It is a good habit to assign default values to arguments.

Example;
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}

// End Your Switches with Defaults
// Always end your switch statements with a default. Even if you think there is no need for it.

/*
Avoid Number, String, and Boolean as Objects
Always treat numbers, strings, or booleans as primitive values. Not as objects.

Declaring these types as objects, slows down execution speed, and produces nasty side effects:



*/
let x1 = "John";
let y = new String("John");
x1 === y; // is false because x is a string and y is an object.

// Or even worse:

let x3 = new String("John");             
let y1 = new String("John");
(x3 == y1) // is false because you cannot compare objects.


/*



Avoid Using eval()
The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.

Because it allows arbitrary code to be run, it also represents a security problem.



*/