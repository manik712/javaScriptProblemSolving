/*
Create a function that takes an array of words and 
transforms it into an array of each word's length.


Examples


wordLengths(["hello", "world"]) ➞ [5, 5]

wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3


*/

function wordLengths(arr) {
  // let arr1 = [];
  let arr2 = arr.map((x) => x.length);
  // arr1.push(arr2);

  return arr2;
}

console.log(wordLengths(["hello", "world","thanksgiving"]));