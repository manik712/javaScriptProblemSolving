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

const letter3 =new Set()
letter3.add(b)
console.log(letter3);


//forEach
const letters5 = new Set(["a","b","c"]);
console.log(letters5);
let text="";
letters5.forEach(function(value){
  // console.log(value);
  text += value;
})
console.log( typeof text);