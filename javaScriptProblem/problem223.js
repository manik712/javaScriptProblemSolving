
// in the function incrementItems! It is intended to add 1 to every element in the array!



function incrementItems(arr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) array.push(arr[i] + 1);
  return array;
}

console.log(incrementItems([1, 2, 3, 4]));//[ 2, 3, 4, 5 ]
