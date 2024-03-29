//JavaScript Sets

/*
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type

*/

//Property	Description
// size	Returns the number elements in a Set

/*
How to Create a Set
You can create a JavaScript Set by:

Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables

*/

// Create a Set
const letters = new Set(["a", "b", "c", "c"]);
console.log(letters);
//Set(3) { 'a', 'b', 'c' }

//Create a Set and add literal values:

const lettersM = new Set();
console.dir(lettersM);
//return
/*
Set(0)
[[Entries]]
No properties
size
: 
0
[[Prototype]]
: 
Set
add
: 
ƒ add()
clear
: 
ƒ clear()
constructor
: 
ƒ Set()
delete
: 
ƒ delete()
difference
: 
ƒ difference()
entries
: 
ƒ entries()
forEach
: 
ƒ forEach()
has
: 
ƒ has()
intersection
: 
ƒ intersection()
isDisjointFrom
: 
ƒ isDisjointFrom()
isSubsetOf
: 
ƒ isSubsetOf()
isSupersetOf
: 
ƒ isSupersetOf()
keys
: 
ƒ values()
size
: 
(...)
symmetricDifference
: 
ƒ symmetricDifference()
union
: 
ƒ union()
values
: 
ƒ values()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.toStringTag)
: 
"Set"
get size
: 
ƒ size()
[[Prototyp



*/

const Symbol = new Set();
Symbol.add("a");
console.log(Symbol);

//Create a Set and add variables:
// Create Variables
const a = "a";
const b = "b";
const c = "c";

const letter3 = new Set();
letter3.add(b);
console.log(letter3);

//forEach
const letters5 = new Set(["a", "b", "c"]);
console.log(letters5);
let text = "";
letters5.forEach(function (value) {
  // console.log(value);
  text += value;
});
console.log(typeof text);

//The values() Method
//The values() method returns an Iterator object containing all the values in a Set:
const arr = [1, 2, 3, 4, 9, 10];

const arrSet = new Set(arr);
// console.log(arrSet);
//Set(6) { 1, 2, 3, 4, 9, 10 }
const vArrSet = arrSet.values();
console.log(vArrSet);
//[Set Iterator] { 1, 2, 3, 4, 9, 10 }
num = 0;
for (let r of vArrSet) {
  console.log(r);
  text += r;
}
console.log(num);

//The keys() Method
const key = arrSet.keys();
console.log(key);
//[Set Iterator] { 1, 2, 3, 4, 9, 10 }

//The entries() Method

const entriesS = {
  firstName: "John",
  lastName: "Doe",
};

const w = Object.entries(entriesS);

console.log(w);
//[ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ] ]






const number = [1, 2, 3, 4, 5];
// console.log(number);
const sNumber = new Set(number);
// console.log(sNumber);
const iNumber = sNumber.entries();
// console.log(iNumber);
//[Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }
let tx = "";
for (const entry of iNumber) {
  tx += entry;
  console.log(entry);
  // [ 1, 1 ]
  // [ 2, 2 ]
  // [ 3, 3 ]
  // [ 4, 4 ]
  // [ 5, 5 ]
}

