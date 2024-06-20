/*



*/

function totalDamage(damage, spread, time) {
  if (time === "second") {
    let d = damage + spread;
    return d;
  } else if (time === "minute") {
    return damage + spread * 60; // Corrected multiplication operator
  } else if (time === "hour") {
    return damage + spread * 3600; // Corrected multiplication operator
  } else {
    return "Invalid time unit"; // Handle invalid time units gracefully
  }
}

console.log(totalDamage(5, 7, "minute")); // Example usage