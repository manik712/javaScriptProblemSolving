/*


*/
// function addIndex(arr){
//   let  myArr = []
// for(i=0; i<arr.length;i++){
  
//   let myIndex = indexOf(arr[i]);
//   let mySum = myIndex+arr[i];
//   myArr.push(mySum)
// }
// return myArr;
// }

// console.log(addIndex([0,1,2]))



function addIndex(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    let mySum = i + arr[i];
    myArr.push(mySum);
  }
  return myArr;
}

console.log(addIndex([0, 1, 2]));  // Output: [0, 2, 4]
