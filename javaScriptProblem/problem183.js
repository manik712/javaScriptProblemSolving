/*

Let’s start with the tables that many of us had to memorize in school. 
Can you print a table that contains all the answers to the multiplication 
tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily 
expand should you need the 12 times table?


// */

// function multiplicationTable(n) {
//   for (let i = 1; i <=10; i++) {
//     let result = i * n;
//     let  table = `${i}*${n}=${result}`;
//     return table;

//   }
// }
// console.log(multiplicationTable(10));



function multiplicationTable(n) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    let result = i * n;
    table += `${i} * ${n} = ${result}\n`;
  }
  return table; // Return the complete table as a string
}

console.log(multiplicationTable(10));
