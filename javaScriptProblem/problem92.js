/*


Given a Rubik's Cube with a side length of n,
return the number of individual stickers that
are needed to cover the whole cube.


*/


function howManyStocks(n) {
  const totalStocks = 6 * Math.pow(n, 2);
  return totalStocks;
}

console.log(howManyStocks(3));
