/*
Create a function that takes the number of wins,
 draws and losses and calculates the number of 
 points a football team has obtained so far.



wins get 3 points
draws get 1 point
losses get 0 points



*/

function footballerTeamP(wins, draws, losses) {
  
  let points;
  if (wins >= 0 && draws >= 0 && losses >= 0) {
    // Calculate points
    points = wins * 3 + draws * 1 + losses * 0;
  } else {
    points = "Why negative man!";
  }
//return
  return points;
}

console.log(footballerTeamP(3, -3, 2));
