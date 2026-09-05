/*


*/

function moodToDay(mood){
  const myMood = arguments.length;
 return myMood ? `Today  i am felling ${mood}`:"Today i am felling neutral"
}
console.log(moodToDay())