/*


Given an object containing counts of both upvotes and downvotes,
return what vote count should be displayed. This is calculated 
by subtracting the number of downvotes from upvotes.


*/

function countDownvotes(votes) {
return  votes.upvotes - votes.downvotes;
}
console.log(countDownvotes({ upvotes: 13, downvotes: 0 }));
