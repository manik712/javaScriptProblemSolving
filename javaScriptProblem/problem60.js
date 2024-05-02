/*

Help fix all the bugs in the function 
incrementItems! It is intended to add 
1 to every element in the array!

*/

function incrementItems(arr) {
  const array = [];
  // console.log(array);
  // const array =[];
  for (let i = 0; i < arr.length; i++) {
    // arr[i] == arr[i] + 1;
    // console.log(array[i]+1);
       const x = arr[i]+1;
    array.push(x);
  }

  return array;
}

console.log(incrementItems([1, 2, 3, 4, 5]));
