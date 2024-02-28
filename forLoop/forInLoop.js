const person = { fname: "Manik", lname: "Sarker", age: 30 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";

  // console.log(person[x]);

}
// console.log(txt);







// Write a function countProperties(obj) that takes an object as an argument and returns the count of its own enumerable properties.


// function countProperties(obj){
//   let count = 0;
//   for(let x  in obj) {
//    if (obj.hasOwnProperty(x)){
//     count++
//    }

//   }

//   return count;
// }


// let sampleObject = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   occupation: 'Engineer'
// };

// console.log(countProperties(sampleObject)); // Should output 4
