//Function call()
//Method Reuse
//With the call() method, you can write a method that can be used on different objects.

//All Functions are Methods
//

const w = {
  firstName: "manik",
  water: function () {
    console.log(`${this.firstName} water the tree`);
  },
};
w.water();

//in javascript all functions are methods

//The JavaScript call() Method

// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).
//With call(), an object can use a method belonging to another object.

// The JavaScript call() Method
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person2));


/*

The call() Method with Arguments
The call() method can accept arguments:

*/

const persons = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person3 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(persons.fullName.call(person3, "Oslo", "Norway"),62);