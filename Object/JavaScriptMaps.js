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

//key can be any data type
const fruitsS = new Map([
  [50, 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruitsS);

/*
Map.set()
You can add elements to a Map with the set() method:

*/

const add = new Map();

console.log(add);
//Map(0) {}

add.set("apples", 500);
//can update
add.set("apples", 600);
console.log(add);
//Map(1) { 'apples' => 500 }

//get value by using get() method
console.log(add.get("apples"));

/*
Map.size
The size property returns the number of elements in a Map:



*/
console.log(add.size);

//Map.delete()

console.log(fruitsS.delete("oranges"), 100);

//true
//false

//Map.has()
console.log(fruitsS.has("oranges"));
//false

//Map.clear()

console.log(fruitsS.clear());

//undefined

//Maps are Objects

//typeof returns object:

console.log(typeof add);
//object

//instanceof Map returns true:

console.log(add instanceof Map);
//true


/*





   
JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:

Object                       	     Map
Not directly iterable     	       Directly iterable
Do not have a size property    	    Have a size property
Keys must be Strings (or Symbols)	  Keys can be any datatype
Keys are not well ordered	          Keys are ordered by insertion
Have default keys	                   Do not have default keys






*/
