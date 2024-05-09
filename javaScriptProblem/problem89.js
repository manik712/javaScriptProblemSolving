/*

Create a function that returns a number, based on
the string provided. Here is a list of all digits:

*/

function stringToNumber(string) {
  if (string === "one") {
    return 1;
  } else if (string === "two") {
    return 2;
  } else if (string === "three") {
    return 3;
  } else if (string === "four") {
    return 4;
  } else if (string === "five") {
    return 5;
  } else if (string === "six") {
    return 6;
  } else if (string === "seven") {
    return 7;
  } else if (string === "eight") {
    return 8;
  } else if (string === "nine") {
    return 9;
  } else if (string === "ten") {
    return 10;
  } else if (string === "zero") {
    return 0;
  }
  return "Input Appropriate Number!";
}
console.log(stringToNumber("t"));



//or

function stringToNumber(s) {
  const numberDict = {
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9,
      "zero": 0
  };
  return numberDict[s];
}

// Test the function
console.log(stringToNumber("three"));  // Output: 3
console.log(stringToNumber("seven"));  // Output: 7
console.log(stringToNumber("eleven")); // Output: undefined
