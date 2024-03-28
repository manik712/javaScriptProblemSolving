/*
Create a new array using the map function whose each element is equal to the
original element plus 5.




*/
const arr = [4, 5, 7, 12];
const newArr = arr.map(life);


function life(num) {
  return num + 5;
}

console.log(newArr);