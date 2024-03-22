//Write an arrow function called doubleArray that takes in an array of
// numbers as input and returns a new array where each element is doubled.

const numbers = [1, 2, 3, 4, 5];

const doubleArray = (numbers) => {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    array.push(numbers[i] * 2);
  }
  return array;
};
console.log(doubleArray(numbers));
