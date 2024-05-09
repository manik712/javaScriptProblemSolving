/*


Create a function that searches for the
index of a given item in an array. If 
the item is present, it should return 
the index, otherwise, it should return -1.


*/

function searchIndex(arr, item) {
  const myArr = arr;
  const myItem = item;
  for (let i = 0; i < myArr.length; i++) {
    if (myItem === myArr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(searchIndex([4, 6, 2, 9, 10],11));
