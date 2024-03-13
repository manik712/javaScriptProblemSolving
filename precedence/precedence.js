/*
Operator precedence describes the order in 
which operations are performed in an arithmetic 
expression.


Multiplication (*) and division (/) have higher 
precedence than addition (+) and subtraction (-).


*/

let x = 100 + 50 * 3;
console.log(x);
//250

/*
When using parentheses,
operations inside the parentheses
are computed first:

*/
let x1 = (100 + 50) * 3;
console.log(x1);
//450

/*
Operations with the same 
precedence (like * and /) are
computed from left to right:

*/
let x2 = (100 / 50) * 3;
console.log(x2);
//6
/*

Operator Precedence Values
Expressions in parentheses are computed before the rest of the expression
Function are executed before the result is used in the rest of the expression




Val	Operator	Description	Example
18	( )	Expression Grouping	(100 + 50) * 3
17	.	Member Of	person.name
17	[]	Member Of	person["name"]
17	?.	Optional Chaining ES2020	x ?. y
17	()	Function Call	myFunction()
17	new	New with Arguments	new Date("June 5,2022")
16	new	New without Arguments	new Date()

*/
//Increment Operators
//Postfix increments are executed before prefix increments

/*
++	Postfix Increment	i++
--	Postfix Decrement	i--
++	Prefix Increment	++i
--	Prefix Decrement	--i


*/
//NOT Operators
/*

	!	Logical NOT	!(x==y)
	~	Bitwise NOT	~x



*/
//Unary Operators

/*
+	Unary Plus	+x
-	Unary Minus	-x
typeof	Data Type	typeof x
void	Evaluate Void	void(0)
delete	Property Delete	delete myCar.colo


*/

//Arithmetic Operators

//Exponentiations are executed before multiplications
//Multiplications and divisions are executed before additions and subtractions

/*
	**	Exponentiation ES2016	10 ** 2
	*	Multiplication	10 * 5
	/	Division	10 / 5
	%	Division Remainder	10 % 5
	+	Addition	10 + 5
	-	Subtraction	10 - 5
	+	Concatenation	"John" + "Doe"



*/
//Shift Operators

/*
	<<	Shift Left	x << 2
	>>	Shift Right (signed)	x >> 2
	>>>	Shift Right (unsigned)	x >>> 2



*/

//Relational Operators

/*

in	 Property in Object	"PI" in Math
instanceof	 Instance of Object	x instanceof Array


*/

//Comparison Operators

/*
<	Less than	x < y 
<=	Less than or equal	x <= y
>	Greater than	x > y
>=	Greater than or equal	x >= Array
==	Equal	x == y
===	Strict equal	x === y
!=	Unequal	x != y
!==	Strict unequal	x !== y

*/

//Bitwise Operators

/*
&	Bitwise AND	x & y
^	Bitwise XOR	x ^ y
|	Bitwise OR	x | y

*/

//Logical Operators

/*
&&	Logical AND	x && y
||	Logical OR	x || y
??	Nullish Coalescing ES2020	x ?? y

*/

//Conditional (ternary) Operator

//	? :	Condition	? "yes" : "no"

//Assignment Operators
//Assignments are executed after other operations

/*

=	Simple Assignment	x = y
2	:	Colon Assignment	x: 5
2	+=	Addition Assignment	x += y
2	-=	Subtraction Assignment	x -= y
2	*=	Multiplication Assignment	x *= y
2	**=	Exponentiation Assignment	x **= y
2	/=	Division Assignment	x /= y
2	%=	Remainder Assignment	x %= y
2	<<=	Left Shift Assignment	x <<= y
2	>>=	Right Shift Assignment	x >>= y
2	>>>=	Unsigned Right Shift	x >>>= y
2	&=	Bitwise AND Assignment	x &= y
2	|=	Bitwise OR Assignment	x |= y
2	^=	Bitwise XOR Assignment	x ^= y
2	&&=	Logical AND Assignment	x &&= y
2	||=	Logical OR Assignment	x ||= y
2	=>	Arrow	x => y
2	yield	Pause / Resume	yield x
2	yield*	Delegate	yield* x
2	...	Spread	... x
1	,	Comma	x , y

*/
