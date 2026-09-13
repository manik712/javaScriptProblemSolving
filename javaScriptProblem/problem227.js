function f1(callback1) {
  console.log("first line");
  callback1(f3);
}

f1(f2);
function f2(callback2) {
  console.log("second Line");
  callback2();
}

function f3(){
  console.log("third line")

}
