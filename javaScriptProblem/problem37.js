/*
Create a function that takes 
two strings as arguments and 
return either true or false depending on
 whether the total number of 
 characters in the first string is 
 equal to the total number of characters i
 n the second string.

*/


function comp( a , b ){
  if( a.length === b.length ){
    return true;
  }else{
    return false
  }

}

console.log(comp("string","s"));