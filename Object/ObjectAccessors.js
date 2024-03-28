//Object Accessors

//JavaScript Getter (The get Keyword)

// Create an object:

//getter (The get Keyword)
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",


  get lang() {
    return this.firstName + " " + this.lastName + " " + this.language
  }
};

console.log(person.lang);
