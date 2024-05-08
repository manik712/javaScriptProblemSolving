/*


Create a function that takes an array and a 
string as arguments and returns the index of the string.


*/


function findIndex(arr, string) {
  const myIndex = arr;
  for (let i = 0; i < arr.length; i++) {
    if (string === arr[i]) {
      const trueIndex = arr[i];
      return "The index no. is " + myIndex.indexOf(trueIndex);
    }
  }
}

console.log(findIndex(["my", "other", "im", "manik", "love"], "love"));
