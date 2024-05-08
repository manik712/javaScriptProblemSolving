/*

I'd like to calculate how long on average I've lived in a single house.

Given a person's age and the number of times they've moved house 
as moves, return the average number of years that they've spent living 
in the same house.

*/

function yearsInOneHouse(age, moves) {
  const myAge = age;
  const myMoves = moves + 1;
  const myResults = myAge / myMoves;
  return myResults + " times";
}
console.log(yearsInOneHouse(15, 2));



