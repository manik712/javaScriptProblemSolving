/*

Create a function that takes an array and returns the types of values (data types) in a new array.


Examples
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]


*/

function arrayValuesTypes(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push("string");
    } else if (typeof arr[i] === "number") {
      newArr.push("number");
    } else if (typeof arr[i] === "object") {
      newArr.push("object");
    } else if (typeof arr[i] === "boolean") {
      newArr.push("boolean");
    }
  }
  return newArr;
}

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);
