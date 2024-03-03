//new Set()

const letters = new Set(["a", "b", "c","d"]);
console.log(letters);

//add()

letters.add("g");
console.log(letters);

//delete()

letters.delete("a");
console.log(letters);

//has()

/*
return true or false
*/
const sss = letters.has("s");
console.log(sss);

//forEach()

let text = "";
letters.forEach(function (value) {
  text = text + value;
});
console.log(text);


  
const rrr= letters.values()

console.log(rrr);
