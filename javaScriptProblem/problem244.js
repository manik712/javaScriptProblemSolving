//Replace every lowercase vowel (a, e, i, o, and u) in a string with the supplied vowel.

// Examples

// vowReplace("apples and bananas", "u") ➞ "upplus und bununus" vowReplace("cheese casserole", "o") ➞ "chooso cossorolo" vowReplace("stuffed jalapeno poppers", "e") ➞ "steffed jelepene peppers"

// Notes

// All input words are lowercase.

// y is not considered a vowel.

// function vowReplace (...args) {

// return null;

// }


function replaceByV(str,letter){
  
  let x =str.replace(/[a,e,i,o,u]/g,letter)
  
  return x;
}

console.log(replaceByV("i love u","a"))//a lava a