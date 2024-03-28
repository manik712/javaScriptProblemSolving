//find out truthy values from an object.

// const mixedArray = {
//   a: "hello",
//   b: undefined,
//   c: "manik",
//   d: false,
//   e: NaN,
//   f: "67",
//   g: "",
//   h: "true",
//   i: "j",
//   j: null,
//   k: 0,
// };

// const propertyValues = Object.values(mixedArray);
// // console.log(propertyValues);
// const values = propertyValues.filter(Boolean)

// console.log(values);

// function truthyObject() {
//   for (let i in mixedArray) {
//       // console.log((mixedArray[i]))
//     if(mixedArray[i]){
//       delete mixedArray[i];

//     }
//   }
//   return mixedArray;
// }

// console.log(truthyObject());

const objj = {
  a: "hello",
  b: undefined,
  c: "manik",
  d: false,
  e: NaN,
  f: "67",
  g: "",
  h: "true",
  i: "j",
  j: null,
  k: 0,
};



const s = function truthyObject(obj) {
  for (let i in obj) {
    // console.log(obj,58)
    console.log(i, obj[i]);
    // console.log();
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(s(objj));
