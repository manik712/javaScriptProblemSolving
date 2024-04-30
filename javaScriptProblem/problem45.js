/*
Create a function that will handle
 simple math expressions. The input 
 is an expression in the form of a string.

*/
function calculator(str){
  const myStr = str;
  const   result = eval(myStr);
  return result;
}

console.log(calculator("23+23-3*2"));