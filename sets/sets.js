//new Set()

const letters = new Set(["a", "b", "c", "d"]);
// console.log(letters);

//add()

letters.add("g");
// console.log(letters);

//delete()

letters.delete("a");
// console.log(letters);

//has()

/*
return true or false
*/
const sss = letters.has("s");
// console.log(sss);

//forEach()

let text = "";
letters.forEach(function (value) {
  text = text + value;
});
// console.log(text);

const rrr = letters.values();

// console.log(rrr);

/*


 problem:Unique Elements


Write a function findUniqueElements that takes two arrays as
arguments and returns a new array containing only the unique elements 
from both arrays. The order of the elements in the result 
should be the same as the order in which they appear in the input arrays.




*/

function findUniqueElements(array1, array2) {
  const uniqueElements = array1.concat(array2);

  // console.log(uniqueElements,56);

  const uniqueSets = new Set(uniqueElements);

  // console.log(uniqueSets);
  const uniqueArray = Array.from(uniqueSets);
  console.log(uniqueArray);
  return uniqueArray;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 7];

const newArray = findUniqueElements(arr1, arr2);
// console.log(newArray);
