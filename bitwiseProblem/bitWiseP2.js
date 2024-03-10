/*
Problem: Find the Single NumberYou 
are given a non-empty array of integers 
where every element appears
twice except for one. Find that 
single one.

*/
function findSingleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}

// Example usage:
console.log(findSingleNumber([2, 2, 1])); // Output: 1
console.log(findSingleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(findSingleNumber([1])); // Output: 1
