//JavaScript Display Objects

/*
Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()


*/
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let tex = "";
for (let x in person) {
  tex = tex + person[x];
}

// document.getElementById("demo").innerHTML = person.age + " city " + person.city;
// document.getElementById("demo").innerHTML = tex

// You must use person[x] in the loop.

// person.x will not work (Because x is a variable).

// Object to array

const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(typeof JSON.stringify(person1));

//  let app =  Object.values(person1);

//  for (let x of app){

//   console.log(x);
//  }

// const arr = person1.values();
// console.log(arr);

//Using JSON.stringify()

//Stringify Dates

//Stringify Functions



//Stringify Arrays

