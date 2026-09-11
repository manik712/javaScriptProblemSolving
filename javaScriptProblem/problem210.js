//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function dividedBy5(num) {
  if (Number.isInteger(num)) {
    const a = num % 5;

    if (a === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please input integer number";
  }
}

console.log(dividedBy5(25)); // true
console.log(dividedBy5(23)); // false
console.log(dividedBy5(12.5)); // Please input integer number