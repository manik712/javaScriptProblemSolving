function classifyNumbers(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 5 === 0 && 50 > arr[i]) {
      console.log(`${arr[i]}➤Even,Divisible by 5,below 50`);
    }else if(arr[i] % 2 !== 0 && arr[i] % 5 !== 0 && 50 < arr[i]){
       console.log(`${arr[i]}➤Odd,Divisible by 5,upto 50`);
    }
  }
}
classifyNumbers([10, 70,57]);

