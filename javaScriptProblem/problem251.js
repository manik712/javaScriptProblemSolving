//A word is on the loose and now has tried
// to hide amongst a crowd of tall letters!
// Help write a function to detect what the
//  word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst
// the random letters, but their letters remain in the same order.

// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment

function detectWord(word) {
  //find the lower case litter and store them in a array
  let lowercase = word.match(/[a-z]/g);

  let newWord = lowercase.join("");
  console.log(newWord);
}
//call the function
detectWord("AscusIO");
