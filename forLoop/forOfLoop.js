let word = "hello";

for (let x of word) {
  // console.log( x );
}

//output will be
//h
//e
//l
//l
//o

//problem
// Write a function filterOddNumbers(numbers) that takes an array of numbers as input and uses the for...of loop
// to filter out the odd numbers, returning a new array containing only the even

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(numbers) {
  for (let x of numbers) {
    // console.log(x);
    if (x % 2 == 0) {
      console.log(x);
    }
    else if (x % 2 == 1) {
      console.log(x);
    }
  }
}

console.log(filterOddNumbers(numbers)); // Should output: [2, 4, 6, 8, 10]
