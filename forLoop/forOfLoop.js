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

//problem no.1
// Write a function filterOddNumbers(numbers) that takes an array of numbers as input and uses the for...of loop
// to filter out the odd numbers, returning a new array containing only the even

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(numbers) {
  for (let x of numbers) {
    // console.log(x);
    if (x % 2 == 0) {
      // console.log(x);
    } else if (x % 2 == 1) {
      // console.log(x);
    }
  }
}

// console.log(filterOddNumbers(numbers));

// Should output: [2, 4, 6, 8, 10]

//problem no.2

//Write a function sumOfSquares(numbers) that takes an array of numbers as input
//and calculates the sum of the squares of each number using the for...of loop. Return the total sum.

let digit = [1, 2, 3, 4, 5];

function sumOfSquares(digit) {
  let sum = 0;
  for (let x of digit) {
    // console.log(x);
    // sum = sum + x ** 2;
    sum += x * x;
  }

  return sum;
}

// console.log(sumOfSquares(digit));

//out put
//55

// Problem: Vowel Count

// Write a JavaScript function that takes a string as input and returns the count of
// vowels in that string. Use the for...of loop to iterate through the characters of
// the string and check if each character is a vowel (a, e, i, o, u, case-insensitive).

function countOfVowel(string) {
  let count = 0;
  for (let x of string) {
    if ("aeiouAEIOU".includes(x)) {
      count += 1;
    }
  }
  return count;
}

let vowelCount = countOfVowel("javascript");
console.log(vowelCount);
