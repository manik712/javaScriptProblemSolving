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
