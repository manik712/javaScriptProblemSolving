/*


*/
function lastOne(arr){
  if(arr.length===0){
    return arr
  }
  let a = arr.pop()
  
  let newArr= arr.unshift(a);
  return arr
}
console.log(lastOne([1,2,3]))