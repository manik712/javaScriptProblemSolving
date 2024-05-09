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
