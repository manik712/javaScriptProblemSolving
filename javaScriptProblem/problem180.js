/*



Create a function that takes a string str and returns an array of
 two-paired characters. If the string has an odd number of 
 characters, add an asterisk * in the final pair.

See the below examples for a better understanding:


*/

function pairC(str) {
  if (str.length % 2 !== 0) {
    str += "*";
  }

  let pair = [];
  for (let i = 0; i < str.length; i += 2) {
    pair.push(str[i] + str[i + 1]);
  }
  return pair;
}
console.log(pairC("welcome"));