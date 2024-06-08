/*
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532"




*/


function toInt(s){
  let result = Number(s);
  return result;
}

console.log(toInt("532"));


