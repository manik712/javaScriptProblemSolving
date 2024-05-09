/*


Create a function that returns 
true if a string contains any spaces.


*/
function containsSpaces(string){
      const myString = string;
      const mySpaces = " ";
      if(myString.includes(mySpaces)){
        return true;
      }else {
        return false;
      }
}
console.log(containsSpaces("hello, world"));