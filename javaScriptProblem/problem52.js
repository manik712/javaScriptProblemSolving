/*

The challenge is to try and fix this buggy code,
 given the inputs true and false. See the examples 
 below for the expected output.

*/

function has_bugs(buggy_Code) {
	if (buggy_Code) {
		return 'sad days'
	} else  {
		return "it's a good day"
	}
} 

console.log(has_bugs(false));