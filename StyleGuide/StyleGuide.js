//JavaScript Style Guide

//JavaScript Coding Conventions
/*

Coding conventions are style guidelines for programming. They typically cover:

Naming and declaration rules for variables and functions.
Rules for the use of white space, indentation, and comments.
Programming practices and principles.
Coding conventions secure quality:

Improve code readability
Make code maintenance easier
Coding conventions can be documented rules for teams to follow, or just be your individual coding practice.





*/
//Variable Names

firstName = "John";
lastName = "Doe";

price = 19.9;
tax = 0.2;

fullPrice = price + price * tax;

//Spaces Around Operators
//Always put spaces around operators ( = + - * / ), and after commas:
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

//Code Indentation
//Always use 2 spaces for indentation of code blocks:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
//Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.

/*

Statement Rules
General rules for simple statements:

Always end a simple statement with a semicolon.




*/

// Examples:
const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

/*


General rules for complex (compound) statements:

Put the opening bracket at the end of the first line.
Use one space before the opening bracket.
Put the closing bracket on a new line, without leading spaces.
Do not end a complex statement with a semicolon.
Functions:




*/

//Functions:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

//Loops:
for (let i = 0; i < 5; i++) {
  x += i;
}

//Conditionals:

if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

/*
Object Rules
General rules for object definitions:

Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property-value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon









*/

// Example
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//Short objects can be written compressed, on one line, using spaces only between properties, like this:
const person2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


//Line Length < 80