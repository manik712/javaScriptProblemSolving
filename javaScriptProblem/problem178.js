/*

Create a function that takes an array of 
numbers. Return the largest number in the array.


Examples,


findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600

findLargestNum([1000, 1001, 857, 1]) ➞ 1001

*/


function findLargestNum(arr){
  const a = Math.max(...arr);
  return a;
}

console.log(findLargestNum([6,78,2,90,4]));

