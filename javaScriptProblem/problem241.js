//vumiilove1 --password

function whichIsLarger(f, g) {
  // const valF = f();
  // const valG = g();
  if (f() > g()) {
    return "f";
  } else if (f() < g()) {
    return "g";
  } else {
    return "neither";
  }
}
function f() {
  return 20;
}

function g() {
  return 20;
}

console.log(whichIsLarger(f, g)); //neither
