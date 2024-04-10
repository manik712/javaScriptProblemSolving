const p = document.getElementById("p1");
// const p = document.querySelector('#p1');
p.style.color = "blue";
p.style.fontSize = "200px";

//at first load the html file ,then load the javascript file

setTimeout(function () {
  const p = document.getElementById("p1");
  // const p = document.querySelector('#p1');
  p.style.color = "blue";
  p.style.fontSize = "200px";
}, 4000);

