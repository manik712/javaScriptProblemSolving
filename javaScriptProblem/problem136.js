/*



Given the radius of a circle and the area of a square,
return true if the circumference of the circle is greater
than the square's perimeter and false if the square's 
perimeter is greater than the circumference of the circle.




Examples
circle_or_square(16, 625) ➞ True

circle_or_square(5, 100) ➞ False

circle_or_square(8, 144) ➞ True



*/

function circle_or_square(radius, square){
  let circumference = 2 *  Math.PI * radius;
  let squareR = Math.sqrt(square);
  let parameter = 4 * squareR;
  return circumference > parameter  ? true : false;
}

console.log(circle_or_square(16, 625));