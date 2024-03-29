//JavaScript Iterables



//Iterable objects are objects that can be iterated over with for..of.

// Technically, iterables must implement the Symbol.iterator method.



//Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string


// Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:


// const arr=["a","b","c","d"];




const arr={
  one:1,
  two:2,
  three:3
}


// for(let i=0;i<arr.length;i++){

//   console.log(i,arr[i]);
// }


// for(let x of arr){

//   console.log(x,);
// }

//TypeError: arr is not iterable

console.dir(arr);

//will return object





// which object has   Symbol(Symbol.iterator)  there are  Iterables

