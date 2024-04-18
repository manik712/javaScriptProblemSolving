// Timing Events
const setTimeouts = document.getElementById("setTimeouts");
const setIntervals = document.getElementById("setIntervals");

//timeOut()
let myTimeOut;
function timeOut() {
  // console.log("Time Out");
  myTimeOut = setTimeout(function () {
    setTimeouts.innerHTML = "time is over!";
  }, 3000);
}

//stopTimeOut()
function stopTimeOut() {
  // console.log("Stop Time Out");
  clearTimeout(myTimeOut);
}

let myInterval;
//interval()
   function interval() {
  // console.log("Interval");
   myInterval= setInterval(function () {
    setIntervals.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}


//stopInterval()

function stopInterval() {
  // console.log("Stop Interval");
  clearInterval(myInterval)
}
