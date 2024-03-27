
//find out truthy values from an object.

const mixedArray = {


  a :"hello",
  b:undefined,
  c:"manik",
  d:false,
  e: NaN,
  f:"67",
  g: "",
  h: "true",
  i:"j",
  j: null,
  k:0,
      };

const propertyValues = Object.values(mixedArray);
// console.log(propertyValues);
const values = propertyValues.filter(Boolean)

console.log(values);