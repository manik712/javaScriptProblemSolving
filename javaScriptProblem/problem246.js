//Repeat the first two characters followed
//by an ellipsis and space twice, then append
//the full word and an exclamation mark.

//Example
//stuttering("astounding") ➞ "as... as... astounding!"

function stuttering(str) {
  //split the string
  let x = str.split("");
  //join the two element of an array
  let y = `${x[0]}${x[1]}`;
  let z = `"${y}...${y}...${str}!"`;
  console.log(z);
}
//call function
stuttering("astounding");
