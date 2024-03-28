//Prototype Inheritance
/*

All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.



*/

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

Person.prototype.country = "Bangladesh";
console.dir(Person);
console.log(myPerson.country);
console.log(myPerson1.country);

//bangladesh
// console.log(myPerson.fullName());
// console.log(myPerson1.fullName());
