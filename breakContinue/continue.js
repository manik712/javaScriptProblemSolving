/*
Problem 1: Print Odd Numbers


Write a JavaScript program that uses a for loop to iterate through numbers
from 1 to 10. Print only the odd numbers,
and use the continue statement to skip even numbers.

*/

for (let i = 1; i < 20; i++) {
  if(i % 2 == 0){
    continue;
  }
  console.log(i);
}


