//Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatString(str1, str2) {
  // const x = str1.concat(" ", str2);
  const x = str2 + "," + str1;

  return x;
}
console.log(concatString("cow", "bag"));
