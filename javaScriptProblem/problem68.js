function calculateExponent(num, exp) {
  const myNum = num;
  if (myNum < 0) {
    return NaN;
  } else if (myNum == "") {
    return undefined;
  } else {
    const result = myNum ** exp;
    return result;
  }
}

console.log(calculateExponent("we", 2));
