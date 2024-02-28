const person = { fname: "Manik", lname: "Sarker", age: 30 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);
