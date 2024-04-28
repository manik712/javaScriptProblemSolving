/*
In this challenge, a farmer is asking you to tell
 him how many legs can be counted among all his animals. 
 The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs

The farmer has counted his animals and he
 gives you a subtotal for each species. You have 
 
 to implement a function that returns the total
  number of legs of all the animals.

*/



function animals(chickens,cows,pigs){
  
  const x = chickens*2;
  const y =cows*4;
  const z= pigs*4;
  
  const result = x+y+z;
  
  return result;
  
}


console.log(animals(1,4,5))
//38


