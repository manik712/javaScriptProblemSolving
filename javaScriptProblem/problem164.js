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