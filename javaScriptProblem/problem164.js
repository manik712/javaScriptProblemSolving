/*
Create a function which returns "upper" if all the 
letters in a word are uppercase, "lower" if
lowercase and "mixed" for any mix of the two.


Examples

getCase("whisper...") ➞ "lower"

getCase("SHOUT!") ➞ "upper"

getCase("Indoor Voice") ➞ "mixed"

*/
function getCase(word){
  if(word === word.toUpperCase()){
    return "upperCase";
  }else if(word ===word.toLowerCase()){
    return "lowerCase";
  }else{
    return "mixed";
  }
}
console.log(getCase("ARROW"));



// or


function getCase(word) {
  let hasUpper = false;
  let hasLower = false;

  for (let char of word) {
    if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLower = true;
    }
  }

  if (hasUpper && hasLower) {
    return "mixed";
  } else if (hasUpper) {
    return "upper";
  } else if (hasLower) {
    return "lower";
  } else {
    return "mixed"; // If no alphabetic characters, consider as "mixed"
  }
}

// Test cases

console.log(getCase("whisper..."));  // ➞ "lower"
console.log(getCase("SHOUT!"));      // ➞ "upper"
console.log(getCase("Indoor Voice")); // ➞ "mixed"
console.log(getCase("1234"));        // ➞ "mixed" (no alphabetic characters)
console.log(getCase("1234A"));       // ➞ "upper" (only upper case letter)
console.log(getCase("1234a"));       // ➞ "lower" (only lower case letter)
