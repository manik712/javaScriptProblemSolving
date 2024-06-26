//JavaScript Iterables

//Iterable objects are objects that can be iterated over with for..of.

// Technically, iterables must implement the Symbol.iterator method.

//Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string

// Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:

// const arr=["a","b","c","d"];

const arr1 = {
  one: 1,
  two: 2,
  three: 3,
};

// for(let i=0;i<arr.length;i++){

//   console.log(i,arr[i]);
// }

// for(let x of arr){

//   console.log(x,);
// }

//TypeError: arr is not iterable

// console.dir(arr1);

//will return object

const arr = ["a", "b", "c"];

// which object has   Symbol(Symbol.iterator)  there are  Iterables

console.log(arr[Symbol.iterator]);

// will return ,ƒ values() ,itarator,

console.log(arr[Symbol.iterator]());
// Object [Array Iterator] {}

const iteratorArr = arr[Symbol.iterator]();

console.log(iteratorArr.next());
//{ value: 'a', done: false }
console.log(iteratorArr.next());
//{ value: 'b', done: false }
console.log(iteratorArr.next());
//{ value: 'c', done: false }
console.log(iteratorArr.next());
//{ value: undefined, done: true }

//create an object
const myObj = {};

myObj[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 3;
      if (n == 300) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

for (let x of myObj) {
  console.log(x);
}
