//A spaceship will take three decades to build. Given the current population and the number of people born each month, return the population when the spaceship is complete.
function futurePeople(population, n) {
  const x = population + 360 * n;
  return x;
}

console.log(futurePeople(245,8))//3125


