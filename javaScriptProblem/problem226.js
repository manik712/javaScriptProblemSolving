//callback function

function firstFunction(callback) {
  console.log("line no.1");
  callback();
}

firstFunction(secondFunction)

function secondFunction(){
  console.log("line no. 2")
}


//line no.1
//line no. 2



//=>firstFunction(callback)=firstFunction(secondFunction)
//=>callback=secondFunction