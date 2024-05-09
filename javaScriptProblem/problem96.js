/*

Create a function that takes an object
argument sizes (contains width, length, 
height keys) and returns the volume of the box.

*/

function createVolume(sizes) {
  const obj = sizes;
  const arr = Object.values(obj);
  let volume = 1;
  console.log(arr);
  //[ 2, 3, 5 ]
  for (let i = 0; i < arr.length; i++) {
    volume *= arr[i];
  }
  return volume;
}

console.log(createVolume({ width: 2, length: 3, height: 5 }));
