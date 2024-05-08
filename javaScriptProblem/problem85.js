/*

Given an index and an array, return the
 
value of the array with the given index.

*/

function valueByIndex(arr, index) {
  const myIndex = Math.floor(index);
  const myArr = arr;
  if (myIndex < 0 || myIndex >= myArr.length) {
    return "Array elements limitation";
  }
  for (let i = 0; i < myArr.length; i++) {
    if (myArr.indexOf(myArr[i]) == myIndex) {
      const value = myArr[i];
      return value;
    }
  }
}

console.log(valueByIndex(["w", "r", "h", "m"], 7/2));
