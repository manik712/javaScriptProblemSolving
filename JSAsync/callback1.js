let age = 18;

function choiceAGirl(callback) {
  console.log("i am trying to choice a girl");
  setTimeout(function () {
    if(age >=18){callback()}
    else {console.log("you are not appropriate to get a girl");}
  }, 3000);
}

