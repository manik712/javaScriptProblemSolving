//template string and condition
function isAllow(age) {
  const x = `hello, you are ${age >= 18 ? "allow" : "not allow"}`;
  return x;
}
console.log(isAllow(4));//not allow



