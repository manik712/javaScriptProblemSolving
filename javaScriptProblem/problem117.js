/*


Create a function that takes a string; we'll say that the front is the first three 
characters of the string. If the string length is less than three characters, 
the front is whatever is there. Return a new string, which is three copies of the front.



frontThree("Python") ➞ "PytPytPyt"

frontThree("Cucumber") ➞ "CucCucCuc"

frontThree("bioshock") ➞ "biobiobio




*/
function frontThree(atr) {
  const front = atr;
  const cut = front.slice(0, 3);
  const repeat = cut.repeat(3);
  return repeat;
}
console.log(frontThree("Cucumber"));
