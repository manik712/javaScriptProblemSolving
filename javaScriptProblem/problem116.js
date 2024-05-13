/*

Create a function that takes an array of integers and strings.
Convert integers to strings and return the new array.

*/

function numberToString(arr) {
  let arrStr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      const val = arr[i].toString();
       arrStr.push(val);
    }else if(typeof arr[i]==="string") {
       arrStr.push(arr[i]);
    }
  }
  return arrStr;
}
console.log(numberToString([2,3,4,5,"a","b","c","d","e","f",39,0,34]));