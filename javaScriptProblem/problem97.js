/*
Kinetic energy can be calculated with the following formula:

KE = 1/2mv²

m is mass in kg
v is velocity in m/s
KE is kinetic energy in J
Return the Kinetic Energy in Joules,
given the mass and velocity. For the
purposes of this challenge, round answers 
to the nearest integer.


*/

function getKineticEnergy(m, v) {
  const myV = Math.pow(v, 2);
  const k = (1 / 2) * (myV * m);
  const myK = Math.round(k);
  return myK;
}
console.log(getKineticEnergy(63.5, 7.35));