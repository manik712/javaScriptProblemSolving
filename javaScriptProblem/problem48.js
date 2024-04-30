/*
Create a function that takes a string and returns it as an integer.


*/
function createInteger(str) {
  const result =parseInt(str);
  console.log(typeof(result));
 return result;
 
}

console.log(createInteger('120'));
console.log(createInteger('qm'));
//NaN