//Create a function that takes two strings as arguments and
//  returns the number of times the first string (the single character)
// is found in the second string.

// Examples

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// Notes
// Your output must be case-sensitive (see second example).

function charCount(x, str) {
  let count = 0;
  //let match the letter ...
  const regex = new RegExp(x, "g");
  //  console.log(regex)
  let y = str.match(regex);
  //print the array
  console.log(y);
  for (let i = 0; i <= y.length - 1; i++) {
    count++;
  }
  return count;
}

console.log(charCount("c", "Chamber of secrets"));
