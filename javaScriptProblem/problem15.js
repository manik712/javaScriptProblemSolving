// Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  ssn: "123-456-2356",
};

let job = {
  jobTitle: "JavaScript Developer",
  location: "USA",
};



// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects(person, job));


//or

// let employee = Object.assign(person, job);
// console.log(employee);



//or
let myEmployee = { ...person,  ...job };

console.log(myEmployee);