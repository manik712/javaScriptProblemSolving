//vumiilove1 --password

//Your function will be passed two functions, f and g,
// that don't take any parameters. Your function has to call them,
// and return a string which indicates which function returned the
// larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither. solve it js


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
