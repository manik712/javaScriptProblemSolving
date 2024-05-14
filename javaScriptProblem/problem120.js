/*


Create a function that takes in a word and determines 
whether or not it is plural. A plural word is one that ends in "s".



*/

function isPlural(string) {
  const alphabet = string.charAt(string.length - 1);
  if (alphabet === "s") {
    return true;
  } else {
    return false;
  }
}

console.log(isPlural("apple"));