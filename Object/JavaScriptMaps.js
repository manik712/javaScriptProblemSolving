//JavaScript Maps

/*
 Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.



*/

//Map Methods

//array same as sets
//map same as objects

/*


How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()


*/

// Create a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
//Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
//   ["apple"]

// ]);

//console.log(fruits);
/*
//return
Map(4) {
  'apples' => 500,
  'bananas' => 300,
  'oranges' => 200,
  'apple' => undefined
}
*/
