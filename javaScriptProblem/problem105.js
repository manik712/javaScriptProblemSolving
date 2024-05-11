/*

Write a JavaScript function to check if a given 
string is a palindrome (reads the same forwards and backwards). 

*/
function checkForPalindrome(str) {
  if (typeof str !== "string") {
    const myString = str.toString();
    console.log(myString);
    const myStr = myString.split("").reverse().join("");
    if (myString === myStr) {
      return true;
    } else {
      return false;
    }
  } else if (typeof str === "string") {
    const myStr = str.split("").reverse().join("");
    if (str === myStr) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkForPalindrome("12321"));
