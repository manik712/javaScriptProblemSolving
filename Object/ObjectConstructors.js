//Object Constructors

//Constructor is invoked at the time of object creation


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function (){
    return this.firstName + " " +  this.lastName + " " + this.age
  }
}

const myPerson = new Person("manik","sarker","34")

console.log(myPerson.fullName());
// manik sarker 34