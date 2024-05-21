/*


*/
function sArrToString(arr){
  let myArr = [];
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==="string"){
     let ourArr=Number(arr[i]);
     myArr.push(ourArr);
    }
  }
  return myArr;
}

console.log(sArrToString(["1","8","12"]))