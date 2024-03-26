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

function falseFree() {
  let arrays = [];
  for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i]) {
      arrays.push(mixedArray[i]);
    }
  }
  return arrays;
}

console.log(falseFree());








// const newArray = mixedArray.filter(function (currentValue) {
//   if (currentValue) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(newArray);
