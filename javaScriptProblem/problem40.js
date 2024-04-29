/*

Create a function that returns the 
number of frames shown in a given number
 of minutes for a certain FPS.

*/

function frames(minutes, fps) {
  const myFps = fps * 60;
  const myFrames = myFps * minutes;
  return myFrames;
}

console.log(frames(10, 25));
//15000