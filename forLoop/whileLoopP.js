/*
Problem: Factorial Calculation

Write a program that calculates the factorial of a given
positive integer. The factorial of a
number is the product of all positive
integers up to that number.


*/

function calculateFactorial(number) {
  // Ensure the number is a positive integer
  number = Math.max(1, Math.floor(number));

  let factorial = 1;
  let currentNumber = 1;

  console.log(`Calculating the factorial of ${number}:`);

  while (currentNumber <= number) {
    // factorial *= currentNumber;
    factorial = factorial * currentNumber;
    currentNumber++;
  }

  console.log(`Factorial of ${number} is: ${factorial}`);
}

// Example: Calculate factorial of 7
calculateFactorial(7);
