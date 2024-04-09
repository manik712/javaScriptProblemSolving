/*


Create a new array whose elements are in uppercase of words present in the
original array.


*/

const array = ["hello", "world", "mango"];

const uppercase=array.map(arr=>arr.toUpperCase())
console.log(uppercase);
//[ 'HELLO', 'WORLD', 'MANGO' ]

