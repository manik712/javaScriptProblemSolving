/*



*/

function total(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  if(sum < 0){
    return -sum;
  } else {
    return sum;
  }
}

console.log(total([1, -2, 4]));