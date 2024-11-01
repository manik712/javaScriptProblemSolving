   /*



Given a 2D-list of letters arr and a list of indexes idx,
 find the letters on given indexes and return as a string. 
 solve it by js




   */

 function getLetters(arr, idx) {
  return idx.map(([row, col]) => arr[row][col]).join('');
}

// Example usage
const arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
];
const idx = [[0, 1], [1, 1], [2, 0]];

console.log(getLetters(arr, idx)); // Output: "beh"


