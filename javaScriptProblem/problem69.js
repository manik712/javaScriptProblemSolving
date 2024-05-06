/*



Create a function that accepts an array and returns the last item in the array.


*/

function getLastItem(arr) {
	const myArr = arr;
const myReturn = myArr[myArr.length - 1];
return myReturn;

}
 
console.log(getLastItem([1,2,3,'foo']));
