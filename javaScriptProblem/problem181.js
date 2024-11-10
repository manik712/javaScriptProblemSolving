/*

Create a function which returns the total of all odd 
numbers up to and including n. n will be given as an odd number.


*/

function addOddNumbers(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 2) {
    result += i;
  }
  return result;
}
console.log(addOddNumbers(12));