function yourMove() {
  const animates = document.querySelector("#animate");
  let pos = 0;

  let interval = setInterval(fame, 1);

  function fame() {
    if (pos < 350) {
      pos++;
      animates.style.top = pos + "px";
      animates.style.left = pos + "px";
    } else {
      clearInterval(interval);
    }
  }
}

yourMove();
