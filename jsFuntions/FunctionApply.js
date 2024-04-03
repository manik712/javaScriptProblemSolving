// Function apply()

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
console.log(person.fullName.apply(person1));

//The Difference Between call() and apply()

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

/*
The apply() Method with Arguments




The apply() method accepts arguments in an array:

*/
const person6 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person11 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person6.fullName.apply(person11, ["Oslo", "Norway"]), 41);

//Simulate a Max Method on Arrays

console.log(Math.max(1, 56, 990));


console.log(Math.max.apply(null, [1,2,3])); 

// Will also return 3

/*
The first argument (null) does not matter. It is not used in this example.

These examples will give the same result:


*/
console.log(Math.max.apply(Math, [1,2,3]));
// Will also return 3

//or
console.log(Math.max.apply(" ", [1,2,3]));
// Will also return 3

console.log(Math.max.apply(0, [1,2,3]));
// Will also return 3