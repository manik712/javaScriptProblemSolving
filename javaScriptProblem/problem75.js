/*

Create a function that takes a word and 
returns the new word without including the
first character.

*/

function newWord(str) {
  const word = str;
  const myWord = word.substring(1);
  return myWord;
}

console.log(newWord("hello"));