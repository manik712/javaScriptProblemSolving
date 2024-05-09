/*

A typical car can hold four passengers and one driver, allowing five
people to travel around. Given n number of people,
return how many cars are needed to seat everyone comfortably.

*/

function carNumber(n) {
  const myCar = n / 5;
  if (Number.isInteger(myCar)) {
    return myCar;
  } else if (!Number.isInteger(myCar)) {
    const ourCar = Math.ceil(myCar);
    return ourCar;
  }
}

console.log(carNumber(0));
