//

function checkNumbers(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= 80) {
      let x = `${arr[i]}=A+`;
      console.log(x);
    } else if (60 <= arr[i] && arr[i] < 80) {
      console.log(`${arr[i]}=Good`);
    } else if (40 <= arr[i] && arr[i] <= 59) {
      console.log(`${arr[i]}=Pass`);
    } else {
      console.log(`${arr[i]}=Fail`);
    }
  }
}
checkNumbers([18, 50, 80]);//18=fail,50=pass,80=A+
