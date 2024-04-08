let age = 18;
let beautiful = true;
let money = true;

function choiceAGirl() {
  console.log("i am trying to choice a girl");
  const promise = new Promise(function (res, rej) {
    setTimeout(function () {
      if (age >= 18) {
        res();
      } else {
        rej("you are not appropriate to choice a girl");
      }
    }, 3000);
  });
  return promise;
}

function proposeAGirl() {
  console.log("i am trying to propose a girl");
  const promise = new Promise(function (res, rej) {
    setTimeout(function () {
      if (beautiful) {
        res();
      } else {
        rej("you are not appropriate to propose a girl");
      }
    }, 3000);
  });
  return promise;
}


function propose() {
  console.log("I propose a girl");
  const promise = new Promise(function (res, rej) {
    setTimeout(function () {
      if (money) {
        res();
      } else {
        rej("you are gorib,don't try to do this again");
      }
    }, 3000);
  });
  return promise;
}


function kissAndMarry() {
  console.log("She kisses  me and marry me");
  const promise = new Promise(function () {
    setTimeout(function () {}, 2000);
  });
  return promise;
}

// call promise
choiceAGirl()
  .then(proposeAGirl)
  .then(propose)
  .then(kissAndMarry)
  .then(function () {})
  .catch(function (err) {
    console.log(err);
  });
