//Convert Hours and Minutes into Seconds
//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function conversionToSecond(hours, minutes) {
  const x = hours * 3600;
  const y = minutes * 60;

  const a = x + y;
  return a;
}

console.log(conversionToSecond(1, 1));
