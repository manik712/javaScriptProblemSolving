/*

Write a template string according to the following example:

*/

function format(a,b,c){
  const myA = a;
  const myB = b;
  const myC = c;
  
  const myTemplete = "their name were"+" "+myA +" ,"+
  myB+" ,"+ myC;
  
  return myTemplete;
}

console.log(format("am","is","are"))