/*
A vehicle needs 10 times the amount of fuel than the distance it travels. 
However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
*/

function calculateFuel(n){
  const add = "the result is"
   const fuel = n * 10;
   if(fuel > 100){
    return fuel;
   }else if(fuel < 100){
    return add + " " + fuel;
   }
}
console.log(calculateFuel(3));