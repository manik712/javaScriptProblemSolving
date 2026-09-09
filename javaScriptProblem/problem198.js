//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:


function animals(chickens, cows, pigs) {
	let x = chickens*2;
let y = cows*4;
let z =pigs*4;
let a= x+y+z;
return a;

}

console.log(animals(2,4,2))