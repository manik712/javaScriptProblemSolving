/*

Problem: "Break Time Logger"


You are working on a time management web
application that helps users track their
breaks. The application should allow users 
to log their break times during the day. A
break is considered valid
if it lasts between 5 to 30 minutes.


*/

function logBreakTime(startTime, endTime) {
  // Parse the input strings to get Date objects
  const start = new Date(`2024-03-03 ${startTime}`);
  const end = new Date(`2024-03-03 ${endTime}`);

  console.log(start,"Start Time");
console.log(end,"End Time");
  // Calculate the duration in minutes
  const durationInMinutes = (end - start) / (1000 * 60);
  console.log(durationInMinutes);

  // Check if the duration is within the valid range
  if (durationInMinutes >= 5 && durationInMinutes <= 30) {
     console.log("Valid break logged!");
  } else if (durationInMinutes < 5) {
    return "Break too short! Please take a longer break.";
  } else {
    return "Break too long! Keep your breaks between 5 to 30 minutes.";
  }
}
const time = logBreakTime("10:30", "10:35");
console.log(time);
