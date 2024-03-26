// import { add } from "./apple.js";

// const result = add(2, 4, 5);
// console.log(result);

//

import { add } from "./apple.js";

const result = add(2, 4, 5);

console.log(result);

//varA
import { add as varA } from "./apple.js";

console.log(varA);

// * as test

import * as test from "./apple.js";

console.log(test); // out put a object

// import * as test  from "./apple.js"

// console.log(test.add); // out put a object
//                        //11




import external, { b } from "./apple.js";
console.log(external);
console.log(b);


//default export declaration just one time not multiple times

import { myAim } from "./apple.js";

myAim()
