//Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

// Notes
// All test cases contain valid strings.
//  Don't worry about spaces, special characters
//  or numbers. They're all considered valid characters.

function doubleChar(str) {
  let x = str
    .split("") //Convert a string into an array
    .map((char) => char.repeat(2)) //Each array element is repeated and stored in a new array..
    .join(""); //join them and make them  into a string again.
  //return x
  return x;
}
//print the result..
console.log(doubleChar("String"));
