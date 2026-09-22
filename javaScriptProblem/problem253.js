//Given an array of drink objects with name and price properties,
//return the array sorted from lowest price to highest.

//Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]

function smallToLarge(obj) {
  let price1 = obj[0].price;
  let price2 = obj[1].price;

  //condition
  if (price2 < price1) {
    return [obj[1], obj[0]];
  } else {
    return [obj[0], obj[1]];
  }
}
//the object
drinks = [
  { name: "lemonade", price: 10 },
  { name: "lime", price: 50 },
];

console.log(smallToLarge(drinks));
