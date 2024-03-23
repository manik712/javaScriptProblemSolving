//JavaScript JSON

/*
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.




What is JSON?


JSON stands for JavaScript Object Notation

JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand


 The JSON syntax is derived from JavaScript 
 object notation syntax, but the JSON format
  is text only. Code for reading and generating 
  JSON data can be written in any programming language.

*/

/*
JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):

JSON Example



*/

const a = {
  employees: [
    ({ firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" }),
  ],
};

/*
The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.



JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays






*/
//JSON names require double quotes. JavaScript names do not.

//JSON Data - A Name and a Value

/*
JSON data is written as name/value pairs, just like JavaScript object properties.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

*/

//JSON Objects

//JSON objects are written inside curly braces.

//Just like in JavaScript, objects can contain multiple name/value pairs:

const b = { firstName: "John", lastName: "Doe" };

//JSON Arrays

/*
JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:


*/


//Converting a JSON Text to a JavaScript Object


let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(obj.employees[0].lastName); //Doe
// console.log(text);



//Converting aJavaScript Object to a JSON Text



let boy = {
name :"manik",
age:"34"

}

let object = JSON.stringify(boy)
console.log(object);