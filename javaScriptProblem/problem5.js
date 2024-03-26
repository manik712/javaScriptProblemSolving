//  problem:find out how many (girl) words are in the line

const sentence = " Police were called to  girl reports of a girl";

const matches = sentence.match(/girl/gi);

// console.log(matches);

const result = matches ? matches.length : 0;

// console.log(result);


const positions = sentence.search(/girl/i)
 const aaa =positions >=0 ? positions : "not found";

console.log(aaa);