/*



*/

function cola(array) {
  let arr = ["cola", "funta"];
 
  let myArr = array.filter((drink) => !arr.includes(drink));
  
  return myArr;
}

console.log(cola(["amm", "cola"])); // Corrected the function call syntax