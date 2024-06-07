/*
Create a function that takes a number n and returns 
the nth even number beginning with 0 as the first.


Examples


nthEven(1) ➞ 0
// 0 is first even number

nthEven(2) ➞ 2
// 2 is second even number

nthEven(100) ➞ 198


*/
function nthEven(n) {
  let result = (n -1) * 2;
  return result;
}

console.log(nthEven(5));