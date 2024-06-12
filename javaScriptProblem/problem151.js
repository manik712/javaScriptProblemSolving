/*
A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.

Spot and fix the error(s) in the code to make the function work.
Examples

sortWord("dcba") ➞ "abcd"

sortWord("Unpredictable") ➞ "Uabcdeeilnprt"

sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") ➞ "aacccccceiiiiiil


*/

// function sortAlpha(word) {
//   return word.split("")
//              .sort()
//              .join("");
// }

// let randomWord = "sdfjwefic";
// console.log(sortAlpha(randomWord))




function sortWord(word) {
	return word.split("").sort().join("");

}

console.log(sortWord("Unpredictable"));