// Create a function that takes an array containing only numbers and return the first element.



function getFirstElement(arr) {
  if (arr.length > 0) {
      return arr[0];
  } else {
      return undefined;
  }
}

console.log(getFirstElement([1,2,3,4,5,6]));