function calculateFactorial(number) {
  // Ensure the number is a positive integer
  number = Math.max(1, Math.floor(number));

  let factorial = 1;
  let currentNumber = 1;

  console.log(`Calculating the factorial of ${number}:`);

  while (currentNumber <= number) {
      factorial *= currentNumber;
      currentNumber++;
  }

  console.log(`Factorial of ${number} is: ${factorial}`);
}

// Example: Calculate factorial of 5
calculateFactorial(7);
