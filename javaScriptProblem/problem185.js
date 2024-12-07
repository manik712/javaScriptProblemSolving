/*

Create a function that reverses an array

*/


function reverses(arr){
  let newArr =[];
  for(let i= arr.length-1; i>=0; i--){
      let a = arr[i];
      // console.log(a);
      newArr.push(a)

  }
  return newArr
}

console.log(reverses([2,3,4]));