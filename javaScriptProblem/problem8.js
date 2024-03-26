//find out the number those are divided by 3,5 and both 3 and 5 upto 100.
// divided by 3 or 5

// function getNumber() {
//   let number = [];
//   for (let i = 1; i <= 100; i++) {
//     // console.log(i);

//     if (i % 3 == 0 || i % 5 == 0) {
//       // if (i % 3 == 0 && i % 5 == 0) {
//       //[ 15, 30, 45, 60, 75, 90 ]
//       number.push(i);
//     }
//   }
//   return number;
// }

// console.log(getNumber());

//or

// function getNumber(num) {
//   let number = [];
//   for (let i = 1; i <= num; i++) {
//     // console.log(i);

//     if (i % 3 === 0 || i % 5 === 0) {
//       // if (i % 3 == 0 && i % 5 == 0) {
//       //[ 15, 30, 45, 60, 75, 90 ]
//       number.push(i);
//     }
//   }
//   return number;
// }

// console.log(getNumber(100));





//or



function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is fizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(`${i} is a number`);
    }
  }
}
fizzBuzz(100);

