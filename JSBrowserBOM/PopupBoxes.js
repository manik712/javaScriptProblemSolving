// Popup Boxes
//JavaScript has three kind of popup boxes:
// Alert box,
// Confirm box,
// and

// Prompt box.

const confirm = document.getElementById("confirm");

const prompt = document.getElementById("prompt");

function alertBox() {
  alert("hello world");
}


//confirm

function ConfirmBox() {
  let text;
  if (window.confirm("please ...")) {
    text = "you press the confirm button";
  } else {
    text = "you press the cancel button";
  }

  confirm.innerHTML = text;
}
//prompt
function promptT() {
  const person = window.prompt("Please enter your name:", "Manik, ");
  let text;
  if (person === null || person === " ") {
    text = "you cancelled the prompt";
  } else {
    text = "hello! " +  person  + " How are you?";
  }
  prompt.innerHTML = text;
}
