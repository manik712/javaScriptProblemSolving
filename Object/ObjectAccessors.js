//Object Accessors

//JavaScript Getter (The get Keyword)

// Create an object:

//getter (The get Keyword)
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",

  get lang() {
    return this.firstName + " " + this.lastName + " " + this.language;
  },
};

console.log(person.lang);

// JavaScript Setter (The set Keyword)

const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

// Set an object property using a setter:
person1.lang = "en";

console.log(person1.language);




//Why Using Getters and Setters?

/*

It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes


*/





//Object.defineProperty()

