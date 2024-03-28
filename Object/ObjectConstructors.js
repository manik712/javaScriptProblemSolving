//Object Constructors

//Constructor is invoked at the time of object creation

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName + " " + this.age;
  };
}

const myPerson = new Person("manik", "sarker", "34");
const myPerson1 = new Person("maniks", "sarkers", "35");

console.log(myPerson.fullName());
console.log(myPerson1.fullName());

// manik sarker 34

//It is considered good practice to name constructor functions with an upper-case first letter.

//In a constructor function this does not have a value.
// It is a substitute for the new object.
// The value of this will become the new object when a new object is created.
//this is not a variable. It is a keyword. You cannot change the value of this.

//Adding a Property to an Object
myPerson.country = "United States";


//Adding a Method to an Object

myPerson.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(myPerson);

//Built-in JavaScript Constructors

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object


//

firstName = "John"
firstName = new String("john")
console.log(typeof firstName );