let age = 18;
let beautiful = true;
let money = true;

function choiceAGirl(callback) {
  console.log("i am trying to choice a girl");
  setTimeout(function () {
    if (age >= 18) {
      callback();
    } else {
      console.log("you are not appropriate to choice a girl");
    }
  }, 3000);
}

function proposeAGirl(callback) {
  console.log("i am trying to propose a girl");

  setTimeout(function () {
    if (beautiful) {
      callback();
    } else {
      console.log("you are not appropriate to propose a girl");
    }
  }, 3000);
}

function propose(callback) {
  console.log("propose a girl");
  setTimeout(function () {
    if (money) {
      callback();
    } else {
      console.log("you are gorib,don't try to do this again");
    }
  }, 3000);
}

function kissAndMarry() {
  console.log("she kiss me and marry me");
}

choiceAGirl(function () {
  proposeAGirl(function () {
    propose(function () {
      kissAndMarry();
    });
  });
});
