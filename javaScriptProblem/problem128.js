/*


Create a function which returns the length
of a string, WITHOUT using String.length property.


*/

function String(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
     result ++
  }
  return result;
}
console.log(String("hello world"));