//Create a function that takes two strings as arguments and return either
 //true or false depending on whether the total number of characters in 
// the first string is equal to the total number of characters in the second string.

function compareTwoString(string1,string2){

  const a =string1.length;
  const b =string2.length;
  if(a===b){
    return true ;
  }
  else{
    return false
  }
}
console.log(compareTwoString("qwe","ray"))