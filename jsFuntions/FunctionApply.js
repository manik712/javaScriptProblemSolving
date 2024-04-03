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
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person11 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person6.fullName.apply(person11, ["Oslo", "Norway"]),41);