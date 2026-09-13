//callback function

function firstFunction(callback) {
  console.log("line no.1");
  callback();
}

function secondFunction(){
  console.log("line no. 2")
}
firstFunction(secondFunction)




//=>firstFunction(callback)=firstFunction(secondFunction)
//=>callback=secondFunction