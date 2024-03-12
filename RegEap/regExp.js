//search()

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let n1 = text.search("W3SchoolsM");
console.log(n1);
console.log(n);

//regexp

let text1 = "Visit W3Schools";
let n2 = text1.search(/w3schools/i);
console.log(n2, 13);

//replace()

let text4 = "i hate you!";
let result = text4.replace("hate", "love");
console.log(result, 19);

//replace()

let text5 = "i hate you!";
let result1 = text4.replace(/Hate/i, "love");
console.log(result, 27);

/*

     Modifier	Description	

i	Perform case-insensitive matching	
g	Perform a global match (find all)	
m	Perform multiline matching	
d	Perform start and end matching (New in ES2022)

*/

//Regular Expression Patterns

/*

Brackets are used to find a range of characters:

Expression	Description	Try it
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |

*/

//Metacharacters are characters with a special meaning:

/*


Metacharacters	Description	
\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx


*/

/*

Quantifiers define quantities:

Quantifier	Description	
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n


*/

//Using test()

const pattern = /z/;
const t = pattern.test("The best things in life are free!");

//Since there is no  an "z" in the string, the output of the code above will be
//false
console.log(t);
//one line
const f = /e/.test("The best things in life are free!");
console.log(f);

//Using test()

const r = /z/.exec("The best things in life are free!");
console.log(r);
/*
The exec() method is a RegExp expression method.

It searches a string for a specified pattern, and returns the found text as an object.

If no match is found, it returns an empty (null) object.

The following example searches a string for the character "e"

*/