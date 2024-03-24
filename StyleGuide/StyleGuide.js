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
  eyeColor: "blue"
};