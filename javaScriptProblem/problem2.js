//Qs2. Write a JS program to find the no of digits in a number.
//Example : if number = 287152, count = 6




function countNumber() {
  let number = number1.toString();
  let digits = number.length;
  return digits;
}

let number1 = 12345660;
let allNumbers = countNumber();
console.log(allNumbers);
