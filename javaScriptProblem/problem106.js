/*

Write a JavaScript program to reverse a given string. 


*/
function reverse(string){
   const myString = string.split("").reverse( ).join("");
   return myString;
}

console.log(reverse("manik"));