

// A Promise is an Object that links Producing code and Consuming code

// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming cod



let money =false;

console.log("code is 1");
//definition
let promise = new Promise(function(resolve,reject){
  setTimeout(function(){
    if(money){resolve("you are selected");}
    else{reject("you are not selected");}
  },5000)
})



//call
promise.then(function(value){
  console.log(value);
})
.catch(function(err){
  console.log(err);
})

//you are not selected

console.log("code is 3");

