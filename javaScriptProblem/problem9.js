


const mixedArray = [
  "hello",
  undefined,
  "manik",
  false,
  NaN,
  "67",
  "",
  "true",
  "j",
  null,
  0,
];



// function falseFree() {
//   let arrays = [];
//   let length = mixedArray.length;
//   for (let i = 0; i <length; i++) {
//     if (mixedArray[i]) {
//       arrays.push(mixedArray[i]);
//     }
//   }
//   return arrays;
// }

// console.log(falseFree());




//or




// const newArray = mixedArray.filter(function (currentValue) {
//   if (currentValue) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(newArray);



//or 



const newArray =mixedArray.filter(Boolean)

console.log(newArray);
