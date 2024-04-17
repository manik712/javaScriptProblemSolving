// Popup Boxes
//JavaScript has three kind of popup boxes:
// Alert box,
// Confirm box,
// and

// Prompt box.

const confirm = document.getElementById("confirm");

function alertBox() {
  alert("hello world");
}

function ConfirmBox() {
  let text;
  if (window.confirm("please ...")) {
    text = "you press the confirm button";
  } else {
    text = "you press the cancel button";
  }

  confirm.innerHTML = text;
}
