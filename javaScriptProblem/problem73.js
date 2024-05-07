/*

A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.


*/
function leapYear(year) {
	if(year % 4 ==0 && year % 100 !== 0 || year % 400 ==0){
    return true;
  }else {
    return false;
  }
}

console.log(leapYear(1968));