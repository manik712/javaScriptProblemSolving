/*

Create a function that finds the index of a given item.

*/

function searchIndex(arr, item) {
  const myArr = arr;
  const myItem = item;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === myItem) {
      return myArr.indexOf(myArr[i]);
    }
  }
return -1;
}

console.log(searchIndex([1, 2, 3, 4, 65, 3, 2, 78], 655));
